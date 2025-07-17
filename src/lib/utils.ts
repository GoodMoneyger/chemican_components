import { extendTailwindMerge } from 'tailwind-merge';
import classNames from 'classnames';

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxxl'],
    },
  },
});

export const cn = (...inputs: (string | undefined | null)[]) => {
  return twMerge(classNames(inputs));
};
