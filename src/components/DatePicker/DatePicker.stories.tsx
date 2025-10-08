import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { DatePicker } from './DatePicker';

// Mock FormattedMessage for demo purposes (simulates react-intl)
const FormattedMessage = ({
  id,
  defaultMessage,
}: {
  id: string;
  defaultMessage: string;
}) => <span data-testid={`formatted-message-${id}`}>{defaultMessage}</span>;

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
export const ReactNodePlaceholders: Story = {
  render: () => (
    <div className="space-y-6 min-w-[300px]">
      <div>
        <h3 className="text-sm font-medium text-body-primary mb-2">
          1. String Placeholder
        </h3>
        <p className="text-xs text-body-secondary mb-2">Direct string usage</p>
        <DatePicker placeholder="選択してください" />
      </div>

      <div>
        <h3 className="text-sm font-medium text-body-primary mb-2">
          2. FormattedMessage Placeholder
        </h3>
        <p className="text-xs text-body-secondary mb-2">
          Extracts defaultMessage for internationalization
        </p>
        <DatePicker
          placeholder={
            <FormattedMessage id="select" defaultMessage="選択してください" />
          }
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-body-primary mb-2">
          3. React Element Placeholder
        </h3>
        <p className="text-xs text-body-secondary mb-2">
          Extracts text from React element children
        </p>
        <DatePicker placeholder={<span>Select date</span>} />
      </div>

      <div>
        <h3 className="text-sm font-medium text-body-primary mb-2">
          4. Array Placeholder
        </h3>
        <p className="text-xs text-body-secondary mb-2">
          Concatenates array elements
        </p>
        <DatePicker placeholder={['Select ', 'date']} />
      </div>

      <div>
        <h3 className="text-sm font-medium text-body-primary mb-2">
          5. Complex React Element
        </h3>
        <p className="text-xs text-body-secondary mb-2">
          Handles nested React elements
        </p>
        <DatePicker
          placeholder={
            <span style={{ fontStyle: 'italic' }}>Choose a date...</span>
          }
          side="top"
        />
      </div>

      <div>
        <h3 className="text-sm font-medium text-body-primary mb-2">
          6. Number Placeholder
        </h3>
        <p className="text-xs text-body-secondary mb-2">
          Converts number to string
        </p>
        <DatePicker placeholder={2024} side="top" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates the ReactNode placeholder conversion functionality that enables internationalization support.

The conversion snippet in the DatePicker component handles various ReactNode types:
- **String**: Direct usage
- **Number**: Converted to string
- **FormattedMessage**: Extracts \`defaultMessage\` prop for i18n libraries
- **React Elements**: Extracts text from \`children\` prop
- **Arrays**: Concatenates elements
- **Complex Elements**: Fallback handling

This enables flexible placeholder usage while maintaining compatibility with HTML input elements that require string placeholders.
        `,
      },
    },
  },
};
