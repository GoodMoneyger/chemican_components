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
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['large', 'medium', 'small', 'xsmall'],
    },
    disabled: {
      control: 'boolean',
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

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Primary Variant</h3>
        <TextLink href="#" variant="primary">
          Primary Link
        </TextLink>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Secondary Variant</h3>
        <TextLink href="#" variant="secondary">
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
        <TextLink href="#" size="large" leadingIcon={IconMail}>
          Large Text Link
        </TextLink>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Medium (14px icons)</h3>
        <TextLink href="#" size="medium" leadingIcon={IconMail}>
          Medium Text Link
        </TextLink>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Small (12px icons)</h3>
        <TextLink href="#" size="small" leadingIcon={IconMail}>
          Small Text Link
        </TextLink>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">XSmall (10px icons)</h3>
        <TextLink href="#" size="xsmall" leadingIcon={IconMail}>
          XSmall Text Link
        </TextLink>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-2">Default State</h3>
        <TextLink href="#">Default Link</TextLink>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Disabled State</h3>
        <TextLink href="#" disabled>
          Disabled Link
        </TextLink>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-2">Hover/Active States</h3>
        <p className="text-sm text-body-secondary mb-2">
          Hover and active states are handled by CSS and will show when
          interacting with the links.
        </p>
        <TextLink href="#">Hover over me</TextLink>
      </div>
    </div>
  ),
};

export const AllCombinations: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="text-lg font-bold">Primary Variant - All Sizes</h2>
      <div className="gap-4 grid grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <div className="space-y-2">
            <TextLink href="#" variant="primary" size="large">
              Large Primary
            </TextLink>
            <TextLink href="#" variant="primary" size="medium">
              Medium Primary
            </TextLink>
            <TextLink href="#" variant="primary" size="small">
              Small Primary
            </TextLink>
            <TextLink href="#" variant="primary" size="xsmall">
              XSmall Primary
            </TextLink>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">With Icons</h3>
          <div className="space-y-2">
            <TextLink
              href="#"
              variant="primary"
              size="large"
              trailingIcon={IconArrowRight}
            >
              Large Primary
            </TextLink>
            <TextLink
              href="#"
              variant="primary"
              size="medium"
              trailingIcon={IconArrowRight}
            >
              Medium Primary
            </TextLink>
            <TextLink
              href="#"
              variant="primary"
              size="small"
              trailingIcon={IconArrowRight}
            >
              Small Primary
            </TextLink>
            <TextLink
              href="#"
              variant="primary"
              size="xsmall"
              trailingIcon={IconArrowRight}
            >
              XSmall Primary
            </TextLink>
          </div>
        </div>
      </div>

      <h2 className="text-lg font-bold">Secondary Variant - All Sizes</h2>
      <div className="gap-4 grid grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Default</h3>
          <div className="space-y-2">
            <TextLink href="#" variant="secondary" size="large">
              Large Secondary
            </TextLink>
            <TextLink href="#" variant="secondary" size="medium">
              Medium Secondary
            </TextLink>
            <TextLink href="#" variant="secondary" size="small">
              Small Secondary
            </TextLink>
            <TextLink href="#" variant="secondary" size="xsmall">
              XSmall Secondary
            </TextLink>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-medium">With Icons</h3>
          <div className="space-y-2">
            <TextLink
              href="#"
              variant="secondary"
              size="large"
              leadingIcon={IconPhone}
            >
              Large Secondary
            </TextLink>
            <TextLink
              href="#"
              variant="secondary"
              size="medium"
              leadingIcon={IconPhone}
            >
              Medium Secondary
            </TextLink>
            <TextLink
              href="#"
              variant="secondary"
              size="small"
              leadingIcon={IconPhone}
            >
              Small Secondary
            </TextLink>
            <TextLink
              href="#"
              variant="secondary"
              size="xsmall"
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
          <TextLink href="/contact" size="small">
            contact us
          </TextLink>{' '}
          or{' '}
          <TextLink href="/docs" size="small" trailingIcon={IconExternalLink}>
            read the documentation
          </TextLink>
          .
        </p>
      </div>
    </div>
  ),
};
