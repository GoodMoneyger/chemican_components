import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';
import { IconTag, IconStar, IconHeart } from '@tabler/icons-react';

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
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
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

export const WithIcon = TagTemplate.bind({});
WithIcon.args = {
  children: 'タグ',
  colorCode: 8,
  icon: IconTag,
};

export const SecondaryVariant = TagTemplate.bind({});
SecondaryVariant.args = {
  children: 'セカンダリ',
  colorCode: 17,
  variant: 'secondary',
};

export const SecondaryWithIcon = TagTemplate.bind({});
SecondaryWithIcon.args = {
  children: 'アイコン付き',
  colorCode: 8,
  variant: 'secondary',
  icon: IconStar,
};

export const ColorCodeShowcase: StoryFn<{
  selected?: boolean;
  variant?: 'primary' | 'secondary';
}> = ({ selected = false, variant = 'primary' }) => {
  // Get unique color codes and sort them
  const uniqueColorCodes = Array.from(
    new Set(colorCodeToTokenMap.map((c) => c.code))
  ).sort((a, b) => a - b);

  return (
    <div className="gap-2 flex flex-wrap">
      {uniqueColorCodes.map((colorCode) => (
        <Tag
          key={colorCode}
          colorCode={colorCode}
          selected={selected}
          variant={variant}
        >
          カラー {colorCode}
        </Tag>
      ))}
    </div>
  );
};

ColorCodeShowcase.args = {
  selected: false,
  variant: 'primary',
};

ColorCodeShowcase.argTypes = {
  selected: {
    control: 'boolean',
  },
  variant: {
    control: 'select',
    options: ['primary', 'secondary'],
  },
};

export const VariantComparison: StoryFn = () => {
  const sampleColorCodes = [1, 8, 17, 25, 33];

  return (
    <div className="gap-md flex flex-col">
      <div>
        <h3 className="text-body-primary mb-xs text-sm font-medium">
          Primary Variant (accent background)
        </h3>
        <div className="gap-2 flex flex-wrap">
          {sampleColorCodes.map((colorCode) => (
            <Tag key={colorCode} colorCode={colorCode} variant="primary">
              カラー {colorCode}
            </Tag>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-body-primary mb-xs text-sm font-medium">
          Secondary Variant (neutral background)
        </h3>
        <div className="gap-2 flex flex-wrap">
          {sampleColorCodes.map((colorCode) => (
            <Tag key={colorCode} colorCode={colorCode} variant="secondary">
              カラー {colorCode}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export const WithIconShowcase: StoryFn = () => {
  return (
    <div className="gap-md flex flex-col">
      <div>
        <h3 className="text-body-primary mb-xs text-sm font-medium">
          Primary with Icons
        </h3>
        <div className="gap-2 flex flex-wrap">
          <Tag colorCode={8} icon={IconTag}>
            タグ
          </Tag>
          <Tag colorCode={19} icon={IconStar}>
            お気に入り
          </Tag>
          <Tag colorCode={2} icon={IconHeart}>
            いいね
          </Tag>
        </div>
      </div>
      <div>
        <h3 className="text-body-primary mb-xs text-sm font-medium">
          Secondary with Icons
        </h3>
        <div className="gap-2 flex flex-wrap">
          <Tag colorCode={8} variant="secondary" icon={IconTag}>
            タグ
          </Tag>
          <Tag colorCode={19} variant="secondary" icon={IconStar}>
            お気に入り
          </Tag>
          <Tag colorCode={2} variant="secondary" icon={IconHeart}>
            いいね
          </Tag>
        </div>
      </div>
    </div>
  );
};
