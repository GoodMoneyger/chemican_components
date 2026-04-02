import React from 'react';
import type { Preview } from '@storybook/react-vite';

import '../src/bundle.css';
import { TooltipProvider } from '../src/components/Tooltip';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Design System',
          ['Introduction', 'Installation', 'Development', 'Tokens'],
          'Components',
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <TooltipProvider>
        <Story />
      </TooltipProvider>
    ),
  ],
};

export default preview;
