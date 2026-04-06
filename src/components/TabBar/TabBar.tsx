import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Tabs as RadixTabs } from 'radix-ui';
import { IconDotsVertical } from '@tabler/icons-react';

import { cn } from '../../lib/utils';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from '../DropdownMenu';

// TabBar Context for size propagation
interface TabBarContextValue {
  size?: 'normal' | 'small';
}

const TabBarContext = React.createContext<TabBarContextValue>({
  size: 'normal',
});

const useTabBarContext = () => React.useContext(TabBarContext);

// TabBar container variants
const tabBarVariants = cva('inline-flex', {
  variants: {
    size: {
      normal: 'h-12',
      small: 'h-10',
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

// Individual Tab variants
const tabVariants = cva(
  `text-body-primary border-divider-default data-[state=active]:font-bold
  disabled:text-interactive-disabled after:left-0 after:h-0
  disabled:hover:after:h-0 relative inline-flex cursor-pointer items-center
  justify-center border-b leading-[100%] tracking-[0] whitespace-nowrap
  transition-colors after:absolute after:bottom-[-1px] after:w-full
  after:transition-all after:content-[''] hover:after:h-[2px]
  hover:after:bg-[var(--chemican-green-800)] disabled:cursor-not-allowed
  data-[state=active]:text-[var(--chemican-green-800)]
  data-[state=active]:after:h-[2px]
  data-[state=active]:after:bg-[var(--chemican-green-800)]`,
  {
    variants: {
      size: {
        normal: 'p-md h-12 text-lg',
        small: 'p-sm h-9.5 text-md',
      },
    },
    defaultVariants: {
      size: 'normal',
    },
  }
);

// More button variants
const moreButtonVariants = cva(
  `text-body-primary border-divider-default relative inline-flex cursor-pointer
  items-center justify-center border-b leading-[100%] tracking-[0]
  whitespace-nowrap transition-colors hover:text-[var(--chemican-green-800)]`,
  {
    variants: {
      size: {
        normal: 'p-md h-12 text-lg',
        small: 'p-sm h-9.5 text-md',
      },
    },
    defaultVariants: {
      size: 'normal',
    },
  }
);

interface TabChild {
  value: string;
  label: React.ReactNode;
  disabled?: boolean | undefined;
  asChild?: boolean;
  childElement?: React.ReactElement<Record<string, unknown>>;
}

function extractTabChildren(children: React.ReactNode): TabChild[] {
  const tabs: TabChild[] = [];
  React.Children.forEach(children, (child) => {
    if (React.isValidElement<TabProps>(child) && child.type === Tab) {
      const {
        value,
        label,
        disabled,
        asChild,
        children: tabChildren,
      } = child.props;
      const entry: TabChild = { value, label, disabled };

      if (asChild) {
        const childElement = React.Children.only(
          tabChildren
        ) as React.ReactElement<Record<string, unknown>>;
        entry.asChild = true;
        entry.childElement = childElement;
      }

      tabs.push(entry);
    }
  });
  return tabs;
}

// TabBar Root Component
export interface TabBarProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabs.Root>,
    VariantProps<typeof tabBarVariants> {
  /** Label for the overflow "more" button. Receives the count of hidden tabs. Defaults to `(count) => \`${count} more\`` */
  moreLabel?: (count: number) => React.ReactNode;
}

export const TabBar = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Root>,
  TabBarProps
>(({ className, size, children, moreLabel, ...props }, ref) => {
  const contextValue: TabBarContextValue = size ? { size } : {};
  const effectiveSize = size ?? 'normal';

  const listRef = React.useRef<HTMLDivElement>(null);
  const moreRef = React.useRef<HTMLDivElement>(null);
  const tabRefs = React.useRef<Map<string, HTMLElement>>(new Map());
  const tabWidthCache = React.useRef<Map<string, number>>(new Map());

  const tabChildren = React.useMemo(
    () => extractTabChildren(children),
    [children]
  );

  const [visibleCount, setVisibleCount] = React.useState(tabChildren.length);
  const [measured, setMeasured] = React.useState(false);

  // Cache tab widths while they are visible (offsetWidth > 0).
  // Hidden tabs report 0, so we keep the last known width.
  // Also prunes entries for tabs that no longer exist.
  const snapshotTabWidths = React.useCallback(() => {
    const currentKeys = new Set(tabRefs.current.keys());

    // Prune stale entries
    tabWidthCache.current.forEach((_w, key) => {
      if (!currentKeys.has(key)) {
        tabWidthCache.current.delete(key);
      }
    });

    // Update widths for visible tabs
    tabRefs.current.forEach((el, value) => {
      const w = el.offsetWidth;
      if (w > 0) {
        tabWidthCache.current.set(value, w);
      }
    });
  }, []);

  const calculateVisibleTabs = React.useCallback(() => {
    const list = listRef.current;
    if (!list) return;

    // Snapshot widths before calculating — visible tabs update the cache,
    // hidden tabs keep their previously cached width.
    snapshotTabWidths();

    const containerWidth = list.clientWidth;
    const moreButton = moreRef.current;
    const moreButtonWidth = moreButton ? moreButton.offsetWidth + 8 : 80;

    let totalWidth = 0;
    let fitCount = 0;

    for (const tab of tabChildren) {
      const tabWidth = tabWidthCache.current.get(tab.value);
      if (tabWidth == null) continue;
      const newTotal = totalWidth + tabWidth;

      if (fitCount < tabChildren.length - 1) {
        // Not the last tab: must also fit the "more" button
        if (newTotal + moreButtonWidth <= containerWidth) {
          totalWidth = newTotal;
          fitCount++;
        } else {
          break;
        }
      } else {
        // Last tab: no "more" button needed if all fit
        if (newTotal <= containerWidth) {
          totalWidth = newTotal;
          fitCount++;
        } else {
          break;
        }
      }
    }

    // If only 0 tabs fit, show at least 1
    if (fitCount === 0 && tabChildren.length > 0) {
      fitCount = 1;
    }

    setVisibleCount(fitCount);
    setMeasured(true);
  }, [tabChildren, snapshotTabWidths]);

  React.useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const observer = new ResizeObserver(() => {
      calculateVisibleTabs();
    });

    observer.observe(list);
    calculateVisibleTabs();

    return () => observer.disconnect();
  }, [calculateVisibleTabs]);

  const overflowTabs = tabChildren.slice(visibleCount);
  const hasOverflow = overflowTabs.length > 0;

  const activeValue = props.value ?? props.defaultValue;
  const activeInOverflow = overflowTabs.some(
    (tab) => tab.value === activeValue
  );

  const formatMoreLabel = moreLabel ?? ((count: number) => `${count} more`);

  return (
    <TabBarContext.Provider value={contextValue}>
      <RadixTabs.Root ref={ref} className={cn('w-full', className)} {...props}>
        <RadixTabs.List
          ref={listRef}
          className={cn(tabBarVariants({ size: effectiveSize }), 'w-full')}
          role="tablist"
        >
          {tabChildren.map((tab, index) => {
            const triggerClassName = cn(
              tabVariants({ size: effectiveSize }),
              measured && index >= visibleCount && 'hidden'
            );

            return (
              <RadixTabs.Trigger
                key={tab.value}
                ref={(el: HTMLElement | null) => {
                  if (el) {
                    tabRefs.current.set(tab.value, el);
                  } else {
                    tabRefs.current.delete(tab.value);
                  }
                }}
                value={tab.value}
                disabled={tab.disabled}
                className={!tab.asChild ? triggerClassName : undefined}
                asChild={!!tab.asChild}
              >
                {tab.asChild && tab.childElement
                  ? React.cloneElement(
                      tab.childElement,
                      {
                        className: cn(
                          triggerClassName,
                          tab.childElement.props.className as string | undefined
                        ),
                      },
                      tab.label
                    )
                  : tab.label}
              </RadixTabs.Trigger>
            );
          })}

          {hasOverflow && measured && (
            <div ref={moreRef} className="inline-flex shrink-0">
              <Dropdown>
                <DropdownTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                      moreButtonVariants({ size: effectiveSize }),
                      activeInOverflow &&
                        'font-bold text-[var(--chemican-green-800)]'
                    )}
                  >
                    <IconDotsVertical
                      size={effectiveSize === 'small' ? 16 : 20}
                      className="mr-xxs"
                    />
                    {formatMoreLabel(overflowTabs.length)}
                  </button>
                </DropdownTrigger>
                <DropdownContent align="end" size="sm">
                  {overflowTabs.map((tab) => {
                    const itemClassName = cn(
                      tab.value === activeValue &&
                        'font-bold text-[var(--chemican-green-800)]'
                    );

                    if (tab.asChild && tab.childElement) {
                      return (
                        <DropdownItem
                          key={tab.value}
                          disabled={tab.disabled ?? false}
                          asChild
                          className={itemClassName}
                        >
                          {React.cloneElement(tab.childElement, {}, tab.label)}
                        </DropdownItem>
                      );
                    }

                    return (
                      <DropdownItem
                        key={tab.value}
                        disabled={tab.disabled ?? false}
                        onSelect={() => {
                          if (props.onValueChange) {
                            props.onValueChange(tab.value);
                          }
                        }}
                        className={itemClassName}
                      >
                        {tab.label}
                      </DropdownItem>
                    );
                  })}
                </DropdownContent>
              </Dropdown>
            </div>
          )}
        </RadixTabs.List>
      </RadixTabs.Root>
    </TabBarContext.Provider>
  );
});

TabBar.displayName = 'TabBar';

// Tab Component
export interface TabProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger>,
    VariantProps<typeof tabVariants> {
  label: React.ReactNode;
}

export const Tab = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Trigger>,
  TabProps
>(({ className, size, label, disabled, ...props }, ref) => {
  const { size: contextSize } = useTabBarContext();
  const effectiveSize = size ?? contextSize;

  return (
    <RadixTabs.Trigger
      ref={ref}
      className={cn(tabVariants({ size: effectiveSize }), className)}
      disabled={disabled}
      {...props}
    >
      {label}
    </RadixTabs.Trigger>
  );
});

Tab.displayName = 'Tab';
