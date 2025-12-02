import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  IconAlertCircle,
  IconAlertTriangle,
  IconCalendarEvent,
  IconCheck,
  IconChevronDown,
  IconChevronLeft,
  IconChevronRight,
  IconChevronUp,
  IconEdit,
  IconExternalLink,
  IconEye,
  IconEyeOff,
  IconFileCheck,
  IconHome,
  IconInfoCircle,
  IconMinus,
  IconPlus,
  IconSearch,
  IconSettings,
  IconTrash,
  IconUser,
  IconX,
} from '@tabler/icons-react';

import { Button } from '../components/Button';

const meta: Meta = {
  title: 'Components/Tabler Icons',
  parameters: {
    docs: {
      description: {
        component:
          'Tabler Icons are a set of over 4,000 MIT-licensed icons for web projects. This library re-exports all Tabler icons for convenient use.',
      },
    },
  },
};

export default meta;

// Common icon data for the gallery
const commonTablerIcons = [
  { name: 'IconAlertCircle', Component: IconAlertCircle },
  { name: 'IconAlertTriangle', Component: IconAlertTriangle },
  { name: 'IconCalendarEvent', Component: IconCalendarEvent },
  { name: 'IconCheck', Component: IconCheck },
  { name: 'IconChevronDown', Component: IconChevronDown },
  { name: 'IconChevronLeft', Component: IconChevronLeft },
  { name: 'IconChevronRight', Component: IconChevronRight },
  { name: 'IconChevronUp', Component: IconChevronUp },
  { name: 'IconEdit', Component: IconEdit },
  { name: 'IconExternalLink', Component: IconExternalLink },
  { name: 'IconEye', Component: IconEye },
  { name: 'IconEyeOff', Component: IconEyeOff },
  { name: 'IconFileCheck', Component: IconFileCheck },
  { name: 'IconHome', Component: IconHome },
  { name: 'IconInfoCircle', Component: IconInfoCircle },
  { name: 'IconMinus', Component: IconMinus },
  { name: 'IconPlus', Component: IconPlus },
  { name: 'IconSearch', Component: IconSearch },
  { name: 'IconSettings', Component: IconSettings },
  { name: 'IconTrash', Component: IconTrash },
  { name: 'IconUser', Component: IconUser },
  { name: 'IconX', Component: IconX },
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

export const CommonIcons: StoryObj = {
  render: () => (
    <div className="gap-4 flex flex-col">
      <div className="gap-2 rounded-lg bg-surface-secondary p-4 flex flex-col">
        <p className="text-sm">
          This is a small selection of commonly used icons. Browse all 4,000+
          icons in the{' '}
          <a
            href="https://tabler.io/icons"
            target="_blank"
            rel="noopener noreferrer"
            className="gap-1 text-body-primary inline-flex items-center
              underline"
          >
            Tabler Icons catalog
            <IconExternalLink size={14} />
          </a>
        </p>
      </div>
      <div className="gap-4 md:grid-cols-4 lg:grid-cols-6 grid grid-cols-3">
        {commonTablerIcons.map(({ name, Component }) => (
          <div
            key={name}
            className="gap-2 rounded-lg p-4 flex flex-col items-center border"
          >
            <Component size={48} />
            <CopyableIconName name={name} />
          </div>
        ))}
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A selection of commonly used Tabler icons in the library. Click on icon names to copy them.',
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
  IconSearch,
  IconUser,
  IconSettings,
  IconAlertCircle
} from '@chemican/components/tabler-icons';

// Use like any React component
<IconSearch size={24} />
<IconUser size={32} className="text-body-primary" />
<IconSettings size={48} color="#ef4444" />
<IconAlertCircle size={24} stroke={1.5} />`}</code>
      </pre>
      <p className="text-sm text-body-secondary">
        All 4,000+ Tabler icons are available through the
        @chemican/components/tabler-icons export. Visit{' '}
        <a
          href="https://tabler.io/icons"
          target="_blank"
          rel="noopener noreferrer"
          className="text-body-primary underline"
        >
          tabler.io/icons
        </a>{' '}
        to browse the full catalog.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Example showing how to import and use Tabler icons in your application.',
      },
    },
  },
};

export const SizeVariants: StoryObj = {
  render: () => (
    <div className="gap-6 flex flex-col">
      <div className="gap-4 flex items-end">
        <div className="gap-2 flex flex-col items-center">
          <IconSearch size={16} />
          <code className="text-xs text-body-secondary">16px</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSearch size={24} />
          <code className="text-xs text-body-secondary">24px</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSearch size={32} />
          <code className="text-xs text-body-secondary">32px</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSearch size={48} />
          <code className="text-xs text-body-secondary">48px</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSearch size={64} />
          <code className="text-xs text-body-secondary">64px</code>
        </div>
      </div>
      <pre className="rounded bg-surface-primary p-4 overflow-x-auto">
        <code>{`<IconSearch size={16} />
<IconSearch size={24} />
<IconSearch size={32} />
<IconSearch size={48} />
<IconSearch size={64} />`}</code>
      </pre>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Tabler icons support the size prop to control their dimensions. The size can be any number (in pixels) or string value.',
      },
    },
  },
};

export const StrokeWidth: StoryObj = {
  render: () => (
    <div className="gap-6 flex flex-col">
      <div className="gap-4 flex items-center">
        <div className="gap-2 flex flex-col items-center">
          <IconSettings size={48} stroke={1} />
          <code className="text-xs text-body-secondary">stroke={1}</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSettings size={48} stroke={1.5} />
          <code className="text-xs text-body-secondary">stroke={1.5}</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSettings size={48} stroke={2} />
          <code className="text-xs text-body-secondary">stroke={2}</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSettings size={48} stroke={2.5} />
          <code className="text-xs text-body-secondary">stroke={2.5}</code>
        </div>
        <div className="gap-2 flex flex-col items-center">
          <IconSettings size={48} stroke={3} />
          <code className="text-xs text-body-secondary">stroke={3}</code>
        </div>
      </div>
      <pre className="rounded bg-surface-primary p-4 overflow-x-auto">
        <code>{`<IconSettings size={48} stroke={1} />
<IconSettings size={48} stroke={1.5} />
<IconSettings size={48} stroke={2} />
<IconSettings size={48} stroke={2.5} />
<IconSettings size={48} stroke={3} />`}</code>
      </pre>
      <p className="text-sm text-body-secondary">
        Default stroke width is 2. Adjust the stroke prop to control the
        thickness of icon lines.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Tabler icons support the stroke prop to control the line thickness. The default stroke width is 2.',
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
              <IconAlertCircle size={48} style={{ color: `var(${token})` }} />
              <code className="text-xs text-body-secondary max-w-24 text-center">
                {label}
              </code>
            </div>
          ))}
        </div>
        <pre className="rounded bg-surface-primary p-4 overflow-x-auto">
          <code>{`// Using design tokens
<IconAlertCircle
  size={48}
  style={{ color: 'var(--token-color-background-interactive-primary-default)' }}
/>

// Or use Tailwind classes with design tokens
<IconAlertCircle size={48} className="text-body-primary" />
<IconAlertCircle size={48} className="text-body-secondary" />
<IconAlertCircle size={48} className="text-body-alert" />`}</code>
        </pre>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tabler icons support color control using design tokens via the style prop, or you can use className with Tailwind text utilities that map to design tokens.',
      },
    },
  },
};

export const RealWorldExamples: StoryObj = {
  render: () => (
    <div className="gap-6 flex flex-col">
      <div className="gap-4 flex flex-col">
        <h3 className="text-lg font-semibold">Common Use Cases</h3>

        {/* Navigation Buttons */}
        <div className="gap-2 flex flex-col">
          <h4 className="text-sm font-medium text-body-secondary">
            Icon-only Buttons
          </h4>
          <div className="gap-2 flex items-center">
            <Button intent="tertiary" size="sm" iconOnly icon={IconHome} />
            <Button intent="tertiary" size="sm" iconOnly icon={IconSettings} />
            <Button intent="tertiary" size="sm" iconOnly icon={IconUser} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="gap-2 flex flex-col">
          <h4 className="text-sm font-medium text-body-secondary">
            Buttons with Icons
          </h4>
          <div className="gap-2 flex items-center">
            <Button intent="secondary" size="sm" icon={IconPlus}>
              Add Item
            </Button>
            <Button intent="tertiary" size="sm" icon={IconEdit}>
              Edit
            </Button>
            <Button intent="tertiary" size="sm" icon={IconTrash} danger>
              Delete
            </Button>
          </div>
        </div>
      </div>

      <pre className="rounded bg-surface-primary p-4 overflow-x-auto">
        <code>{`// Icon-only Buttons
<Button intent="tertiary" size="sm" iconOnly icon={IconHome} />
<Button intent="tertiary" size="sm" iconOnly icon={IconSettings} />

// Buttons with Icons and Text
<Button intent="secondary" size="sm" icon={IconPlus}>
  Add Item
</Button>
<Button intent="tertiary" size="sm" icon={IconEdit}>
  Edit
</Button>
<Button intent="tertiary" size="sm" icon={IconTrash} danger>
  Delete
</Button>`}</code>
      </pre>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Examples of how Tabler icons are commonly used in real-world UI patterns like search inputs, alerts, navigation, and action buttons.',
      },
    },
  },
};
