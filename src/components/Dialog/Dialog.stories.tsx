import React, { useState } from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { Button } from '../Button';

import type { DialogProps } from './Dialog';
import { Dialog } from './Dialog';

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
  const [result, setResult] = useState<unknown>(null);

  const handleClose = (value?: unknown) => {
    setIsOpen(false);
    setResult(value);
    console.log('Dialog closed with value:', value);
  };

  return (
    <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      {result && (
        <p style={{ marginTop: '10px', color: '#666' }}>
          Last result: {JSON.stringify(result)}
        </p>
      )}
      <Dialog {...args} isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
  title: 'Confirmation Dialog',
  children: 'Are you sure you want to proceed with this action?',
  actions: [
    {
      label: 'Confirm',
      value: true,
      intent: 'primary',
    },
  ],
};

export const MultipleActions = Template.bind({});
MultipleActions.args = {
  isOpen: false,
  title: 'Save Document',
  children: 'Choose how you want to save your document.',
  actions: [
    {
      label: 'Save as Draft',
      value: 'draft',
      intent: 'secondary',
    },
    {
      label: 'Publish',
      value: 'publish',
      intent: 'primary',
    },
  ],
};

export const NonCancellable = Template.bind({});
NonCancellable.args = {
  isOpen: false,
  title: 'Required Action',
  children: 'You must choose one of the following options to continue.',
  cancellable: false,
  actions: [
    {
      label: 'Option A',
      value: 'optionA',
      intent: 'secondary',
    },
    {
      label: 'Option B',
      value: 'optionB',
      intent: 'primary',
    },
  ],
};

export const WithCustomActions = Template.bind({});
WithCustomActions.args = {
  isOpen: false,
  title: 'Custom Actions',
  children: 'This dialog demonstrates custom action handlers.',
  actions: [
    {
      label: 'Log Info',
      value: 'info',
      intent: 'tertiary',
      onAction: () => console.log('Info action triggered'),
    },
    {
      label: 'Delete',
      value: 'delete',
      intent: 'text',
      onAction: () => console.log('Delete action triggered'),
      classNames: 'text-red-600 hover:bg-red-50',
    },
    {
      label: 'Save',
      value: 'save',
      intent: 'primary',
      onAction: () => console.log('Save action triggered'),
    },
  ],
};
