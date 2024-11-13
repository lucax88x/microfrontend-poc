import { render } from "preact";
import { StrictMode } from "preact/compat";
import { Root } from "~/routes/Root";
import { ErrorPage } from "~/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "~/routes/Home";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Root />,
			errorElement: <ErrorPage />,
			children: [
				{
					path: "",
					element: <Home />,
				},
			],
		},
	],
	{
		future: {
			v7_normalizeFormMethod: true,
			v7_skipActionErrorRevalidation: true,
			v7_fetcherPersist: true,
			v7_relativeSplatPath: true,
			v7_partialHydration: true,
		},
	},
);

render(
	<StrictMode>
		<RouterProvider
			router={router}
			future={{
				v7_startTransition: true,
			}}
		/>
	</StrictMode>,
	document.getElementById("root") as HTMLElement,
);
