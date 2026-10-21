import React from 'react';
import { Dialog as RadixDialog } from 'radix-ui';
import { IconMenu2, IconX, type TablerIcon } from '@tabler/icons-react';

import { cn } from '../../lib/utils';
import {
  SideNavigationItem,
  type SideNavigationItemProps,
} from '../SideNavigation/SideNavigationItem';
import {
  SideNavigationSection,
  type SideNavigationSectionProps,
} from '../SideNavigation/SideNavigationSection';
import { SideNavigationProvider } from '../SideNavigation/SideNavigationContext';

export interface MobileNavigationAnimation {
  /** Classes applied while the menu opens, e.g. `animate-in fade-in` */
  in?: string;
  /** Classes applied while the menu closes, e.g. `animate-out fade-out` */
  out?: string;
  /** Duration in milliseconds, for both directions */
  duration?: number;
  /** CSS timing function, for both directions */
  easing?: string;
}

const defaultAnimation = {
  in: 'animate-in slide-in-from-top',
  out: 'animate-out slide-out-to-top',
  duration: 270,
} satisfies MobileNavigationAnimation;

export interface MobileNavigationProps
  extends React.HTMLAttributes<HTMLElement> {
  /** Content on the left of the header bar */
  logo?: React.ReactNode;
  /**
   * Optional content next to the menu button, e.g. a user chip. Unless
   * `menuEnd` is set, it is repeated in the bar inside the open menu, so it
   * mounts twice while the menu is open.
   */
  end?: React.ReactNode;
  /**
   * Replaces `end` in the bar inside the open menu, e.g. with something
   * simpler than a stateful dropdown. Pass `null` to render nothing there.
   */
  menuEnd?: React.ReactNode;
  /** Content at the top of the open menu, above the items */
  menuTop?: React.ReactNode;
  /** Menu items: `MobileNavigationItem` and `MobileNavigationSection` */
  children: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  /**
   * Open and close animation. Keys merge with the default slide from the top,
   * and `false` disables it. Classes must be CSS animations (not transitions),
   * written as literal strings so Tailwind generates them.
   */
  animation?: false | MobileNavigationAnimation;
  openMenuLabel?: React.ReactNode;
  closeMenuLabel?: React.ReactNode;
  /** Accessible title of the open menu */
  menuLabel?: React.ReactNode;
  /** Classes for the header bar, on the page and inside the open menu */
  className?: string;
}

interface MobileNavigationContextValue {
  close: () => void;
}

const MobileNavigationContext =
  React.createContext<MobileNavigationContextValue | null>(null);

const barClassName = `bg-surface-secondary px-md gap-sm flex
  h-(--cc-mobile-header-height) items-center justify-between`;

const MenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon: TablerIcon;
    label: React.ReactNode;
  }
>(({ icon: Icon, label, className, ...props }, ref) => (
  <button
    ref={ref}
    type="button"
    className={cn(
      `text-shape-primary hover:bg-interactive-neutral-hover
      focus-visible:ring-interactive-focused size-10 rounded-sm inline-flex
      shrink-0 cursor-pointer items-center justify-center focus-visible:ring-2
      focus-visible:outline-none`,
      className
    )}
    {...props}
  >
    <Icon className="size-6" aria-hidden />
    <span className="sr-only">{label}</span>
  </button>
));
MenuButton.displayName = 'MobileNavigationMenuButton';

export const MobileNavigation = React.forwardRef<
  HTMLElement,
  MobileNavigationProps
>(
  (
    {
      logo,
      end,
      menuEnd = end,
      menuTop,
      children,
      open: openProp,
      defaultOpen = false,
      onOpenChange,
      animation,
      openMenuLabel = 'メニューを開く',
      closeMenuLabel = 'メニューを閉じる',
      menuLabel = 'メニュー',
      className,
      ...props
    },
    ref
  ) => {
    const headerRef = React.useRef<HTMLElement>(null);
    React.useImperativeHandle(ref, () => headerRef.current as HTMLElement);

    const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
    const isControlled = openProp !== undefined;
    const isOpen = isControlled ? openProp : uncontrolledOpen;

    const setOpen = React.useCallback(
      (next: boolean) => {
        if (!isControlled) setUncontrolledOpen(next);
        onOpenChange?.(next);
      },
      [isControlled, onOpenChange]
    );

    // Once `md:hidden` hides the bar, Radix would still keep the scroll lock,
    // the focus trap and aria-hidden on the page. Checking the bar itself keeps
    // this in step with the CSS, whatever value the md breakpoint has.
    React.useEffect(() => {
      if (!isOpen) return;
      const closeWhenHidden = () => {
        const header = headerRef.current;
        if (header && getComputedStyle(header).display === 'none') {
          setOpen(false);
        }
      };
      closeWhenHidden();
      window.addEventListener('resize', closeWhenHidden);
      return () => window.removeEventListener('resize', closeWhenHidden);
    }, [isOpen, setOpen]);

    const contextValue = React.useMemo(
      () => ({ close: () => setOpen(false) }),
      [setOpen]
    );

    const motion =
      animation === false ? null : { ...defaultAnimation, ...animation };
    const motionStyle: React.CSSProperties | undefined = motion
      ? {
          animationDuration: `${motion.duration}ms`,
          animationTimingFunction: motion.easing,
          // Holds the closed state between the end of the animation and the
          // unmount, which would otherwise flash the open menu for a frame
          animationFillMode: isOpen ? undefined : 'forwards',
        }
      : undefined;

    const bar = (endContent: React.ReactNode, trigger: React.ReactNode) => (
      <>
        <div className="min-w-0 flex items-center">{logo}</div>
        <div className="gap-xs flex shrink-0 items-center">
          {endContent}
          {trigger}
        </div>
      </>
    );

    return (
      <RadixDialog.Root open={isOpen} onOpenChange={setOpen}>
        {/* Keeps the page content below the fixed bar */}
        <div
          aria-hidden
          className="md:hidden h-(--cc-mobile-header-height) shrink-0"
        />
        <header
          ref={headerRef}
          className={cn(
            barClassName,
            'z-navigation inset-x-0 top-0 md:hidden fixed',
            className
          )}
          {...props}
        >
          {bar(
            end,
            <RadixDialog.Trigger asChild>
              <MenuButton icon={IconMenu2} label={openMenuLabel} />
            </RadixDialog.Trigger>
          )}
        </header>

        <RadixDialog.Portal>
          {/* Radix locks page scrolling through the overlay */}
          <RadixDialog.Overlay className="z-drawer inset-0 md:hidden fixed" />
          {/* The bar is repeated inside the dialog so its close button is part
              of the focus trap; Radix hides the page bar underneath from
              assistive technology. The content only runs a neutral animation
              as long as the menu's, so Radix keeps it mounted until the menu
              has finished closing. */}
          <RadixDialog.Content
            aria-describedby={undefined}
            className={cn(
              'z-drawer inset-0 md:hidden fixed flex flex-col',
              motion && (isOpen ? 'animate-in' : 'animate-out'),
              'motion-reduce:animate-none'
            )}
            style={motionStyle}
          >
            <RadixDialog.Title className="sr-only">
              {menuLabel}
            </RadixDialog.Title>
            <div className={cn(barClassName, 'z-slight relative', className)}>
              {bar(
                menuEnd,
                <RadixDialog.Close asChild>
                  <MenuButton icon={IconX} label={closeMenuLabel} />
                </RadixDialog.Close>
              )}
            </div>
            <nav
              className={cn(
                `bg-surface-primary p-md gap-md flex flex-1 flex-col
                overflow-y-auto`,
                motion && (isOpen ? motion.in : motion.out),
                'motion-reduce:animate-none'
              )}
              style={motionStyle}
            >
              {menuTop && (
                <div
                  className="bg-interactive-neutral-selected text-body-primary
                    py-xs px-sm rounded-sm text-sm text-center"
                >
                  {menuTop}
                </div>
              )}
              <MobileNavigationContext.Provider value={contextValue}>
                <SideNavigationProvider>{children}</SideNavigationProvider>
              </MobileNavigationContext.Provider>
            </nav>
          </RadixDialog.Content>
        </RadixDialog.Portal>
      </RadixDialog.Root>
    );
  }
);

MobileNavigation.displayName = 'MobileNavigation';

export interface MobileNavigationItemProps
  extends Omit<SideNavigationItemProps, 'tooltipLabel' | 'size'> {
  /**
   * Closes the menu when the item is activated. Turn it off for items that
   * act in place, such as a language switch.
   */
  closeOnSelect?: boolean;
}

/** A menu entry. By default it closes the menu when activated. */
export const MobileNavigationItem = React.forwardRef<
  HTMLButtonElement,
  MobileNavigationItemProps
>(({ className, onClick, closeOnSelect = true, ...props }, ref) => {
  const context = React.useContext(MobileNavigationContext);

  return (
    <SideNavigationItem
      ref={ref}
      className={cn('h-11', className)}
      onClick={(event) => {
        onClick?.(event);
        if (closeOnSelect) context?.close();
      }}
      {...props}
    />
  );
});

MobileNavigationItem.displayName = 'MobileNavigationItem';

export type MobileNavigationSectionProps = Omit<
  SideNavigationSectionProps,
  'isLast' | 'isCollapsed'
>;

export const MobileNavigationSection = React.forwardRef<
  HTMLDivElement,
  MobileNavigationSectionProps
>(({ className, ...props }, ref) => (
  <SideNavigationSection
    ref={ref}
    className={cn('px-0 items-stretch', className)}
    {...props}
  />
));

MobileNavigationSection.displayName = 'MobileNavigationSection';
