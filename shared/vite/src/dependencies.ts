import { getWorkspace } from "./workspaces";

export const buildSharedDependencies = (path: string) => {
	const workspace = getWorkspace(path);

	return {
		react: {
			requiredVersion: workspace.catalogs.react.react,
			singleton: true,
		},
		"react-dom": {
			requiredVersion: workspace.catalogs.react["react-dom"],
			singleton: true,
		},
	};
};
