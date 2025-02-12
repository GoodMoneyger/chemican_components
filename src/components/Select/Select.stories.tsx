import type { Meta, StoryFn } from '@storybook/react';
import { Select, SelectProps } from './Select';
import { IconRocket } from '@tabler/icons-react';

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
    { value: 'option4', label: 'Option 4' },
  ],
  placeholder: 'Select an option',
  disabled: false,
  invalid: false,
};
