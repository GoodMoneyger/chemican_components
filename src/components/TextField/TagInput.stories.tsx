import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconTag } from '@tabler/icons-react';

import { TextField } from './index';

const meta: Meta<typeof TextField.TagInput> = {
  title: 'Components/TextField/TagInput',
  component: TextField.TagInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField.TagInput>;

function BasicExample() {
  const [tags, setTags] = useState<string[]>([]);
  return (
    <div className="w-96">
      <TextField.TagInput
        value={tags}
        onChange={setTags}
        placeholder="Add tags (press Enter or comma)..."
        helperText="Add multiple elements using Enter/Comma key"
      />
      <div className="text-body-secondary mt-sm text-sm">
        Tags: {tags.length > 0 ? tags.join(', ') : 'None'}
      </div>
    </div>
  );
}

export const Basic: Story = {
  render: () => <BasicExample />,
};

function WithMaxTagsExample() {
  const [tags, setTags] = useState<string[]>(['existing', 'tags']);
  return (
    <div className="w-96">
      <TextField.TagInput
        value={tags}
        onChange={setTags}
        maxTags={5}
        allowDuplicates={false}
        placeholder="Add up to 5 unique tags..."
      />
      <div className="text-body-secondary mt-sm text-sm">
        {tags.length}/{5} tags | Duplicates not allowed
      </div>
    </div>
  );
}

export const WithMaxTags: Story = {
  render: () => <WithMaxTagsExample />,
};

function WithIconExample() {
  const [tags, setTags] = useState<string[]>(['design', 'development']);
  return (
    <div className="w-96">
      <TextField.TagInput
        value={tags}
        onChange={setTags}
        prefixIcon={IconTag}
        placeholder="Add tags..."
      />
    </div>
  );
}

export const WithIcon: Story = {
  render: () => <WithIconExample />,
};
