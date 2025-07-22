import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { Checkbox, CheckboxGroup } from './Checkbox';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/Checkbox',
  component: CheckboxGroup,
  parameters: {
    radixDocs: {
      primitive: 'Checkbox',
      url: 'https://www.radix-ui.com/primitives/docs/components/checkbox',
    },
  },
};

export default meta;

const Template: StoryFn<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup>
    <Checkbox {...args} label="Checkbox 1" />
    <Checkbox {...args} label="Checkbox 2" />
    <Checkbox {...args} label="Checkbox 3" />
  </CheckboxGroup>
);

export const Default = Template.bind({});
Default.args = {
  invalid: false,
  disabled: false,
};
