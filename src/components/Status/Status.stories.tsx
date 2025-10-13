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
  level: 'success',
  size: 'md',
  indicator: undefined,
};

DefaultStatus.argTypes = {
  level: {
    control: 'select',
    options: ['success', 'inProgress', 'queue', 'alert', 'warning', 'neutral'],
  },
  customColor: {
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
  level: 'alert',
  onRemove: () => alert('Status removed!'),
  size: 'md',
  indicator: undefined,
};

WithCloseButton.argTypes = {
  level: {
    control: 'select',
    options: ['success', 'inProgress', 'queue', 'alert', 'warning', 'neutral'],
  },
  customColor: {
    control: 'select',
    options: { ...ColorShapeTokens, ...ColorBackgroundTokens },
  },
};

export const WithCustomColor = StatusTemplate.bind({});
WithCustomColor.args = {
  children: 'カスタムカラー',
  level: 'success',
  customColor: ColorShapeTokens.StatusInfo,
  size: 'md',
  indicator: undefined,
};

WithCustomColor.argTypes = {
  level: {
    control: 'select',
    options: ['success', 'inProgress', 'queue', 'alert', 'warning', 'neutral'],
  },
  customColor: {
    control: 'select',
    options: { ...ColorShapeTokens, ...ColorBackgroundTokens },
  },
};
