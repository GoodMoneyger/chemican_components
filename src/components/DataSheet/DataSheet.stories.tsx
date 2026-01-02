import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';
import { IconPlus } from '@tabler/icons-react';

import { Accordion } from '../Accordion';

import { DataSheet } from './DataSheet';

const meta: Meta<typeof DataSheet> = {
  title: 'Components/DataSheet',
  component: DataSheet,
  parameters: {
    layout: 'centered',
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
  const handleEdit = (itemId: string) => {
    alert(`Edit item ${itemId}`);
  };

  const handleRemove = (itemId: string) => {
    if (confirm(`Remove item ${itemId}?`)) {
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
            <DataSheet.TableRow itemId="explosive-001">
              <DataSheet.TableCell>
                火薬類・爆発物 / Explosives
              </DataSheet.TableCell>
              <DataSheet.TableCell>区分外 ; Not classified</DataSheet.TableCell>
              <DataSheet.TableCell>-</DataSheet.TableCell>
              <DataSheet.TableActionsCell />
            </DataSheet.TableRow>
            <DataSheet.TableRow itemId="flammable-gas-001">
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

export const MultipleSections: Story = () => (
  <DataSheet className="w-140">
    <DataSheet.Section>
      <DataSheet.Header
        variant="primary"
        onEdit={() => alert('Edit Eastman Chemical Company')}
        onRemove={() => alert('Remove Eastman Chemical Company')}
      >
        Eastman Chemical Company
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
      <DataSheet.KeyValue orientation="horizontal" label="メールアドレス">
        -
      </DataSheet.KeyValue>
    </DataSheet.Section>

    <DataSheet.Section>
      <DataSheet.Header
        variant="primary"
        onEdit={() => alert('Edit 全国農業協同組合連合会')}
        onRemove={() => alert('Remove 全国農業協同組合連合会')}
      >
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
      <DataSheet.KeyValue orientation="horizontal" label="メールアドレス">
        -
      </DataSheet.KeyValue>
    </DataSheet.Section>

    <DataSheet.Action size="xs" intent="secondary" icon={IconPlus}>
      製造者情報を追加する
    </DataSheet.Action>
  </DataSheet>
);

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

export const CompactKeyValue: Story = () => (
  <DataSheet className="w-140">
    <DataSheet.Section className="divide-y-0">
      <DataSheet.CompactKeyValue label="SDSファイル名">
        4-AMINO-2-CHLOROBENZOIC-5GR.pdf
      </DataSheet.CompactKeyValue>
      <DataSheet.CompactKeyValue label="SDS改訂日">
        2025/01/08 22:38
      </DataSheet.CompactKeyValue>
    </DataSheet.Section>
  </DataSheet>
);

export const CompactHorizontalKeyValue: Story = () => (
  <DataSheet className="w-140">
    <DataSheet.Section className="divide-y-0">
      <DataSheet.CompactKeyValue orientation="horizontal" label="推奨用途">
        -
      </DataSheet.CompactKeyValue>
      <DataSheet.CompactKeyValue orientation="horizontal" label="使用上の制限">
        -
      </DataSheet.CompactKeyValue>
    </DataSheet.Section>
  </DataSheet>
);
