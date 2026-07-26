import React from 'react';
import { Slot } from 'radix-ui';
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
  focus-visible:ring-interactive-focused rounded truncate overflow-hidden
  transition-colors focus-visible:ring-2 focus-visible:outline-none`,
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
  /**
   * Render `label` as the crumb element itself via Radix Slot. Useful for
   * router links, e.g. `{ label: <Link to="/">ホーム</Link>, asChild: true }`.
   * The element receives the crumb styling and `aria-current`; `href` is
   * ignored since the element provides its own navigation.
   */
  asChild?: boolean;
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
        <ol className="gap-xxs m-0 p-0 min-w-0 flex list-none items-center">
          {displayItems.map((item, index) => {
            const isLast = index === displayItems.length - 1;
            const isEllipsis = item.label === '…';

            return (
              <React.Fragment key={`${item.label}-${index}`}>
                <li className="min-w-0 flex items-center">
                  {isEllipsis ? (
                    <span
                      className={cn(breadcrumbItemVariants({ isActive: true }))}
                    >
                      {item.label}
                    </span>
                  ) : item.asChild ? (
                    <Slot.Slot
                      onClick={item.onClick}
                      className={cn(
                        breadcrumbItemVariants({ isActive: isLast })
                      )}
                      aria-current={isLast ? 'page' : undefined}
                    >
                      {item.label}
                    </Slot.Slot>
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
