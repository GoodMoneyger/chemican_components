import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  IconCalendar,
  IconCalendarMonth,
  IconCalendarWeek,
} from '@tabler/icons-react';

import { SegmentedControl } from './SegmentedControl';

const meta: Meta<typeof SegmentedControl.Group> = {
  title: 'Components/SegmentedControl',
  component: SegmentedControl.Group,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof meta>;

const Frequencies = () => {
  const [value, setValue] = useState<string | number>('daily');
  return (
    <SegmentedControl.Group
      name="frequency"
      value={value}
      onValueChange={setValue}
    >
      <SegmentedControl.Option value="daily">Every day</SegmentedControl.Option>
      <SegmentedControl.Option value="weekly">
        Every week
      </SegmentedControl.Option>
      <SegmentedControl.Option value="monthly">
        Every month
      </SegmentedControl.Option>
    </SegmentedControl.Group>
  );
};

export const Default: Story = { render: () => <Frequencies /> };

export const Uncontrolled: Story = {
  render: () => (
    <SegmentedControl.Group name="frequency-uncontrolled" defaultValue="weekly">
      <SegmentedControl.Option value="daily">Every day</SegmentedControl.Option>
      <SegmentedControl.Option value="weekly">
        Every week
      </SegmentedControl.Option>
      <SegmentedControl.Option value="monthly">
        Every month
      </SegmentedControl.Option>
    </SegmentedControl.Group>
  ),
};

export const Disabled: Story = {
  render: () => (
    <SegmentedControl.Group name="frequency-disabled" value="daily" disabled>
      <SegmentedControl.Option value="daily">Every day</SegmentedControl.Option>
      <SegmentedControl.Option value="weekly">
        Every week
      </SegmentedControl.Option>
      <SegmentedControl.Option value="monthly">
        Every month
      </SegmentedControl.Option>
    </SegmentedControl.Group>
  ),
};

export const SingleOptionDisabled: Story = {
  render: () => (
    <SegmentedControl.Group name="frequency-partial" defaultValue="daily">
      <SegmentedControl.Option value="daily">Every day</SegmentedControl.Option>
      <SegmentedControl.Option value="weekly">
        Every week
      </SegmentedControl.Option>
      <SegmentedControl.Option value="monthly" disabled>
        Every month
      </SegmentedControl.Option>
    </SegmentedControl.Group>
  ),
};

export const Invalid: Story = {
  render: () => (
    <SegmentedControl.Group
      name="frequency-invalid"
      defaultValue="daily"
      invalid
    >
      <SegmentedControl.Option value="daily">Every day</SegmentedControl.Option>
      <SegmentedControl.Option value="weekly">
        Every week
      </SegmentedControl.Option>
      <SegmentedControl.Option value="monthly">
        Every month
      </SegmentedControl.Option>
    </SegmentedControl.Group>
  ),
};

export const WithLeadingIcons: Story = {
  render: () => (
    <SegmentedControl.Group name="frequency-icons" defaultValue="daily">
      <SegmentedControl.Option value="daily" leadingIcon={IconCalendar}>
        Every day
      </SegmentedControl.Option>
      <SegmentedControl.Option value="weekly" leadingIcon={IconCalendarWeek}>
        Every week
      </SegmentedControl.Option>
      <SegmentedControl.Option value="monthly" leadingIcon={IconCalendarMonth}>
        Every month
      </SegmentedControl.Option>
    </SegmentedControl.Group>
  ),
};

const NumberValues = () => {
  const [value, setValue] = useState<string | number>(1);
  return (
    <SegmentedControl.Group name="step" value={value} onValueChange={setValue}>
      <SegmentedControl.Option value={1}>1</SegmentedControl.Option>
      <SegmentedControl.Option value={2}>2</SegmentedControl.Option>
      <SegmentedControl.Option value={3}>3</SegmentedControl.Option>
      <SegmentedControl.Option value={4}>4</SegmentedControl.Option>
    </SegmentedControl.Group>
  );
};

export const WithNumberValues: Story = { render: () => <NumberValues /> };
