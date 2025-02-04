import type { Meta, StoryFn } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    intent: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>Primary</Button>
);

export const Primary = Template.bind({});
Primary.args = { intent: 'primary', size: 'md', disabled: false };
