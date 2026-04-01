import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ChoiceChip, ChoiceChipGroup } from './ChoiceChip';

const meta: Meta<typeof ChoiceChip> = {
  title: 'Components/ChoiceChip',
  component: ChoiceChip,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    selected: {
      control: 'boolean',
      description: 'Whether the chip is selected',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the chip is disabled',
    },
    children: {
      control: 'text',
      description: 'The content of the chip',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'すべて',
    selected: false,
  },
};

export const Selected: Story = {
  args: {
    children: 'すべて',
    selected: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'すべて',
    disabled: true,
  },
};

export const DisabledSelected: Story = {
  args: {
    children: 'すべて',
    selected: true,
    disabled: true,
  },
};

const InteractiveChipGroup = () => {
  const [selected, setSelected] = useState<string>('all');

  const chips = [
    { id: 'all', label: 'すべて' },
    { id: 'popular', label: '人気' },
    { id: 'legal', label: '法令該当' },
    { id: 'business', label: '業務関連' },
  ];

  return (
    <ChoiceChipGroup>
      {chips.map((chip) => (
        <ChoiceChip
          key={chip.id}
          selected={selected === chip.id}
          onClick={() => setSelected(chip.id)}
        >
          {chip.label}
        </ChoiceChip>
      ))}
    </ChoiceChipGroup>
  );
};

export const SingleSelect: Story = {
  render: () => <InteractiveChipGroup />,
};

const MultiSelectChipGroup = () => {
  const [selected, setSelected] = useState<string[]>(['all']);

  const chips = [
    { id: 'all', label: 'すべて' },
    { id: 'popular', label: '人気' },
    { id: 'legal', label: '法令該当' },
    { id: 'business', label: '業務関連' },
  ];

  const handleClick = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <ChoiceChipGroup>
      {chips.map((chip) => (
        <ChoiceChip
          key={chip.id}
          selected={selected.includes(chip.id)}
          onClick={() => handleClick(chip.id)}
        >
          {chip.label}
        </ChoiceChip>
      ))}
    </ChoiceChipGroup>
  );
};

export const MultiSelect: Story = {
  render: () => <MultiSelectChipGroup />,
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-medium">States</h3>
        <ChoiceChipGroup>
          <ChoiceChip selected={false}>Unselected</ChoiceChip>
          <ChoiceChip selected={true}>Selected</ChoiceChip>
          <ChoiceChip disabled>Disabled</ChoiceChip>
          <ChoiceChip selected disabled>
            Selected Disabled
          </ChoiceChip>
        </ChoiceChipGroup>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-medium">Filter Example (Japanese)</h3>
        <ChoiceChipGroup>
          <ChoiceChip selected>すべて</ChoiceChip>
          <ChoiceChip>人気</ChoiceChip>
          <ChoiceChip>法令該当</ChoiceChip>
          <ChoiceChip>業務関連</ChoiceChip>
        </ChoiceChipGroup>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-medium">Category Filter (English)</h3>
        <ChoiceChipGroup>
          <ChoiceChip selected>All</ChoiceChip>
          <ChoiceChip>Popular</ChoiceChip>
          <ChoiceChip>Compliance</ChoiceChip>
          <ChoiceChip>Business</ChoiceChip>
        </ChoiceChipGroup>
      </div>
    </div>
  ),
};
