import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
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
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: { type: 'text' },
    },
    intent: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'text', 'icon'],
      description:
        'Button style variant. When "icon" is selected, children text is hidden, trailingIcon is ignored, and only the main icon is shown.',
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
      description:
        'Leading icon. Automatically set to IconCheck when intent="icon" is selected. For icon intent, this is the only icon displayed.',
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
      description:
        'Trailing icon. Automatically ignored when intent="icon" is selected.',
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

  // Auto-configure for icon intent
  const finalArgs = {
    ...args,
    // When intent is "icon", ensure we have an icon, no children, and no trailingIcon
    ...(args.intent === 'icon' && {
      icon: args.icon || IconCheck,
      size: args.size || 'sm',
    }),
  };

  if (asChild) {
    return (
      <Button {...finalArgs} asChild>
        <a href="#">{finalArgs.children}</a>
      </Button>
    );
  }
  return <Button {...finalArgs}>{finalArgs.children}</Button>;
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

export const IconOnly = Template.bind({});
IconOnly.args = {
  intent: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  icon: IconCheck,
  trailingIcon: undefined,
  asChild: false,
  danger: false,
};
IconOnly.parameters = {
  docs: {
    description: {
      story:
        'Icon-only buttons are automatically styled when a single icon is provided without any text. The button becomes square (1:1 aspect ratio) with appropriate padding. To create an icon-only button, provide either the `icon` or `trailingIcon` prop (not both) and omit the `children` prop.',
    },
  },
};
