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
    filterByValueAndLabel: {
      control: 'boolean',
      description: 'Whether to filter by both value and label when searching',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const basicOptions: MultiSelectOption[] = [
  { label: 'Apple', value: '550e8400-e29b-41d4-a716-446655440001' },
  { label: 'Banana', value: '550e8400-e29b-41d4-a716-446655440002' },
  { label: 'Cherry', value: 'cherry-fruit' },
  { label: 'Date', value: '550e8400-e29b-41d4-a716-446655440003' },
  { label: 'Elderberry', value: 'elderberry-premium' },
  { label: 'Fig', value: '550e8400-e29b-41d4-a716-446655440004' },
  { label: 'Grape', value: 'grape-variety' },
  { label: 'Honeydew', value: '550e8400-e29b-41d4-a716-446655440005' },
];

const optionsWithIcons: MultiSelectOption[] = [
  {
    label: 'Users',
    value: '6ba7b810-9dad-11d1-80b4-00c04fd430c8',
    icon: IconUsers,
  },
  { label: 'Favorites', value: 'favorites-collection', icon: IconStar },
  {
    label: 'Liked',
    value: '6ba7b811-9dad-11d1-80b4-00c04fd430c8',
    icon: IconHeart,
  },
  { label: 'Apple', value: 'apple-item' },
  { label: 'Banana', value: '6ba7b812-9dad-11d1-80b4-00c04fd430c8' },
];

const groupedOptions: MultiSelectGroup[] = [
  {
    heading: 'Fruits',
    options: [
      { label: 'Apple', value: 'a1b2c3d4-e5f6-4789-a012-123456789abc' },
      { label: 'Banana', value: 'banana-tropical' },
      { label: 'Cherry', value: 'b2c3d4e5-f6a7-4890-b123-234567890bcd' },
    ],
  },
  {
    heading: 'Vegetables',
    options: [
      { label: 'Carrot', value: 'carrot-orange' },
      { label: 'Broccoli', value: 'c3d4e5f6-a7b8-4901-c234-345678901cde' },
      { label: 'Spinach', value: 'spinach-leafy' },
    ],
  },
  {
    heading: 'Grains',
    options: [
      { label: 'Rice', value: 'd4e5f6a7-b8c9-4012-d345-456789012def' },
      { label: 'Wheat', value: 'wheat-grain' },
      { label: 'Oats', value: 'e5f6a7b8-c9d0-4123-e456-567890123efa' },
    ],
  },
];

const disabledOptions: MultiSelectOption[] = [
  { label: 'Available Option', value: 'f6a7b8c9-d0e1-4234-f567-678901234fab' },
  { label: 'Disabled Option', value: 'disabled-item', disabled: true },
  { label: 'Another Available', value: 'a7b8c9d0-e1f2-4345-a678-789012345abc' },
  { label: 'Also Disabled', value: 'also-disabled-slug', disabled: true },
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
    defaultValue: [
      '550e8400-e29b-41d4-a716-446655440001',
      '550e8400-e29b-41d4-a716-446655440002',
    ],
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
    defaultValue: [
      '550e8400-e29b-41d4-a716-446655440001',
      '550e8400-e29b-41d4-a716-446655440002',
      'cherry-fruit',
      '550e8400-e29b-41d4-a716-446655440003',
    ],
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
    defaultValue: [
      '550e8400-e29b-41d4-a716-446655440001',
      '550e8400-e29b-41d4-a716-446655440002',
      'cherry-fruit',
      '550e8400-e29b-41d4-a716-446655440003',
      'elderberry-premium',
    ],
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
    defaultValue: [
      '550e8400-e29b-41d4-a716-446655440001',
      '550e8400-e29b-41d4-a716-446655440002',
    ],
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
    defaultValue: [
      '550e8400-e29b-41d4-a716-446655440001',
      '550e8400-e29b-41d4-a716-446655440002',
      'cherry-fruit',
      '550e8400-e29b-41d4-a716-446655440003',
      'elderberry-premium',
      '550e8400-e29b-41d4-a716-446655440004',
    ],
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

export const FilterByValueAndLabel: Story = {
  args: {
    options: basicOptions,
    filterByValueAndLabel: true,
    placeholder: 'Search by label or value...',
    onValueChange: (values) => console.log('Selected values:', values),
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates filtering by both value and label. Try searching for part of a UUID (e.g., "550e8400") or part of a slug (e.g., "cherry-fruit") to see both value and label matching in action.',
      },
    },
  },
};
