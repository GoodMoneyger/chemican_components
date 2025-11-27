import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import type { TagProps } from './Tag';
import { colorCodeToTokenMap, Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    colorCode: {
      control: 'select',
      options: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 34, 35, 36,
      ],
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
    },
    selected: {
      control: 'boolean',
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
  },
};

export default meta;

const TagTemplate: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const DefaultTag = TagTemplate.bind({});
DefaultTag.args = {
  children: 'タグ',
  onRemove: undefined,
  colorCode: 1,
};

export const MediumSize = TagTemplate.bind({});
MediumSize.args = {
  children: 'メディアムサイズのタグ',
  size: 'md',
  colorCode: 8,
};

export const WithRemoveButton = TagTemplate.bind({});
WithRemoveButton.args = {
  children: '削除可能なタグ',
  size: 'sm',
  colorCode: 2,
  onRemove: () => alert('Tag removed!'),
};

export const SelectedTag = TagTemplate.bind({});
SelectedTag.args = {
  children: '選択されたタグ',
  selected: true,
  colorCode: 1,
};

export const WithCustomColors = TagTemplate.bind({});
WithCustomColors.args = {
  children: 'カスタムカラー',
  className: 'bg-surface-alert text-body-primary',
};

export const ColorCodeShowcase: StoryFn<{ selected?: boolean }> = ({
  selected = false,
}) => {
  // Get unique color codes and sort them
  const uniqueColorCodes = Array.from(
    new Set(colorCodeToTokenMap.map((c) => c.code))
  ).sort((a, b) => a - b);

  return (
    <div className="gap-2 flex flex-wrap">
      {uniqueColorCodes.map((colorCode) => (
        <Tag key={colorCode} colorCode={colorCode} selected={selected}>
          カラー {colorCode}
        </Tag>
      ))}
    </div>
  );
};

ColorCodeShowcase.args = {
  selected: false,
};

ColorCodeShowcase.argTypes = {
  selected: {
    control: 'boolean',
  },
};
