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
    },
  },
};

export default meta;

const Template: StoryFn<typeof Button> = (args) => {
  const icon = iconMap[args.icon || 'None'];
  const asChild = args.asChild;
  if (asChild) {
    return (
      <Button {...args} icon={icon} asChild>
        <a href="#">ラベル</a>
      </Button>
    );
  }
  return (
    <Button {...args} icon={icon}>
      ラベル
    </Button>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  intent: 'primary',
  size: 'md',
  disabled: false,
  icon: undefined,
  asChild: false,
};
