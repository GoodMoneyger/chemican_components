import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  IconLogout,
  IconTable,
  IconUpload,
  IconUser,
} from '@tabler/icons-react';

import logoSvg from '../../assets/img/sds_manager_logo.svg';
import { AccountMenu } from '../AccountMenu';
import { DropdownItem } from '../DropdownMenu';

import {
  MobileNavigation,
  MobileNavigationItem,
  MobileNavigationSection,
} from './MobileNavigation';

const meta = {
  title: 'Components/MobileNavigation',
  component: MobileNavigation,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=11774-61127',
    },
  },
  globals: {
    viewport: { value: 'mobile', isRotated: false },
  },
  args: {
    logo: <img src={logoSvg} alt="SDS管理" className="h-auto w-[5.8125rem]" />,
    children: null,
  },
} satisfies Meta<typeof MobileNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

const Items = () => {
  const [current, setCurrent] = React.useState('/sds');

  const item = (href: string, icon: React.ReactNode, label: string) => (
    <MobileNavigationItem
      asChild
      variant={current === href ? 'selected' : 'default'}
    >
      <a
        href={href}
        className="gap-xs flex items-center"
        onClick={(event) => {
          event.preventDefault();
          setCurrent(href);
        }}
      >
        {icon}
        {label}
      </a>
    </MobileNavigationItem>
  );

  return (
    <MobileNavigationSection>
      {item('/sds', <IconTable size={20} className="shrink-0" />, 'SDS一覧')}
      {item(
        '/settings/account',
        <IconUser size={20} className="shrink-0" />,
        'マイページ'
      )}
      <MobileNavigationItem className="gap-xs">
        <IconLogout size={20} className="shrink-0" />
        ログアウト
      </MobileNavigationItem>
    </MobileNavigationSection>
  );
};

const PageContent = () => (
  <main className="p-md space-y-sm">
    {Array.from({ length: 30 }, (_, i) => (
      <p key={i} className="text-body-primary">
        ページの内容 {i + 1}
      </p>
    ))}
  </main>
);

export const Default: Story = {
  render: (args) => (
    <>
      <MobileNavigation {...args}>
        <Items />
      </MobileNavigation>
      <PageContent />
    </>
  ),
};

export const WithEndAndMenuTop: Story = {
  args: {
    menuTop: '松本 一紀 ・ 管理者権限でログイン中',
    end: (
      <AccountMenu userName="松本 一紀" loggedAsRole="管理者権限でログイン中">
        <DropdownItem>マイページ</DropdownItem>
      </AccountMenu>
    ),
  },
  render: Default.render,
};

export const CustomAnimation: Story = {
  args: {
    menuTop: '松本 一紀 ・ 管理者権限でログイン中',
    animation: {
      in: 'animate-in fade-in zoom-in-95',
      out: 'animate-out fade-out zoom-out-95',
      duration: 200,
      easing: 'ease-out',
    },
  },
  render: Default.render,
};

export const NoAnimation: Story = {
  args: {
    menuTop: '松本 一紀 ・ 管理者権限でログイン中',
    animation: false,
  },
  render: Default.render,
};

export const LongerMenu: Story = {
  args: {
    menuTop: '松本 一紀 ・ 管理者権限でログイン中',
  },
  render: (args) => (
    <>
      <MobileNavigation {...args}>
        <MobileNavigationSection title="SDS管理">
          <MobileNavigationItem className="gap-xs">
            <IconUpload size={20} className="shrink-0" />
            SDS登録
          </MobileNavigationItem>
          <MobileNavigationItem variant="selected" className="gap-xs">
            <IconTable size={20} className="shrink-0" />
            SDS一覧
          </MobileNavigationItem>
        </MobileNavigationSection>
        <Items />
      </MobileNavigation>
      <PageContent />
    </>
  ),
};
