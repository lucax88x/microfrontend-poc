import "@poc/ui/base";
import "@shell1/index.css";

import { Suspense, lazy } from "preact/compat";
import { Outlet } from "react-router-dom";

const UiSpinner = lazy(async () => import("@poc/ui/react/spinner"));
const React1Topbar = lazy(async () => import("@poc/react-1/components/Topbar"));

export const Root = () => {
	return (
		<>
			<Suspense fallback={<UiSpinner />}>
				<React1Topbar />
			</Suspense>
			<div className="flex flex-col justify-center p-4">
				<div className="flex justify-center p-4">
					<div className="container flex flex-col gap-2 md:flex-row">
						<Outlet />
					</div>
				</div>
			</div>
		</>
	);
};

export default Root;
