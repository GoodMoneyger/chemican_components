import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Select } from '../Select/Select';
import { MultiSelect } from '../MultiSelect/MultiSelect';
import { DatePicker } from '../DatePicker/DatePicker';
import { Checkbox, CheckboxGroup } from '../Checkbox/Checkbox';
import { RadioButton, RadioButtonGroup } from '../RadioButton/RadioButton';

import { FormField } from './FormField';

const meta: Meta<typeof FormField> = {
  title: 'Components/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label for the form field',
    },
    name: {
      control: 'text',
      description: 'The name attribute for the form field',
    },
    error: {
      control: 'text',
      description: 'Error message to display below the field',
    },
    description: {
      control: 'text',
      description: 'Description text to display below the field',
    },
    optional: {
      control: 'boolean',
      description: 'Whether to show the optional indicator',
    },
    componentType: {
      control: 'select',
      options: [
        'Input',
        'Textarea',
        'Select',
        'MultiSelect',
        'DatePicker',
        'Checkboxes',
        'RadioButtons',
      ],
      description: 'Type of input component to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const MockInput = ({ hasError = false }: { hasError?: boolean }) => (
  <Input
    placeholder="Placeholder"
    invalid={hasError}
    prefixIcon={undefined}
    trailingIcon={undefined}
    disabled={false}
    onTrailingIconClick={() => {}}
  />
);

const MockTextarea = ({ hasError = false }: { hasError?: boolean }) => (
  <Textarea placeholder="Enter text here..." invalid={hasError} />
);

const MockSelect = ({ hasError = false }: { hasError?: boolean }) => (
  <Select
    placeholder="Select an option"
    invalid={hasError}
    options={[
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ]}
  />
);

const MockMultiSelect = ({ hasError = false }: { hasError?: boolean }) => {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <MultiSelect
      options={[
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
      ]}
      onValueChange={setSelected}
      defaultValue={selected}
      placeholder="Select options"
      invalid={hasError}
    />
  );
};

const MockDatePicker = ({ hasError = false }: { hasError?: boolean }) => (
  <DatePicker placeholder="Select date" error={hasError} />
);

const MockCheckboxes = ({ hasError = false }: { hasError?: boolean }) => (
  <CheckboxGroup>
    <Checkbox label="Option 1" invalid={hasError} />
    <Checkbox label="Option 2" invalid={hasError} />
    <Checkbox label="Option 3" invalid={hasError} />
  </CheckboxGroup>
);

const MockRadioButtons = ({ hasError = false }: { hasError?: boolean }) => (
  <RadioButtonGroup>
    <RadioButton value="option1" label="Option 1" invalid={hasError} />
    <RadioButton value="option2" label="Option 2" invalid={hasError} />
    <RadioButton value="option3" label="Option 3" invalid={hasError} />
  </RadioButtonGroup>
);

const renderComponent = (componentType: string, hasError: boolean = false) => {
  switch (componentType) {
    case 'Textarea':
      return <MockTextarea hasError={hasError} />;
    case 'Select':
      return <MockSelect hasError={hasError} />;
    case 'MultiSelect':
      return <MockMultiSelect hasError={hasError} />;
    case 'DatePicker':
      return <MockDatePicker hasError={hasError} />;
    case 'Checkboxes':
      return <MockCheckboxes hasError={hasError} />;
    case 'RadioButtons':
      return <MockRadioButtons hasError={hasError} />;
    case 'Input':
    default:
      return <MockInput hasError={hasError} />;
  }
};

export const Default: Story = {
  args: {
    label: 'Label',
    name: 'default-field',
    componentType: 'Input',
  },
  render: (args) => (
    <FormField {...args}>
      {renderComponent(args.componentType || 'Input', !!args.error)}
    </FormField>
  ),
};

export const Optional: Story = {
  args: {
    label: 'ラベル',
    name: 'optional-field',
    optional: true,
    componentType: 'Input',
  },
  render: (args) => (
    <FormField {...args}>
      {renderComponent(args.componentType || 'Input', !!args.error)}
    </FormField>
  ),
};

export const WithDescription: Story = {
  args: {
    label: 'ラベル',
    name: 'description-field',
    description: '日中に連絡のつきやすい電話番号を記入します',
    componentType: 'Input',
  },
  render: (args) => (
    <FormField {...args}>
      {renderComponent(args.componentType || 'Input', !!args.error)}
    </FormField>
  ),
};

export const WithError: Story = {
  args: {
    label: 'ラベル',
    name: 'error-field',
    error: '数字で入力してください。',
    componentType: 'Input',
  },
  render: (args) => (
    <FormField {...args}>
      {renderComponent(args.componentType || 'Input', !!args.error)}
    </FormField>
  ),
};

export const WithErrorAndDescription: Story = {
  args: {
    label: 'ラベル',
    name: 'error-description-field',
    optional: true,
    error: '数字で入力してください。',
    description: '日中に連絡のつきやすい電話番号を記入します',
    componentType: 'Input',
  },
  render: (args) => (
    <FormField {...args}>
      {renderComponent(args.componentType || 'Input', !!args.error)}
    </FormField>
  ),
};

export const WithoutLabel: Story = {
  args: {
    name: 'no-label-field',
    error: '数字で入力してください。',
    description: '日中に連絡のつきやすい電話番号を記入します',
    componentType: 'Input',
  },
  render: (args) => (
    <FormField {...args}>
      {renderComponent(args.componentType || 'Input', !!args.error)}
    </FormField>
  ),
};

export const AllTypes: Story = {
  args: {
    label: 'Label',
    optional: false,
    error: '',
    description: '',
  },
  render: (args) => (
    <div className="gap-6 flex w-[400px] flex-col">
      <FormField
        {...args}
        label={args.label ? `${args.label} (Input)` : 'Input'}
        name="input-field"
      >
        {renderComponent('Input', !!args.error)}
      </FormField>
      <FormField
        {...args}
        label={args.label ? `${args.label} (Textarea)` : 'Textarea'}
        name="textarea-field"
      >
        {renderComponent('Textarea', !!args.error)}
      </FormField>
      <FormField
        {...args}
        label={args.label ? `${args.label} (Select)` : 'Select'}
        name="select-field"
      >
        {renderComponent('Select', !!args.error)}
      </FormField>
      <FormField
        {...args}
        label={args.label ? `${args.label} (MultiSelect)` : 'MultiSelect'}
        name="multiselect-field"
      >
        {renderComponent('MultiSelect', !!args.error)}
      </FormField>
      <FormField
        {...args}
        label={args.label ? `${args.label} (DatePicker)` : 'DatePicker'}
        name="datepicker-field"
      >
        {renderComponent('DatePicker', !!args.error)}
      </FormField>
      <FormField
        {...args}
        label={args.label ? `${args.label} (Checkboxes)` : 'Checkboxes'}
        name="checkboxes-field"
      >
        {renderComponent('Checkboxes', !!args.error)}
      </FormField>
      <FormField
        {...args}
        label={args.label ? `${args.label} (RadioButtons)` : 'RadioButtons'}
        name="radiobuttons-field"
      >
        {renderComponent('RadioButtons', !!args.error)}
      </FormField>
    </div>
  ),
};
