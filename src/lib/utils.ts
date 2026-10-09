import { extendTailwindMerge } from 'tailwind-merge';
import { clsx } from 'clsx';
import React from 'react';
import type { ClassArray } from 'clsx';
import type { TablerIcon } from '@tabler/icons-react';

const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxxl'],
    },
    classGroups: {
      'bg-image': [{ bg: ['row-overlay-fade'] }],
      z: [
        {
          z: [
            'slight',
            'sticky-content',
            'sticky-bar',
            'page-header',
            'navigation',
            'floating',
            'action-bar',
            'drawer',
            'dialog',
            'dropdown',
            'tooltip',
            'toast',
            'max',
          ],
        },
      ],
    },
  },
});

export const cn = (...inputs: ClassArray) => {
  return twMerge(clsx(inputs));
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

/** Default `getItemValue`: the value itself for strings and numbers, or its `id`. */
export const resolveValueKey = (
  value: unknown,
  owner: string
): string | number => {
  if (typeof value === 'string' || typeof value === 'number') return value;
  if (value !== null && typeof value === 'object' && 'id' in value) {
    const { id } = value as { id: unknown };
    if (typeof id === 'string' || typeof id === 'number') return id;
  }
  throw new Error(
    `${owner}: values must be strings, numbers, or objects with a string or number \`id\`. Pass \`getItemValue\` for any other shape.`
  );
};
