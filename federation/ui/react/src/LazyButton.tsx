import { LazyComponent } from "@poc/federation/core/src/LazyComponent";
import type { Button, ButtonProps } from "@poc/ui/react/Button";

export const LazyButton = (props: ButtonProps) => (
	<LazyComponent<typeof Button>
		scope="@poc/ui/react"
		module="Button"
		loading={null}
		render={(Button) => <Button {...props} />}
	/>
);
