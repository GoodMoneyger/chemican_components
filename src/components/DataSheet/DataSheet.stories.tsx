import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';
import { IconPlus } from '@tabler/icons-react';

import { Accordion } from '../Accordion';
import { DatePicker } from '../DatePicker/DatePicker';
import { TextArea } from '../TextArea/TextArea';
import { TextField } from '../TextField/TextField';

import { DataSheet } from './DataSheet';

const meta: Meta<typeof DataSheet> = {
  title: 'Components/DataSheet',
  component: DataSheet,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered'],
      description: 'The visual variant of the data sheet',
    },
  },
};

export default meta;

type Story = StoryFn<typeof DataSheet>;

export const BasicKeyValue: Story = () => (
  <DataSheet className="w-140">
    <DataSheet.Section>
      <DataSheet.KeyValue label="SDS作成日">2025/01/08</DataSheet.KeyValue>
      <DataSheet.KeyValue label="SDS改訂日">2025/01/08</DataSheet.KeyValue>
    </DataSheet.Section>
  </DataSheet>
);

export const BorderedVariant: Story = () => (
  <div className="bg-surface-secondary p-md">
    <DataSheet variant="bordered" className="w-140">
      <DataSheet.Section>
        <DataSheet.KeyValue
          orientation="horizontal"
          className="px-md py-xs"
          label="概要"
        >
          This is a bordered DataSheet variant with rounded corners and a
          border.
        </DataSheet.KeyValue>
        <DataSheet.KeyValue
          orientation="horizontal"
          className="px-md py-xs"
          label="法令データベース"
        >
          REACH, RoHS, TSCA
        </DataSheet.KeyValue>
        <DataSheet.KeyValue
          orientation="horizontal"
          className="px-md py-xs"
          label="関連リンク"
        >
          https://example.com
        </DataSheet.KeyValue>
      </DataSheet.Section>
    </DataSheet>
  </div>
);

export const HorizontalKeyValue: Story = () => (
  <DataSheet className="w-140">
    <DataSheet.Section>
      <DataSheet.KeyValue orientation="horizontal" label="推奨用途">
        -
      </DataSheet.KeyValue>
      <DataSheet.KeyValue orientation="horizontal" label="使用上の制限">
        -
      </DataSheet.KeyValue>
      <DataSheet.KeyValue
        orientation="horizontal"
        label={
          <div>
            <div>推奨用途及び</div>
            <div>使用上の制限</div>
          </div>
        }
      >
        -
      </DataSheet.KeyValue>
    </DataSheet.Section>
  </DataSheet>
);

export const CompactKeyValue: Story = () => (
  <DataSheet className="w-140">
    <DataSheet.Section>
      <DataSheet.KeyValue spacing="compact" label="SDSファイル名">
        4-AMINO-2-CHLOROBENZOIC-5GR.pdf
      </DataSheet.KeyValue>
      <DataSheet.KeyValue spacing="compact" label="SDS改訂日">
        2025/01/08 22:38
      </DataSheet.KeyValue>
    </DataSheet.Section>
  </DataSheet>
);

export const CompactHorizontalKeyValue: Story = () => (
  <DataSheet className="w-140">
    <DataSheet.Section>
      <DataSheet.KeyValue
        spacing="compact"
        orientation="horizontal"
        label="推奨用途"
      >
        -
      </DataSheet.KeyValue>
      <DataSheet.KeyValue
        spacing="compact"
        orientation="horizontal"
        label="使用上の制限"
      >
        -
      </DataSheet.KeyValue>
    </DataSheet.Section>
  </DataSheet>
);

export const MixedLayout: Story = () => (
  <DataSheet className="w-140">
    <DataSheet.Section>
      <DataSheet.KeyValue label="SDS作成日">2025/01/08</DataSheet.KeyValue>
      <DataSheet.KeyValue label="SDS改訂日">2025/01/08</DataSheet.KeyValue>
      <DataSheet.KeyValue orientation="horizontal" label="推奨用途">
        -
      </DataSheet.KeyValue>
      <DataSheet.KeyValue orientation="horizontal" label="使用上の制限">
        -
      </DataSheet.KeyValue>
    </DataSheet.Section>
  </DataSheet>
);

export const TableData: Story = () => (
  <DataSheet className="max-w-4xl w-140">
    <DataSheet.Section>
      <DataSheet.Header variant="table">
        製品全体｜パイロカラージアゾ試薬 DIA60-STV (1A) 塩酸溶液 Hydrochloric
        acid (HCl) solution [for dissolving (1)] 12 mL×3本
      </DataSheet.Header>
      <DataSheet.Table>
        <DataSheet.TableHeader>
          <DataSheet.TableRow header>
            <DataSheet.TableCell header parts={45}>
              項目
            </DataSheet.TableCell>
            <DataSheet.TableCell header parts={35}>
              区分
            </DataSheet.TableCell>
            <DataSheet.TableCell header parts={20}>
              毒性
            </DataSheet.TableCell>
          </DataSheet.TableRow>
        </DataSheet.TableHeader>
        <DataSheet.TableBody>
          <DataSheet.TableRow>
            <DataSheet.TableCell>
              火薬類・爆発物 / Explosives
            </DataSheet.TableCell>
            <DataSheet.TableCell>区分外 ; Not classified</DataSheet.TableCell>
            <DataSheet.TableCell>-</DataSheet.TableCell>
          </DataSheet.TableRow>
          <DataSheet.TableRow>
            <DataSheet.TableCell>
              可燃性・引火性ガス / Flammable gases （including chemically
              unstable gases）
            </DataSheet.TableCell>
            <DataSheet.TableCell>区分外 ; Not classified</DataSheet.TableCell>
            <DataSheet.TableCell>-</DataSheet.TableCell>
          </DataSheet.TableRow>
        </DataSheet.TableBody>
      </DataSheet.Table>
    </DataSheet.Section>
  </DataSheet>
);

export const TableWithActions: Story = () => {
  const handleEdit = (item: string) => {
    alert(`Edit item ${item}`);
  };

  const handleRemove = (item: string) => {
    if (confirm(`Remove item ${item}?`)) {
      alert('Item removed');
    }
  };

  return (
    <DataSheet className="max-w-4xl w-140">
      <DataSheet.Section>
        <DataSheet.Header variant="table">
          製品全体｜パイロカラージアゾ試薬 DIA60-STV (1A) 塩酸溶液 Hydrochloric
          acid (HCl) solution [for dissolving (1)] 12 mL×3本
        </DataSheet.Header>
        <DataSheet.Table
          onEditRow={handleEdit}
          onRemoveRow={handleRemove}
          actionsColumnParts={10}
        >
          <DataSheet.TableHeader>
            <DataSheet.TableRow header>
              <DataSheet.TableCell header parts={40}>
                項目
              </DataSheet.TableCell>
              <DataSheet.TableCell header parts={35}>
                区分
              </DataSheet.TableCell>
              <DataSheet.TableCell header parts={15}>
                毒性
              </DataSheet.TableCell>
              <DataSheet.TableActionsCell header />
            </DataSheet.TableRow>
          </DataSheet.TableHeader>
          <DataSheet.TableBody>
            <DataSheet.TableRow item="explosive-001">
              <DataSheet.TableCell>
                火薬類・爆発物 / Explosives
              </DataSheet.TableCell>
              <DataSheet.TableCell>区分外 ; Not classified</DataSheet.TableCell>
              <DataSheet.TableCell>-</DataSheet.TableCell>
              <DataSheet.TableActionsCell />
            </DataSheet.TableRow>
            <DataSheet.TableRow item="flammable-gas-001">
              <DataSheet.TableCell>
                可燃性・引火性ガス / Flammable gases （including chemically
                unstable gases）
              </DataSheet.TableCell>
              <DataSheet.TableCell>区分外 ; Not classified</DataSheet.TableCell>
              <DataSheet.TableCell>-</DataSheet.TableCell>
              <DataSheet.TableActionsCell />
            </DataSheet.TableRow>
          </DataSheet.TableBody>
        </DataSheet.Table>
      </DataSheet.Section>
    </DataSheet>
  );
};

export const TableWithRemoveRestoreAction: Story = () => {
  interface ItemRecord {
    id: number;
    label: string;
    isDeleted: boolean;
  }

  const [items, setItems] = React.useState<ItemRecord[]>([
    { id: 1, label: 'Explosives', isDeleted: false },
    { id: 2, label: 'Flammable gases', isDeleted: false },
    { id: 3, label: 'Oxidizing gases', isDeleted: true },
    { id: 4, label: '-', isDeleted: true },
  ]);

  const handleEdit = (item: ItemRecord) => {
    alert(`Edit item: ${item.label} (ID: ${item.id})`);
  };

  const handleRemove = (item: ItemRecord) => {
    if (confirm(`Remove item: ${item.label}?`)) {
      setItems((prevItems) =>
        prevItems.map((i) => (i.id === item.id ? { ...i, isDeleted: true } : i))
      );
    }
  };

  const handleRestore = (item: ItemRecord) => {
    if (confirm(`Restore item: ${item.label}?`)) {
      setItems((prevItems) =>
        prevItems.map((i) =>
          i.id === item.id ? { ...i, isDeleted: false } : i
        )
      );
    }
  };

  return (
    <DataSheet className="max-w-4xl w-140">
      <DataSheet.Section>
        <DataSheet.Header variant="table">
          Table with Record Type - TItem as Object
        </DataSheet.Header>
        <DataSheet.Table<ItemRecord>
          onEditRow={handleEdit}
          onRemoveRow={handleRemove}
          onRestoreRow={handleRestore}
          actionsColumnParts={10}
        >
          <DataSheet.TableHeader>
            <DataSheet.TableRow header>
              <DataSheet.TableCell header parts={15}>
                ID
              </DataSheet.TableCell>
              <DataSheet.TableCell header parts={50}>
                Label
              </DataSheet.TableCell>
              <DataSheet.TableCell header parts={25}>
                Status
              </DataSheet.TableCell>
              <DataSheet.TableActionsCell header />
            </DataSheet.TableRow>
          </DataSheet.TableHeader>
          <DataSheet.TableBody>
            {items.map((item) => (
              <DataSheet.TableRow
                key={item.id}
                item={item}
                isDeleted={item.isDeleted}
                ariaLabels={{
                  edit: `Edit ${item.label}`,
                  remove: `Remove ${item.label}`,
                  restore: `Restore ${item.label}`,
                }}
                tooltipMessages={{
                  edit: 'Edit this row',
                  remove: 'Remove this row',
                  restore: 'Restore this row',
                }}
              >
                <DataSheet.TableCell>{item.id}</DataSheet.TableCell>
                <DataSheet.TableCell>{item.label}</DataSheet.TableCell>
                <DataSheet.TableCell>
                  {item.isDeleted ? 'Deleted' : 'Active'}
                </DataSheet.TableCell>
                <DataSheet.TableActionsCell />
              </DataSheet.TableRow>
            ))}
          </DataSheet.TableBody>
        </DataSheet.Table>
      </DataSheet.Section>
    </DataSheet>
  );
};

export const MultipleSections: Story = () => {
  interface SectionRecord {
    id: number;
    name: string;
    address: string;
    department: string;
    phone: string;
    email: string;
    isDeleted: boolean;
  }

  const [sections, setSections] = React.useState<SectionRecord[]>([
    {
      id: 1,
      name: 'Eastman Chemical Company',
      address: '200 South Wilcox Drive Kingsport TN 37660-5280',
      department: 'A部門',
      phone: '423-229-2000',
      email: '-',
      isDeleted: false,
    },
    {
      id: 2,
      name: '全国農業協同組合連合会',
      address: '200 South Wilcox Drive Kingsport TN 37660-5280',
      department: 'A部門',
      phone: '423-229-2000',
      email: '-',
      isDeleted: true,
    },
  ]);

  const handleEdit = (section: SectionRecord) => {
    alert(`Edit ${section.name}`);
  };

  const handleRemove = (section: SectionRecord) => {
    if (confirm(`Remove ${section.name}?`)) {
      setSections((prev) =>
        prev.map((s) => (s.id === section.id ? { ...s, isDeleted: true } : s))
      );
    }
  };

  const handleRestore = (section: SectionRecord) => {
    if (confirm(`Restore ${section.name}?`)) {
      setSections((prev) =>
        prev.map((s) => (s.id === section.id ? { ...s, isDeleted: false } : s))
      );
    }
  };

  return (
    <DataSheet className="w-140">
      {sections.map((section) => (
        <DataSheet.Section key={section.id}>
          <DataSheet.Header
            variant="primary"
            isDeleted={section.isDeleted}
            onEdit={() => handleEdit(section)}
            onRemove={() => handleRemove(section)}
            onRestore={() => handleRestore(section)}
            ariaLabels={{
              edit: `Edit ${section.name}`,
              remove: `Remove ${section.name}`,
              restore: `Restore ${section.name}`,
            }}
            tooltipMessages={{
              edit: 'Edit manufacturer information',
              remove: 'Remove manufacturer information',
              restore: 'Restore manufacturer information',
            }}
          >
            {section.name}
          </DataSheet.Header>
          <DataSheet.KeyValue orientation="horizontal" label="住所">
            {section.address}
          </DataSheet.KeyValue>
          <DataSheet.KeyValue orientation="horizontal" label="拠点・部門">
            {section.department}
          </DataSheet.KeyValue>
          <DataSheet.KeyValue orientation="horizontal" label="電話番号">
            {section.phone}
          </DataSheet.KeyValue>
          <DataSheet.KeyValue orientation="horizontal" label="メールアドレス">
            {section.email}
          </DataSheet.KeyValue>
        </DataSheet.Section>
      ))}

      <DataSheet.Action size="xs" intent="secondary" icon={IconPlus}>
        製造者情報を追加する
      </DataSheet.Action>
    </DataSheet>
  );
};

export const SectionDataExampleWithinAccordion: Story = () => (
  <div className="bg-surface-secondary p-md">
    <Accordion defaultValue={['section-1']} className="w-140">
      <Accordion.Item value="section-1">
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

      <Accordion.Item value="section-2">
        <Accordion.Trigger>1. 化学品及び会社情報（製品情報）</Accordion.Trigger>
        <Accordion.Content>
          <DataSheet>
            <DataSheet.Section>
              <DataSheet.Header variant="primary">
                全国農業協同組合連合会
              </DataSheet.Header>
              <DataSheet.KeyValue orientation="horizontal" label="住所">
                200 South Wilcox Drive Kingsport TN 37660-5280
              </DataSheet.KeyValue>
              <DataSheet.KeyValue orientation="horizontal" label="拠点・部門">
                A部門
              </DataSheet.KeyValue>
              <DataSheet.KeyValue orientation="horizontal" label="電話番号">
                423-229-2000
              </DataSheet.KeyValue>
              <DataSheet.KeyValue
                orientation="horizontal"
                label="メールアドレス"
              >
                -
              </DataSheet.KeyValue>
            </DataSheet.Section>
          </DataSheet>
        </Accordion.Content>
      </Accordion.Item>

      <Accordion.Item value="section-3">
        <Accordion.Trigger>2. 危険有害性の要約</Accordion.Trigger>
        <Accordion.Content>
          <DataSheet>
            <DataSheet.Header variant="primary">分類体系｜GHS</DataSheet.Header>
            <DataSheet.Section>
              <DataSheet.Header variant="table">
                製品全体｜パイロカラージアゾ試薬 DIA60-STV (1A) 塩酸溶液
                Hydrochloric acid (HCl) solution [for dissolving (1)] 12 mL×3本
              </DataSheet.Header>
              <DataSheet.Table>
                <DataSheet.TableHeader>
                  <DataSheet.TableRow header>
                    <DataSheet.TableCell header parts={45}>
                      項目
                    </DataSheet.TableCell>
                    <DataSheet.TableCell header parts={35}>
                      区分
                    </DataSheet.TableCell>
                    <DataSheet.TableCell header parts={20}>
                      毒性
                    </DataSheet.TableCell>
                  </DataSheet.TableRow>
                </DataSheet.TableHeader>
                <DataSheet.TableBody>
                  <DataSheet.TableRow>
                    <DataSheet.TableCell>
                      火薬類・爆発物 / Explosives
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>
                      区分外 ; Not classified
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>-</DataSheet.TableCell>
                  </DataSheet.TableRow>
                  <DataSheet.TableRow>
                    <DataSheet.TableCell>
                      可燃性・引火性ガス / Flammable gases （including
                      chemically unstable gases）
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>
                      区分外 ; Not classified
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>-</DataSheet.TableCell>
                  </DataSheet.TableRow>
                </DataSheet.TableBody>
              </DataSheet.Table>
            </DataSheet.Section>

            <DataSheet.Section>
              <DataSheet.Header variant="table">
                含有成分｜アセチレン
              </DataSheet.Header>
              <DataSheet.Table>
                <DataSheet.TableHeader>
                  <DataSheet.TableRow header>
                    <DataSheet.TableCell header parts={45}>
                      項目
                    </DataSheet.TableCell>
                    <DataSheet.TableCell header parts={35}>
                      区分
                    </DataSheet.TableCell>
                    <DataSheet.TableCell header parts={20}>
                      毒性
                    </DataSheet.TableCell>
                  </DataSheet.TableRow>
                </DataSheet.TableHeader>
                <DataSheet.TableBody>
                  <DataSheet.TableRow>
                    <DataSheet.TableCell>
                      火薬類・爆発物 / Explosives
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>
                      区分外 ; Not classified
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>-</DataSheet.TableCell>
                  </DataSheet.TableRow>
                  <DataSheet.TableRow>
                    <DataSheet.TableCell>
                      可燃性・引火性ガス / Flammable gases （including
                      chemically unstable gases）
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>
                      区分外 ; Not classified
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>-</DataSheet.TableCell>
                  </DataSheet.TableRow>
                </DataSheet.TableBody>
              </DataSheet.Table>
            </DataSheet.Section>

            <DataSheet.Section>
              <DataSheet.Header variant="table">
                含有成分｜アセトン
              </DataSheet.Header>
              <DataSheet.Table>
                <DataSheet.TableHeader>
                  <DataSheet.TableRow header>
                    <DataSheet.TableCell header parts={45}>
                      項目
                    </DataSheet.TableCell>
                    <DataSheet.TableCell header parts={35}>
                      区分
                    </DataSheet.TableCell>
                    <DataSheet.TableCell header parts={20}>
                      毒性
                    </DataSheet.TableCell>
                  </DataSheet.TableRow>
                </DataSheet.TableHeader>
                <DataSheet.TableBody>
                  <DataSheet.TableRow>
                    <DataSheet.TableCell>
                      可燃性・引火性ガス / Flammable gases （including
                      chemically unstable gases）
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>
                      区分外 ; Not classified
                    </DataSheet.TableCell>
                    <DataSheet.TableCell>-</DataSheet.TableCell>
                  </DataSheet.TableRow>
                </DataSheet.TableBody>
              </DataSheet.Table>
            </DataSheet.Section>
          </DataSheet>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </div>
);

export const KeyValueWithFormFields: Story = () => (
  <DataSheet className="w-140">
    <DataSheet.Section>
      <DataSheet.KeyValue label="製品名">
        <TextField defaultValue="塩酸溶液" />
      </DataSheet.KeyValue>
      <DataSheet.KeyValue label="CAS番号">
        <TextField defaultValue="7647-01-0" />
      </DataSheet.KeyValue>
      <DataSheet.KeyValue label="備考">
        <TextArea
          defaultValue="取り扱いには十分注意してください。"
          showCharacterLimit={false}
        />
      </DataSheet.KeyValue>
      <DataSheet.KeyValue label="SDS改訂日">
        <DatePicker defaultValue={new Date('2025-01-08')} />
      </DataSheet.KeyValue>
      <DataSheet.KeyValue orientation="horizontal" label="推奨用途">
        <TextField defaultValue="研究用" />
      </DataSheet.KeyValue>
    </DataSheet.Section>
  </DataSheet>
);
KeyValueWithFormFields.parameters = {
  docs: {
    description: {
      story:
        'DataSheet.KeyValue wires its label to child form fields via ' +
        '`aria-labelledby`, so screen readers announce the label and ' +
        '`findByLabelText` queries resolve correctly. Inspect any input — ' +
        'its `aria-labelledby` points at the sibling label `<div>`.',
    },
  },
};

interface MobileManufacturer {
  id: number;
  name: string;
  address: string;
  phone: string;
  isDeleted: boolean;
}

interface MobileIngredient {
  id: number;
  name: string;
  cas: string;
  content: string;
  kashinhou: string;
  isDeleted: boolean;
}

const MobileCaption = ({ children }: { children: React.ReactNode }) => (
  <p className="text-body-secondary mb-xs text-xs">{children}</p>
);

export const Mobile: Story = () => {
  const [manufacturers, setManufacturers] = React.useState<
    MobileManufacturer[]
  >([
    {
      id: 1,
      name: 'Eastman Chemical Company',
      address: '200 South Wilcox Drive Kingsport TN 37660-5280',
      phone: '423-229-2000',
      isDeleted: false,
    },
    {
      id: 2,
      name: '全国農業協同組合連合会',
      address: '東京都千代田区大手町1-3-1',
      phone: '03-6271-8111',
      isDeleted: true,
    },
  ]);
  const [ingredients, setIngredients] = React.useState<MobileIngredient[]>([
    {
      id: 1,
      name: '塩化水素 / Hydrogen chloride',
      cas: '7647-01-0',
      content: '35 %',
      kashinhou: '(1)-215',
      isDeleted: false,
    },
    {
      id: 2,
      name: '水 / Water',
      cas: '7732-18-5',
      content: '65 %',
      kashinhou: '対象外',
      isDeleted: false,
    },
    {
      id: 3,
      name: 'アセトン / Acetone',
      cas: '67-64-1',
      content: '< 1 %',
      kashinhou: '(2)-542',
      isDeleted: true,
    },
  ]);

  const setManufacturerDeleted = (id: number, isDeleted: boolean) =>
    setManufacturers((prev) =>
      prev.map((m) => (m.id === id ? { ...m, isDeleted } : m))
    );
  const setIngredientDeleted = (id: number, isDeleted: boolean) =>
    setIngredients((prev) =>
      prev.map((i) => (i.id === id ? { ...i, isDeleted } : i))
    );

  return (
    <div className="space-y-xl">
      <section>
        <MobileCaption>
          Key / value: vertical, compact, horizontal
        </MobileCaption>
        <DataSheet>
          <DataSheet.Section>
            <DataSheet.KeyValue label="SDS作成日">
              2025/01/08
            </DataSheet.KeyValue>
            <DataSheet.KeyValue spacing="compact" label="SDSファイル名">
              4-AMINO-2-CHLOROBENZOIC-5GR.pdf
            </DataSheet.KeyValue>
            <DataSheet.KeyValue orientation="horizontal" label="推奨用途">
              試薬、工業用原料、研究開発用
            </DataSheet.KeyValue>
            <DataSheet.KeyValue
              spacing="compact"
              orientation="horizontal"
              label="使用上の制限"
            >
              -
            </DataSheet.KeyValue>
          </DataSheet.Section>
        </DataSheet>
      </section>

      <section>
        <MobileCaption>
          Primary headers with actions, a deleted section, and the add action
        </MobileCaption>
        <DataSheet>
          {manufacturers.map((manufacturer) => (
            <DataSheet.Section key={manufacturer.id}>
              <DataSheet.Header
                variant="primary"
                isDeleted={manufacturer.isDeleted}
                onEdit={() => alert(`Edit ${manufacturer.name}`)}
                onRemove={() => setManufacturerDeleted(manufacturer.id, true)}
                onRestore={() => setManufacturerDeleted(manufacturer.id, false)}
                ariaLabels={{
                  edit: `Edit ${manufacturer.name}`,
                  remove: `Remove ${manufacturer.name}`,
                  restore: `Restore ${manufacturer.name}`,
                }}
              >
                {manufacturer.name}
              </DataSheet.Header>
              <DataSheet.KeyValue orientation="horizontal" label="住所">
                {manufacturer.address}
              </DataSheet.KeyValue>
              <DataSheet.KeyValue orientation="horizontal" label="電話番号">
                {manufacturer.phone}
              </DataSheet.KeyValue>
            </DataSheet.Section>
          ))}
          <DataSheet.Action size="xs" intent="secondary" icon={IconPlus}>
            製造者情報を追加する
          </DataSheet.Action>
        </DataSheet>
      </section>

      <section>
        <MobileCaption>
          Tables: one scrolling with row actions and a deleted row, one narrow
          table opting out of the min width
        </MobileCaption>
        <DataSheet>
          <DataSheet.Header variant="primary">
            組成および成分情報
          </DataSheet.Header>
          <DataSheet.Section>
            <DataSheet.Header variant="table">
              製品全体｜パイロカラージアゾ試薬 DIA60-STV (1A) 塩酸溶液
            </DataSheet.Header>
            <DataSheet.Table<MobileIngredient>
              aria-label="成分"
              onEditRow={(item) => alert(`Edit ${item.name}`)}
              onRemoveRow={(item) => setIngredientDeleted(item.id, true)}
              onRestoreRow={(item) => setIngredientDeleted(item.id, false)}
            >
              <DataSheet.TableHeader>
                <DataSheet.TableRow header>
                  <DataSheet.TableCell header parts={30}>
                    化学名
                  </DataSheet.TableCell>
                  <DataSheet.TableCell header parts={20}>
                    CAS番号
                  </DataSheet.TableCell>
                  <DataSheet.TableCell header parts={15}>
                    含有量
                  </DataSheet.TableCell>
                  <DataSheet.TableCell header parts={25}>
                    化審法番号
                  </DataSheet.TableCell>
                  <DataSheet.TableActionsCell header />
                </DataSheet.TableRow>
              </DataSheet.TableHeader>
              <DataSheet.TableBody>
                {ingredients.map((item) => (
                  <DataSheet.TableRow
                    key={item.id}
                    item={item}
                    isDeleted={item.isDeleted}
                    ariaLabels={{
                      edit: `Edit ${item.name}`,
                      remove: `Remove ${item.name}`,
                      restore: `Restore ${item.name}`,
                    }}
                  >
                    <DataSheet.TableCell>{item.name}</DataSheet.TableCell>
                    <DataSheet.TableCell>{item.cas}</DataSheet.TableCell>
                    <DataSheet.TableCell>{item.content}</DataSheet.TableCell>
                    <DataSheet.TableCell>{item.kashinhou}</DataSheet.TableCell>
                    <DataSheet.TableActionsCell />
                  </DataSheet.TableRow>
                ))}
              </DataSheet.TableBody>
            </DataSheet.Table>
          </DataSheet.Section>
          <DataSheet.Section>
            <DataSheet.Header variant="table">適用法令</DataSheet.Header>
            <DataSheet.Table mobileMinWidth="auto" aria-label="適用法令">
              <DataSheet.TableHeader>
                <DataSheet.TableRow header>
                  <DataSheet.TableCell header parts={60}>
                    法令
                  </DataSheet.TableCell>
                  <DataSheet.TableCell header parts={40}>
                    該当
                  </DataSheet.TableCell>
                </DataSheet.TableRow>
              </DataSheet.TableHeader>
              <DataSheet.TableBody>
                <DataSheet.TableRow>
                  <DataSheet.TableCell>化審法</DataSheet.TableCell>
                  <DataSheet.TableCell>該当</DataSheet.TableCell>
                </DataSheet.TableRow>
                <DataSheet.TableRow>
                  <DataSheet.TableCell>安衛法</DataSheet.TableCell>
                  <DataSheet.TableCell>非該当</DataSheet.TableCell>
                </DataSheet.TableRow>
              </DataSheet.TableBody>
            </DataSheet.Table>
          </DataSheet.Section>
        </DataSheet>
      </section>

      <section>
        <MobileCaption>Bordered variant</MobileCaption>
        <div className="bg-surface-secondary p-md">
          <DataSheet variant="bordered">
            <DataSheet.Section>
              <DataSheet.KeyValue
                orientation="horizontal"
                className="px-md py-xs"
                label="概要"
              >
                This is a bordered DataSheet variant with rounded corners and a
                border.
              </DataSheet.KeyValue>
              <DataSheet.KeyValue
                orientation="horizontal"
                className="px-md py-xs"
                label="法令データベース"
              >
                REACH, RoHS, TSCA
              </DataSheet.KeyValue>
            </DataSheet.Section>
          </DataSheet>
        </div>
      </section>

      <section>
        <MobileCaption>Form fields</MobileCaption>
        <DataSheet>
          <DataSheet.Section>
            <DataSheet.KeyValue label="製品名">
              <TextField defaultValue="塩酸溶液" />
            </DataSheet.KeyValue>
            <DataSheet.KeyValue label="備考">
              <TextArea
                defaultValue="取り扱いには十分注意してください。"
                showCharacterLimit={false}
              />
            </DataSheet.KeyValue>
            <DataSheet.KeyValue label="SDS改訂日">
              <DatePicker defaultValue={new Date('2025-01-08')} />
            </DataSheet.KeyValue>
            <DataSheet.KeyValue orientation="horizontal" label="推奨用途">
              <TextField defaultValue="研究用" />
            </DataSheet.KeyValue>
          </DataSheet.Section>
        </DataSheet>
      </section>

      <section>
        <MobileCaption>Inside an accordion</MobileCaption>
        <div className="bg-surface-secondary p-md">
          <Accordion defaultValue={['section-1']}>
            <Accordion.Item value="section-1">
              <Accordion.Trigger>0. 基礎情報</Accordion.Trigger>
              <Accordion.Content>
                <DataSheet>
                  <DataSheet.Section>
                    <DataSheet.KeyValue label="SDS作成日">
                      2025/01/08
                    </DataSheet.KeyValue>
                    <DataSheet.KeyValue
                      orientation="horizontal"
                      label="使用上の制限"
                    >
                      -
                    </DataSheet.KeyValue>
                  </DataSheet.Section>
                </DataSheet>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="section-2">
              <Accordion.Trigger>
                1. 化学品及び会社情報（製品情報）
              </Accordion.Trigger>
              <Accordion.Content>
                <DataSheet>
                  <DataSheet.Section>
                    <DataSheet.KeyValue orientation="horizontal" label="住所">
                      200 South Wilcox Drive Kingsport TN 37660-5280
                    </DataSheet.KeyValue>
                  </DataSheet.Section>
                </DataSheet>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </div>
      </section>
    </div>
  );
};
Mobile.parameters = {
  layout: 'padded',
  docs: {
    description: {
      story:
        'Every DataSheet pattern at phone width: key/value orientations and ' +
        'spacings, primary headers with actions, a scrolling table with row ' +
        'actions and a deleted row, a narrow table with `mobileMinWidth="auto"`, ' +
        'the bordered variant, form fields, and a sheet inside an accordion.',
    },
  },
};
Mobile.globals = {
  viewport: { value: 'mobile', isRotated: false },
};
