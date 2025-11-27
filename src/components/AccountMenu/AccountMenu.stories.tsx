import { IconLogout } from '@tabler/icons-react';
import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { AccountMenu } from './AccountMenu';
import { DropdownItem } from './../DropdownMenu';

const meta: Meta<typeof AccountMenu> = {
  title: 'Components/AccountMenu',
  component: AccountMenu,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    userName: {
      control: { type: 'text' },
      description: 'The name of the user displayed in the trigger',
    },
    loggedAsRole: {
      control: { type: 'text' },
      description:
        'The role or secondary information displayed in the dropdown',
    },
    className: {
      control: { type: 'text' },
      description: 'Additional CSS classes',
    },
  },
};

export default meta;

const Template: StoryFn<typeof AccountMenu> = (args) => (
  <AccountMenu {...args}>
    <DropdownItem className="justify-center">マイページ</DropdownItem>
    <DropdownItem className="gap-1 justify-center">
      <IconLogout size={20} className="text-shape-primary" />
      ログアウト
    </DropdownItem>
  </AccountMenu>
);

export const Default = Template.bind({});
Default.args = {
  userName: '松本 一紀',
  loggedAsRole: '管理者権限',
};
