import type { Meta, StoryObj } from '@storybook/react';

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
  <input
    type="text"
    className={`bg-surface-primary text-body-primary focus:ring-input-focused
      h-12 w-full rounded border px-4 py-3 text-sm outline-none focus:ring-2 ${
        hasError ? 'border-input-alert' : 'border-input-default'
      }`}
    placeholder="Enter value"
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
