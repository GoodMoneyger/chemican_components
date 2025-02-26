import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { Spinner, SpinnerProps } from './Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    layout: {
      control: { type: 'select' },
      options: ['row', 'column'],
    },
    children: { control: { type: 'text' } },
  },
};

export default meta;

const Template: StoryFn<SpinnerProps> = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  layout: 'row',
  children: 'ラベル',
};
