import type { Preview } from "@storybook/web-components";

import { setCustomElementsManifest } from "@storybook/web-components";

import customElements from "../custom-elements.json";

console.log("TODO register custom elements manifest, check how to have args working with all components!");
console.log("https://storybook.js.org/docs/essentials/controls");

setCustomElementsManifest(customElements);

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;
