import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { StatusIndicator } from '../StatusIndicator';
import type { StatusLevel } from '../StatusIndicator';
import { Tag } from '../Tag';

import type { CardItemProps } from './Card';
import { Card } from './Card';

/** What an app's own card would put below the title */
const SdsContent = ({
  products,
  manufacturer,
}: {
  products: string[];
  manufacturer: ReactNode;
}) => (
  <div className="gap-xs flex flex-col">
    <div className="gap-xs flex flex-wrap">
      {products.map((product) => (
        <Tag key={product}>{product}</Tag>
      ))}
    </div>
    <p className="text-body-secondary text-md leading-normal">{manufacturer}</p>
  </div>
);

const meta = {
  title: 'Components/Card',
  component: Card.Item,
  subcomponents: { 'Card.List': Card.List },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          "Shows a table row as a card on phones. `Card.Item` lays out its slots: `status` top left, `trailing` top right, `title`, then `content` for the rows the app needs, such as tags and secondary lines. With `asChild`, the whole card renders as the child, for example the app's `Link` or a `button`: the title labels it, and it gets the hover, active and focus styles unless `interactive` is off. `Card.List` wraps items in a `ul`, and the items then render as `li`; `columns` lays them out in a grid from `md` up and `gap` sets the spacing between them.",
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=18788-15906',
    },
  },
  decorators: [
    (Story, { parameters }) => (
      <div className={parameters.fullWidth ? undefined : 'max-w-96'}>
        <Story />
      </div>
    ),
  ],
  args: {
    status: (
      <StatusIndicator size="sm" level="success">
        データ化前
      </StatusIndicator>
    ),
    trailing: (
      <>
        SDS改訂日 <span className="text-body-primary">2025/01/08</span>
      </>
    ),
    title: 'SDS-Uranium_Metal_2020.pdf',
    content: (
      <SdsContent products={['URANIUM METAL']} manufacturer="検見間株式会社" />
    ),
  },
} satisfies Meta<typeof Card.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Sds {
  id: string;
  status: { level: StatusLevel; label: string };
  revisedAt: string;
  fileName: string;
  products: string[];
  manufacturer: string;
}

const sdsRows: Sds[] = [
  {
    id: '1',
    status: { level: 'success', label: 'データ化前' },
    revisedAt: '2025/01/08',
    fileName: 'SDS-Uranium_Metal_2020.pdf',
    products: ['URANIUM METAL'],
    manufacturer: '検見間株式会社',
  },
  {
    id: '2',
    status: { level: 'inProgress', label: 'データ化中' },
    revisedAt: '2025/01/08',
    fileName: '2f8ced71-d20f-424d-b0f4-3f72e29d6802.pdf',
    products: ['URANIUM METAL'],
    manufacturer: '検見間株式会社',
  },
  {
    id: '3',
    status: { level: 'alert', label: 'データ化不可' },
    revisedAt: '2024/12/20',
    fileName: 'SDS-Thorium_Nitrate.pdf',
    products: ['THORIUM NITRATE', 'トリウム硝酸塩'],
    manufacturer: '株式会社ケミカン',
  },
  {
    id: '4',
    status: { level: 'warning', label: 'データ化保留中' },
    revisedAt: '2024/11/02',
    fileName: 'SDS-Plutonium_Oxide.pdf',
    products: ['PLUTONIUM OXIDE'],
    manufacturer: '株式会社ケミカン',
  },
];

const sdsSlots = (sds: Sds) => ({
  status: (
    <StatusIndicator size="sm" level={sds.status.level}>
      {sds.status.label}
    </StatusIndicator>
  ),
  trailing: (
    <>
      SDS改訂日 <span className="text-body-primary">{sds.revisedAt}</span>
    </>
  ),
  title: sds.fileName,
  content: (
    <SdsContent products={sds.products} manufacturer={sds.manufacturer} />
  ),
});

export const Default: Story = {};

export const List: Story = {
  render: () => (
    <Card.List>
      {sdsRows.map((sds) => (
        <Card.Item key={sds.id} {...sdsSlots(sds)} />
      ))}
    </Card.List>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A list of cards, here the SDS list on a phone. The app maps each row to the slots: the digitization status, the revision date and the file name, and puts its own product tags and manufacturer line in `content`.',
      },
    },
  },
};

export const AsLink: Story = {
  render: () => (
    <Card.List>
      {sdsRows.map((sds) => (
        <Card.Item key={sds.id} asChild {...sdsSlots(sds)}>
          <a href={`#sds-${sds.id}`} />
        </Card.Item>
      ))}
    </Card.List>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'With `asChild` the whole card is the link passed as the child, so routing stays in the app. Hover a card, or tab through the list, for the hover and focus styles.',
      },
    },
  },
};

export const AsButton: Story = {
  args: { onClick: fn() },
  render: ({ onClick }) => (
    <Card.List>
      {sdsRows.map((sds) => (
        <Card.Item key={sds.id} asChild onClick={onClick} {...sdsSlots(sds)}>
          <button type="button" />
        </Card.Item>
      ))}
    </Card.List>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'A card that opens something in place, such as a sheet or a dialog, takes a `button` as the child. It gets the same hover, active and focus styles as a link, and the pointer cursor.',
      },
    },
  },
};

export const HeadingTitle: Story = {
  render: () => (
    <Card.List>
      {sdsRows.map((sds) => (
        <Card.Item
          key={sds.id}
          asChild
          {...sdsSlots(sds)}
          title={<h3>{sds.fileName}</h3>}
        >
          <a href={`#sds-${sds.id}`} />
        </Card.Item>
      ))}
    </Card.List>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A heading element in `title` inherits the title styles and lets screen reader users jump from card to card by heading. Pick the level that follows the page's outline.",
      },
    },
  },
};

export const Columns: Story = {
  render: () => (
    <Card.List columns={3} gap="md">
      {[...sdsRows, ...sdsRows.slice(0, 2)].map((sds, index) => (
        <Card.Item key={`${sds.id}-${index}`} asChild {...sdsSlots(sds)}>
          <a href={`#sds-${sds.id}`} />
        </Card.Item>
      ))}
    </Card.List>
  ),
  globals: {
    viewport: { value: 'desktop', isRotated: false },
  },
  parameters: {
    fullWidth: true,
    docs: {
      description: {
        story:
          '`columns` applies from `md` up, and phones always get one column, so this story opens on the desktop viewport. `gap` takes a spacing token. The cards of a row share its height.',
      },
    },
  },
};

const longContentArgs = {
  trailing: (
    <>
      SDS改訂日（最終更新を含む）{' '}
      <span className="text-body-primary">2025/01/08</span>
    </>
  ),
  title:
    'test_test_foo_bar_safety_data_sheet_uranium_metal_revision_2020_final_v3.pdf',
  content: (
    <div className="gap-xs flex flex-col">
      <div className="gap-xs flex flex-wrap">
        <Tag>URANIUM METAL</Tag>
        <Tag>ウラン金属（核燃料物質）</Tag>
        <Tag>
          URANIUM_METAL_HIGH_PURITY_INGOT_FOR_RESEARCH_PURPOSES_ONLY_LOT_2020
        </Tag>
        <Tag>U</Tag>
      </div>
      <p className="text-body-secondary text-md leading-normal">
        検見間株式会社 原子力材料事業部 研究開発センター 第二研究所
      </p>
      <p className="text-body-secondary text-md leading-normal">
        最終確認: 2025/03/15
      </p>
    </div>
  ),
} satisfies Partial<CardItemProps>;

export const LongContent: Story = {
  args: longContentArgs,
  parameters: {
    docs: {
      description: {
        story:
          'A file name without spaces wraps anywhere, and the trailing text wraps before the status shrinks. In `content`, a `Tag` longer than the card truncates and the others wrap onto the next line.',
      },
    },
  },
};

export const TitleOnly: Story = {
  args: {
    status: undefined,
    trailing: undefined,
    content: undefined,
  },
};

export const WithoutStatus: Story = {
  args: { status: undefined },
};

export const WithoutTrailing: Story = {
  args: { trailing: undefined },
};

export const WithoutContent: Story = {
  args: { content: undefined },
};

export const Mobile: Story = {
  render: () => (
    <Card.List>
      {sdsRows.map((sds) => (
        <Card.Item key={sds.id} asChild {...sdsSlots(sds)}>
          <a href={`#sds-${sds.id}`} />
        </Card.Item>
      ))}
      <Card.Item asChild {...meta.args} {...longContentArgs}>
        <a href="#sds-long" />
      </Card.Item>
    </Card.List>
  ),
  globals: {
    viewport: { value: 'mobile', isRotated: false },
  },
  parameters: {
    docs: {
      description: {
        story:
          'The list at 375px, with the 16px gutters of the padded layout. The last card holds the long content.',
      },
    },
  },
};
