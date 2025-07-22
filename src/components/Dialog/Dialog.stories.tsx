import React, { useState } from 'react';
import { Meta, StoryFn } from 'storybook/react-vite';

import { Button } from '../Button';

import { Dialog, DialogProps } from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    radixDocs: {
      primitive: 'Dialog',
      url: 'https://www.radix-ui.com/primitives/docs/components/dialog',
    },
  },
} as Meta;

const Template: StoryFn<DialogProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return (
    <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Dialog {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  title: 'Modal Title',
  children: 'Modal Content',
  cancelButtonLabel: 'キャンセル',
  confirmButtonLabel: 'アクションボタン',
};
