import { type PropsWithChildren, type ReactElement, Suspense } from "react";
import { useDynamicImport } from "./useDynamicImport";

type Scope = "@poc/ui-react" | "@poc/package-components";

// NOTE: Use me, as much as possible, ONLY in federation/** packages
export const LazyComponent = <C extends {}>({
	loading,
	scope,
	module,
	render,
}: PropsWithChildren<{
	// this is allowed ONLY if you preload it!
	loading: ReactElement | null;
	scope: Scope;
	module: string;
	render: (component: C) => ReactElement;
}>) => {
	const Component = useDynamicImport<C>({
		module,
		scope,
	});

	const renderContent = () => {
		switch (Component) {
			case "error":
				return <span>error</span>;
			case "loading":
				return loading;
			case undefined:
				console.warn(`Component ${scope}/${module} is undefined`);
				return null;
			default:
				return render(Component);
		}
	};

	return <Suspense fallback={loading}>{renderContent()}</Suspense>;
};
