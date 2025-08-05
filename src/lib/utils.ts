import { extendTailwindMerge } from 'tailwind-merge';
import classNames, { ArgumentArray } from 'classnames';
import React from 'react';
import { TablerIcon } from '@tabler/icons-react';

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxxl'],
    },
  },
});

export const cn = (...inputs: ArgumentArray) => {
  return twMerge(classNames(inputs));
};

// Icon utility types and functions
export type IconProp = React.ReactNode | TablerIcon;

export interface IconRenderOptions {
  size?: number;
  className?: string;
}

/**
 * Renders an icon that can be either a React node or a TablerIcon component.
 * If a TablerIcon component is passed, it will be rendered with the specified size.
 * If a React node is passed, it will be rendered as-is.
 */
export const renderIcon = (
  icon: IconProp | undefined,
  options: IconRenderOptions = {}
): React.ReactNode => {
  if (!icon) return null;

  const { size = 16, className } = options;

  // If it's a function (React component), render it with specified size
  if (typeof icon === 'function') {
    const IconComponent = icon as TablerIcon;
    return React.createElement(IconComponent, { size, className });
  }

  // If it's a forwardRef component (has $$typeof and render function), render it with specified size
  if (
    typeof icon === 'object' &&
    icon &&
    '$$typeof' in icon &&
    'render' in icon &&
    typeof icon.render === 'function'
  ) {
    const IconComponent = icon as unknown as TablerIcon;
    return React.createElement(IconComponent, { size, className });
  }

  // Otherwise, render as-is (React node/JSX element)
  return icon;
};
