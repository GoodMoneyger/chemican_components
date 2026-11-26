import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import a6Template from './examples/ghs_label_a6.json';
import a6Values from './examples/ghs_label_a6.values.json';
import kaoTemplate from './examples/kao_ghs_label_332x445.json';
import kaoValues from './examples/kao_ghs_label_332x445.values.json';
import type { TextLayout } from './fit';
import { LabelRenderer } from './LabelRenderer';
import type { LabelRendererProps } from './LabelRenderer';
import type { LabelValues, TemplateDocument } from './spec-types';

// Examples are copied from GoodMoneyger/sds_manager_label_spec/examples.
const a6 = a6Template as TemplateDocument;
const kao = kaoTemplate as TemplateDocument;

/** Shows the label and lists text elements that do not fit. */
const WithFitReport = (props: LabelRendererProps) => {
  const [layouts, setLayouts] = useState<Record<string, TextLayout>>({});
  const overflowing = Object.entries(layouts).filter(([, l]) => !l.fits);
  return (
    <div className="gap-md flex flex-col">
      <div style={{ boxShadow: '0 0 0 1px #ccc', width: 'fit-content' }}>
        <LabelRenderer {...props} onLayout={setLayouts} />
      </div>
      <p className="text-md">
        {overflowing.length
          ? `Does not fit: ${overflowing.map(([id, l]) => `${id} (${l.fontSizePt}pt)`).join(', ')}`
          : 'All text fits.'}
      </p>
    </div>
  );
};

const meta = {
  title: 'Label/LabelRenderer',
  component: LabelRenderer,
  render: (args) => <WithFitReport {...args} />,
  parameters: { layout: 'padded' },
} satisfies Meta<typeof LabelRenderer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GhsLabelA6: Story = {
  args: { template: a6, values: (a6Values as LabelValues).values },
};

export const KaoShippingLabel: Story = {
  args: {
    template: kao,
    values: (kaoValues as LabelValues).values,
    scale: 0.5,
  },
};

/** A product name much longer than the sample: the text grows into its max box, then shrinks. */
export const LongProductName: Story = {
  args: {
    template: kao,
    values: {
      ...(kaoValues as LabelValues).values,
      product_name: {
        text: 'コータミン　８６Ｐ　コンク　業務用　高濃度タイプ　１８ｋｇ',
        origin: 'sds',
      },
    },
    scale: 0.5,
  },
};

export const Empty: Story = {
  args: { template: a6, values: {} },
};
