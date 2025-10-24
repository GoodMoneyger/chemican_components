import React from 'react';
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
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
} from '../DropdownMenu';

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
      <SideNavigationItem asChild>
        <a href="#" className="gap-xs flex items-center">
          <IconInfoCircle size={16} className="shrink-0" />
          {!isCollapsed && '使い方ガイド'}
        </a>
      </SideNavigationItem>
      <SideNavigationItem asChild>
        <a href="#" className="gap-xs flex items-center">
          <IconHelpCircle size={16} className="shrink-0" />
          {!isCollapsed && 'お問い合わせ'}
        </a>
      </SideNavigationItem>
      <Dropdown>
        <DropdownTrigger asChild>
          <SideNavigationItem asChild>
            <button className="gap-xs flex items-center">
              <IconSettings size={16} className="shrink-0" />
              {!isCollapsed && '各種設定'}
            </button>
          </SideNavigationItem>
        </DropdownTrigger>
        <DropdownContent side="right" align="end">
          <DropdownItem>企業ページ</DropdownItem>
          <DropdownItem>ホワイトリストIP一覧</DropdownItem>
          <DropdownItem>部署一覧</DropdownItem>
          <DropdownItem>ユーザー一覧</DropdownItem>
          <DropdownItem>ユーザーページ</DropdownItem>
          <DropdownItem>タグ一覧</DropdownItem>
          <DropdownSeparator />
          <DropdownItem>ログアウト</DropdownItem>
        </DropdownContent>
      </Dropdown>
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
  render: (args) => {
    const DefaultContent = () => {
      const { isCollapsed } = useSideNavigation();

      return (
        <>
          <SideNavigationSection title="SDS管理">
            <SideNavigationItem asChild variant="selected">
              <a href="#" className="gap-xs flex items-center">
                <IconUpload size={16} className="shrink-0" />
                {!isCollapsed && 'SDS登録'}
              </a>
            </SideNavigationItem>
            <SideNavigationItem asChild>
              <a href="#" className="gap-xs flex items-center">
                <IconTable size={16} className="shrink-0" />
                {!isCollapsed && '全SDS一覧'}
              </a>
            </SideNavigationItem>
            <SideNavigationItem asChild>
              <a href="#" className="gap-xs flex items-center">
                <IconFileAlert size={16} className="shrink-0" />
                {!isCollapsed && '要確認SDS'}
              </a>
            </SideNavigationItem>
            <SideNavigationItem asChild>
              <a href="#" className="gap-xs flex items-center">
                <IconTrashX size={16} className="shrink-0" />
                {!isCollapsed && '削除済みSDS'}
              </a>
            </SideNavigationItem>
          </SideNavigationSection>

          <SideNavigationSection title="チェックリスト" isLast>
            <SideNavigationItem asChild>
              <a href="#" className="gap-xs flex items-center">
                <IconChecklist size={16} className="shrink-0" />
                {!isCollapsed && '法令チェックリスト'}
              </a>
            </SideNavigationItem>
          </SideNavigationSection>
        </>
      );
    };

    return (
      <div className="flex h-screen">
        <SideNavigation
          {...args}
          header={<Header />}
          footer={<Footer />}
          showCollapseButton
        >
          <DefaultContent />
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
    );
  },
};

type MockNavigationLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

// Mock NavigationLink component for demonstration
const MockNavigationLink = ({
  to,
  children,
  className,
  ...props
}: MockNavigationLinkProps) => (
  <a href={to} className={className} {...props}>
    {children}
  </a>
);

export const WithCustomLinks: Story = {
  render: (args) => {
    const CustomLinksContent = () => {
      const { isCollapsed } = useSideNavigation();

      return (
        <>
          <SideNavigationSection title="Navigation with Custom Links">
            <SideNavigationItem asChild variant="selected">
              <MockNavigationLink
                to="/sds-upload"
                className="gap-xs flex items-center"
              >
                <IconUpload size={16} className="shrink-0" />
                {!isCollapsed && 'SDS Registration'}
              </MockNavigationLink>
            </SideNavigationItem>
            <SideNavigationItem asChild>
              <MockNavigationLink
                to="/sds-list"
                className="gap-xs flex items-center"
              >
                <IconTable size={16} className="shrink-0" />
                {!isCollapsed && 'All SDS List'}
              </MockNavigationLink>
            </SideNavigationItem>
            <SideNavigationItem asChild>
              <MockNavigationLink
                to="/sds-alerts"
                className="gap-xs flex items-center"
              >
                <IconFileAlert size={16} className="shrink-0" />
                {!isCollapsed && (
                  <span style={{ color: 'orange' }}>Alerts (styled label)</span>
                )}
              </MockNavigationLink>
            </SideNavigationItem>
          </SideNavigationSection>

          <SideNavigationSection title="ReactNode Labels" isLast>
            <SideNavigationItem asChild>
              <a href="#" className="gap-xs flex items-center">
                <IconChecklist size={16} className="shrink-0" />
                {!isCollapsed && (
                  <div className="gap-xxs flex items-center">
                    <span>Checklist</span>
                  </div>
                )}
              </a>
            </SideNavigationItem>
          </SideNavigationSection>
        </>
      );
    };

    return (
      <div className="flex h-screen">
        <SideNavigation
          {...args}
          header={<Header />}
          footer={<Footer />}
          showCollapseButton
        >
          <CustomLinksContent />
        </SideNavigation>

        <div className="bg-surface-secondary p-lg flex-1">
          <div className="bg-surface-primary p-lg rounded-md">
            <h1 className="text-body-primary mb-md text-xl font-medium">
              Custom Links Demo
            </h1>
            <p className="text-body-secondary">
              This demonstrates using custom link components (like
              react-router's NavLink) and ReactNode labels for
              internationalization.
            </p>
          </div>
        </div>
      </div>
    );
  },
};
