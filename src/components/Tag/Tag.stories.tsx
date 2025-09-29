import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { ColorShapeTokens } from '../../tokens';

import type { TagProps } from './Tag';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    accentColor: {
      control: 'select',
      options: ColorShapeTokens,
    },
    colorCode: {
      control: 'select',
      options: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
      ],
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
  },
};

export default meta;

const TagTemplate: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const DefaultTag = TagTemplate.bind({});
DefaultTag.args = {
  children: 'タグ',
  onRemove: undefined,
  accentColor: ColorShapeTokens.AccentBlueSoft,
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

export const WithColorCode = TagTemplate.bind({});
WithColorCode.args = {
  children: 'カラーコード1',
  colorCode: 1,
};

export const ColorCodeShowcase = () => (
  <div className="gap-2 flex flex-wrap">
    {Array.from({ length: 19 }, (_, i) => i).map((colorCode) => (
      <Tag
        key={colorCode}
        // prettier-ignore
        colorCode={colorCode as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18}
      >
        カラー {colorCode}
      </Tag>
    ))}
  </div>
);

export const ConflictingProps = TagTemplate.bind({});
ConflictingProps.args = {
  children: '競合プロパティ (コンソールを確認)',
  colorCode: 5,
  accentColor: ColorShapeTokens.AccentRedSoft,
};
