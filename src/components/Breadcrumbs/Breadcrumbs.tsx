import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { IconChevronRight } from '@tabler/icons-react';

import { cn } from '../../lib/utils';

const breadcrumbsVariants = cva('gap-xxs flex items-center', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-md',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

const breadcrumbItemVariants = cva(
  `text-body-primary hover:text-interactive-primary-hover
  focus-visible:ring-interactive-focused rounded transition-colors
  focus-visible:ring-2 focus-visible:outline-none`,
  {
    variants: {
      isActive: {
        true: 'text-body-primary font-normal cursor-default',
        false: 'text-body-primary cursor-pointer underline',
      },
    },
    defaultVariants: {
      isActive: false,
    },
  }
);

const separatorVariants = cva('text-shape-primary flex-shrink-0', {
  variants: {
    size: {
      sm: 'size-4',
      md: 'size-5',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbsProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'children'>,
    VariantProps<typeof breadcrumbsVariants> {
  items: BreadcrumbItem[];
  separator?: React.ComponentType<{ className?: string }>;
  maxItems?: number;
  'aria-label'?: string;
}

export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  (
    {
      items,
      size,
      separator: SeparatorIcon = IconChevronRight,
      maxItems,
      className,
      'aria-label': ariaLabel = 'breadcrumb',
      ...props
    },
    ref
  ) => {
    let displayItems = items;

    // Handle maxItems truncation
    if (maxItems && items.length > maxItems) {
      const firstItem = items[0]!;
      const lastItems = items.slice(-(maxItems - 1));
      displayItems = [firstItem, { label: '…' }, ...lastItems];
    }

    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={cn(breadcrumbsVariants({ size }), className)}
        {...props}
      >
        <ol className="gap-xxs m-0 p-0 flex list-none items-center">
          {displayItems.map((item, index) => {
            const isLast = index === displayItems.length - 1;
            const isEllipsis = item.label === '…';

            return (
              <React.Fragment key={`${item.label}-${index}`}>
                <li className="flex items-center">
                  {isEllipsis ? (
                    <span
                      className={cn(breadcrumbItemVariants({ isActive: true }))}
                    >
                      {item.label}
                    </span>
                  ) : item.href || item.onClick ? (
                    <a
                      href={item.href}
                      onClick={item.onClick}
                      className={cn(
                        breadcrumbItemVariants({ isActive: isLast })
                      )}
                      aria-current={isLast ? 'page' : undefined}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span
                      className={cn(breadcrumbItemVariants({ isActive: true }))}
                      aria-current={isLast ? 'page' : undefined}
                    >
                      {item.label}
                    </span>
                  )}
                </li>
                {!isLast && (
                  <li
                    className="flex items-center"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <SeparatorIcon
                      className={cn(separatorVariants({ size }))}
                    />
                  </li>
                )}
              </React.Fragment>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';
