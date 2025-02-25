import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Tag, TagProps } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta;

const TagTemplate: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const DefaultTag = TagTemplate.bind({});
DefaultTag.args = {
  children: 'Tag Content',
  onRemove: undefined,
};

DefaultTag.argTypes = {
  onRemove: {
    control: 'boolean',
    defaultValue: false,
    description: 'Enable or disable the onRemove functionality',
    table: {
      type: { summary: 'function' },
      defaultValue: { summary: 'undefined' },
    },
    mapping: {
      true: () => alert('Tag removed'),
      false: undefined,
    },
  },
};
