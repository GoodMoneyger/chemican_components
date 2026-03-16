import React, { useState } from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { Button } from '../Button';
import { TextField } from '../TextField';

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

export const LongContent = Template.bind({});
LongContent.args = {
  isOpen: false,
  title: 'Terms and Conditions',
  children: (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p style={{ marginTop: '16px' }}>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p style={{ marginTop: '16px' }}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </p>
      <p style={{ marginTop: '16px' }}>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
        sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
        sit amet, consectetur, adipisci velit.
      </p>
      <p style={{ marginTop: '16px' }}>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi.
      </p>
      <p style={{ marginTop: '16px' }}>
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
        impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
        assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et
        aut officiis debitis aut rerum necessitatibus saepe eveniet.
      </p>
      <p style={{ marginTop: '16px' }}>
        Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat. Quis autem vel eum iure reprehenderit qui in ea
        voluptate velit esse quam nihil molestiae consequatur.
      </p>
      <p style={{ marginTop: '16px' }}>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
        autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
        nihil molestiae consequatur, vel illum qui dolorem eum fugiat.
      </p>
    </div>
  ),
  actions: [
    {
      label: 'Decline',
      value: 'declined',
      intent: 'secondary',
    },
    {
      label: 'Accept',
      value: 'accepted',
      intent: 'primary',
    },
  ],
};

export const WithOnCancelControl: StoryFn<DialogProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(true);
  const [result, setResult] = useState<unknown>(null);

  const handleClose = (value?: unknown) => {
    setIsOpen(false);
    setResult(value);
    console.log('Dialog closed with value:', value);
  };

  const handleCancel = (close: () => void) => {
    if (hasUnsavedChanges) {
      const confirmed = confirm(
        'You have unsaved changes. Are you sure you want to close?'
      );
      if (confirmed) {
        close();
      }
      // If not confirmed, don't call close() - dialog stays open
    } else {
      close(); // No changes, close immediately
    }
  };

  return (
    <>
      <div style={{ marginBottom: '10px' }}>
        <label>
          <input
            type="checkbox"
            checked={hasUnsavedChanges}
            onChange={(e) => setHasUnsavedChanges(e.target.checked)}
          />{' '}
          Simulate unsaved changes
        </label>
      </div>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      {result && (
        <p style={{ marginTop: '10px', color: '#666' }}>
          Last result: {JSON.stringify(result)}
        </p>
      )}
      <Dialog
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
        onCancel={handleCancel}
      />
    </>
  );
};
WithOnCancelControl.args = {
  isOpen: false,
  title: 'Edit Form',
  children:
    'This dialog demonstrates the onCancel handler. Try clicking outside, pressing Escape, or clicking Cancel with the checkbox enabled/disabled.',
  actions: [
    {
      label: 'Save',
      value: 'saved',
      intent: 'primary',
    },
  ],
};

export const WithPreventedAutoFocus: StoryFn<DialogProps> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button intent="secondary" onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Dialog
        {...args}
        isOpen={isOpen}
        onClose={handleClose}
        onOpenAutoFocus={(e) => e.preventDefault()}
      >
        <div className="gap-lg flex flex-col">
          <p className="text-body-secondary text-sm">
            This dialog uses <code>onOpenAutoFocus</code> to prevent the input
            from being focused when the dialog opens.
          </p>
          <div className="gap-xs flex flex-col">
            <label className="text-body-primary text-sm font-medium">
              Search
            </label>
            <TextField placeholder="Type to search..." />
          </div>
        </div>
      </Dialog>
    </>
  );
};
WithPreventedAutoFocus.args = {
  isOpen: false,
  title: 'Search Dialog',
  actions: [
    {
      label: 'Search',
      value: true,
      intent: 'primary',
    },
  ],
};
