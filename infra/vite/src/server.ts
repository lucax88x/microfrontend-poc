import fs from "node:fs";
import type { ServerOptions } from "node:https";
import path from "node:path";

export function withHttps(
	command: "build" | "serve",
	certsPath: string,
): ServerOptions {
	return {
		key:
			command === "serve"
				? fs.readFileSync(path.join(certsPath, "localhost.key"))
				: undefined,
		cert:
			command === "serve"
				? fs.readFileSync(path.join(certsPath, "localhost.crt"))
				: undefined,
	};
}
