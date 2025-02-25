import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Chip, ChipProps } from './Chip';

export default {
  title: 'Components/Chip',
  component: Chip,
} as Meta;

const ChipTemplate: StoryFn<ChipProps> = (args) => <Chip {...args} />;

export const DefaultChip = ChipTemplate.bind({});
DefaultChip.args = {
  children: 'Chip Content',
};
