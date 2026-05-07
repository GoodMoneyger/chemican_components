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

export const Numeric = Template.bind({});
Numeric.args = {
  type: 'number',
  placeholder: '最小値',
  defaultValue: '-0.5',
  step: '0.1',
};

/**
 * IME composition guard demo.
 *
 * Switch your OS input source to Japanese (or any IME-based language) and
 * type into the field. Press Enter to confirm an IME candidate — the submit
 * counter must NOT increase. Press Enter again with no active composition,
 * and the counter increments. With ASCII input, every Enter increments
 * normally.
 */
export const ImeCompositionGuard: StoryFn<typeof TextField> = () => {
  const [value, setValue] = React.useState('');
  const [submits, setSubmits] = React.useState<string[]>([]);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <TextField
        placeholder="日本語で入力して Enter で確定 / type and press Enter"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            setSubmits((prev) => [...prev, value]);
            setValue('');
          }
        }}
      />
      <div style={{ fontSize: 14 }}>
        Submits ({submits.length}):
        <ul>
          {submits.map((s, i) => (
            <li key={i}>{s || <em>(empty)</em>}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
