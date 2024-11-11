import { loadEnv } from "vite";
import { z } from "zod";

const envSchema = z.object({
	SHELL_SHELL1_UI_BASE_ENTRY: z.string().url(),
	SHELL_SHELL1_UI_REACT_ENTRY: z.string().url(),
	SHELL_SHELL1_MODULE_ANGULAR1_ENTRY: z.string().url(),
	SHELL_SHELL1_MODULE_REACT1_ENTRY: z.string().url(),
});

export const parseEnv = (mode: string, prefix: string) => {
	const env = loadEnv(mode, process.cwd(), prefix);
	return envSchema.parse(env);
};
