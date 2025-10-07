import type { Meta, StoryObj } from '@storybook/react';
import { IconInfoCircle } from '@tabler/icons-react';

import { Tooltip, TooltipProvider } from './Tooltip';
import { Button } from '../Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    intent: {
      control: 'select',
      options: ['normal', 'accent'],
      description: 'Visual style variant',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position relative to trigger element',
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Alignment along the side',
    },
    sideOffset: {
      control: 'number',
      description: 'Distance from the trigger element',
    },
    alignOffset: {
      control: 'number',
      description: 'Offset along the alignment axis',
    },
    delayDuration: {
      control: 'number',
      description: 'Delay before showing tooltip (ms)',
    },
    content: {
      control: 'text',
      description: 'Tooltip content',
    },
  },
  decorators: [
    (Story) => (
      <TooltipProvider>
        <div className="p-20">
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
    intent: 'normal',
    side: 'top',
    className: '!w-[670px] !max-w-none',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button intent="secondary">Hover me</Button>
    </Tooltip>
  ),
};

export const BothVariants: Story = {
  render: () => (
    <div className="gap-8 flex flex-col items-start">
      <div className="gap-4 flex items-center">
        <span className="text-body-primary font-medium min-w-20">Normal</span>
        <span className="text-body-secondary text-sm">通常タイプ</span>
        <Tooltip
          content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          intent="normal"
          className="!w-[670px] !max-w-none"
        >
          <Button intent="secondary">Hover for Normal</Button>
        </Tooltip>
      </div>

      <div className="gap-4 flex items-center">
        <span className="text-body-primary font-medium min-w-20">Accent</span>
        <span className="text-body-secondary text-sm">強調タイプ</span>
        <Tooltip
          content="テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
          intent="accent"
          side="bottom"
          className="!w-[670px] !max-w-none"
        >
          <Button intent="primary">Hover for Accent</Button>
        </Tooltip>
      </div>
    </div>
  ),
};
