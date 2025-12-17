import type { Meta, StoryObj } from '@storybook/react';

import { DataSheet } from '../DataSheet/DataSheet';

import { Accordion, type AccordionProps } from './Accordion';

const meta: Meta<AccordionProps> = {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [
    (Story) => (
      <div className="bg-surface-secondary p-md">
        <Story />
      </div>
    ),
  ],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=9118-18599',
    },
    radixDocs: {
      primitive: 'Accordion',
      url: 'https://www.radix-ui.com/primitives/docs/components/accordion',
    },
  },
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      description:
        'Determines whether one or multiple items can be opened at the same time',
    },
    collapsible: {
      control: { type: 'boolean' },
      description:
        'When type is "single", allows closing content by clicking on the open trigger',
    },
    disabled: {
      control: { type: 'boolean' },
      description:
        'When true, prevents the user from interacting with the accordion',
    },
  },
};

export default meta;
type Story = StoryObj<AccordionProps>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>0. 基礎情報</Accordion.Trigger>
        <Accordion.Content>
          <DataSheet>
            <DataSheet.Section>
              <DataSheet.KeyValue label="SDS作成日">
                2025/01/08
              </DataSheet.KeyValue>
              <DataSheet.KeyValue label="SDS改訂日">
                2025/01/08
              </DataSheet.KeyValue>
            </DataSheet.Section>
          </DataSheet>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>1. 化学品及び会社情報</Accordion.Trigger>
        <Accordion.Content>
          Chemical product and company identification information would be
          displayed here.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>2. 危険有害性の要約</Accordion.Trigger>
        <Accordion.Content>
          Hazards identification information would be displayed here.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const Disabled: Story = {
  args: {
    type: 'single',
    collapsible: true,
    disabled: true,
  },
  render: (args: AccordionProps) => (
    <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Disabled Accordion</Accordion.Trigger>
        <Accordion.Content>
          This content cannot be accessed because the entire accordion is
          disabled.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>Another Disabled Item</Accordion.Trigger>
        <Accordion.Content>
          All items are non-interactive when the accordion is disabled.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const DisabledItem: Story = {
  args: {},
  render: (args: AccordionProps) => (
    <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Active Item</Accordion.Trigger>
        <Accordion.Content>
          This item can be opened and closed normally.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2" disabled>
        <Accordion.Trigger>Disabled Item</Accordion.Trigger>
        <Accordion.Content>
          This content cannot be accessed because this specific item is
          disabled.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>Another Active Item</Accordion.Trigger>
        <Accordion.Content>
          This item is interactive even though the middle item is disabled.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const WithSingleAndCollapsible: Story = {
  args: {
    type: 'single',
    collapsible: true,
    defaultValue: 'item-1',
  },
  render: (args: AccordionProps) => (
    <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What is React?</Accordion.Trigger>
        <Accordion.Content>
          React is a JavaScript library for building user interfaces. It lets
          you compose complex UIs from small and isolated pieces of code called
          components.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>What is Radix UI?</Accordion.Trigger>
        <Accordion.Content>
          Radix UI is an open-source UI component library for building
          high-quality, accessible design systems and web applications with
          React.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>What is TailwindCSS?</Accordion.Trigger>
        <Accordion.Content>
          Tailwind CSS is a utility-first CSS framework that provides low-level
          utility classes to build custom designs without leaving your HTML.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};

export const WithSingleNotCollapsible: Story = {
  args: {
    type: 'single',
    collapsible: false,
    defaultValue: 'item-1',
  },
  render: (args: AccordionProps) => (
    <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>What is React?</Accordion.Trigger>
        <Accordion.Content>
          React is a JavaScript library for building user interfaces. It lets
          you compose complex UIs from small and isolated pieces of code called
          components.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <Accordion.Trigger>What is Radix UI?</Accordion.Trigger>
        <Accordion.Content>
          Radix UI is an open-source UI component library for building
          high-quality, accessible design systems and web applications with
          React.
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <Accordion.Trigger>What is TailwindCSS?</Accordion.Trigger>
        <Accordion.Content>
          Tailwind CSS is a utility-first CSS framework that provides low-level
          utility classes to build custom designs without leaving your HTML.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};
