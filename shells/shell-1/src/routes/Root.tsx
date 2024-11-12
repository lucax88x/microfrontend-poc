import "@poc/ui/base";
import "~/index.css";

import { Suspense, lazy } from "preact/compat";
import { Outlet } from "react-router-dom";

const React1Topbar = lazy(async () => import("@poc/react-1/components/Topbar"));

export const Root = () => {
	return (
		<>
			<Suspense fallback={<p>loading</p>}>
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
