import { loadEnv } from "vite";
import { z } from "zod";

const envSchema = z.object({
	MODULE_REACT1_UI_BASE_ENTRY: z.string().url(),
	MODULE_REACT1_UI_REACT_ENTRY: z.string().url(),
	MODULE_REACT1_SHARED_API1_ENTRY: z.string().url(),
});

export const parseEnv = (mode: string, prefix: string) => {
	const env = loadEnv(mode, process.cwd(), prefix);
	return envSchema.parse(env);
};
