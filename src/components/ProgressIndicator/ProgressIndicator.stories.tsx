import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import type { ProgressIndicatorProps } from './ProgressIndicator';
import { ProgressIndicator } from './ProgressIndicator';

const meta: Meta<typeof ProgressIndicator> = {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
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
  parameters: {
    radixDocs: {
      primitive: 'Progress',
      url: 'https://www.radix-ui.com/primitives/docs/components/progress',
    },
  },
};

export default meta;

const Template: StoryFn<ProgressIndicatorProps> = (args) => (
  <div className="w-96">
    <ProgressIndicator {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  value: 50,
  max: 100,
};
