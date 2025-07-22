import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { RadioButtonGroup, RadioButton, RadioButtonProps } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    radixDocs: {
      primitive: 'Radio Group',
      url: 'https://www.radix-ui.com/primitives/docs/components/radio-group',
    },
  },
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => (
  <RadioButtonGroup>
    <RadioButton {...args} label="Option 1" value="option1" />
    <RadioButton {...args} label="Option 2" value="option2" />
    <RadioButton {...args} label="Option 3" value="option3" />
  </RadioButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
  invalid: false,
  disabled: false,
};
