import { LazyButton } from "@poc/federation/ui/react/src/LazyButton";
import { Layout } from "~/shell/shell1/components/Layout";

export const Root = () => {
	return (
		<Layout>
			welcome to poc
			<LazyButton
				onClick={() => console.log("clicked")}
				onButtonFocus={() => console.log("custom focus")}
			>
				<span slot="label">look at me, I'm a fully typed web-component!</span>
			</LazyButton>
		</Layout>
	);
};
