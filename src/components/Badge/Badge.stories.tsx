import type { Meta, StoryObj } from '@storybook/react';
import { IconAlertTriangle } from '@tabler/icons-react';

import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'new', 'danger'],
    },
    icon: {
      control: false,
    },
    asChild: {
      control: 'boolean',
      description:
        'Change the default rendered element for the one passed as a child',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
    variant: 'default',
  },
};

export const New: Story = {
  args: {
    children: 'New',
    variant: 'new',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    variant: 'danger',
  },
};

export const AsChild: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">AsChild with Button</h3>
        <div className="space-x-2">
          <Badge asChild variant="default">
            <button>Clickable Default Badge</button>
          </Badge>
          <Badge asChild variant="new">
            <button>Clickable New Badge</button>
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">AsChild with Link</h3>
        <div className="space-x-2">
          <Badge asChild variant="default">
            <a href="#" className="cursor-pointer">
              Link Badge
            </a>
          </Badge>
          <Badge asChild variant="new">
            <a href="#" className="cursor-pointer">
              New Link
            </a>
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const UseCases: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Status Indicators</h3>
        <div className="space-x-2">
          <Badge variant="default">承認済み</Badge>
          <Badge variant="new">新規</Badge>
          <Badge variant="danger">要注意</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Notification Badges</h3>
        <div className="space-x-2">
          <Badge variant="default">5</Badge>
          <Badge variant="new">99+</Badge>
          <Badge variant="danger" icon={IconAlertTriangle}>
            !
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">
          Interactive Badges (asChild)
        </h3>
        <div className="space-x-2">
          <Badge asChild variant="default">
            <button
              className="cursor-pointer"
              onClick={() => alert('Default clicked!')}
            >
              クリック可能
            </button>
          </Badge>
          <Badge asChild variant="new">
            <a
              href="#"
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                alert('New clicked!');
              }}
            >
              リンクバッジ
            </a>
          </Badge>
          <Badge variant="danger">警告バッジ (通常)</Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Inline with Text</h3>
        <p className="text-body-primary">
          このアイテムは <Badge variant="new">新着</Badge> です。{' '}
          <Badge variant="danger">注意</Badge> が必要な場合があります。
        </p>
      </div>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">All Badge Variants</h2>
      <div className="gap-4 flex flex-wrap items-center">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <Badge variant="default">Default Badge</Badge>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">New</h3>
          <Badge variant="new">New Badge</Badge>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Danger</h3>
          <div className="space-y-1">
            <Badge variant="danger">With Icon</Badge>
          </div>
        </div>
      </div>
    </div>
  ),
};
