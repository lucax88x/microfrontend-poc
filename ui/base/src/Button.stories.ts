import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./button";
import type { ButtonProps } from "./button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: "UI/Button",
	render: (args) => html`<my-button ?loading=${args.loading}></my-button>`,
	argTypes: {
		loading: {
			control: "boolean",
			description: "Controls the loading state of the button",
			defaultValue: false,
		},
		// label: {
		//   control: 'text',
		//   description: 'The button label content (slot)',
		//   defaultValue: 'Button',
		// },
	},
	args: { loading: true },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
	args: {
		loading: false,
		// label: 'Click me',
	},
};

export const Loading: Story = {
	args: {
		loading: true,
		// label: 'Loading...',
	},
};

// export const WithLongText: Story = {
//   args: {
//     loading: false,
//     label: 'This is a button with a very long text',
//   },
// };
