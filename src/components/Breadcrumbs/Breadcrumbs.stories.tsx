import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';
import figma from '@figma/code-connect';

import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    items: {
      control: { type: 'object' },
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
    },
    maxItems: {
      control: { type: 'number' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=15075-132583&m=dev',
      examples: [Breadcrumbs],
      props: {
        size: figma.enum('Size', {
          Small: 'sm',
          Medium: 'md',
        }),
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
);

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: 'ホーム', href: '/' },
    { label: '製品', href: '/products' },
    { label: 'カテゴリー', href: '/products/category' },
    { label: '現在のページ' },
  ],
  size: 'sm',
};

export const WithClickHandlers = Template.bind({});
WithClickHandlers.args = {
  items: [
    { label: 'ホーム', onClick: () => console.log('Navigate to Home') },
    { label: '製品', onClick: () => console.log('Navigate to Products') },
    { label: 'カテゴリー', onClick: () => console.log('Navigate to Category') },
    { label: '現在のページ' },
  ],
  size: 'sm',
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  items: [
    { label: 'ホーム', href: '/' },
    { label: '製品', href: '/products' },
    { label: 'カテゴリー', href: '/products/category' },
    { label: '現在のページ' },
  ],
  size: 'md',
};

export const LongPath = Template.bind({});
LongPath.args = {
  items: [
    { label: 'ホーム', href: '/' },
    { label: '製品', href: '/products' },
    { label: '電子機器', href: '/products/electronics' },
    { label: 'コンピュータ', href: '/products/electronics/computers' },
    {
      label: 'ノートパソコン',
      href: '/products/electronics/computers/laptops',
    },
    {
      label: 'ゲーミングPC',
      href: '/products/electronics/computers/laptops/gaming',
    },
    { label: '現在の製品' },
  ],
  size: 'sm',
};

export const TruncatedPath = Template.bind({});
TruncatedPath.args = {
  items: [
    { label: 'ホーム', href: '/' },
    { label: '製品', href: '/products' },
    { label: '電子機器', href: '/products/electronics' },
    { label: 'コンピュータ', href: '/products/electronics/computers' },
    {
      label: 'ノートパソコン',
      href: '/products/electronics/computers/laptops',
    },
    {
      label: 'ゲーミングPC',
      href: '/products/electronics/computers/laptops/gaming',
    },
    { label: '現在の製品' },
  ],
  maxItems: 4,
  size: 'sm',
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  items: [{ label: 'Current Page' }],
  size: 'sm',
};
