import { loadEnv } from "vite";
import { z } from "zod";

const envSchema = z.object({
	UI_REACT_UI_BASE_ENTRY: z.string().url(),
});

export const parseEnv = (mode: string, prefix: string) => {
	const env = loadEnv(mode, process.cwd(), prefix);
	return envSchema.parse(env);
};
