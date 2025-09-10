import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, type ProxyOptions } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { build } from "../../infra/vite/src/build";
import {
	buildSharedDependencies,
	pickSharedDependencies,
} from "../../infra/vite/src/dependencies";

import { withHttps } from "../../infra/vite/src/server";

export default defineConfig(({ command }) => {
	let proxyConfig: Record<string, string | ProxyOptions> = {};

	if (command !== "build") {
		proxyConfig = {
			"/ui/react": {
				target: "https://localhost:5202/",
				secure: false,
			},
			"/ui/base": {
				target: "https://localhost:5201/",
				secure: false,
			},
			"/package/components": {
				target: "https://localhost:5301/",
				secure: false,
			},
		};
	}

	return {
		server: {
			port: 6001,
			https: withHttps(command, "../../infra/certs"),
			proxy: proxyConfig,
		},
		preview: {
			port: 6001,
			host: true,
			https: withHttps(command, "../../infra/certs"),
			proxy: proxyConfig,
		},
		plugins: [
			tsconfigPaths(),
			federation({
				name: "@poc/shell/shell1",
				remotes: {},
				exposes: {},
				filename: "remoteEntry.js",
				shared: pickSharedDependencies(
					buildSharedDependencies("../../pnpm-workspace.yaml"),
					"react",
					"react-dom",
				),
			}),
			react(),
		],
		build: build,
	};
});
