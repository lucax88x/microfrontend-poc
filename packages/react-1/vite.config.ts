import { federation } from "@module-federation/vite";
import preact from "@preact/preset-vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { buildSharedDependencies } from "../../shared/vite/src/dependencies";
import { parseEnv } from "./env";

export default defineConfig(({ mode }) => {
	const env = parseEnv(mode, "MODULE_REACT1");

	return {
		plugins: [
			tsconfigPaths(),
			federation({
				filename: "remoteEntry.js",
				name: "@poc/react1",
				exposes: {
					"./components/AsyncListDocs": "./src/components/AsyncListDocs.tsx",
					"./components/Line": "./src/components/Line.tsx",
					"./components/Topbar": "./src/components/Topbar.tsx",
					"./components/DrawerChat": "./src/components/DrawerChat.tsx",
				},
				remotes: {
					"@poc/ui/base": {
						type: "module",
						name: "@poc/ui/base",
						entry: env.MODULE_REACT1_UI_BASE_ENTRY,
						entryGlobalName: "@poc/ui/base",
						shareScope: "default",
					},
					"@poc/ui/react": {
						type: "module",
						name: "@poc/ui/react",
						entry: env.MODULE_REACT1_UI_REACT_ENTRY,
						entryGlobalName: "@poc/ui/react",
						shareScope: "default",
					},
					"@poc/shared/api1": {
						type: "module",
						name: "@poc/shared/api1",
						entry: env.MODULE_REACT1_SHARED_API1_ENTRY,
						entryGlobalName: "@poc/shared/api1",
						shareScope: "default",
					},
				},
				shared: buildSharedDependencies("../../pnpm-workspace.yaml"),
			}),
			preact(),
		],
	};
});
