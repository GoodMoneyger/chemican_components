import type { Meta, StoryObj } from '@storybook/react';

import { Calendar } from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A standalone calendar component built with react-day-picker featuring Japanese month/year formatting with English weekdays.',
      },
    },
  },
  argTypes: {
    value: {
      control: 'date',
      description: 'The selected date value',
    },
    onChange: {
      action: 'onChange',
      description: 'Callback function called when the date selection changes',
    },
    defaultValue: {
      control: 'date',
      description: 'The default date value for uncontrolled usage',
    },
    minDate: {
      control: 'date',
      description: 'The minimum selectable date',
    },
    maxDate: {
      control: 'date',
      description: 'The maximum selectable date',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the calendar is disabled',
    },
    showOutsideDays: {
      control: 'boolean',
      description: 'Whether to show days outside the current month',
    },
    fixedWeeks: {
      control: 'boolean',
      description: 'Whether to use fixed weeks (always show 6 weeks)',
    },
    animate: {
      control: 'boolean',
      description: 'Whether to enable animations',
    },
    defaultMonth: {
      control: 'date',
      description: 'The month to display by default',
    },
    inline: {
      control: 'boolean',
      description:
        'Whether the calendar is rendered inline (true) or as an overlay (false). Controls shadow application.',
    },
    className: {
      control: 'text',
      description: 'Custom class name for the calendar container',
    },
  },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Calendar Stories
export const Default: Story = {
  args: {
    showOutsideDays: true,
    fixedWeeks: true,
    animate: true,
  },
};

export const WithDateRange: Story = {
  args: {
    ...Default.args,
    minDate: new Date('2025-01-01'),
    maxDate: new Date('2025-12-31'),
  },
};

export const WithoutOutsideDays: Story = {
  args: {
    ...Default.args,
    showOutsideDays: false,
  },
};

export const WithoutFixedWeeks: Story = {
  args: {
    ...Default.args,
    fixedWeeks: false,
  },
};

// Inline vs Overlay Display Stories
export const InlineDisplay: Story = {
  args: {
    ...Default.args,
    inline: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Calendar with inline=true - no shadow applied, suitable for inline usage within forms or pages.',
      },
    },
  },
};

export const OverlayDisplay: Story = {
  args: {
    ...Default.args,
    inline: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Calendar with inline=false (default) - shadow applied, suitable for overlay usage in popovers or modals.',
      },
    },
  },
};

export const InlineVsOverlayComparison: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Inline Calendar (inline=true)
        </h3>
        <p className="text-sm text-body-secondary mb-4">
          No shadow - suitable for inline usage
        </p>
        <Calendar
          inline={true}
          showOutsideDays={true}
          fixedWeeks={true}
          animate={true}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Overlay Calendar (inline=false)
        </h3>
        <p className="text-sm text-body-secondary mb-4">
          With shadow - suitable for popover/modal usage
        </p>
        <Calendar
          inline={false}
          showOutsideDays={true}
          fixedWeeks={true}
          animate={true}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Side-by-side comparison showing the visual difference between inline and overlay calendar displays.',
      },
    },
  },
};
