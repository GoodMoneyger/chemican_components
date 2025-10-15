import type { Meta, StoryObj } from '@storybook/react';
import { IconMail, IconEye, IconSearch } from '@tabler/icons-react';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    prefixIcon: {
      control: false,
    },
    trailingIcon: {
      control: false,
    },
    onTrailingIconClick: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
  },
};

export const WithDescription: Story = {
  args: {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    description: 'Must be at least 8 characters long',
  },
};

export const WithError: Story = {
  args: {
    name: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
    error: 'Please enter a valid email address',
    defaultValue: 'invalid-email',
  },
};

export const Optional: Story = {
  args: {
    name: 'phone',
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
    type: 'tel',
    optional: true,
  },
};

export const WithPrefixIcon: Story = {
  args: {
    name: 'email',
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email',
    prefixIcon: IconMail,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    name: 'search',
    label: 'Search',
    placeholder: 'Search for something...',
    type: 'text',
    trailingIcon: IconSearch,
  },
};

export const WithInteractiveTrailingIcon: Story = {
  args: {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    type: 'password',
    trailingIcon: IconEye,
    onTrailingIconClick: () => alert('Toggle password visibility'),
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    disabled: true,
    defaultValue: 'Cannot edit this',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <TextField
        name="small"
        label="Small TextField"
        placeholder="Small size"
        size="small"
      />
      <TextField
        name="medium"
        label="Medium TextField"
        placeholder="Medium size (default)"
        size="medium"
      />
      <TextField
        name="large"
        label="Large TextField"
        placeholder="Large size"
        size="large"
      />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6">
      <TextField
        name="normal"
        label="Normal State"
        placeholder="Normal text field"
      />
      <TextField
        name="focused"
        label="With Description"
        placeholder="Text field with description"
        description="This is a helpful description"
      />
      <TextField
        name="error"
        label="Error State"
        placeholder="Text field with error"
        error="This field is required"
        defaultValue="Invalid input"
      />
      <TextField
        name="disabled"
        label="Disabled State"
        placeholder="Disabled field"
        disabled
        defaultValue="Cannot edit"
      />
      <TextField
        name="optional"
        label="Optional Field"
        placeholder="Optional field"
        optional
      />
    </div>
  ),
};
