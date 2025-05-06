import { loadRemote } from "@module-federation/runtime";
import { useEffect, useState } from "react";

interface DynamicImportProps {
	scope: string;
	module: string;
}

export function useDynamicImport<C>({ module, scope }: DynamicImportProps) {
	const [component, setComponent] = useState<C | "loading" | "error">(
		"loading",
	);

	useEffect(() => {
		if (!module || !scope) return;

		const loadComponent = async () => {
			try {
				const { default: Component } = (await loadRemote(
					`${scope}/${module}`,
				)) as {
					default: C;
				};
				setComponent(() => Component);
			} catch (error) {
				setComponent("error");
				console.error(`Error loading remote module ${scope}/${module}:`, error);
			}
		};

		loadComponent();
	}, [module, scope]);

	return component;
}
