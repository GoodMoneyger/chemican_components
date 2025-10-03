import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the date picker is disabled',
      defaultValue: false,
    },
    error: {
      control: 'boolean',
      description: 'Whether the date picker is in an error state',
      defaultValue: false,
      if: { arg: 'disabled', neq: true },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text when no date is selected',
      if: { arg: 'disabled', neq: true },
    },
    // FormField integration props
    label: {
      control: 'text',
      description: 'Label for the form field',
    },
    name: {
      control: 'text',
      description: 'Name attribute for the form field',
      if: { arg: 'disabled', neq: true },
    },
    description: {
      control: 'text',
      description: 'Description text below the field',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message to display',
      if: { arg: 'error', eq: true },
    },
    formatDate: {
      control: false,
      description: 'Custom formatting function for the selected date',
    },
    defaultValue: {
      control: 'date',
      description: 'Default selected date for uncontrolled usage',
      if: { arg: 'disabled', neq: true },
    },
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// Default story - with integrated FormField
export const Default: Story = {
  args: {
    label: 'ラベル (任意)',
    name: 'default',
    description: 'サポートテキストが入ります。',
    placeholder: '選択してください',
    disabled: false,
    error: false,
  },
};

// States - using integrated FormField to match design specifications
export const States: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="gap-6 flex items-start">
        <div className="w-24 flex-shrink-0">
          <h3 className="text-sm font-medium text-body-primary">Default</h3>
          <h4 className="text-sm text-body-secondary">デフォルト</h4>
        </div>
        <div className="flex-1">
          <DatePicker
            label="ラベル (任意)"
            name="default"
            description="サポートテキストが入ります。"
            placeholder="選択してください"
          />
        </div>
      </div>

      <div className="gap-6 flex items-start">
        <div className="w-24 flex-shrink-0">
          <h3 className="text-sm font-medium text-body-primary">Filled</h3>
          <h4 className="text-sm text-body-secondary">入力済</h4>
        </div>
        <div className="flex-1">
          <DatePicker
            label="ラベル (任意)"
            name="filled"
            description="サポートテキストが入ります。"
            defaultValue={new Date()}
          />
        </div>
      </div>

      <div className="gap-6 flex items-start">
        <div className="w-24 flex-shrink-0">
          <h3 className="text-sm font-medium text-body-primary">Error</h3>
          <h4 className="text-sm text-body-secondary">エラー時</h4>
        </div>
        <div className="flex-1">
          <DatePicker
            label="ラベル (任意)"
            name="error"
            description="サポートテキストが入ります。"
            error
            errorMessage="エラーテキストが入ります。"
            placeholder="誤った内容"
          />
        </div>
      </div>

      <div className="gap-6 flex items-start">
        <div className="w-24 flex-shrink-0">
          <h3 className="text-sm font-medium text-body-primary">Disabled</h3>
          <h4 className="text-sm text-body-secondary">利用不可時</h4>
        </div>
        <div className="flex-1">
          <DatePicker
            label="ラベル (任意)"
            name="disabled"
            description="サポートテキストが入ります。"
            disabled
            placeholder="選択してください"
          />
        </div>
      </div>
    </div>
  ),
};

// Custom formatting - using integrated FormField
export const CustomFormatting: Story = {
  render: () => {
    const formatJapanese = (date: Date) => {
      return date.toLocaleDateString('ja-JP', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'short',
      });
    };

    const formatISO = (date: Date) => {
      return date.toISOString().split('T')[0];
    };

    return (
      <div className="gap-md flex flex-col">
        <DatePicker
          label="Japanese format"
          name="japanese-format"
          description="日本語形式での表示"
          formatDate={formatJapanese}
          defaultValue={new Date()}
        />

        <DatePicker
          label="ISO format"
          name="iso-format"
          description="ISO 8601 format (YYYY-MM-DD)"
          formatDate={formatISO}
          defaultValue={new Date()}
        />
      </div>
    );
  },
};
