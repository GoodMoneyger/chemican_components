import type { Meta, StoryObj } from '@storybook/react';
import {
  IconExternalLink,
  IconArrowRight,
  IconMail,
  IconPhone,
  IconDownload,
  IconEdit,
} from '@tabler/icons-react';

import { TextLink } from './TextLink';

const meta: Meta<typeof TextLink> = {
  title: 'Components/TextLink',
  component: TextLink,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['lg', 'md', 'sm', 'xs'],
    },
    leadingIcon: {
      control: false,
    },
    trailingIcon: {
      control: false,
    },
    asChild: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'お問い合わせ',
    href: '#',
  },
};

export const WithLeadingIcon: Story = {
  args: {
    children: '詳細はこちら',
    href: '#',
    leadingIcon: IconMail,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: 'ドキュメントを見る',
    href: '#',
    trailingIcon: IconExternalLink,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Download File',
    href: '#',
    leadingIcon: IconDownload,
    trailingIcon: IconArrowRight,
  },
};

export const Intents: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Primary Intent</h3>
        <TextLink href="#" intent="primary">
          Primary Link
        </TextLink>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Secondary Intent</h3>
        <TextLink href="#" intent="secondary">
          Secondary Link
        </TextLink>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Large (16px icons)</h3>
        <TextLink href="#" size="lg" leadingIcon={IconMail}>
          Large Text Link
        </TextLink>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Medium (14px icons)</h3>
        <TextLink href="#" size="md" leadingIcon={IconMail}>
          Medium Text Link
        </TextLink>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Small (12px icons)</h3>
        <TextLink href="#" size="sm" leadingIcon={IconMail}>
          Small Text Link
        </TextLink>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">XSmall (10px icons)</h3>
        <TextLink href="#" size="xs" leadingIcon={IconMail}>
          XSmall Text Link
        </TextLink>
      </div>
    </div>
  ),
};

export const AllCombinations: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-lg font-bold">Primary Intent - All Sizes</h2>
      <div className="gap-4 grid grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <div className="space-y-2">
            <TextLink href="#" intent="primary" size="lg">
              Large Primary
            </TextLink>
            <TextLink href="#" intent="primary" size="md">
              Medium Primary
            </TextLink>
            <TextLink href="#" intent="primary" size="sm">
              Small Primary
            </TextLink>
            <TextLink href="#" intent="primary" size="xs">
              XSmall Primary
            </TextLink>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">With Icons</h3>
          <div className="space-y-2">
            <TextLink
              href="#"
              intent="primary"
              size="lg"
              trailingIcon={IconArrowRight}
            >
              Large Primary
            </TextLink>
            <TextLink
              href="#"
              intent="primary"
              size="md"
              trailingIcon={IconArrowRight}
            >
              Medium Primary
            </TextLink>
            <TextLink
              href="#"
              intent="primary"
              size="sm"
              trailingIcon={IconArrowRight}
            >
              Small Primary
            </TextLink>
            <TextLink
              href="#"
              intent="primary"
              size="xs"
              trailingIcon={IconArrowRight}
            >
              XSmall Primary
            </TextLink>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-bold">Secondary Intent - All Sizes</h2>
      <div className="gap-4 grid grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <div className="space-y-2">
            <TextLink href="#" intent="secondary" size="lg">
              Large Secondary
            </TextLink>
            <TextLink href="#" intent="secondary" size="md">
              Medium Secondary
            </TextLink>
            <TextLink href="#" intent="secondary" size="sm">
              Small Secondary
            </TextLink>
            <TextLink href="#" intent="secondary" size="xs">
              XSmall Secondary
            </TextLink>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">With Icons</h3>
          <div className="space-y-2">
            <TextLink
              href="#"
              intent="secondary"
              size="lg"
              leadingIcon={IconPhone}
            >
              Large Secondary
            </TextLink>
            <TextLink
              href="#"
              intent="secondary"
              size="md"
              leadingIcon={IconPhone}
            >
              Medium Secondary
            </TextLink>
            <TextLink
              href="#"
              intent="secondary"
              size="sm"
              leadingIcon={IconPhone}
            >
              Small Secondary
            </TextLink>
            <TextLink
              href="#"
              intent="secondary"
              size="xs"
              leadingIcon={IconPhone}
            >
              XSmall Secondary
            </TextLink>
          </div>
        </div>
      </div>
    </div>
  ),
};

export const UseCases: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Navigation Links</h3>
        <div className="space-y-2">
          <TextLink href="/contact" leadingIcon={IconMail}>
            お問い合わせ
          </TextLink>
          <TextLink href="/docs" trailingIcon={IconExternalLink}>
            ドキュメントを見る
          </TextLink>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Action Links</h3>
        <div className="space-y-2">
          <TextLink
            href="#"
            onClick={() => alert('Edit clicked')}
            leadingIcon={IconEdit}
          >
            Edit Profile
          </TextLink>
          <TextLink
            href="#"
            onClick={() => alert('Download started')}
            leadingIcon={IconDownload}
          >
            Download Report
          </TextLink>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Inline Links in Text</h3>
        <p className="text-body-primary">
          For more information, please{' '}
          <TextLink href="/contact" size="sm">
            contact us
          </TextLink>{' '}
          or{' '}
          <TextLink href="/docs" size="sm" trailingIcon={IconExternalLink}>
            read the documentation
          </TextLink>
          .
        </p>
      </div>
    </div>
  ),
};
