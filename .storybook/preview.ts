import type { Preview } from '@storybook/react-vite';

import '../src/index.css';

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
};

export default preview;
