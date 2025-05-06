import "./tailwind.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Root } from "~/shell/shell1/components/Root";
import { init } from "./init";

const bootstrapped = await init();

if (!bootstrapped) {
	throw new Error("app could not bootstrap");
}

// biome-ignore lint/style/noNonNullAssertion: We are sure that the root element exists because it's in the index.html file
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
	document.getElementById("splash")?.remove();
	rootElement.style.display = "";

	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<Root />
		</StrictMode>,
	);
}
