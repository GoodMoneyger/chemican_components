import { default as React } from 'react';
import { SideNavigationItemProps } from '../SideNavigation/SideNavigationItem';
import { SideNavigationSectionProps } from '../SideNavigation/SideNavigationSection';
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
export interface MobileNavigationProps extends React.HTMLAttributes<HTMLElement> {
    /** Content on the left of the bar, usually a logo such as `Logo` */
    header?: React.ReactNode;
    /** Content next to the menu button, e.g. a user chip */
    end?: React.ReactNode;
    /**
     * Content next to the close button in the bar inside the open menu, empty
     * by default. Passing `end` repeats it there, which mounts it twice while
     * the menu is open.
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
/**
 * A header bar with a menu button, shown below `md`, and the full-screen menu
 * it opens. The bar is fixed, so a spacer of its height keeps the page content
 * below it. The spacer only lines up when the component is the first thing in
 * the page flow: inside a padded container, the content ends up offset by the
 * padding as well.
 */
export declare const MobileNavigation: React.ForwardRefExoticComponent<MobileNavigationProps & React.RefAttributes<HTMLElement>>;
/**
 * The sidebar item props, so one item tree can feed both menus.
 * `tooltipLabel` and `size` have no effect here.
 */
export interface MobileNavigationItemProps extends SideNavigationItemProps {
    /**
     * Closes the menu when the item is activated. Turn it off for items that
     * act in place, such as a language switch.
     */
    closeOnSelect?: boolean;
}
/** A menu entry. By default it closes the menu when activated. */
export declare const MobileNavigationItem: React.ForwardRefExoticComponent<MobileNavigationItemProps & React.RefAttributes<HTMLButtonElement>>;
/**
 * The sidebar section props, so one item tree can feed both menus. `isLast`
 * and `isCollapsed` have no effect here.
 */
export type MobileNavigationSectionProps = SideNavigationSectionProps;
export declare const MobileNavigationSection: React.ForwardRefExoticComponent<SideNavigationSectionProps & React.RefAttributes<HTMLDivElement>>;
