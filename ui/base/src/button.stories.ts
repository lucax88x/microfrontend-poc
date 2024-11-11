import type { Meta, StoryObj } from "@storybook/web-components";
import { html } from "lit";
import "./button";
import type { ButtonProps } from "./button";

const meta = {
	title: "UI/Button",
	render: (args) => html`<my-button ?loading=${args.loading}></my-button>`,
	argTypes: {
		loading: {
			control: "boolean",
			description: "Controls the loading state of the button",
			defaultValue: false,
		},
	},
	args: { loading: true },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
	args: {
		loading: false,
	},
};

export const Loading: Story = {
	args: {
		loading: true,
	},
};
