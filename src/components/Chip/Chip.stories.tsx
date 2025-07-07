import React from 'react';
import { Meta, StoryFn } from 'storybook/react-vite';

import { ColorShapeTokens, ColorBackgroundTokens } from '../../tokens';

import { Chip, ChipProps } from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
} as Meta;

const ChipTemplate: StoryFn<ChipProps> = (args) => <Chip {...args} />;

export const DefaultChip = ChipTemplate.bind({});
DefaultChip.args = {
  children: 'チップの内容',
  accentColor: ColorShapeTokens.AccentBlueSoft,
};

DefaultChip.argTypes = {
  accentColor: {
    control: 'select',
    options: { ...ColorShapeTokens, ...ColorBackgroundTokens },
  },
};
