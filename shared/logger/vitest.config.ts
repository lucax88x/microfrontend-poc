import { configDefaults, defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

const FIVE_MINUTES = 5 * 60 * 1000;

export default defineConfig((configEnv) =>
	mergeConfig(
		viteConfig(configEnv),
		defineConfig({
			test: {
				testTimeout: FIVE_MINUTES,
				hookTimeout: FIVE_MINUTES,
				exclude: [...configDefaults.exclude],
				root: "./",
				reporters: [
					"default",
					["junit", { outputFile: "coverage/junit-tests.xml" }],
				],
				coverage: {
					all: true,
					clean: true,
					provider: "v8",
					include: ["src/**/*.ts"],
					exclude: ["**/*.spec.ts", "**/*.module.ts", "**/*.d.ts"],
					extension: [".ts"],
					reporter: ["cobertura", "text", "text-summary"],
				},
			},
		}),
	),
);
