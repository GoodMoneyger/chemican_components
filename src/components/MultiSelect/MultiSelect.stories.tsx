import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconUsers, IconStar, IconHeart } from '@tabler/icons-react';

import { MultiSelect } from './MultiSelect';
import type { MultiSelectOption, MultiSelectGroup } from './MultiSelect';

const meta: Meta<typeof MultiSelect> = {
  title: 'Components/MultiSelect',
  component: MultiSelect,
  parameters: {
    docs: {
      description: {
        component:
          'A flexible multi-select dropdown component with search functionality, grouping support, and accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'inverted'],
      description: 'Visual style variant of the component',
    },
    maxCount: {
      control: 'number',
      description:
        'Maximum number of selected items to display before showing "+X more"',
    },
    searchable: {
      control: 'boolean',
      description: 'Whether to show search functionality',
    },
    hideSelectAll: {
      control: 'boolean',
      description: 'Whether to hide the "Select All" option',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the component is disabled',
    },
    closeOnSelect: {
      control: 'boolean',
      description: 'Whether to close the popover after selecting an option',
    },
    singleLine: {
      control: 'boolean',
      description:
        'Whether to display selected items in a single line with scroll',
    },
    autoSize: {
      control: 'boolean',
      description: 'Whether the component should auto-size to its content',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions: MultiSelectOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
  { label: 'Fig', value: 'fig' },
  { label: 'Grape', value: 'grape' },
  { label: 'Honeydew', value: 'honeydew' },
];

const optionsWithIcons: MultiSelectOption[] = [
  { label: 'Users', value: 'users', icon: IconUsers },
  { label: 'Favorites', value: 'favorites', icon: IconStar },
  { label: 'Liked', value: 'liked', icon: IconHeart },
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
];

const groupedOptions: MultiSelectGroup[] = [
  {
    heading: 'Fruits',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
      { label: 'Cherry', value: 'cherry' },
    ],
  },
  {
    heading: 'Vegetables',
    options: [
      { label: 'Carrot', value: 'carrot' },
      { label: 'Broccoli', value: 'broccoli' },
      { label: 'Spinach', value: 'spinach' },
    ],
  },
  {
    heading: 'Grains',
    options: [
      { label: 'Rice', value: 'rice' },
      { label: 'Wheat', value: 'wheat' },
      { label: 'Oats', value: 'oats' },
    ],
  },
];

const disabledOptions: MultiSelectOption[] = [
  { label: 'Available Option', value: 'available' },
  { label: 'Disabled Option', value: 'disabled', disabled: true },
  { label: 'Another Available', value: 'another-available' },
  { label: 'Also Disabled', value: 'also-disabled', disabled: true },
];

export const Default: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select fruits...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const WithDefaultValues: Story = {
  args: {
    options: basicOptions,
    defaultValue: ['apple', 'banana'],
    placeholder: 'Select fruits...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const WithIcons: Story = {
  args: {
    options: optionsWithIcons,
    placeholder: 'Select options...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const Grouped: Story = {
  args: {
    options: groupedOptions,
    placeholder: 'Select food items...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const WithDisabledOptions: Story = {
  args: {
    options: disabledOptions,
    placeholder: 'Select options...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const Secondary: Story = {
  args: {
    options: basicOptions,
    variant: 'secondary',
    placeholder: 'Secondary variant...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const Destructive: Story = {
  args: {
    options: basicOptions,
    variant: 'destructive',
    placeholder: 'Destructive variant...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const MaxCountLimited: Story = {
  args: {
    options: basicOptions,
    maxCount: 2,
    defaultValue: ['apple', 'banana', 'cherry', 'date'],
    placeholder: 'Max 2 visible...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const NoSearch: Story = {
  args: {
    options: basicOptions,
    searchable: false,
    placeholder: 'No search functionality...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const NoSelectAll: Story = {
  args: {
    options: basicOptions,
    hideSelectAll: true,
    placeholder: 'No select all option...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const CloseOnSelect: Story = {
  args: {
    options: basicOptions,
    closeOnSelect: true,
    placeholder: 'Closes after selection...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const SingleLine: Story = {
  args: {
    options: basicOptions,
    singleLine: true,
    defaultValue: ['apple', 'banana', 'cherry', 'date', 'elderberry'],
    placeholder: 'Single line display...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const AutoSize: Story = {
  args: {
    options: basicOptions,
    autoSize: true,
    placeholder: 'Auto-sized...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const Disabled: Story = {
  args: {
    options: basicOptions,
    disabled: true,
    defaultValue: ['apple', 'banana'],
    placeholder: 'Disabled state...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const WithAnimation: Story = {
  args: {
    options: basicOptions,
    animation: 0.3,
    animationConfig: {
      badgeAnimation: 'bounce',
      popoverAnimation: 'scale',
      duration: 0.3,
    },
    placeholder: 'With animations...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};

export const Responsive: Story = {
  args: {
    options: basicOptions,
    responsive: true,
    defaultValue: ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig'],
    placeholder: 'Responsive behavior...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story shows responsive behavior. Try resizing the viewport to see different maxCount values.',
      },
    },
  },
};

export const CustomEmptyState: Story = {
  args: {
    options: [],
    emptyIndicator: (
      <div className="py-6 flex flex-col items-center text-center">
        <IconStar className="h-12 w-12 text-body-secondary mb-2" />
        <p className="text-body-secondary">No options available</p>
        <p className="text-xs text-body-secondary mt-1">
          Try a different search term
        </p>
      </div>
    ),
    placeholder: 'Custom empty state...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
};
