import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';
import {
  IconSearch,
  IconMail,
  IconUser,
  IconEye,
  IconEyeOff,
  IconChevronDown,
  IconCalendar,
  IconLock,
} from '@tabler/icons-react';

import { TextField } from './TextField';

const prefixIconMap = {
  'IconSearch (size 16)': IconSearch,
  'IconMail (size 16)': IconMail,
  'IconUser (size 16)': IconUser,
  'IconCalendar (size 16)': IconCalendar,
  'IconLock (size 16)': IconLock,
  'IconSearch (size 20)': <IconSearch size={20} />,
  'IconMail (size 20)': <IconMail size={20} />,
  None: undefined,
};

const trailingIconMap = {
  'IconEye (size 16)': IconEye,
  'IconEyeOff (size 16)': IconEyeOff,
  'IconChevronDown (size 16)': IconChevronDown,
  'IconCalendar (size 16)': IconCalendar,
  'IconEye (size 20)': <IconEye size={20} />,
  'IconChevronDown (size 20)': <IconChevronDown size={20} />,
  None: undefined,
};

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    prefixIcon: {
      control: { type: 'select' },
      options: Object.keys(prefixIconMap),
      mapping: prefixIconMap,
    },
    trailingIcon: {
      control: { type: 'select' },
      options: Object.keys(trailingIconMap),
      mapping: trailingIconMap,
    },
    onTrailingIconClick: {
      action: 'trailing icon clicked',
      table: {
        disable: true, // Hide in the controls panel
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof TextField> = (args) => <TextField {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter text...',
  ontrailingIconClick: () => alert('Trailing icon clicked!'),
  disabled: false,
  invalid: false,
};
