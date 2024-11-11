import { federation } from "@module-federation/vite";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import { buildSharedDependencies } from "../../shared/vite/src/dependencies";
import { parseEnv } from "./env";

export default defineConfig(({ mode }) => {
	const env = parseEnv(mode, "UI_REACT");

	return {
		plugins: [
			federation({
				filename: "remoteEntry.js",
				name: "@poc/ui/react",
				exposes: {
					"./button": "./src/exports/button.ts",
					"./icon": "./src/exports/icon.ts",
					"./card": "./src/exports/card.ts",
					"./spinner": "./src/exports/spinner.ts",
				},
				remotes: {
					"@poc/ui/base": {
						type: "module",
						name: "@poc/ui/base",
						entry: env.UI_REACT_UI_BASE_ENTRY,
						entryGlobalName: "@poc/ui/base",
						shareScope: "default",
					},
				},
				shared: buildSharedDependencies("../../pnpm-workspace.yaml"),
			}),
			preact(),
		],
	};
});
