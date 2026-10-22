import { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { IconDownload, IconFilter } from '@tabler/icons-react';

import { Button } from '../Button';

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
    <SearchBar
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onSearch={() => alert('Search: ' + value)}
      state={args.state} // <-- pass state prop
    />
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

export const WithInitialKeywords = Template.bind({});
WithInitialKeywords.args = {
  ...defaultArgs,
  initialKeywords: ['SDS ID', '化学物質名'],
};

const sdsFileName =
  '1IK_COPPER SELENIDE (CU2SE)_SDS-US_English.pdf_ filename_=UTF-8_1IK_COPPER_20SELENIDE_20_28CU2SE_29_SDS-US_English_20405-64-5.pdf';

/**
 * Mirrors the sticky filter bar of the SDS list in sds_scan_general, where a
 * pasted file name has to stay inside the 448px wide bar.
 */
export const SdsList: StoryFn<typeof SearchBar> = (args) => {
  const [value, setValue] = useState('');
  const [searched, setSearched] = useState<string[]>(
    args.initialKeywords ?? []
  );
  return (
    <div className="gap-md flex flex-col">
      <div
        className="bg-surface-secondary px-xxl h-19 flex w-full items-center
          justify-between"
      >
        <div className="gap-2 flex items-center">
          <SearchBar
            {...args}
            className="w-112"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onSearch={setSearched}
            searchOnKeywordAdd
          />
          <Button
            intent="secondary"
            size="sm"
            className="min-w-20"
            icon={<IconFilter size={20} />}
          >
            フィルター
          </Button>
        </div>
        <Button intent="primary" size="sm" icon={<IconDownload size={20} />}>
          エクスポート
        </Button>
      </div>
      <p className="text-body-primary px-xxl text-sm">
        Searched: {searched.join(' / ') || '(none)'}
      </p>
    </div>
  );
};
SdsList.args = {
  size: 'md',
  placeholder: 'SDSを検索（CAS番号・法令名・化学物質名など）',
  supportText:
    'Enterキーを押して、キーワードを確定してください。キーワードは複数入力することができます。SDS ID/SDSファイル名/製品名/製造者名/化学物質名/CAS番号/法令名/細則名から検索ができます。',
  searchButtonText: '検索',
  initialKeywords: [sdsFileName, '20405-64-5'],
};
SdsList.parameters = { layout: 'fullscreen' };
