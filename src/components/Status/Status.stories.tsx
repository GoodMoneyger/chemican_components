import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { ColorShapeTokens, ColorBackgroundTokens } from '../../tokens';

import type { StatusProps } from './Status';
import { Status } from './Status';

export default {
  title: 'Components/Status',
  component: Status,
} as Meta;

const StatusTemplate: StoryFn<StatusProps> = (args) => <Status {...args} />;

export const DefaultStatus = StatusTemplate.bind({});
DefaultStatus.args = {
  children: 'チップの内容',
  accentColor: ColorShapeTokens.StatusInfo,
  size: 'md',
  indicator: undefined,
};

DefaultStatus.argTypes = {
  accentColor: {
    control: 'select',
    options: { ...ColorShapeTokens, ...ColorBackgroundTokens },
  },
  size: {
    control: 'select',
    options: ['sm', 'md'],
  },
};

export const WithCloseButton = StatusTemplate.bind({});
WithCloseButton.args = {
  children: 'ステータスの内容',
  accentColor: ColorShapeTokens.StatusAlert,
  onRemove: () => alert('Status removed!'),
  size: 'md',
  indicator: undefined,
};

WithCloseButton.argTypes = {
  accentColor: {
    control: 'select',
    options: { ...ColorShapeTokens, ...ColorBackgroundTokens },
  },
};
