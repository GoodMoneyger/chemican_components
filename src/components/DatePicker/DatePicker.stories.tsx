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
    minDate: {
      control: 'date',
      description: 'The minimum selectable date',
    },
    maxDate: {
      control: 'date',
      description: 'The maximum selectable date',
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
    defaultOpen: {
      control: 'boolean',
      description: 'Whether the popover should be open by default',
      defaultValue: false,
    },
  },
  tags: [],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// Default story - standalone DatePicker
export const Default: Story = {
  args: {
    placeholder: '選択してください',
    disabled: false,
    error: false,
  },
};

// States - standalone DatePicker components
export const States: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="gap-6 flex items-start">
        <div className="w-24 flex-shrink-0">
          <h3 className="text-sm font-medium text-body-primary">Default</h3>
          <h4 className="text-sm text-body-secondary">デフォルト</h4>
        </div>
        <div className="flex-1">
          <DatePicker placeholder="選択してください" />
        </div>
      </div>

      <div className="gap-6 flex items-start">
        <div className="w-24 flex-shrink-0">
          <h3 className="text-sm font-medium text-body-primary">Filled</h3>
          <h4 className="text-sm text-body-secondary">入力済</h4>
        </div>
        <div className="flex-1">
          <DatePicker defaultValue={new Date()} />
        </div>
      </div>

      <div className="gap-6 flex items-start">
        <div className="w-24 flex-shrink-0">
          <h3 className="text-sm font-medium text-body-primary">Error</h3>
          <h4 className="text-sm text-body-secondary">エラー時</h4>
        </div>
        <div className="flex-1">
          <DatePicker error placeholder="誤った内容" />
        </div>
      </div>

      <div className="gap-6 flex items-start">
        <div className="w-24 flex-shrink-0">
          <h3 className="text-sm font-medium text-body-primary">Disabled</h3>
          <h4 className="text-sm text-body-secondary">利用不可時</h4>
        </div>
        <div className="flex-1">
          <DatePicker disabled placeholder="選択してください" />
        </div>
      </div>
    </div>
  ),
};

// Custom formatting - standalone DatePicker
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
      <div className="gap-md space-y-4 flex flex-col">
        <div>
          <h3 className="text-sm font-medium text-body-primary mb-2">
            Japanese format
          </h3>
          <p className="text-xs text-body-secondary mb-2">日本語形式での表示</p>
          <DatePicker formatDate={formatJapanese} defaultValue={new Date()} />
        </div>

        <div>
          <h3 className="text-sm font-medium text-body-primary mb-2">
            ISO format
          </h3>
          <p className="text-xs text-body-secondary mb-2">
            ISO 8601 format (YYYY-MM-DD)
          </p>
          <DatePicker formatDate={formatISO} defaultValue={new Date()} />
        </div>
      </div>
    );
  },
};

// ReactNode Placeholder Examples - showcasing the ReactNode conversion functionality
export const StringPlaceholders: Story = {
  render: () => (
    <div className="space-y-6 min-w-[300px]">
      <div>
        <h3 className="text-sm font-medium text-body-primary mb-2">
          1. English Placeholder
        </h3>
        <p className="text-xs text-body-secondary mb-2">Direct string usage</p>
        <DatePicker placeholder="Select a date" />
      </div>

      <div>
        <h3 className="text-sm font-medium text-body-primary mb-2">
          2. Japanese Placeholder
        </h3>
        <p className="text-xs text-body-secondary mb-2">
          Japanese localization example
        </p>
        <DatePicker placeholder="選択してください" />
      </div>

      <div>
        <h3 className="text-sm font-medium text-body-primary mb-2">
          3. Empty Placeholder
        </h3>
        <p className="text-xs text-body-secondary mb-2">No placeholder text</p>
        <DatePicker />
      </div>

      <div>
        <h3 className="text-sm font-medium text-body-primary mb-2">
          4. Custom Format with Placeholder
        </h3>
        <p className="text-xs text-body-secondary mb-2">
          Shows format hint in placeholder
        </p>
        <DatePicker placeholder="YYYY-MM-DD" side="top" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates different placeholder string examples for the DatePicker component.

The placeholder prop now accepts a simple string, making it easier for consuming projects to handle internationalization:
- **English**: "Select a date"
- **Japanese**: "選択してください" 
- **Format hints**: "YYYY-MM-DD"
- **Empty**: No placeholder

For i18n, consuming projects can use their preferred translation library:
\`\`\`tsx
<DatePicker placeholder={t('datePicker.placeholder')} />
// or
<DatePicker placeholder={formatMessage({id: 'datePicker.placeholder'})} />
\`\`\`
        `,
      },
    },
  },
};
