import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import type {
  LinearProgressProps,
  CircularProgressProps,
} from './ProgressIndicator';
import { ProgressIndicator } from './ProgressIndicator';

const meta: Meta = {
  title: 'Components/ProgressIndicator',
  parameters: {
    radixDocs: {
      primitive: 'Progress',
      url: 'https://www.radix-ui.com/primitives/docs/components/progress',
    },
  },
};

export default meta;

// Linear Progress Stories
const LinearTemplate: StoryFn<LinearProgressProps> = (args) => (
  <div className="w-96">
    <ProgressIndicator.Linear {...args} />
  </div>
);

export const Linear = LinearTemplate.bind({});
Linear.args = {
  value: 50,
  max: 100,
  size: 'sm',
};

export const LinearMedium = LinearTemplate.bind({});
LinearMedium.args = {
  value: 75,
  max: 100,
  size: 'md',
};

export const LinearIndeterminate = LinearTemplate.bind({});
LinearIndeterminate.args = {
  indeterminate: true,
  size: 'sm',
};

// Circular Progress Stories
const CircularTemplate: StoryFn<CircularProgressProps> = (args) => (
  <ProgressIndicator.Circular {...args} />
);

export const Circular = CircularTemplate.bind({});
Circular.args = {
  size: 'md',
  layout: 'row',
  children: 'ラベル',
};

export const CircularSmall = CircularTemplate.bind({});
CircularSmall.args = {
  size: 'sm',
  layout: 'row',
  children: 'Loading...',
};

export const CircularColumn = CircularTemplate.bind({});
CircularColumn.args = {
  size: 'md',
  layout: 'column',
  children: 'ラベル',
};

export const CircularNoLabel = CircularTemplate.bind({});
CircularNoLabel.args = {
  size: 'md',
  layout: 'row',
};
