import type { Meta, StoryFn } from 'storybook/react-vite';

import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  argTypes: {
    invalid: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;

const Template: StoryFn<typeof TextArea> = (args) => <TextArea {...args} />;
export const Default = Template.bind({});
Default.args = {
  placeholder: 'Placeholder',
  characterLimit: 0,
  invalid: false,
};
