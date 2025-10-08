import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { TabBar, Tab } from './TabBar';

const meta = {
  title: 'Components/TabBar',
  component: TabBar,
  parameters: {
    layout: 'padded',
    radixDocs: {
      primitive: 'Tabs',
      url: 'https://www.radix-ui.com/primitives/docs/components/tabs',
    },
  },
  argTypes: {
    size: {
      control: 'radio',
      options: ['normal', 'small'],
      description: 'Size variant of the tab bar',
    },
    defaultValue: {
      control: 'text',
      description: 'The default active tab value',
    },
    value: {
      control: 'text',
      description: 'The controlled active tab value',
    },
    onValueChange: {
      action: 'tab changed',
      description: 'Callback when tab selection changes',
    },
  },
  args: {
    size: 'normal',
    defaultValue: 'tab1',
  },
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story showing normal size
export const Default: Story = {
  render: (args) => (
    <TabBar {...args}>
      <Tab value="tab1" label="タブ1" />
      <Tab value="tab2" label="タブ2" />
      <Tab value="tab3" label="タブ3" />
      <Tab value="tab4" label="タブ4" />
      <Tab value="tab5" label="タブ5" />
      <Tab value="tab6" label="タブ6" />
      <Tab value="tab7" label="タブ7" />
    </TabBar>
  ),
};

// Small size variant
export const Small: Story = {
  args: {
    size: 'small',
  },
  render: (args) => (
    <TabBar {...args}>
      <Tab value="tab1" label="タブ1" size={args.size} />
      <Tab value="tab2" label="タブ2" size={args.size} />
      <Tab value="tab3" label="タブ3" size={args.size} />
      <Tab value="tab4" label="タブ4" size={args.size} />
      <Tab value="tab5" label="タブ5" size={args.size} />
      <Tab value="tab6" label="タブ6" size={args.size} />
      <Tab value="tab7" label="タブ7" size={args.size} />
    </TabBar>
  ),
};

// Different states showcase
export const AllStates: Story = {
  render: () => (
    <div className="space-y-lg">
      {/* Normal size - all states */}
      <div>
        <h3 className="text-lg font-medium mb-md">Normal Size - All States</h3>
        <TabBar defaultValue="tab3">
          <Tab value="tab1" label="デフォルト" />
          <Tab value="tab2" label="ホバー時" />
          <Tab value="tab3" label="選択中" />
          <Tab value="tab4" label="利用不可時" disabled />
        </TabBar>
      </div>

      {/* Small size - all states */}
      <div>
        <h3 className="text-lg font-medium mb-md">Small Size - All States</h3>
        <TabBar size="small" defaultValue="tab3">
          <Tab value="tab1" label="デフォルト" size="small" />
          <Tab value="tab2" label="ホバー時" size="small" />
          <Tab value="tab3" label="選択中" size="small" />
          <Tab value="tab4" label="利用不可時" size="small" disabled />
        </TabBar>
      </div>
    </div>
  ),
};
