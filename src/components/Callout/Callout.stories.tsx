import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';
import {
  IconInfoCircleFilled,
  IconCircleCheckFilled,
  IconAlertTriangleFilled,
  IconLockFilled,
  IconX,
} from '@tabler/icons-react';

import type { CalloutProps } from './Callout';
import { Callout } from './Callout';

interface StoryArgs extends Omit<CalloutProps, 'action'> {
  showAction?: boolean;
  actionLabel?: string;
}

const iconMap = {
  IconInfoCircleFilled,
  IconCircleCheckFilled,
  IconAlertTriangleFilled,
  IconLockFilled,
  IconX,
  None: undefined,
};

const meta: Meta<StoryArgs> = {
  title: 'Components/Callout',
  component: Callout,
  argTypes: {
    title: {
      control: { type: 'text' },
      table: { category: 'Content' },
    },
    description: {
      control: { type: 'text' },
      table: { category: 'Content' },
    },
    intent: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'alert', 'paid'],
      table: { category: 'Appearance' },
    },
    icon: {
      control: { type: 'select' },
      options: Object.keys(iconMap),
      mapping: iconMap,
      table: { category: 'Appearance' },
    },
    showAction: {
      control: { type: 'boolean' },
      description: 'Show/hide the action button',
      table: { category: 'Action' },
    },
    actionLabel: {
      control: { type: 'text' },
      description: 'Text for the action button',
      if: { arg: 'showAction', truthy: true },
      table: { category: 'Action' },
    },
  },
};

export default meta;

export const Default: StoryFn<StoryArgs> = (args) => {
  const { showAction, actionLabel, ...calloutProps } = args;

  return (
    <Callout
      {...calloutProps}
      action={
        showAction
          ? {
              label: actionLabel || 'ラベル',
              onClick: () => alert(`${actionLabel || 'ラベル'} clicked!`),
            }
          : undefined
      }
    />
  );
};

Default.args = {
  title: '見出しテキスト',
  intent: 'info',

  showAction: true,
  actionLabel: 'ラベル',
};

export const WithDescription: StoryFn<typeof Callout> = (args) => (
  <Callout {...args} />
);

WithDescription.args = {
  title: 'SDS登録時の注意事項',
  description:
    'ファイル形式はPDF(.pdf)です。Excel, Word, PNG, ZIP, docx等のファイル形式は正常に登録できません。アップロードできるファイル容量は、1ファイルあたり最大10MBです。',
  intent: 'info',
};

export const WithAction: StoryFn<typeof Callout> = (args) => (
  <Callout {...args} />
);

WithAction.args = {
  title: '見出しテキスト',
  action: {
    label: 'ラベル',
    onClick: () => alert('Action clicked!'),
  },
  intent: 'info',
};

export const WithDescriptionAndAction: StoryFn<typeof Callout> = (args) => (
  <Callout {...args} />
);

WithDescriptionAndAction.args = {
  title: 'SDS登録時の注意事項',
  description:
    'ファイル形式はPDF(.pdf)です。Excel, Word, PNG, ZIP, docx等のファイル形式は正常に登録できません。アップロードできるファイル容量は、1ファイルあたり最大10MBです。超過するとアップロードできません。パスワードで保護されたPDFファイルは解析することができません。パスワード保護を解除した上でアップロードしてください。PDFは複数件まとめて(上限50件まで)アップロードできます。詳細はヘルプセンターをご確認ください。',
  action: {
    label: 'ラベル',
    onClick: () => alert('Action clicked!'),
  },
  intent: 'info',
};

export const Success: StoryFn<typeof Callout> = (args) => <Callout {...args} />;

Success.args = {
  title: '成功しました',
  description: 'ファイルのアップロードが完了しました。',
  intent: 'success',
};

export const Warning: StoryFn<typeof Callout> = (args) => <Callout {...args} />;

Warning.args = {
  title: '警告テキスト',
  description:
    'こちらの設定を変更すると、既存のデータに影響を与える可能性があります。',
  intent: 'warning',
};

export const Alert: StoryFn<typeof Callout> = (args) => <Callout {...args} />;

Alert.args = {
  title: 'エラーが発生しました',
  description:
    'システムエラーが発生しました。しばらくしてから再度お試しください。',
  intent: 'alert',
};

export const Paid: StoryFn<typeof Callout> = (args) => <Callout {...args} />;

Paid.args = {
  title: '見出しテキスト',
  description:
    'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
  intent: 'paid',
};

export const AllVariants: StoryFn<typeof Callout> = () => (
  <div className="space-y-4">
    <Callout title="Info Callout" intent="info" />
    <Callout title="Success Callout" intent="success" />
    <Callout title="Warning Callout" intent="warning" />
    <Callout title="Alert Callout" intent="alert" />
    <Callout title="Paid Callout" intent="paid" />
    <Callout
      title="With Action"
      intent="info"
      action={{ label: 'ラベル', onClick: () => {} }}
    />
  </div>
);
