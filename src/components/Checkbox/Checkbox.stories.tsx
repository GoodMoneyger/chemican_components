import React, { useState } from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { Checkbox, CheckboxGroup } from './Checkbox';

const meta: Meta<typeof CheckboxGroup> = {
  title: 'Components/Checkbox',
  component: CheckboxGroup,
  parameters: {
    radixDocs: {
      primitive: 'Checkbox',
      url: 'https://www.radix-ui.com/primitives/docs/components/checkbox',
    },
  },
};

export default meta;

const Template: StoryFn<typeof CheckboxGroup> = (args) => (
  <CheckboxGroup>
    <Checkbox {...args} label="Checkbox 1" />
    <Checkbox {...args} label="Checkbox 2" />
    <Checkbox {...args} label="Checkbox 3" />
  </CheckboxGroup>
);

const IndeterminateTemplate: StoryFn<typeof CheckboxGroup> = () => (
  <CheckboxGroup>
    <Checkbox label="Unchecked" />
    <Checkbox label="Checked" checked />
    <Checkbox label="Indeterminate" indeterminate />
    <Checkbox label="Disabled Unchecked" disabled />
    <Checkbox label="Disabled Checked" disabled checked />
    <Checkbox label="Disabled Indeterminate" disabled indeterminate />
  </CheckboxGroup>
);

export const Default = Template.bind({});
Default.args = {
  invalid: false,
  disabled: false,
};

export const States = IndeterminateTemplate.bind({});

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  invalid: false,
  disabled: true,
};

const SelectAllTemplate: StoryFn<typeof CheckboxGroup> = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const allItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const handleSelectAll = (checked: boolean | 'indeterminate') => {
    if (checked === true) {
      setSelectedItems(allItems);
    } else {
      setSelectedItems([]);
    }
  };

  const handleItemChange = (
    item: string,
    checked: boolean | 'indeterminate'
  ) => {
    if (checked === true) {
      setSelectedItems((prev) => [...prev, item]);
    } else {
      setSelectedItems((prev) => prev.filter((i) => i !== item));
    }
  };

  const isAllSelected = selectedItems.length === allItems.length;
  const isNoneSelected = selectedItems.length === 0;
  const isIndeterminate = !isAllSelected && !isNoneSelected;

  return (
    <CheckboxGroup>
      <Checkbox
        label="Select All"
        checked={isAllSelected}
        indeterminate={isIndeterminate}
        onCheckedChange={handleSelectAll}
      />
      <div
        style={{
          marginLeft: '24px',
          borderLeft: '1px solid #e2e8f0',
          paddingLeft: '16px',
        }}
      >
        {allItems.map((item) => (
          <Checkbox
            key={item}
            label={item}
            checked={selectedItems.includes(item)}
            onCheckedChange={(checked) => handleItemChange(item, checked)}
          />
        ))}
      </div>
      <div style={{ marginTop: '16px', fontSize: '14px', color: '#6b7280' }}>
        Selected: {selectedItems.length} of {allItems.length} items
      </div>
    </CheckboxGroup>
  );
};

export const SelectAll = SelectAllTemplate.bind({});
