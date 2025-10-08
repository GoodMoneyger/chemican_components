import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';
import {
  IconArrowLeft,
  IconArrowRight,
  IconX,
  IconCheck,
} from '@tabler/icons-react';
import figma from '@figma/code-connect';

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
    loading: {
      control: { type: 'boolean' },
    },
    danger: {
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
    trailingIcon: {
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=6129-2237&m=dev',
      examples: [Button],
      props: {
        size: figma.enum('Size', {
          'X-Small': 'xs',
          Small: 'sm',
          Medium: 'md',
          Large: 'lg',
        }),
        label: figma.string('Label'),
        icon: figma.boolean('Show front icon', {
          true: 'IconArrowLeft',
          false: 'None',
        }),
      },
    },
    radixDocs: {
      primitive: 'Slot',
      url: 'https://www.radix-ui.com/primitives/docs/utilities/slot',
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
  loading: false,
  icon: undefined,
  trailingIcon: undefined,
  asChild: false,
  children: 'ラベル',
  danger: false,
};
