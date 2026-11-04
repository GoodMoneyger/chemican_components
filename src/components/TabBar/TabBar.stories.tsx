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
      <Tab value="tab1">タブ1</Tab>
      <Tab value="tab2">タブ2</Tab>
      <Tab value="tab3">タブ3</Tab>
      <Tab value="tab4">タブ4</Tab>
      <Tab value="tab5">タブ5</Tab>
      <Tab value="tab6">タブ6</Tab>
      <Tab value="tab7">タブ7</Tab>
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
      <Tab value="tab1">タブ1</Tab>
      <Tab value="tab2">タブ2</Tab>
      <Tab value="tab3">タブ3</Tab>
      <Tab value="tab4">タブ4</Tab>
      <Tab value="tab5">タブ5</Tab>
      <Tab value="tab6">タブ6</Tab>
      <Tab value="tab7">タブ7</Tab>
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
          <Tab value="tab1">デフォルト</Tab>
          <Tab value="tab2">ホバー時</Tab>
          <Tab value="tab3">選択中</Tab>
          <Tab value="tab4" disabled>
            利用不可時
          </Tab>
        </TabBar>
      </div>

      {/* Small size - all states */}
      <div>
        <h3 className="text-lg font-medium mb-md">Small Size - All States</h3>
        <TabBar size="small" defaultValue="tab3">
          <Tab value="tab1">デフォルト</Tab>
          <Tab value="tab2">ホバー時</Tab>
          <Tab value="tab3">選択中</Tab>
          <Tab value="tab4" disabled>
            利用不可時
          </Tab>
        </TabBar>
      </div>
    </div>
  ),
};

// Overflow story - constrained width to trigger overflow
export const Overflow: Story = {
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <TabBar {...args}>
        <Tab value="tab1">タブ1</Tab>
        <Tab value="tab2">タブ2</Tab>
        <Tab value="tab3">タブ3</Tab>
        <Tab value="tab4">タブ4</Tab>
        <Tab value="tab5">タブ5</Tab>
        <Tab value="tab6">タブ6</Tab>
        <Tab value="tab7">タブ7</Tab>
      </TabBar>
    </div>
  ),
};

// Overflow with controlled state - shows active tab in overflow
const OverflowWithActiveInDropdownRender = () => {
  const [value, setValue] = React.useState('tab6');
  return (
    <div style={{ maxWidth: 400 }}>
      <TabBar value={value} onValueChange={setValue}>
        <Tab value="tab1">タブ1</Tab>
        <Tab value="tab2">タブ2</Tab>
        <Tab value="tab3">タブ3</Tab>
        <Tab value="tab4">タブ4</Tab>
        <Tab value="tab5">タブ5</Tab>
        <Tab value="tab6">タブ6</Tab>
        <Tab value="tab7">タブ7</Tab>
      </TabBar>
    </div>
  );
};

export const OverflowWithActiveInDropdown: Story = {
  render: () => <OverflowWithActiveInDropdownRender />,
};

// Overflow with custom label
export const OverflowCustomLabel: Story = {
  render: (args) => (
    <div style={{ maxWidth: 400 }}>
      <TabBar {...args} moreLabel={(count) => `他${count}件`}>
        <Tab value="tab1">タブ1</Tab>
        <Tab value="tab2">タブ2</Tab>
        <Tab value="tab3">タブ3</Tab>
        <Tab value="tab4">タブ4</Tab>
        <Tab value="tab5">タブ5</Tab>
        <Tab value="tab6">タブ6</Tab>
        <Tab value="tab7">タブ7</Tab>
      </TabBar>
    </div>
  ),
};

const MobileRender = () => {
  const [value, setValue] = React.useState('profile');
  return (
    <TabBar value={value} onValueChange={setValue}>
      <Tab value="profile">プロフィール</Tab>
      <Tab value="email">メール配信設定</Tab>
      <Tab value="two-factor">二要素認証設定</Tab>
      <Tab value="language">言語設定</Tab>
      <Tab value="notifications">通知設定</Tab>
    </TabBar>
  );
};

// Desktop browsers report a fine pointer, which makes TabBar collapse into the
// dropdown. Answer that query as a phone would, so the story scrolls like one.
const withoutFinePointer = () => {
  const matchMedia = window.matchMedia;
  window.matchMedia = (query) =>
    matchMedia.call(window, query === '(pointer: fine)' ? 'not all' : query);
  return () => {
    window.matchMedia = matchMedia;
  };
};

export const Mobile: Story = {
  render: () => <MobileRender />,
  beforeEach: withoutFinePointer,
  globals: {
    viewport: { value: 'mobile', isRotated: false },
  },
  parameters: {
    docs: {
      // Its own iframe keeps the pointer override away from the other stories.
      story: { inline: false, height: '120px' },
      description: {
        story:
          'The normal size at 375px, as on a phone: 14px labels and 38px tabs. The bar scrolls sideways without a scrollbar and shades the edge that hides more tabs. The story reports no fine pointer, so it scrolls even with a mouse; on a real desktop the bar collapses into the "more" dropdown instead.',
      },
    },
  },
};
