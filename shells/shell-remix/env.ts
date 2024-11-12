import { loadEnv } from "vite";
import { z } from "zod";

const envSchema = z.object({
	SHELL_REMIX_UI_REACT_ENTRY: z.string().url(),
});

export const parseEnv = (mode: string, prefix: string) => {
	const env = loadEnv(mode, process.cwd(), prefix);
	return envSchema.parse(env);
};
