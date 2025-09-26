import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    state: {
      control: { type: 'radio' },
      options: ['default', 'hover', 'focus', 'filled', 'disabled'],
    },
  },
};

export default meta;

const Template: StoryFn<typeof SearchBar> = (args) => {
  const [value, setValue] = useState('');
  return (
    <SearchBar
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}
      onSearch={() => alert('Search: ' + value)}
      state={args.state} // <-- pass state prop
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'SDS ID/SDSファイル名/製品名/化学物質名/CAS番号/法令名/細則名',
  supportText:
    'Enterキーを押して、キーワードを確定してください。キーワードは複数入力することができます。',
  disabled: false,
  size: 'md',
  state: 'default', // <-- set initial state
};
