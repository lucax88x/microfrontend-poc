import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { type ProxyOptions, defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { build } from "../../infra/vite/src/build";
import {
	buildSharedDependencies,
	pickSharedDependencies,
} from "../../infra/vite/src/dependencies";
import { withHttps } from "../../infra/vite/src/server";

export default defineConfig(({ command }) => {
	const proxyConfig: Record<string, string | ProxyOptions> = {
		"/ui/react": {
			target: "https://localhost:5202/",
			secure: false,
		},
		"/ui/base": {
			target: "https://localhost:5201/",
			secure: false,
		},
	};

	return {
		server: {
			port: 5301,
			https: withHttps(command, "../../infra/certs"),
			proxy: proxyConfig,
		},
		preview: {
			port: 5301,
			host: true,
			https: withHttps(command, "../../infra/certs"),
			proxy: proxyConfig,
		},
		plugins: [
			tsconfigPaths(),
			federation({
				filename: "remoteEntry.js",
				name: "@poc/package/components",
				exposes: {
					"./UserAvatar": "./src/components/UserAvatar.tsx",
				},
				remotes: {},
				shared: pickSharedDependencies(
					buildSharedDependencies("../../pnpm-workspace.yaml"),
					"react",
					"react-dom",
				),
			}),
			react(),
		],
		build: build,
		base: "/package/components",
	};
});
