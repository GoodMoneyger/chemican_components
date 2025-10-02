import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { Stepper } from './Stepper';
import type { Step } from './Stepper';

const sampleSteps: Step[] = [
  { id: '1', label: 'アップロード', status: 'completed' },
  { id: '2', label: '確認', status: 'active' },
  { id: '3', label: '登録完了', status: 'upcoming' },
];

const radialSteps: Step[] = [
  {
    id: '1',
    label: 'ステップ',
    status: 'completed',
    title: 'アップロード',
    description:
      '説明文がはいります。説明文がはいります。説明文がはいります。説明文がはいります。',
  },
  {
    id: '2',
    label: 'ステップ',
    status: 'completed',
    title: 'データ確認',
    description:
      '説明文がはいります。説明文がはいります。説明文がはいります。説明文がはいります。',
  },
  {
    id: '3',
    label: 'ステップ',
    status: 'active',
    title: 'ステップ名が入ります',
    description:
      '説明文がはいります。説明文がはいります。説明文がはいります。説明文がはいります。',
  },
  {
    id: '4',
    label: 'ステップ',
    status: 'upcoming',
    title: '登録完了',
    description:
      '説明文がはいります。説明文がはいります。説明文がはいります。説明文がはいります。',
  },
];

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['linear', 'radial'],
      description:
        'Stepper variant - linear for horizontal steps, radial for circular progress with linear steps below',
    },
    showLabels: {
      control: { type: 'boolean' },
    },
    currentStep: {
      control: { type: 'number' },
      description:
        'Current step index (0-based). When provided, step statuses are auto-determined.',
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=11587-17345&m=dev',
      examples: [Stepper],
    },
  },
};

export default meta;

const Template: StoryFn<typeof Stepper> = (args) => {
  return <Stepper {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  steps: sampleSteps,
  showLabels: true,
};

export const ManySteps = Template.bind({});
ManySteps.args = {
  steps: [
    { id: '1', label: 'ステップ1', status: 'completed' },
    { id: '2', label: 'ステップ2', status: 'completed' },
    { id: '3', label: 'ステップ3', status: 'active' },
    { id: '4', label: 'ステップ4', status: 'upcoming' },
    { id: '5', label: 'ステップ5', status: 'upcoming' },
    { id: '6', label: '完了', status: 'upcoming' },
  ],
  showLabels: true,
};

export const RadialProgress = Template.bind({});
RadialProgress.args = {
  steps: radialSteps,
  variant: 'radial',
  currentStep: 2, // 0-based, so this makes step 3 active (shows 3/4)
  showLabels: true,
};

export const RadialProgressComplete = Template.bind({});
RadialProgressComplete.args = {
  steps: radialSteps.map((step, index) => ({
    ...step,
    status: index < 3 ? 'completed' : index === 3 ? 'active' : 'upcoming',
  })),
  variant: 'radial',
  currentStep: 3, // Shows 4/4 - final step
  showLabels: true,
};
