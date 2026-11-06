import React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';
import { Tabs as RadixTabs } from 'radix-ui';
import { IconDotsVertical } from '@tabler/icons-react';

import { cn } from '../../lib/utils';
import { useHorizontalScrollEdges } from '../../lib/hooks';
import { ScrollEdgeShadows } from '../../lib/components/ScrollEdgeShadows';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from '../DropdownMenu';

// TabBar container variants
const tabBarVariants = cva('inline-flex', {
  variants: {
    size: {
      normal: 'h-12 max-md:h-10',
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
  disabled:hover:after:h-0 hover:after:bg-shape-interactive-primary-default
  data-[state=active]:text-interactive-primary-default
  data-[state=active]:after:bg-shape-interactive-primary-selected relative
  inline-flex cursor-pointer items-center justify-center border-b leading-[100%]
  tracking-[0] whitespace-nowrap transition-colors after:absolute
  after:bottom-[-1px] after:w-full after:transition-all after:content-['']
  hover:after:h-[2px] disabled:cursor-not-allowed
  data-[state=active]:after:h-[2px]`,
  {
    variants: {
      size: {
        normal: 'p-md h-12 text-lg max-md:p-sm max-md:h-9.5 max-md:text-md',
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
  `text-body-primary border-divider-default hover:text-interactive-primary-hover
  relative inline-flex cursor-pointer items-center justify-center border-b
  leading-[100%] tracking-[0] whitespace-nowrap transition-colors`,
  {
    variants: {
      size: {
        normal: 'p-md h-12 text-lg max-md:p-sm max-md:h-9.5 max-md:text-md',
        small: 'p-sm h-9.5 text-md',
      },
    },
    defaultVariants: {
      size: 'normal',
    },
  }
);

function useHasPointerFine() {
  const [hasFine, setHasFine] = React.useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(pointer: fine)').matches
  );

  React.useEffect(() => {
    const mql = window.matchMedia('(pointer: fine)');
    const onChange = () => setHasFine(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return hasFine;
}

function extractTabs(children: React.ReactNode) {
  const tabs: React.ReactElement<TabProps>[] = [];
  React.Children.forEach(children, (child) => {
    if (React.isValidElement<TabProps>(child) && child.type === Tab) {
      tabs.push(child);
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
  const effectiveSize = size ?? 'normal';
  // On touch devices, the tab bar scrolls horizontally instead of collapsing
  // into a dropdown. The dropdown is only shown on pointer: fine (mouse/trackpad).
  const useDropdown = useHasPointerFine();

  const listRef = React.useRef<HTMLDivElement>(null);
  const moreRef = React.useRef<HTMLDivElement>(null);
  const tabRefs = React.useRef<Map<string, HTMLElement>>(new Map());
  // Overflow collapse: all tabs render in the DOM on mount so we can measure
  // their widths. After the first measurement, tabs that don't fit are set to
  // display:none and a "more" dropdown appears. A ResizeObserver recalculates
  // on container resize. Hidden tabs keep their cached width since offsetWidth
  // reports 0 for display:none elements.
  const tabWidths = React.useRef<Map<string, number>>(new Map());
  const {
    hasOverflow: isScrollable,
    startShadow,
    endShadow,
  } = useHorizontalScrollEdges(listRef);

  const tabs = React.useMemo(() => extractTabs(children), [children]);

  const [visibleCount, setVisibleCount] = React.useState(tabs.length);
  const [measured, setMeasured] = React.useState(false);

  const calculateVisibleTabs = React.useCallback(() => {
    if (!useDropdown) {
      setVisibleCount(tabs.length);
      setMeasured(true);
      return;
    }

    const list = listRef.current;
    if (!list) return;

    // Snapshot widths from DOM — visible tabs update, hidden tabs keep cached value
    tabRefs.current.forEach((el, key) => {
      const w = el.offsetWidth;
      if (w > 0) tabWidths.current.set(key, w);
    });

    const containerWidth = list.clientWidth;
    const moreButton = moreRef.current;
    const moreButtonWidth = moreButton ? moreButton.offsetWidth + 8 : 80;

    // Check if all tabs fit without the more button
    let allTabsWidth = 0;
    for (const tab of tabs) {
      allTabsWidth += tabWidths.current.get(tab.props.value) ?? 0;
    }

    if (allTabsWidth <= containerWidth) {
      setVisibleCount(tabs.length);
      setMeasured(true);
      return;
    }

    // Not all fit — calculate how many fit alongside the more button
    let totalWidth = 0;
    let fitCount = 0;

    for (const tab of tabs) {
      const tabWidth = tabWidths.current.get(tab.props.value) ?? 0;
      if (totalWidth + tabWidth + moreButtonWidth <= containerWidth) {
        totalWidth += tabWidth;
        fitCount++;
      } else {
        break;
      }
    }

    setVisibleCount(Math.max(fitCount, 1));
    setMeasured(true);
  }, [tabs, useDropdown]);

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

  const activeValue = props.value ?? props.defaultValue;
  const tabValuesKey = tabs.map((tab) => tab.props.value).join('\n');

  // A tab opened by tapping it is scrolled into view by the browser's focus
  // handling; one selected any other way (a deep link, a reload) is not.
  // Tabs widen once the web font loads, so scroll again whenever they resize.
  React.useEffect(() => {
    if (useDropdown || activeValue === undefined) return;
    const list = listRef.current;
    if (!list) return;

    const scrollActiveTabIntoView = () => {
      const activeTab = tabRefs.current.get(activeValue);
      if (!activeTab) return;
      const listRect = list.getBoundingClientRect();
      const tabRect = activeTab.getBoundingClientRect();
      if (tabRect.left < listRect.left) {
        list.scrollLeft += tabRect.left - listRect.left;
      } else if (tabRect.right > listRect.right) {
        list.scrollLeft += tabRect.right - listRect.right;
      }
    };
    const observer = new ResizeObserver(scrollActiveTabIntoView);
    tabRefs.current.forEach((tab) => observer.observe(tab));

    return () => observer.disconnect();
  }, [activeValue, useDropdown, tabValuesKey]);

  const overflowTabs = tabs.slice(visibleCount);
  const hasOverflow = overflowTabs.length > 0;

  const activeInOverflow = overflowTabs.some(
    (tab) => tab.props.value === activeValue
  );

  const formatMoreLabel = moreLabel ?? ((count: number) => `${count} more`);

  return (
    <RadixTabs.Root
      ref={ref}
      className={cn('relative w-full', className)}
      {...props}
    >
      <RadixTabs.List
        ref={listRef}
        className={cn(
          tabBarVariants({ size: effectiveSize }),
          'w-full',
          !useDropdown &&
            `overflow-x-auto [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden`
        )}
        role="tablist"
      >
        {tabs.map((tab, index) =>
          React.cloneElement(tab, {
            key: tab.props.value,
            size: effectiveSize,
            ref: (el: HTMLElement | null) => {
              if (el) {
                tabRefs.current.set(tab.props.value, el);
              } else {
                tabRefs.current.delete(tab.props.value);
              }
            },
            className: cn(
              tab.props.className,
              measured && index >= visibleCount && 'hidden'
            ),
          } as React.Attributes & Partial<TabProps>)
        )}

        {hasOverflow && measured && (
          <div ref={moreRef} className="inline-flex shrink-0">
            <Dropdown>
              <DropdownTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    moreButtonVariants({ size: effectiveSize }),
                    activeInOverflow &&
                      'font-bold text-interactive-primary-default'
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
                  const { value, disabled, asChild, children } = tab.props;
                  const itemClassName = cn(
                    value === activeValue &&
                      'font-bold text-interactive-primary-default'
                  );

                  if (asChild && React.isValidElement(children)) {
                    return (
                      <DropdownItem
                        key={value}
                        disabled={disabled ?? false}
                        asChild
                        className={itemClassName}
                      >
                        {children}
                      </DropdownItem>
                    );
                  }

                  return (
                    <DropdownItem
                      key={value}
                      disabled={disabled ?? false}
                      onSelect={() => {
                        if (props.onValueChange) {
                          props.onValueChange(value);
                        }
                      }}
                      className={itemClassName}
                    >
                      {children}
                    </DropdownItem>
                  );
                })}
              </DropdownContent>
            </Dropdown>
          </div>
        )}
      </RadixTabs.List>
      {!useDropdown && isScrollable && (
        <ScrollEdgeShadows startShadow={startShadow} endShadow={endShadow} />
      )}
    </RadixTabs.Root>
  );
});

TabBar.displayName = 'TabBar';

// Tab Component
export interface TabProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabs.Trigger>,
    VariantProps<typeof tabVariants> {}

export const Tab = React.forwardRef<
  React.ElementRef<typeof RadixTabs.Trigger>,
  TabProps
>(({ className, size, ...props }, ref) => {
  const effectiveSize = size ?? 'normal';

  return (
    <RadixTabs.Trigger
      ref={ref}
      className={cn(tabVariants({ size: effectiveSize }), className)}
      {...props}
    />
  );
});

Tab.displayName = 'Tab';
