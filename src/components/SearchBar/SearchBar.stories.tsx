import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component:
          'A search input component with keyword chip functionality and natural hover/focus states using Tailwind CSS.',
      },
    },
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    placeholder: {
      control: { type: 'text' },
    },
    state: {
      control: { type: 'radio' },
      options: ['default', 'filled', 'disabled'],
    },
    value: {
      table: { disable: true }, // Hide from controls
    },
    onChange: {
      table: { disable: true }, // Hide from controls
    },
    onSearch: {
      table: { disable: true }, // Hide from controls
    },
    searchButtonText: {
      table: { disable: true }, // Hide from controls
    },
    disabled: {
      table: { disable: true }, // Hide from controls
    },
  },
};

export default meta;

const Template: StoryFn<typeof SearchBar> = (args) => {
  const [value, setValue] = useState('');

  return (
    <div style={{ width: '500px' }}>
      <SearchBar
        {...args}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        onKeywordsChange={() => {}} // Empty handler for stories
        onSearch={(searchValue, searchKeywords) =>
          alert(
            'Search Input: ' +
              searchValue +
              ' | Keywords: ' +
              searchKeywords.join(', ')
          )
        }
        state={args.state} // <-- pass state prop
      />
    </div>
  );
};

const defaultArgs = {
  placeholder: 'SDS ID/SDSファイル名/製品名/化学物質名/CAS番号/法令名/細則名',
  supportText:
    'Enterキーを押して、キーワードを確定してください。キーワードは複数入力することができます。',
  size: 'md' as const,
  state: 'default' as const,
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const Small = Template.bind({});
Small.args = { ...defaultArgs, size: 'sm' };

export const Large = Template.bind({});
Large.args = { ...defaultArgs, size: 'lg' };

export const Filled = Template.bind({});
Filled.args = { ...defaultArgs, state: 'filled' };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultArgs, state: 'disabled' };
