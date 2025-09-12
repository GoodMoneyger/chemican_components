import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';
import {
  IconUser,
  IconSettings,
  IconLogout,
  IconEdit,
  IconTrash,
  IconDots,
} from '@tabler/icons-react';

import { Button } from '../Button';

import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
} from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    open: {
      control: { type: 'boolean' },
      description: 'Controls whether the dropdown is open',
    },
    modal: {
      control: { type: 'boolean' },
      description: 'Whether the dropdown is modal',
    },
  },
};

export default meta;

const Template: StoryFn<typeof Dropdown> = (args) => (
  <Dropdown {...args}>
    <DropdownTrigger asChild>
      <Button intent="secondary">Open Menu</Button>
    </DropdownTrigger>
    <DropdownContent>
      <DropdownItem icon={IconUser}>Profile</DropdownItem>
      <DropdownItem icon={IconSettings}>Settings</DropdownItem>
      <DropdownSeparator />
      <DropdownItem icon={IconLogout} intent="danger">
        Logout
      </DropdownItem>
    </DropdownContent>
  </Dropdown>
);

export const Default = Template.bind({});
Default.args = {};

export const WithIcon: StoryFn<typeof Dropdown> = () => (
  <Dropdown>
    <DropdownTrigger asChild>
      <Button intent="ghost" icon={IconDots} />
    </DropdownTrigger>
    <DropdownContent>
      <DropdownItem icon={IconEdit}>Edit</DropdownItem>
      <DropdownItem icon={IconTrash} intent="danger">
        Delete
      </DropdownItem>
    </DropdownContent>
  </Dropdown>
);

export const WithLabels: StoryFn<typeof Dropdown> = () => (
  <Dropdown>
    <DropdownTrigger asChild>
      <Button intent="secondary">Account Menu</Button>
    </DropdownTrigger>
    <DropdownContent>
      <DropdownLabel>Account</DropdownLabel>
      <DropdownItem icon={IconUser}>Profile</DropdownItem>
      <DropdownItem icon={IconSettings}>Settings</DropdownItem>
      <DropdownSeparator />
      <DropdownLabel>Actions</DropdownLabel>
      <DropdownItem icon={IconLogout} intent="danger">
        Logout
      </DropdownItem>
    </DropdownContent>
  </Dropdown>
);

export const States: StoryFn<typeof Dropdown> = () => (
  <div className="gap-4 flex">
    <Dropdown>
      <DropdownTrigger asChild>
        <Button intent="secondary">Default</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Menu Item</DropdownItem>
        <DropdownItem>Another Item</DropdownItem>
      </DropdownContent>
    </Dropdown>

    <Dropdown>
      <DropdownTrigger asChild>
        <Button intent="secondary">With Disabled</Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem>Menu Item</DropdownItem>
        <DropdownItem disabled>Disabled Item</DropdownItem>
      </DropdownContent>
    </Dropdown>
  </div>
);

export const Sizes: StoryFn<typeof Dropdown> = () => (
  <div className="gap-4 flex">
    <Dropdown>
      <DropdownTrigger asChild>
        <Button intent="secondary">Small</Button>
      </DropdownTrigger>
      <DropdownContent size="sm">
        <DropdownItem>Menu Item</DropdownItem>
        <DropdownItem>Another Item</DropdownItem>
      </DropdownContent>
    </Dropdown>

    <Dropdown>
      <DropdownTrigger asChild>
        <Button intent="secondary">Medium</Button>
      </DropdownTrigger>
      <DropdownContent size="md">
        <DropdownItem>Menu Item</DropdownItem>
        <DropdownItem>Another Item</DropdownItem>
      </DropdownContent>
    </Dropdown>

    <Dropdown>
      <DropdownTrigger asChild>
        <Button intent="secondary">Large</Button>
      </DropdownTrigger>
      <DropdownContent size="lg">
        <DropdownItem>Menu Item</DropdownItem>
        <DropdownItem>Another Item</DropdownItem>
      </DropdownContent>
    </Dropdown>
  </div>
);
