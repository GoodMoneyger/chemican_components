import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import {
  IconArrowLeft,
  IconArrowRight,
  IconX,
  IconCheck,
} from '@tabler/icons-react';

import { Button } from './Button';

const iconMap = {
  IconArrowLeft,
  IconArrowRight,
  IconX,
  IconCheck,
  None: undefined,
};

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    intent: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    icon: {
      control: { type: 'select' },
      options: [
        'None',
        'IconArrowLeft',
        'IconArrowRight',
        'IconX',
        'IconCheck',
      ],
      mapping: iconMap,
    },
  },
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => {
  const asChild = args.asChild;
  if (asChild) {
    return (
      <Button {...args} asChild>
        <a href="#">{args.children}</a>
      </Button>
    );
  }
  return <Button {...args}>{args.children}</Button>;
};

export const Primary = Template.bind({});
Primary.args = {
  intent: 'primary',
  size: 'md',
  disabled: false,
  icon: undefined,
  asChild: false,
  children: 'ラベル',
};
