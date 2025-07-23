import type { Meta, StoryObj } from '@storybook/react';
import {
  IconUpload,
  IconTable,
  IconSettings,
  IconHelpCircle,
  IconFileAlert,
  IconTrashX,
  IconChecklist,
  IconInfoCircle,
  IconRefresh,
} from '@tabler/icons-react';

import { Button } from '../Button';
import { cn } from '../../lib/utils';

import { SideNavigation } from './SideNavigation';
import { SideNavigationItem } from './SideNavigationItem';
import { SideNavigationSection } from './SideNavigationSection';
import { Logo } from './Logo';
import { useSideNavigation } from './SideNavigationContext';

const meta = {
  title: 'Components/SideNavigation',
  component: SideNavigation,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    width: {
      control: 'radio',
      options: ['expanded', 'collapsed'],
      description: 'Legacy width prop (overrides internal state)',
    },
    showCollapseButton: {
      control: 'boolean',
    },
    defaultCollapsed: {
      control: 'boolean',
      description: 'Initial collapsed state',
    },
  },
  args: {},
} satisfies Meta<typeof SideNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const Header = () => <Logo />;

const Footer = () => {
  const { isCollapsed } = useSideNavigation();

  return (
    <div className="space-y-xxxs">
      <SideNavigationItem icon={IconSettings} label="各種設定" />
      <SideNavigationItem icon={IconInfoCircle} label="使い方ガイド" />
      <SideNavigationItem icon={IconHelpCircle} label="お問い合わせ" />
      <Button
        size="xs"
        className={cn('mt-xs w-full', isCollapsed ? 'h-8' : '')}
        intent="tertiary"
        icon={IconRefresh}
        iconOnly={isCollapsed}
      >
        {!isCollapsed && '旧メニューに戻す'}
      </Button>
    </div>
  );
};

export const Default: Story = {
  render: (args) => (
    <div className="flex h-screen">
      <SideNavigation
        {...args}
        header={<Header />}
        footer={<Footer />}
        showCollapseButton
      >
        <SideNavigationSection title="SDS管理">
          <SideNavigationItem
            icon={IconUpload}
            label="SDS登録"
            variant="selected"
          />
          <SideNavigationItem icon={IconTable} label="全SDS一覧" />
          <SideNavigationItem icon={IconFileAlert} label="要確認SDS" />
          <SideNavigationItem icon={IconTrashX} label="削除済みSDS" />
        </SideNavigationSection>

        <SideNavigationSection title="チェックリスト" isLast>
          <SideNavigationItem icon={IconChecklist} label="法令チェックリスト" />
        </SideNavigationSection>
      </SideNavigation>

      <div className="bg-surface-secondary p-lg flex-1">
        <div className="bg-surface-primary p-lg rounded-md">
          <h1 className="text-body-primary mb-md text-xl font-medium">
            Content Area
          </h1>
          <p className="text-body-secondary">
            This is the main content area next to the side navigation.
          </p>
        </div>
      </div>
    </div>
  ),
};
