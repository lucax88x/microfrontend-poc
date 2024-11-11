import { render } from "preact";
import { StrictMode } from "preact/compat";
import { Root } from "@shell1/routes/Root";
import { ErrorPage } from "@shell1/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@shell1/routes/Home";

const router = createBrowserRouter([
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
]);

render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
	document.getElementById("root") as HTMLElement,
);
