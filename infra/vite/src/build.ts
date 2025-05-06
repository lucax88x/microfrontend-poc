import type { BuildOptions } from "vite";

export const build: BuildOptions = {
	target: "esnext",
	minify: "esbuild",
	rollupOptions: {
		treeshake: true,
		output: {
			format: "es",
		},
	},
};
