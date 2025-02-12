import type { Meta, StoryFn } from '@storybook/react';

import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    invalid: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
};
