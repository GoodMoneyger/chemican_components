import React from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import type { RadioButtonProps } from './RadioButton';
import { RadioButtonGroup, RadioButton } from './RadioButton';

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    radixDocs: {
      primitive: 'Radio Group',
      url: 'https://www.radix-ui.com/primitives/docs/components/radio-group',
    },
  },
} as Meta;

const Template: StoryFn<RadioButtonProps> = (args) => (
  <RadioButtonGroup>
    <RadioButton {...args} label="選択肢" value="option1" />
    <RadioButton {...args} label="選択肢" value="option2" />
    <RadioButton {...args} label="選択肢" value="option3" />
  </RadioButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
  invalid: false,
  disabled: false,
};

export const Selected = Template.bind({});
Selected.args = {
  invalid: false,
  disabled: false,
};
Selected.decorators = [
  (Story) => (
    <RadioButtonGroup defaultValue="option2">
      <Story />
    </RadioButtonGroup>
  ),
];

export const Error = Template.bind({});
Error.args = {
  invalid: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  invalid: false,
  disabled: true,
};

export const DisabledSelected = Template.bind({});
DisabledSelected.args = {
  invalid: false,
  disabled: true,
};
DisabledSelected.decorators = [
  (Story) => (
    <RadioButtonGroup defaultValue="option2">
      <Story />
    </RadioButtonGroup>
  ),
];

export const AllStates: StoryFn = () => (
  <div className="space-y-4">
    <div>
      <h3 className="mb-2 text-lg font-semibold">Default States</h3>
      <RadioButtonGroup className="space-y-2">
        <RadioButton label="選択肢 (Default Off)" value="default-off" />
        <RadioButton label="選択肢 (Default On)" value="default-on" />
      </RadioButtonGroup>
    </div>

    <div>
      <h3 className="mb-2 text-lg font-semibold">Error States</h3>
      <RadioButtonGroup className="space-y-2">
        <RadioButton label="選択肢 (Error Off)" value="error-off" invalid />
        <RadioButton label="選択肢 (Error On)" value="error-on" invalid />
      </RadioButtonGroup>
    </div>

    <div>
      <h3 className="mb-2 text-lg font-semibold">Disabled States</h3>
      <RadioButtonGroup className="space-y-2" defaultValue="disabled-on">
        <RadioButton
          label="選択肢 (Disabled Off)"
          value="disabled-off"
          disabled
        />
        <RadioButton
          label="選択肢 (Disabled On)"
          value="disabled-on"
          disabled
        />
      </RadioButtonGroup>
    </div>
  </div>
);
