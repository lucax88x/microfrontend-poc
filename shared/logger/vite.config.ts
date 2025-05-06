import { defineConfig } from "vite";

import tsconfigPaths from "vite-tsconfig-paths";
import { build } from "../../infra/vite/src/build";

export default defineConfig(() => {
	return {
		plugins: [tsconfigPaths()],
		build: build,
	};
});
