import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { build } from "../../infra/vite/src/build";
import {
	buildSharedDependencies,
	pickSharedDependencies,
} from "../../infra/vite/src/dependencies";
import { withHttps } from "../../infra/vite/src/server";

export default defineConfig(({ command }) => ({
	server: {
		port: 5202,
		https: withHttps(command, "../../infra/certs"),
	},
	preview: {
		port: 5202,
		host: true,
		https: withHttps(command, "../../infra/certs"),
	},
	plugins: [
		tsconfigPaths(),
		federation({
			filename: "remoteEntry.js",
			name: "@poc/ui-react",
			exposes: {
				"./Button": "./src/components/Button.js",
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
	base: "/ui/react",
}));
