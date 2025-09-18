import { loadRemote } from "@module-federation/runtime";
import { Button } from "./components";

loadRemote("@poc/ui-base");

export default () => {
	return (
		<div>
			<Button>
				<span slot="label">some-button</span>
			</Button>
		</div>
	);
};
