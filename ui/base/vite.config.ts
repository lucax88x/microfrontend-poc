import { federation } from "@module-federation/vite";
import { defineConfig } from "vite";

export default defineConfig({
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
});
