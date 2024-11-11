import { defineConfig } from "vite";

import { federation } from "@module-federation/vite";
import preact from "@preact/preset-vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { buildSharedDependencies } from "../../shared/vite/src/dependencies";
import { parseEnv } from "./env";

export default defineConfig(({ mode }) => {
	const env = parseEnv(mode, "SHELL_SHELL1");

	return {
		plugins: [
			tsconfigPaths(),
			federation({
				name: "shell",
				remotes: {
					"@poc/ui/base": {
						type: "module",
						name: "@poc/ui/base",
						entry: env.SHELL_SHELL1_UI_BASE_ENTRY,
						entryGlobalName: "@poc/ui/base",
						shareScope: "default",
					},
					"@poc/ui/react": {
						type: "module",
						name: "@poc/ui/react",
						entry: env.SHELL_SHELL1_UI_REACT_ENTRY,
						entryGlobalName: "@poc/ui/react",
						shareScope: "default",
					},
					"angular-1": {
						type: "module",
						name: "angular-1",
						entry: env.SHELL_SHELL1_MODULE_ANGULAR1_ENTRY,
						entryGlobalName: "angular-1",
						shareScope: "default",
					},
					"@poc/react-1": {
						type: "module",
						name: "@poc/react-1",
						entry: env.SHELL_SHELL1_MODULE_REACT1_ENTRY,
						entryGlobalName: "@poc/react-1",
						shareScope: "default",
					},
				},
				exposes: {},
				filename: "remoteEntry.js",
				shared: buildSharedDependencies("../../pnpm-workspace.yaml"),
			}),
			preact(),
		],
	};
});
