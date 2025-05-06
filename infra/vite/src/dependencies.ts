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
	} as const;
};

/**
 * Utility to pick specific dependencies from the shared dependencies object
 * @param dependencies The full dependencies object from buildSharedDependencies
 * @param keys Array of dependency names to include
 * @returns Object containing only the specified dependencies
 */
export function pickSharedDependencies<T extends Record<string, unknown>>(
	dependencies: T,
	...keys: Array<keyof T>
): Pick<T, keyof T> {
	return keys.reduce(
		(acc, key) => {
			if (key in dependencies) {
				acc[key] = dependencies[key];
			}
			return acc;
		},
		{} as Pick<T, keyof T>,
	);
}
