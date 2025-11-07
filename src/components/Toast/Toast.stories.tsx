import React, { useState } from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { Button } from '../Button';

import type { ToastItemProps } from './Toast';
import { ToastItem, ToastProvider } from './Toast';

export default {
  title: 'Components/Toast',
  component: ToastItem,
  parameters: {
    radixDocs: {
      primitive: 'Toast',
      url: 'https://www.radix-ui.com/primitives/docs/components/toast',
    },
  },
} as Meta;

const Template: StoryFn<ToastItemProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  return (
    <ToastProvider>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Show Toast
      </Button>
      <ToastItem {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ToastProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Toast Title',
  message: 'This is a toast message',
  isOpen: false,
  level: 'info',
};

export const Success = Template.bind({});
Success.args = {
  title: 'Success',
  message: 'Operation completed successfully',
  isOpen: false,
  level: 'success',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error',
  message: 'An error occurred',
  isOpen: false,
  level: 'error',
};

export const Warning = Template.bind({});
Warning.args = {
  title: 'Warning',
  message: 'Please be aware of this warning',
  isOpen: false,
  level: 'warning',
};

export const MessageOnly = Template.bind({});
MessageOnly.args = {
  message: 'This is a toast with only a message, no title',
  isOpen: false,
  level: 'info',
};

export const Inline: StoryFn<ToastItemProps> = (args) => {
  return (
    <ToastProvider>
      <ToastItem {...args} onClose={() => {}} />
    </ToastProvider>
  );
};
Inline.args = {
  message: 'This toast is displayed inline without triggers or dismiss actions',
  level: 'info',
  isOpen: true,
};

export const MultipleToasts: StoryFn = () => {
  const [toasts, setToasts] = useState<
    Array<{ id: number; level: ToastItemProps['level']; open: boolean }>
  >([]);
  const [counter, setCounter] = useState(0);

  const addToast = (level: ToastItemProps['level']) => {
    const id = counter;
    setCounter(counter + 1);
    setToasts([...toasts, { id, level, open: true }]);
  };

  const removeToast = (id: number) => {
    setToasts(toasts.map((t) => (t.id === id ? { ...t, open: false } : t)));
    setTimeout(() => {
      setToasts(toasts.filter((t) => t.id !== id));
    }, 200);
  };

  return (
    <ToastProvider>
      <div className="gap-xs flex">
        <Button intent="secondary" onClick={() => addToast('info')}>
          Show Info Toast
        </Button>
        <Button intent="primary" onClick={() => addToast('success')}>
          Show Success Toast
        </Button>
        <Button intent="alert" onClick={() => addToast('error')}>
          Show Error Toast
        </Button>
        <Button intent="secondary" onClick={() => addToast('warning')}>
          Show Warning Toast
        </Button>
      </div>
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          title={`${toast.level.charAt(0).toUpperCase() + toast.level.slice(1)} Toast ${toast.id}`}
          message={`This is a ${toast.level} message`}
          level={toast.level}
          isOpen={toast.open}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </ToastProvider>
  );
};
