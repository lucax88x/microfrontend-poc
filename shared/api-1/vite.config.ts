import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { buildSharedDependencies } from "../vite/src/dependencies";

export default defineConfig(() => ({
	plugins: [
		tsconfigPaths(),
		federation({
			filename: "remoteEntry.js",
			name: "@poc/shared/api1",
			exposes: {
				"./api": "./src/api.ts",
			},
			remotes: {},
			shared: buildSharedDependencies("../../pnpm-workspace.yaml"),
		}),
	],
}));
