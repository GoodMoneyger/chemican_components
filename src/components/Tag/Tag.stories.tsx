import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { ColorShapeTokens } from '../../tokens';

import type { TagProps } from './Tag';
import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
} as Meta;

const TagTemplate: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const DefaultTag = TagTemplate.bind({});
DefaultTag.args = {
  children: 'タグ',
  onRemove: undefined,
  accentColor: ColorShapeTokens.AccentBlueSoft,
};

DefaultTag.argTypes = {
  accentColor: {
    control: 'select',
    options: ColorShapeTokens,
  },
  size: {
    control: 'select',
    options: ['sm', 'md'],
  },
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

export const MediumSize = TagTemplate.bind({});
MediumSize.args = {
  children: 'メディアムサイズのタグ',
  size: 'md',
  accentColor: ColorShapeTokens.AccentGreenSoft,
};

export const WithRemoveButton = TagTemplate.bind({});
WithRemoveButton.args = {
  children: '削除可能なタグ',
  size: 'sm',
  accentColor: ColorShapeTokens.AccentRedSoft,
  onRemove: () => alert('Tag removed!'),
};
