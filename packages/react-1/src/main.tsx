import { render } from "preact";
import { StrictMode } from "preact/compat";
import Local from "./Local";

render(
	<StrictMode>
		<Local />
	</StrictMode>,
	document.getElementById("root") as HTMLElement,
);
