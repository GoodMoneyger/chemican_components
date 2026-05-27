import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import {
  IconAdministratorCustom,
  IconMyFilterCustom,
  IconResizeCustom,
  IconUserListCustom,
} from './index';

const meta: Meta = {
  title: 'Components/Custom Icons',
  parameters: {
    docs: {
      description: {
        component:
          'Custom icons for the Chemican component library. These icons follow the same API as Tabler icons and can be used interchangeably with them.',
      },
    },
  },
};

export default meta;

// Icon data for the gallery
const customIcons = [
  { name: 'IconAdministratorCustom', Component: IconAdministratorCustom },
  { name: 'IconMyFilterCustom', Component: IconMyFilterCustom },
  { name: 'IconResizeCustom', Component: IconResizeCustom },
  { name: 'IconUserListCustom', Component: IconUserListCustom },
];

const CopyableIconName = ({ name }: { name: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(name);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <code
      className="text-xs text-body-secondary hover:text-body-primary
        cursor-pointer transition-colors"
      onClick={handleCopy}
      title="Click to copy"
    >
      {copied ? 'Copied!' : name}
    </code>
  );
};

export const AllIcons: StoryObj = {
  render: () => (
    <div className="gap-4 md:grid-cols-3 lg:grid-cols-4 grid grid-cols-2">
      {customIcons.map(({ name, Component }) => (
        <div
          key={name}
          className="gap-2 rounded-lg p-4 flex flex-col items-center border"
        >
          <Component size={48} />
          <CopyableIconName name={name} />
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A gallery showcasing all available custom icons in the library. Click on icon names to copy them.',
      },
    },
  },
};

export const UsageExample: StoryObj = {
  render: () => (
    <div className="gap-4 rounded-md bg-surface-secondary p-4 flex flex-col">
      <h3 className="text-lg font-semibold">Import and Usage</h3>
      <pre className="rounded bg-surface-primary p-4 overflow-x-auto">
        <code>{`import {
  IconAdministratorCustom,
  IconMyFilterCustom,
  IconResizeCustom,
  IconUserListCustom
} from '@chemican/components/tabler-icons';

// Use like any other icon
<IconAdministratorCustom size={24} />
<IconMyFilterCustom size={32} className="text-body-primary" />
<IconResizeCustom size={32} className="text-body-primary" />
<IconUserListCustom size={48} color="#ef4444" />`}</code>
      </pre>
      <p className="text-sm text-body-secondary">
        Custom icons are exported alongside Tabler icons for convenient access
        from a single import location.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Example showing how to import and use custom icons in your application.',
      },
    },
  },
};

export const SizeVariants: StoryObj = {
  render: () => (
    <div className="gap-6 flex flex-col">
      <div className="gap-4 flex items-end">
        <div className="gap-2 flex flex-col items-center">
          <IconAdministratorCustom size={16} />
          <code className="text-xs text-body-secondary">16px</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconAdministratorCustom size={24} />
          <code className="text-xs text-body-secondary">24px</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconAdministratorCustom size={32} />
          <code className="text-xs text-body-secondary">32px</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconAdministratorCustom size={48} />
          <code className="text-xs text-body-secondary">48px</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconAdministratorCustom size={64} />
          <code className="text-xs text-body-secondary">64px</code>
        </div>
      </div>
      <pre className="rounded bg-surface-primary p-4 overflow-x-auto">
        <code>{`<IconAdministratorCustom size={16} />
<IconAdministratorCustom size={24} />
<IconAdministratorCustom size={32} />
<IconAdministratorCustom size={48} />
<IconAdministratorCustom size={64} />`}</code>
      </pre>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Custom icons support the size prop to control their dimensions. The size can be any number (in pixels) or string value.',
      },
    },
  },
};

export const ColorVariants: StoryObj = {
  render: () => {
    const colorTokens = [
      {
        token: '--token-color-background-interactive-primary-default',
        label: 'Primary',
      },
      {
        token: '--token-color-background-interactive-neutral-hover',
        label: 'Neutral Hover',
      },
      { token: '--token-color-background-status-alert', label: 'Alert' },
      { token: '--token-color-background-status-success', label: 'Success' },
      { token: '--token-color-background-status-warning', label: 'Warning' },
    ];

    return (
      <div className="gap-6 flex flex-col">
        <div className="gap-4 flex items-center">
          {colorTokens.map(({ token, label }) => (
            <div key={token} className="gap-2 flex flex-col items-center">
              <IconAdministratorCustom
                size={48}
                style={{ color: `var(${token})` }}
              />
              <code className="text-xs text-body-secondary max-w-24 text-center">
                {label}
              </code>
            </div>
          ))}
        </div>
        <pre className="rounded bg-surface-primary p-4 overflow-x-auto">
          <code>{`// Using design tokens
<IconAdministratorCustom
  size={48}
  style={{ color: 'var(--token-color-background-interactive-primary-default)' }}
/>

// Or use Tailwind classes with design tokens
<IconAdministratorCustom size={48} className="text-body-primary" />
<IconAdministratorCustom size={48} className="text-body-secondary" />
<IconAdministratorCustom size={48} className="text-body-alert" />`}</code>
        </pre>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Custom icons support color control using design tokens via the style prop, or you can use className with Tailwind text utilities that map to design tokens.',
      },
    },
  },
};
