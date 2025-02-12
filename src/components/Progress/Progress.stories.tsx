import type { Meta, StoryFn } from '@storybook/react';
import { Progress, ProgressProps } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {
    value: {
      control: { type: 'number' },
      defaultValue: 50,
    },
    max: {
      control: { type: 'number' },
      defaultValue: 100,
    },
    indeterminate: {
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

export default meta;

const Template: StoryFn<ProgressProps> = (args) => (
  <div className="w-24">
    <Progress {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  value: 50,
  max: 100,
};
