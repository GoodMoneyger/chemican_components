import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

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
    optional: {
      control: 'boolean',
      description: 'Whether the field is optional',
      if: { arg: 'disabled', neq: true },
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
    label: 'Default',
    name: 'default',
    description: 'サポートテキストが入ります。',
    placeholder: '選択してください',
    disabled: false,
    error: false,
  },
};

// States - using integrated FormField
export const States: Story = {
  render: () => (
    <div className="gap-md flex flex-col">
      <DatePicker
        label="Default"
        name="default"
        description="サポートテキストが入ります。"
        placeholder="選択してください"
      />

      <DatePicker
        label="With Value"
        name="with-value"
        description="サポートテキストが入ります。"
        defaultValue={new Date()}
      />

      <DatePicker
        label="Disabled"
        name="disabled"
        description="サポートテキストが入ります。"
        disabled
        placeholder="選択してください"
      />

      <DatePicker
        label="Error"
        name="error"
        description="サポートテキストが入ります。"
        error
        errorMessage="エラーテキストが入ります。"
        placeholder="選択してください"
      />
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
