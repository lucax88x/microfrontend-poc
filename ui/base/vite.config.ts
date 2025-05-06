import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";
import { build } from "../../infra/vite/src/build";
import { withHttps } from "../../infra/vite/src/server";

export default defineConfig(({ command }) => ({
	server: {
		port: 5201,
		https: withHttps(command, "../../infra/certs"),
	},
	preview: {
		port: 5201,
		host: true,
		https: withHttps(command, "../../infra/certs"),
	},
	plugins: [
		federation({
			exposes: {
				".": "./src/index.ts",
			},
			filename: "remoteEntry.js",
			name: "@poc/ui/base",
			remotes: {},
		}),
	],
	build: build,
	base: "/ui/base",
}));
