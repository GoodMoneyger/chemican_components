import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';
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

const Template: StoryFn<SelectProps> = (args) => (
  <FormField
    name="select-field"
    label="ラベル (任意)"
    description="サポートテキストが入ります。"
  >
    <Select {...args} />
  </FormField>
);

const CompactTemplate: StoryFn<SelectProps> = (args) => <Select {...args} />;

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

export const Compact = CompactTemplate.bind({});
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

export const CompactWithSelection = CompactTemplate.bind({});
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

export const UserSelector = CompactTemplate.bind({});
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
