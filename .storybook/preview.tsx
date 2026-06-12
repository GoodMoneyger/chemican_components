import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react-vite';

import '../src/bundle.css';
import { TooltipProvider } from '../src/components/Tooltip';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global color theme',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: '', title: 'SDS Manager theme' },
          { value: 'Blue Mode', title: 'Delivery Manager theme' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: '',
  },
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
    (Story, context) => {
      const theme = context.globals.theme;

      useEffect(() => {
        const root = document.documentElement;
        if (theme) {
          root.setAttribute('data-theme', theme);
        } else {
          root.removeAttribute('data-theme');
        }
      }, [theme]);

      return (
        <TooltipProvider>
          <Story />
        </TooltipProvider>
      );
    },
  ],
};

export default preview;
