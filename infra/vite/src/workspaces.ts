import fs from "node:fs";
import YAML from "yaml";
import type { Workspace } from "./models";

export const getWorkspace = (path: string): Workspace => {
	return YAML.parse(fs.readFileSync(path, "utf8")) as Workspace;
};
