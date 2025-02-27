import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { Colors } from './Colors';

const meta: Meta<typeof Colors> = {
  title: 'Design System/Tokens/Colors',
  component: Colors,
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

const Template: StoryFn<typeof Colors> = (args) => <Colors {...args} />;
export const Default = Template.bind({});
Default.args = {};
