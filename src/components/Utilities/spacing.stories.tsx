import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { Spacing } from './Spacing';

const meta: Meta<typeof Spacing> = {
  title: 'Design System/Tokens/Spacing',
  component: Spacing,
  argTypes: {
    invalid: {
      control: { type: 'boolean' },
    },
  },
  // Add documentation
  parameters: {
    controls: { disable: true },
  },
};

export default meta;

const Template: StoryFn<typeof Spacing> = (args) => <Spacing {...args} />;
export const Default = Template.bind({});
Default.args = {};
