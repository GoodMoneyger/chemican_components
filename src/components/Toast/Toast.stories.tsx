import React, { useState } from 'react';
import { Meta, StoryFn } from 'storybook/react-vite';

import { Button } from '../Button';

import { Toast, ToastProps } from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    radixDocs: {
      primitive: 'Toast',
      url: 'https://www.radix-ui.com/primitives/docs/components/toast',
    },
  },
} as Meta;

const Template: StoryFn<ToastProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return (
    <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Show Toast
      </Button>
      <Toast {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Toast Title',
  message: 'This is a toast message',
  isOpen: false,
  level: 'info',
};
