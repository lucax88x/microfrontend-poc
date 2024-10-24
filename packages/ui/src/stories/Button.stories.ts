import { fn } from '@storybook/test';
import { html } from 'lit';
import '../index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Button',
  tags: ['autodocs'],
  render: (args: any) =>
    html`<my-button>
      <slot slot="prefix"><my-icon icon="chat"></my-icon></slot>
      <slot slot="label">Chat</slot>
    </my-button>`,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
