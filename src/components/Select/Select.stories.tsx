import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { IconRocket, IconBuilding, IconUser } from '@tabler/icons-react';

import { FormField } from '../FormField';

import type { SelectProps } from './Select';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    options: {
      control: { type: 'object' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact'],
    },
    intent: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    radixDocs: {
      primitive: 'Select',
      url: 'https://www.radix-ui.com/primitives/docs/components/select',
    },
  },
};

export default meta;

const Template: StoryFn<SelectProps> = (args) => <Select {...args} />;

const FormFieldTemplate: StoryFn<SelectProps> = (args) => (
  <FormField
    name="select-field"
    label="ラベル (任意)"
    description="サポートテキストが入ります。"
  >
    <Select {...args} />
  </FormField>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4', icon: IconRocket },
    { type: 'Separator' },
    { value: 'option5', label: 'Option 5' },
  ],
  placeholder: 'Select an option',
  disabled: false,
  invalid: false,
};

export const WithFormField = FormFieldTemplate.bind({});
WithFormField.args = {
  variant: 'default',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4', icon: IconRocket },
    { type: 'Separator' },
    { value: 'option5', label: 'Option 5' },
  ],
  placeholder: 'Select an option',
  disabled: false,
  invalid: false,
};

export const Compact = Template.bind({});
Compact.args = {
  variant: 'compact',
  value: 'chemican',
  icon: IconBuilding,
  options: [
    { value: 'chemican', label: 'Chemican inc.' },
    { value: 'long-company', label: '株式会社化学化学化学化学' },
    { value: 'aaa-company', label: 'AAA企業' },
  ],
  placeholder: 'Select company',
};

export const CompactWithSelection = Template.bind({});
CompactWithSelection.args = {
  variant: 'compact',
  value: 'long-company',
  icon: IconBuilding,
  options: [
    { value: 'long-company', label: '株式会社化学化学化学化学' },
    { value: 'chemican', label: 'Chemican inc.' },
    { value: 'aaa-company', label: 'AAA企業' },
  ],
  placeholder: 'Select company',
};

export const UserSelector = Template.bind({});
UserSelector.args = {
  variant: 'compact',
  intent: 'secondary',
  value: 'matsumoto',
  icon: IconUser,
  options: [
    { value: 'matsumoto', label: '松本 一紀' },
    { value: 'tanaka', label: '田中 太郎' },
    { value: 'yamada', label: '山田 花子' },
    { value: 'sato', label: '佐藤 次郎' },
  ],
  placeholder: 'ユーザーを選択',
};

export const DisabledStates = Template.bind({});
DisabledStates.args = {
  variant: 'default',
  options: [
    { value: 'option1', label: 'Available Option' },
    { value: 'option2', label: 'Disabled Option', disabled: true },
    { value: 'option3', label: 'Another Available Option' },
    {
      value: 'option4',
      label: 'Disabled with Icon',
      icon: IconRocket,
      disabled: true,
    },
    { type: 'Separator' },
    { value: 'option5', label: 'Final Available Option' },
    { value: 'option6', label: 'Final Disabled Option', disabled: true },
  ],
  placeholder: 'Select an option (some disabled)',
  disabled: false,
  invalid: false,
};

export const IsolatedVsFormField: StoryFn = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-semibold mb-4">Isolated Select</h3>
      <p className="text-sm mb-4">
        Just the select element without FormField wrapper
      </p>
      <div className="space-y-3">
        <Select
          variant="default"
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3' },
          ]}
          placeholder="Select an option"
        />
        <Select
          variant="compact"
          value="chemican"
          icon={IconBuilding}
          options={[
            { value: 'chemican', label: 'Chemican inc.' },
            { value: 'long-company', label: '株式会社化学化学化学化学' },
            { value: 'aaa-company', label: 'AAA企業' },
          ]}
          placeholder="Select company"
        />
        <Select
          variant="default"
          options={[
            { value: 'available', label: 'Available Option' },
            { value: 'disabled1', label: 'Disabled Option', disabled: true },
            { value: 'available2', label: 'Another Available' },
          ]}
          placeholder="Select with some disabled options"
        />
        <Select
          variant="default"
          disabled
          options={[
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
          ]}
          placeholder="Entire select disabled"
        />
      </div>
    </div>

    <div>
      <h3 className="text-lg font-semibold mb-4">Select with FormField</h3>
      <p className="text-sm mb-4">
        Complete form field with label, description, and error handling
      </p>
      <div className="space-y-4">
        <FormField
          name="category"
          label="Category"
          description="Choose a category for your item"
        >
          <Select
            variant="default"
            options={[
              { value: 'electronics', label: 'Electronics' },
              { value: 'clothing', label: 'Clothing' },
              { value: 'books', label: 'Books' },
              { value: 'home', label: 'Home & Garden', icon: IconRocket },
            ]}
            placeholder="Select a category"
          />
        </FormField>

        <FormField
          name="company"
          label="会社選択"
          description="所属する会社を選択してください"
        >
          <Select
            variant="compact"
            value="chemican"
            icon={IconBuilding}
            options={[
              { value: 'chemican', label: 'Chemican inc.' },
              { value: 'long-company', label: '株式会社化学化学化学化学' },
              { value: 'aaa-company', label: 'AAA企業' },
            ]}
            placeholder="会社を選択"
          />
        </FormField>
      </div>
    </div>
  </div>
);
