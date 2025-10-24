import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconUsers, IconStar, IconHeart, IconX } from '@tabler/icons-react';

import { ColorShapeTokens } from '../../tokens';
import { StatusIndicator } from '../StatusIndicator';
import type { StatusIndicatorLevel } from '../StatusIndicator/StatusIndicator';
import { Tag } from '../Tag';

import { MultiSelect } from './MultiSelect';
import type {
  MultiSelectOption,
  MultiSelectGroup,
  RenderOptionContext,
} from './MultiSelect';

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

const optionsWithTags: MultiSelectOption[] = [
  { label: 'タグアルファ', value: 'project-alpha' },
  { label: 'タグベータ', value: 'project-beta' },
  { label: 'タグガンマ', value: 'project-gamma' },
  { label: 'タグデルタ', value: 'project-delta' },
  { label: 'タグイプシロン', value: 'project-epsilon' },
];

const tagColors: ColorShapeTokens[] = [
  ColorShapeTokens.AccentBlueSoft,
  ColorShapeTokens.AccentGreenSoft,
  ColorShapeTokens.AccentPurpleSoft,
  ColorShapeTokens.AccentRedSoft,
  ColorShapeTokens.AccentYellowSoft,
];

export const WithTagsAsItems: Story = {
  args: {
    options: optionsWithTags,
    placeholder: '選択してください',
    renderOption: ({ option, location, onRemove }: RenderOptionContext) => {
      const colorIndex = optionsWithTags.findIndex(
        (opt) => opt.value === option.value
      );
      const tagColor = tagColors[colorIndex % tagColors.length];

      if (location === 'badge') {
        return (
          <Tag accentColor={tagColor} onRemove={onRemove}>
            {option.label}
          </Tag>
        );
      }

      // Render in dropdown with Tag
      return (
        <div className="gap-2 flex items-center">
          <Tag accentColor={tagColor} size="sm">
            {option.label}
          </Tag>
        </div>
      );
    },
    onValueChange: (values) => console.log('Selected values:', values),
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates rendering Tag components inside MultiSelect items. Tags are displayed both in the dropdown list and as selected badges, each with a different accent color for visual distinction.',
      },
      source: {
        code: `import { MultiSelect, Tag, ColorShapeTokens } from '@chemican/components';

const options = [
  { label: 'タグアルファ', value: 'project-alpha' },
  { label: 'タグベータ', value: 'project-beta' },
  { label: 'タグガンマ', value: 'project-gamma' },
  { label: 'タグデルタ', value: 'project-delta' },
  { label: 'タグイプシロン', value: 'project-epsilon' },
];

const tagColors = [
  ColorShapeTokens.AccentBlueSoft,
  ColorShapeTokens.AccentGreenSoft,
  ColorShapeTokens.AccentPurpleSoft,
  ColorShapeTokens.AccentRedSoft,
  ColorShapeTokens.AccentYellowSoft,
];

<MultiSelect
  options={options}
  placeholder="選択してください"
  renderOption={({ option, location, onRemove }) => {
    const colorIndex = options.findIndex((opt) => opt.value === option.value);
    const tagColor = tagColors[colorIndex % tagColors.length];

    if (location === 'badge') {
      return (
        <Tag accentColor={tagColor} onRemove={onRemove}>
          {option.label}
        </Tag>
      );
    }

    // Render in dropdown with Tag
    return (
      <div className="gap-2 flex items-center">
        <Tag accentColor={tagColor} size="sm">
          {option.label}
        </Tag>
      </div>
    );
  }}
  onValueChange={(values) => console.log('Selected values:', values)}
/>`,
      },
    },
  },
};

interface StatusOption extends MultiSelectOption {
  statusLevel: StatusIndicatorLevel;
}

const optionsWithStatus: StatusOption[] = [
  { label: '成功', value: 'status-success', statusLevel: 'success' },
  { label: '進行中', value: 'status-inprogress', statusLevel: 'inProgress' },
  { label: '準備中', value: 'status-queue', statusLevel: 'queue' },
  { label: 'エラー', value: 'status-alert', statusLevel: 'alert' },
  { label: '注意', value: 'status-warning', statusLevel: 'warning' },
  { label: '開始前', value: 'status-neutral', statusLevel: 'neutral' },
];

export const WithStatusAsItems: Story = {
  args: {
    options: optionsWithStatus,
    placeholder: '選択してください',
    renderOption: ({ option, location, onRemove }: RenderOptionContext) => {
      const statusOption = optionsWithStatus.find(
        (opt) => opt.value === option.value
      );
      const statusLevel = statusOption?.statusLevel;

      if (location === 'badge') {
        return (
          <StatusIndicator level={statusLevel} onRemove={onRemove}>
            {option.label}
          </StatusIndicator>
        );
      }

      // Render in dropdown with Status
      return (
        <div className="gap-2 flex items-center">
          <StatusIndicator level={statusLevel} size="sm">
            {option.label}
          </StatusIndicator>
        </div>
      );
    },
    onValueChange: (values) => console.log('Selected values:', values),
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates rendering Status components inside MultiSelect items. Status badges are displayed both in the dropdown list and as selected badges, each with a different status level for visual distinction.',
      },
      source: {
        code: `import { MultiSelect, Status } from '@chemican/components';

const options = [
  { label: '成功', value: 'status-success', statusLevel: 'success' },
  { label: '進行中', value: 'status-inprogress', statusLevel: 'inProgress' },
  { label: '準備中', value: 'status-queue', statusLevel: 'queue' },
  { label: 'エラー', value: 'status-alert', statusLevel: 'alert' },
  { label: '注意', value: 'status-warning', statusLevel: 'warning' },
  { label: '開始前', value: 'status-neutral', statusLevel: 'neutral' },
];

<MultiSelect
  options={options}
  placeholder="選択してください"
  renderOption={({ option, location, onRemove }) => {
    const statusOption = options.find((opt) => opt.value === option.value);
    const statusLevel = statusOption?.statusLevel;

    if (location === 'badge') {
      return (
        <StatusIndicator level={statusLevel} onRemove={onRemove}>
          {option.label}
        </StatusIndicator>
      );
    }

    // Render in dropdown with Status
    return (
      <div className="gap-2 flex items-center">
        <StatusIndicator level={statusLevel} size="sm">
          {option.label}
        </StatusIndicator>
      </div>
    );
  }}
  onValueChange={(values) => console.log('Selected values:', values)}
/>`,
      },
    },
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

export const CustomRenderOption: Story = {
  args: {
    options: optionsWithIcons,
    placeholder: 'Custom render...',
    renderOption: ({
      option,
      location,
      isSelected,
      onRemove,
    }: RenderOptionContext) => {
      if (location === 'badge') {
        return (
          <div
            className="gap-1 px-2 py-1 rounded-md bg-surface-secondary
              border-divider-default inline-flex items-center border"
          >
            {option.icon &&
              React.createElement(option.icon, { className: 'h-3 w-3' })}
            <span className="text-sm font-medium">{option.label}</span>
            {onRemove && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove();
                }}
                className="ml-1 hover:bg-interactive-alert-hover rounded p-0.5"
              >
                <IconX className="h-3 w-3 text-interactive-alert-default" />
              </button>
            )}
          </div>
        );
      }

      // Render in dropdown
      return (
        <div className="gap-2 flex items-center">
          {option.icon &&
            React.createElement(option.icon, {
              className: `h-4 w-4 ${isSelected ? 'text-interactive-primary-default' : 'text-body-secondary'}`,
            })}
          <span
            className={
              isSelected ? 'font-bold text-interactive-primary-default' : ''
            }
          >
            {option.label}
          </span>
          {isSelected && (
            <span className="text-xs text-body-success ml-auto">
              ✓ Selected
            </span>
          )}
        </div>
      );
    },
    onValueChange: (values) => console.log('Selected values:', values),
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates custom rendering of options. The renderOption function allows you to customize how options appear in both the dropdown list and as selected badges. Notice the different styling for selected vs unselected states and the custom remove button.',
      },
    },
  },
};
