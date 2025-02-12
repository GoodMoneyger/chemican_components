import type { Meta, StoryFn } from '@storybook/react';

import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    invalid: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template: StoryFn<typeof Textarea> = (args) => <Textarea {...args} />;
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  characterLimit: 0,
};
