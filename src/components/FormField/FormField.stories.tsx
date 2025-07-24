import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../Input/Input';

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

export const Default: Story = {
  args: {
    label: 'Label',
    name: 'default-field',
    children: <MockInput />,
  },
};

export const Optional: Story = {
  args: {
    label: 'ラベル',
    name: 'optional-field',
    optional: true,
    children: <MockInput />,
  },
};

export const WithDescription: Story = {
  args: {
    label: 'ラベル',
    name: 'description-field',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput />,
  },
};

export const WithError: Story = {
  args: {
    label: 'ラベル',
    name: 'error-field',
    error: '数字で入力してください。',
    children: <MockInput hasError />,
  },
};

export const WithErrorAndDescription: Story = {
  args: {
    label: 'ラベル',
    name: 'error-description-field',
    optional: true,
    error: '数字で入力してください。',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput hasError />,
  },
};

export const WithoutLabel: Story = {
  args: {
    name: 'no-label-field',
    error: '数字で入力してください。',
    description: '日中に連絡のつきやすい電話番号を記入します',
    children: <MockInput hasError />,
  },
};
