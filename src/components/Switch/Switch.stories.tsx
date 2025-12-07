import React, { useState } from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    label: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    defaultChecked: {
      control: { type: 'boolean' },
    },
    onCheckedChange: {
      action: 'changed',
      table: {
        disable: true, // Hide from controls
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      // Add Figma URL when available
    },
    radixDocs: {
      primitive: 'Switch',
      url: 'https://www.radix-ui.com/primitives/docs/components/switch',
    },
  },
};

export default meta;

const Template: StoryFn<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(args.defaultChecked || false);

  return (
    <Switch
      {...args}
      checked={checked}
      onCheckedChange={(newChecked) => {
        setChecked(newChecked);
        args.onCheckedChange?.(newChecked);
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  defaultChecked: false,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Enable notifications',
  disabled: false,
  defaultChecked: false,
};
WithLabel.parameters = {
  docs: {
    description: {
      story:
        'Switch with a label. The label is properly linked to the switch control using htmlFor for better accessibility. Clicking the label will toggle the switch.',
    },
  },
};

export const Checked = Template.bind({});
Checked.args = {
  label: 'Enable notifications',
  disabled: false,
  defaultChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Enable notifications',
  disabled: true,
  defaultChecked: false,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  label: 'Enable notifications',
  disabled: true,
  defaultChecked: true,
};

export const AllStates: StoryFn = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-lg font-semibold">Default States</h3>
        <div className="gap-3 flex flex-col">
          <Switch label="Unchecked" />
          <Switch label="Checked" defaultChecked />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold">Disabled States</h3>
        <div className="gap-3 flex flex-col">
          <Switch label="Disabled Unchecked" disabled />
          <Switch label="Disabled Checked" disabled defaultChecked />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-lg font-semibold">Without Label</h3>
        <div className="gap-3 flex flex-col">
          <Switch />
          <Switch defaultChecked />
          <Switch disabled />
        </div>
      </div>
    </div>
  );
};
AllStates.parameters = {
  docs: {
    description: {
      story:
        'Comprehensive view of all switch states including enabled, checked, and disabled variations, both with and without labels.',
    },
  },
};

export const ControlledExample: StoryFn = () => {
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [wifi, setWifi] = useState(true);
  const [bluetooth, setBluetooth] = useState(false);

  return (
    <div className="space-y-4">
      <div className="rounded-md p-4 border">
        <h3 className="mb-4 text-lg font-semibold">Settings</h3>
        <div className="gap-4 flex flex-col">
          <Switch
            label="Airplane Mode"
            checked={airplaneMode}
            onCheckedChange={setAirplaneMode}
          />
          <Switch
            label="Wi-Fi"
            checked={wifi}
            onCheckedChange={setWifi}
            disabled={airplaneMode}
          />
          <Switch
            label="Bluetooth"
            checked={bluetooth}
            onCheckedChange={setBluetooth}
            disabled={airplaneMode}
          />
        </div>
      </div>
      <div className="text-sm text-body-secondary">
        <p>Current state:</p>
        <ul className="ml-4 mt-2 list-disc">
          <li>Airplane Mode: {airplaneMode ? 'On' : 'Off'}</li>
          <li>Wi-Fi: {wifi ? 'On' : 'Off'}</li>
          <li>Bluetooth: {bluetooth ? 'On' : 'Off'}</li>
        </ul>
      </div>
    </div>
  );
};
ControlledExample.parameters = {
  docs: {
    description: {
      story:
        'Example of controlled switches with interdependent states. When Airplane Mode is enabled, Wi-Fi and Bluetooth switches become disabled.',
    },
  },
};
