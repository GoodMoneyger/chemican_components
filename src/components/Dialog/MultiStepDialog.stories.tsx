import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';

import { MultiStepDialog } from './MultiStepDialog';

const meta = {
  title: 'Components/MultiStepDialog',
  component: MultiStepDialog.Root,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MultiStepDialog.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic three-step wizard
const BasicWizardComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Wizard</Button>
      <MultiStepDialog.Root isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MultiStepDialog.Step>
          <MultiStepDialog.Header>
            Step 1: Personal Information
          </MultiStepDialog.Header>
          <MultiStepDialog.Body>
            <div className="gap-md flex flex-col">
              <p>Enter your personal information to continue.</p>
              <input
                type="text"
                placeholder="Name"
                className="border-divider-default rounded-md px-md py-sm
                  border-1"
              />
              <input
                type="email"
                placeholder="Email"
                className="border-divider-default rounded-md px-md py-sm
                  border-1"
              />
            </div>
          </MultiStepDialog.Body>
          <MultiStepDialog.Footer>
            <MultiStepDialog.Action
              label="次へ"
              intent="primary"
              onAction={({ nextStep }) => nextStep()}
            />
          </MultiStepDialog.Footer>
        </MultiStepDialog.Step>

        <MultiStepDialog.Step>
          <MultiStepDialog.Header>Step 2: Preferences</MultiStepDialog.Header>
          <MultiStepDialog.Body>
            <div className="gap-md flex flex-col">
              <p>Choose your preferences.</p>
              <label className="gap-sm flex items-center">
                <input type="checkbox" />
                <span>Email notifications</span>
              </label>
              <label className="gap-sm flex items-center">
                <input type="checkbox" />
                <span>SMS notifications</span>
              </label>
            </div>
          </MultiStepDialog.Body>
          <MultiStepDialog.Footer>
            <MultiStepDialog.Action
              label="戻る"
              intent="secondary"
              onAction={({ prevStep }) => prevStep()}
            />
            <MultiStepDialog.Action
              label="次へ"
              intent="primary"
              onAction={({ nextStep }) => nextStep()}
            />
          </MultiStepDialog.Footer>
        </MultiStepDialog.Step>

        <MultiStepDialog.Step>
          <MultiStepDialog.Header>Step 3: Confirmation</MultiStepDialog.Header>
          <MultiStepDialog.Body>
            <div className="gap-md flex flex-col">
              <p>Please review and confirm your information.</p>
              <div className="bg-surface-primary rounded-md px-md py-sm">
                <p className="font-bold">Summary</p>
                <p>Name: John Doe</p>
                <p>Email: john@example.com</p>
                <p>Notifications: Email, SMS</p>
              </div>
            </div>
          </MultiStepDialog.Body>
          <MultiStepDialog.Footer>
            <MultiStepDialog.Action
              label="戻る"
              intent="secondary"
              onAction={({ prevStep }) => prevStep()}
            />
            <MultiStepDialog.Action
              label="Confirm"
              intent="primary"
              closeOnAction
              onAction={() => console.log('Confirmed!')}
            />
          </MultiStepDialog.Footer>
        </MultiStepDialog.Step>
      </MultiStepDialog.Root>
    </>
  );
};

export const BasicWizard: Story = {
  render: () => <BasicWizardComponent />,
};

// Custom navigation logic with validation
const WithValidationComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const validateStep1 = () => {
    if (!name || !email) {
      alert('Please fill in all fields');
      return false;
    }
    if (!email.includes('@')) {
      alert('Please enter a valid email');
      return false;
    }
    return true;
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Form</Button>
      <MultiStepDialog.Root isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MultiStepDialog.Step>
          <MultiStepDialog.Header>Registration</MultiStepDialog.Header>
          <MultiStepDialog.Body>
            <div className="gap-md flex flex-col">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border-divider-default rounded-md px-md py-sm
                  border-1"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-divider-default rounded-md px-md py-sm
                  border-1"
              />
            </div>
          </MultiStepDialog.Body>
          <MultiStepDialog.Footer>
            <MultiStepDialog.Action
              label="次へ"
              intent="primary"
              onAction={({ nextStep }) => {
                if (validateStep1()) {
                  nextStep();
                }
              }}
            />
          </MultiStepDialog.Footer>
        </MultiStepDialog.Step>

        <MultiStepDialog.Step>
          <MultiStepDialog.Header>Success</MultiStepDialog.Header>
          <MultiStepDialog.Body>
            <div className="gap-md flex flex-col">
              <p>Registration successful!</p>
              <p className="text-body-secondary text-sm">
                Name: {name}
                <br />
                Email: {email}
              </p>
            </div>
          </MultiStepDialog.Body>
          <MultiStepDialog.Footer>
            <MultiStepDialog.Action
              label="戻る"
              intent="secondary"
              onAction={({ prevStep }) => prevStep()}
            />
            <MultiStepDialog.Action
              label="Done"
              intent="primary"
              closeOnAction
            />
          </MultiStepDialog.Footer>
        </MultiStepDialog.Step>
      </MultiStepDialog.Root>
    </>
  );
};

export const WithValidation: Story = {
  render: () => <WithValidationComponent />,
};

// Async operations in steps
const WithAsyncOperationsComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    return true;
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Start Process</Button>
      <MultiStepDialog.Root isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MultiStepDialog.Step>
          <MultiStepDialog.Header>Prepare Data</MultiStepDialog.Header>
          <MultiStepDialog.Body>
            <p>Fill in the required information.</p>
          </MultiStepDialog.Body>
          <MultiStepDialog.Footer>
            <MultiStepDialog.Action
              label="次へ"
              intent="primary"
              onAction={({ nextStep }) => nextStep()}
            />
          </MultiStepDialog.Footer>
        </MultiStepDialog.Step>

        <MultiStepDialog.Step>
          <MultiStepDialog.Header>Submit</MultiStepDialog.Header>
          <MultiStepDialog.Body>
            <p>Ready to submit your data?</p>
            {loading && <p className="text-body-secondary">Processing...</p>}
          </MultiStepDialog.Body>
          <MultiStepDialog.Footer>
            <MultiStepDialog.Action
              label="戻る"
              intent="secondary"
              disabled={loading}
              onAction={({ prevStep }) => prevStep()}
            />
            <MultiStepDialog.Action
              label={loading ? 'Processing...' : 'Submit'}
              intent="primary"
              disabled={loading}
              onAction={async ({ nextStep }) => {
                await handleSubmit();
                nextStep();
              }}
            />
          </MultiStepDialog.Footer>
        </MultiStepDialog.Step>
      </MultiStepDialog.Root>
    </>
  );
};

export const WithAsyncOperations: Story = {
  render: () => <WithAsyncOperationsComponent />,
};

// Single step (edge case)
const SingleStepComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Dialog</Button>
      <MultiStepDialog.Root isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <MultiStepDialog.Step>
          <MultiStepDialog.Header>Single Step Dialog</MultiStepDialog.Header>
          <MultiStepDialog.Body>
            <p>
              This works with a single step too, though regular Dialog might be
              simpler.
            </p>
          </MultiStepDialog.Body>
          <MultiStepDialog.Footer>
            <MultiStepDialog.Action
              label="Confirm"
              intent="primary"
              closeOnAction
            />
          </MultiStepDialog.Footer>
        </MultiStepDialog.Step>
      </MultiStepDialog.Root>
    </>
  );
};

export const SingleStep: Story = {
  render: () => <SingleStepComponent />,
};
