import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { Stepper } from './Stepper';
import type { Step } from './Stepper';

const sampleSteps: Step[] = [
  { id: '1', label: 'アップロード', status: 'completed' },
  { id: '2', label: '確認', status: 'active' },
  { id: '3', label: '登録完了', status: 'upcoming' },
];

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  argTypes: {
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
  size: 'sm',
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
  size: 'sm',
  showLabels: true,
};
