import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
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
					"./button": "./src/exports/Button.ts",
					"./icon": "./src/exports/Icon.ts",
					"./card": "./src/exports/Card.ts",
					"./spinner": "./src/exports/Spinner.ts",
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
			react(),
		],
	};
});
