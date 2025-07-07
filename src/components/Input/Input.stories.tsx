import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
  placeholder: '',
  disabled: false,
  invalid: false,
};
