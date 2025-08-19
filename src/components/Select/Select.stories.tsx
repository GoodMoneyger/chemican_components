import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';
import { IconRocket } from '@tabler/icons-react';

import type { SelectProps } from './Select';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    options: {
      control: { type: 'object' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    radixDocs: {
      primitive: 'Select',
      url: 'https://www.radix-ui.com/primitives/docs/components/select',
    },
  },
};

export default meta;

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4', icon: IconRocket },
    { type: 'Separator' },
    { value: 'option4', label: 'Option 5' },
  ],
  placeholder: 'Select an option',
  disabled: false,
  invalid: false,
};
