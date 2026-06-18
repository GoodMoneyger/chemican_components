import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import {
  IconUsers,
  IconStar,
  IconHeart,
  IconX,
  IconChevronDown,
} from '@tabler/icons-react';

import { StatusIndicator } from '../StatusIndicator';
import type { StatusLevel } from '../StatusIndicator/StatusIndicator';
import { Tag } from '../Tag';
import type { TagColorCode } from '../Tag/Tag';

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
    loading: {
      control: 'boolean',
      description: 'Whether to show a loading indicator inside the dropdown',
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

const tagColorCodes: TagColorCode[] = [29, 27, 21, 33, 32]; // Lime, Green, Purple, Orange, Yellow

export const WithTagsAsItems: Story = {
  args: {
    options: optionsWithTags,
    placeholder: '選択してください',
    renderOption: ({ option, location, onRemove }: RenderOptionContext) => {
      const colorIndex = optionsWithTags.findIndex(
        (opt) => opt.value === option.value
      );
      const colorCode = tagColorCodes[colorIndex % tagColorCodes.length];

      if (location === 'badge') {
        return (
          <Tag colorCode={colorCode} onRemove={onRemove}>
            {option.label}
          </Tag>
        );
      }

      // Render in dropdown with Tag
      return (
        <div className="gap-2 flex items-center">
          <Tag colorCode={colorCode} size="sm">
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

const tagColorCodes: TagColorCode[] = [29, 27, 21, 33, 32]; // Lime, Green, Purple, Orange, Yellow

<MultiSelect
  options={options}
  placeholder="選択してください"
  renderOption={({ option, location, onRemove }) => {
    const colorIndex = options.findIndex((opt) => opt.value === option.value);
    const colorCode = tagColorCodes[colorIndex % tagColorCodes.length];

    if (location === 'badge') {
      return (
        <Tag colorCode={colorCode} onRemove={onRemove}>
          {option.label}
        </Tag>
      );
    }

    // Render in dropdown with Tag
    return (
      <div className="gap-2 flex items-center">
        <Tag colorCode={colorCode} size="sm">
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
  statusLevel: StatusLevel;
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
      const IconComponent = option.icon as React.ComponentType<{
        className?: string;
      }>;

      if (location === 'badge') {
        return (
          <div
            className="gap-1 px-2 py-1 rounded-md bg-surface-secondary
              border-divider-default inline-flex items-center border"
          >
            {IconComponent && <IconComponent className="h-3 w-3" />}
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
          {IconComponent && (
            <IconComponent
              className={`h-4 w-4
              ${isSelected ? 'text-interactive-primary-default' : 'text-body-secondary'}`}
            />
          )}
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

const WithOnApplySelectionComponent = () => {
  const [appliedValues, setAppliedValues] = React.useState<
    Array<string | number>
  >([]);

  return (
    <div className="gap-4 flex flex-col">
      <MultiSelect
        options={basicOptions}
        placeholder="Select fruits and click Apply..."
        onValueChange={(values) =>
          console.log('Values changed (not applied yet):', values)
        }
        onApplySelection={(values) => {
          console.log('Values applied:', values);
          setAppliedValues(values);
        }}
      />
      <div
        className="p-4 rounded-md bg-surface-secondary border-divider-default
          border"
      >
        <p className="text-sm font-medium text-body-primary mb-2">
          Applied Values:
        </p>
        {appliedValues.length > 0 ? (
          <ul className="text-sm text-body-secondary list-inside list-disc">
            {appliedValues.map((value) => {
              const option = basicOptions.find((opt) => opt.value === value);
              return <li key={value}>{option?.label || value}</li>;
            })}
          </ul>
        ) : (
          <p className="text-sm text-body-secondary italic">
            No values applied yet
          </p>
        )}
      </div>
    </div>
  );
};

export const WithOnApplySelection: Story = {
  render: () => <WithOnApplySelectionComponent />,
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the onApplySelection callback. Unlike onValueChange which fires on every selection, onApplySelection only fires when the user clicks the "Apply" button. This is useful when you want to defer processing until the user confirms their selection.',
      },
      source: {
        code: `import { MultiSelect } from '@chemican/components';
import { useState } from 'react';

const [appliedValues, setAppliedValues] = useState<string[]>([]);

<MultiSelect
  options={options}
  placeholder="Select fruits and click Apply..."
  onValueChange={(values) => console.log('Values changed:', values)}
  onApplySelection={(values) => {
    console.log('Values applied:', values);
    setAppliedValues(values);
  }}
/>`,
      },
    },
  },
};

export const WithCustomTrigger: Story = {
  args: {
    options: basicOptions,
    customTrigger: (
      <button
        className="px-4 py-2 rounded-md bg-interactive-primary-default
          text-interactive-inverse hover:bg-interactive-primary-hover
          focus:ring-interactive-focused focus:ring-4 focus:outline-none"
      >
        <div className="gap-2 flex items-center">
          <IconStar className="h-5 w-5" />
          <span className="font-medium">Custom Trigger Button</span>
        </div>
      </button>
    ),
    onValueChange: (values) => console.log('Selected values:', values),
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates using a customTrigger to completely replace the default trigger button. You can use any React element as the trigger, allowing for complete customization of the component appearance while maintaining the dropdown functionality.',
      },
      source: {
        code: `import { MultiSelect } from '@chemican/components';
import { IconStar } from '@tabler/icons-react';

<MultiSelect
  options={options}
  customTrigger={
    <button className="px-4 py-2 rounded-md bg-interactive-primary-default text-interactive-inverse hover:bg-interactive-primary-hover focus:ring-4 focus:ring-interactive-focused focus:outline-none">
      <div className="flex items-center gap-2">
        <IconStar className="h-5 w-5" />
        <span className="font-medium">Custom Trigger Button</span>
      </div>
    </button>
  }
  onValueChange={(values) => console.log('Selected values:', values)}
/>`,
      },
    },
  },
};

export const WithHideSelection: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select fruits (badges hidden)...',
    hideSelection: true,
    defaultValue: [
      '550e8400-e29b-41d4-a716-446655440001',
      '550e8400-e29b-41d4-a716-446655440002',
      'cherry-fruit',
    ],
    onValueChange: (values) => console.log('Selected values:', values),
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the hideSelection prop which hides the selected option badges below the trigger button. This is useful when you want to show selections only in the dropdown or when you need a more compact layout.',
      },
      source: {
        code: `import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits (badges hidden)..."
  hideSelection={true}
  defaultValue={['apple', 'banana', 'cherry']}
  onValueChange={(values) => console.log('Selected values:', values)}
/>`,
      },
    },
  },
};

const CustomTriggerWithHideSelectionComponent = () => {
  const [selectedValues, setSelectedValues] = React.useState<
    Array<string | number>
  >([
    '550e8400-e29b-41d4-a716-446655440001',
    '550e8400-e29b-41d4-a716-446655440002',
  ]);

  const selectedLabels = selectedValues
    .map((value) => basicOptions.find((opt) => opt.value === value)?.label)
    .filter(Boolean);

  return (
    <div className="gap-4 flex flex-col">
      <MultiSelect
        options={basicOptions}
        hideSelection={true}
        customTrigger={
          <button
            className="px-4 py-3 rounded-md bg-surface-primary
              border-interactive-default hover:bg-surface-secondary
              focus:ring-interactive-focused border focus:ring-4
              focus:outline-none"
          >
            <div
              className="gap-4 flex min-w-[300px] items-center justify-between"
            >
              <div className="gap-2 flex items-center">
                <IconUsers className="h-5 w-5 text-body-secondary" />
                <span className="font-medium text-body-primary">
                  {selectedValues.length > 0
                    ? `${selectedValues.length} selected`
                    : 'Select options'}
                </span>
              </div>
              <IconChevronDown className="h-4 w-4 text-body-secondary" />
            </div>
          </button>
        }
        onValueChange={(values) => setSelectedValues(values)}
      />
      <div
        className="p-4 rounded-md bg-surface-secondary border-divider-default
          border"
      >
        <p className="text-sm font-medium text-body-primary mb-2">
          Selected Items ({selectedValues.length}):
        </p>
        {selectedLabels.length > 0 ? (
          <div className="gap-2 flex flex-wrap">
            {selectedLabels.map((label, index) => (
              <span
                key={index}
                className="px-2 py-1 rounded-md bg-surface-primary text-sm
                  text-body-primary border-divider-default border"
              >
                {label}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-sm text-body-secondary italic">
            No items selected
          </p>
        )}
      </div>
    </div>
  );
};

export const CustomTriggerWithHideSelection: Story = {
  render: () => <CustomTriggerWithHideSelectionComponent />,
  parameters: {
    docs: {
      description: {
        story:
          'This story combines customTrigger and hideSelection to create a fully custom selection experience. The trigger button shows a count of selected items, and the selected items are displayed in a custom area below instead of as badges.',
      },
      source: {
        code: `import { MultiSelect } from '@chemican/components';
import { useState } from 'react';
import { IconUsers, IconChevronDown } from '@tabler/icons-react';

const [selectedValues, setSelectedValues] = useState<string[]>(['apple', 'banana']);

const selectedLabels = selectedValues
  .map((value) => options.find((opt) => opt.value === value)?.label)
  .filter(Boolean);

<>
  <MultiSelect
    options={options}
    hideSelection={true}
    customTrigger={
      <button className="px-4 py-3 rounded-md bg-surface-primary border-interactive-default border hover:bg-surface-secondary focus:ring-4 focus:ring-interactive-focused focus:outline-none">
        <div className="flex items-center justify-between gap-4 min-w-[300px]">
          <div className="flex items-center gap-2">
            <IconUsers className="h-5 w-5 text-body-secondary" />
            <span className="font-medium text-body-primary">
              {selectedValues.length > 0
                ? \`\${selectedValues.length} selected\`
                : 'Select options'}
            </span>
          </div>
          <IconChevronDown className="h-4 w-4 text-body-secondary" />
        </div>
      </button>
    }
    onValueChange={(values) => setSelectedValues(values)}
  />

  <div className="p-4 rounded-md bg-surface-secondary">
    <p className="text-sm font-medium mb-2">
      Selected Items ({selectedValues.length}):
    </p>
    {selectedLabels.map((label, index) => (
      <span key={index} className="px-2 py-1 rounded-md bg-surface-primary text-sm">
        {label}
      </span>
    ))}
  </div>
</>`,
      },
    },
  },
};

export const InlineSelectionDisplay: Story = {
  args: {
    options: basicOptions,
    placeholder: 'Select fruits...',
    selectionDisplayMode: 'inline',
    defaultValue: [
      '550e8400-e29b-41d4-a716-446655440001',
      '550e8400-e29b-41d4-a716-446655440002',
    ],
    onValueChange: (values) => console.log('Selected values:', values),
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story demonstrates the inline selection display mode. When selectionDisplayMode is set to "inline", selected values are displayed as comma-separated text within the trigger button instead of as badge elements below it. This provides a more compact layout that is suitable for space-constrained interfaces.',
      },
      source: {
        code: `import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits..."
  selectionDisplayMode="inline"
  defaultValue={['apple', 'banana']}
  onValueChange={(values) => console.log('Selected values:', values)}
/>`,
      },
    },
  },
};

const InlineSelectionComparisonComponent = () => {
  return (
    <div className="gap-6 flex flex-col">
      <div className="gap-2 flex flex-col">
        <h3 className="font-semibold text-body-primary">
          Default Mode (Badges Below)
        </h3>
        <MultiSelect
          options={basicOptions}
          placeholder="Select fruits..."
          selectionDisplayMode="default"
          defaultValue={[
            '550e8400-e29b-41d4-a716-446655440001',
            '550e8400-e29b-41d4-a716-446655440002',
            'cherry-fruit',
          ]}
        />
      </div>

      <div className="gap-2 flex flex-col">
        <h3 className="font-semibold text-body-primary">
          Inline Mode (Inside Trigger)
        </h3>
        <MultiSelect
          options={basicOptions}
          placeholder="Select fruits..."
          selectionDisplayMode="inline"
          defaultValue={[
            '550e8400-e29b-41d4-a716-446655440001',
            '550e8400-e29b-41d4-a716-446655440002',
            'cherry-fruit',
          ]}
        />
      </div>
    </div>
  );
};

export const InlineSelectionComparison: Story = {
  render: () => <InlineSelectionComparisonComponent />,
  parameters: {
    docs: {
      description: {
        story:
          'This story compares the two selection display modes side by side. The default mode shows selected items as removable badges below the trigger button, while the inline mode displays them as comma-separated text within the trigger button itself. Use inline mode when you need a more compact layout or when badge removal functionality is not needed in the trigger area.',
      },
      source: {
        code: `import { MultiSelect } from '@chemican/components';

// Default mode - badges below trigger
<MultiSelect
  options={options}
  placeholder="Select fruits..."
  selectionDisplayMode="default"
  defaultValue={['apple', 'banana', 'cherry']}
/>

// Inline mode - text inside trigger
<MultiSelect
  options={options}
  placeholder="Select fruits..."
  selectionDisplayMode="inline"
  defaultValue={['apple', 'banana', 'cherry']}
/>`,
      },
    },
  },
};

const manyOptions: MultiSelectOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
  { label: 'Date', value: 'date' },
  { label: 'Elderberry', value: 'elderberry' },
  { label: 'Fig', value: 'fig' },
  { label: 'Grape', value: 'grape' },
  { label: 'Honeydew', value: 'honeydew' },
  { label: 'Kiwi', value: 'kiwi' },
  { label: 'Lemon', value: 'lemon' },
  { label: 'Mango', value: 'mango' },
  { label: 'Nectarine', value: 'nectarine' },
  { label: 'Orange', value: 'orange' },
  { label: 'Papaya', value: 'papaya' },
  { label: 'Quince', value: 'quince' },
  { label: 'Raspberry', value: 'raspberry' },
  { label: 'Strawberry', value: 'strawberry' },
  { label: 'Tangerine', value: 'tangerine' },
  { label: 'Watermelon', value: 'watermelon' },
  { label: 'Yuzu', value: 'yuzu' },
];

export const MaxDisplayedOptions: Story = {
  args: {
    options: manyOptions,
    placeholder: 'Select fruits...',
    maxDisplayedOptions: 5,
    moreOptionsLabel: (count: number) => `Search to see ${count} more...`,
  },
  parameters: {
    docs: {
      description: {
        story:
          'When `maxDisplayedOptions` is set, only the first N options are shown by default. A hint indicates how many more are available. Selected items always remain visible. Typing in the search input reveals all matching options.',
      },
      source: {
        code: `import { MultiSelect } from '@chemican/components';

<MultiSelect
  options={options}
  placeholder="Select fruits..."
  maxDisplayedOptions={5}
/>`,
      },
    },
  },
};

// Full dataset that lives "on the server" for the server-side search example.
const serverDataset: MultiSelectOption[] = Array.from(
  { length: 60 },
  (_, i) => ({
    label: `SDS Document ${i + 1}`,
    value: `sds-${i + 1}`,
  })
);

const WithServerSideSearchComponent = () => {
  // Only the first page of results is loaded initially.
  const [options, setOptions] = React.useState<MultiSelectOption[]>(
    serverDataset.slice(0, 10)
  );
  const [loading, setLoading] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  // Simulate a server query: filter the full dataset after a short delay.
  // Because onSearchValueChange is provided, the component skips its own
  // client-side filtering and renders exactly what we pass back in `options`.
  const handleSearchValueChange = (search: string) => {
    setLoading(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const filtered = serverDataset.filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
      );
      setOptions(filtered.slice(0, 10));
      setLoading(false);
    }, 800);
  };

  return (
    <MultiSelect
      options={options}
      loading={loading}
      onSearchValueChange={handleSearchValueChange}
      hideSelectAll
      placeholder="Select SDS..."
      searchPlaceholder="サーバー検索..."
      emptyIndicator="該当する項目がありません"
    />
  );
};

export const WithServerSideSearch: Story = {
  render: () => <WithServerSideSearchComponent />,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates server-side search. `onSearchValueChange` fires as the user types so the parent can fetch matching options, and `loading` shows a spinner inside the dropdown while the request is in flight. When `onSearchValueChange` is provided the built-in client-side filtering is disabled, so the parent fully controls `options`.',
      },
      source: {
        code: `import { MultiSelect } from '@chemican/components';
import { useRef, useState } from 'react';

const [options, setOptions] = useState(initialOptions);
const [loading, setLoading] = useState(false);
const timerRef = useRef<ReturnType<typeof setTimeout>>();

const handleSearchValueChange = (search: string) => {
  setLoading(true);
  if (timerRef.current) clearTimeout(timerRef.current);
  timerRef.current = setTimeout(async () => {
    const results = await fetchSdsFromServer(search); // your API call
    setOptions(results);
    setLoading(false);
  }, 300);
};

<MultiSelect
  options={options}
  loading={loading}
  onSearchValueChange={handleSearchValueChange}
  hideSelectAll
  placeholder="Select SDS..."
/>`,
      },
    },
  },
};

const WithServerSideSearchAndMaxDisplayedComponent = () => {
  // Initial page intentionally larger than maxDisplayedOptions so the
  // truncation hint is visible before the user starts searching.
  const [options, setOptions] =
    React.useState<MultiSelectOption[]>(serverDataset);
  const [loading, setLoading] = React.useState(false);
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const handleSearchValueChange = (search: string) => {
    setLoading(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      const filtered = serverDataset.filter((option) =>
        option.label.toLowerCase().includes(search.toLowerCase())
      );
      setOptions(filtered);
      setLoading(false);
    }, 800);
  };

  return (
    <MultiSelect
      options={options}
      loading={loading}
      onSearchValueChange={handleSearchValueChange}
      maxDisplayedOptions={5}
      moreOptionsLabel={(count) => `検索して他${count}件を表示`}
      hideSelectAll
      placeholder="Select SDS..."
      searchPlaceholder="サーバー検索..."
      emptyIndicator="該当する項目がありません"
    />
  );
};

export const WithServerSideSearchAndMaxDisplayed: Story = {
  render: () => <WithServerSideSearchAndMaxDisplayedComponent />,
  parameters: {
    docs: {
      description: {
        story:
          'Combines `maxDisplayedOptions` with server-side search. Before searching, only the first N server-returned options are shown with a "type to see more" hint. As soon as the user types, `onSearchValueChange` fetches matching options (with `loading` shown meanwhile) and the truncation is lifted so every returned match is visible.',
      },
      source: {
        code: `import { MultiSelect } from '@chemican/components';
import { useRef, useState } from 'react';

const [options, setOptions] = useState(initialOptions);
const [loading, setLoading] = useState(false);
const timerRef = useRef<ReturnType<typeof setTimeout>>();

const handleSearchValueChange = (search: string) => {
  setLoading(true);
  if (timerRef.current) clearTimeout(timerRef.current);
  timerRef.current = setTimeout(async () => {
    setOptions(await fetchSdsFromServer(search));
    setLoading(false);
  }, 300);
};

<MultiSelect
  options={options}
  loading={loading}
  onSearchValueChange={handleSearchValueChange}
  maxDisplayedOptions={5}
  hideSelectAll
  placeholder="Select SDS..."
/>`,
      },
    },
  },
};
