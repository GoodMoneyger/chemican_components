import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { Checkbox, CheckboxGroup } from './Checkbox';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/Checkbox',
  component: CheckboxGroup,
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
