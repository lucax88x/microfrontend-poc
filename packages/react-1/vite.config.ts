import { federation } from "@module-federation/vite";
import react from "@vitejs/plugin-react";
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
					"./components/ListDocs": "./src/components/ListDocs.tsx",
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
				},
				shared: buildSharedDependencies("../../pnpm-workspace.yaml"),
			}),
			react(),
		],
	};
});
