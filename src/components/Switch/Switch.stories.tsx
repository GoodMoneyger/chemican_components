import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
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
      url: 'https://www.radix-ui.com/primitives/docs/components/switch'
    }
  },
};

export default meta;

const Template: StoryFn<typeof Switch> = (args) => {
  const [checked, setChecked] = React.useState(args.defaultChecked || false);
  
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
