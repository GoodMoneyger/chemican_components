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
