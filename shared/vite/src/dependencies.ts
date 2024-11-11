import { getWorkspace } from "./workspaces";

export const buildSharedDependencies = (path: string) => {
	const workspace = getWorkspace(path);

	return {
		preact: {
			requiredVersion: workspace.catalogs.preact.preact,
			singleton: true,
		},
	};
};
