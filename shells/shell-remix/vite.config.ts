import { vitePlugin as remix } from "@remix-run/dev";
import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { buildSharedDependencies } from "../../shared/vite/src/dependencies";
import { parseEnv } from "./env";

declare module "@remix-run/node" {
	interface Future {
		v3_singleFetch: true;
	}
}

export default defineConfig(({ mode }) => {
	const env = parseEnv(mode, "SHELL_REMIX");

	return {
		plugins: [
			remix({
				future: {
					v3_fetcherPersist: true,
					v3_relativeSplatPath: true,
					v3_throwAbortReason: true,
					v3_singleFetch: true,
					v3_lazyRouteDiscovery: true,
				},
			}),
			federation({
				name: "shell-remix",
				remotes: {
					"@poc/ui/react": {
						type: "module",
						name: "@poc/ui/react",
						entry: env.SHELL_REMIX_UI_REACT_ENTRY,
						entryGlobalName: "@poc/ui/react",
						shareScope: "default",
					},
				},
				exposes: {},
				filename: "remoteEntry.js",
				shared: buildSharedDependencies("../../pnpm-workspace.yaml"),
			}),
			tsconfigPaths(),
		],
	};
});
