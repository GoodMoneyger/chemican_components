import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
import { IconProp } from '../../lib/utils';
/**
 * Animation types and configurations
 */
export interface AnimationConfig {
    /** Badge animation type */
    badgeAnimation?: 'bounce' | 'pulse' | 'fade' | 'slide' | 'none';
    /** Popover animation type */
    popoverAnimation?: 'scale' | 'slide' | 'fade' | 'flip' | 'none';
    /** Option hover animation type */
    optionHoverAnimation?: 'highlight' | 'scale' | 'glow' | 'none';
    /** Animation duration in seconds */
    duration?: number;
    /** Animation delay in seconds */
    delay?: number;
}
/**
 * Variants for the multi-select component to handle different styles.
 */
declare const multiSelectVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | null | undefined;
    badgeAnimation?: "none" | "bounce" | "pulse" | "fade" | "slide" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
/**
 * Option interface for MultiSelect component
 */
interface MultiSelectOption {
    /** The text to display for the option. */
    label: string;
    /** The unique value associated with the option. */
    value: string;
    /** Optional icon component to display alongside the option. */
    icon?: IconProp;
    /** Whether this option is disabled */
    disabled?: boolean;
    /** Custom styling for the option */
    style?: {
        /** Custom badge color */
        badgeColor?: string;
        /** Custom icon color */
        iconColor?: string;
        /** Gradient background for badge */
        gradient?: string;
    };
}
/**
 * Group interface for organizing options
 */
interface MultiSelectGroup {
    /** Group heading */
    heading: string;
    /** Options in this group */
    options: MultiSelectOption[];
}
/**
 * Render function context for rendering custom option content
 */
export interface RenderOptionContext {
    /** The option being rendered */
    option: MultiSelectOption;
    /** Whether this is rendering in the dropdown list or as a selected badge */
    location: 'dropdown' | 'badge';
    /** Whether the option is currently selected (only for dropdown) */
    isSelected?: boolean;
    /** Callback to remove the option (only for badge) */
    onRemove?: () => void;
    /** Whether the component is disabled */
    disabled?: boolean;
}
/**
 * Props for MultiSelect component
 */
interface MultiSelectProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'animationConfig'>, VariantProps<typeof multiSelectVariants> {
    /**
     * An array of option objects or groups to be displayed in the multi-select component.
     */
    options: MultiSelectOption[] | MultiSelectGroup[];
    /**
     * Callback function triggered when the selected values change.
     * Receives an array of the new selected values.
     */
    onValueChange: (value: string[]) => void;
    /** The default selected values when the component mounts. */
    defaultValue?: string[];
    /**
     * Placeholder content to display when no values are selected.
     * Optional, defaults to "Select options".
     */
    placeholder?: React.ReactNode;
    /**
     * Placeholder text used for assistive technologies describing the trigger button.
     * Optional, defaults to "Select options".
     */
    placeholderAriaLabel?: string;
    /**
     * Screen reader description announced for the trigger button.
     * Optional, defaults to "Multi-select dropdown. Use arrow keys to navigate, Enter to select, and Escape to close.".
     */
    triggerDescription?: React.ReactNode;
    /**
     * Screen reader label announced when no options are selected.
     * Optional, defaults to "No options selected".
     */
    noSelectionLabel?: React.ReactNode;
    /**
     * Assistive text describing how to use the search input.
     * Optional, defaults to "Type to filter options. Use arrow keys to navigate results.".
     */
    searchHelpText?: React.ReactNode;
    /**
     * Accessible label applied to the search input.
     * Optional, defaults to "Search through available options".
     */
    searchAriaLabel?: string;
    /**
     * Accessible label applied to the options list popover.
     * Optional, defaults to "Available options".
     */
    optionsListAriaLabel?: string;
    /**
     * Animation duration in seconds for the visual effects (e.g., bouncing badges).
     * Optional, defaults to 0 (no animation).
     */
    animation?: number;
    /**
     * Advanced animation configuration for different component parts.
     * Optional, allows fine-tuning of various animation effects.
     */
    animationConfig?: AnimationConfig;
    /**
     * Maximum number of items to display. Extra selected items will be summarized.
     * Optional, defaults to 3.
     */
    maxCount?: number;
    /**
     * The modality of the popover. When set to true, interaction with outside elements
     * will be disabled and only popover content will be visible to screen readers.
     * Optional, defaults to false.
     */
    modalPopover?: boolean;
    /**
     * Additional class names to apply custom styles to the multi-select component.
     * Optional, can be used to add custom styles.
     */
    className?: string;
    /**
     * If true, disables the select all functionality.
     * Optional, defaults to false.
     */
    hideSelectAll?: boolean;
    /**
     * If true, shows search functionality in the popover.
     * If false, hides the search input completely.
     * Optional, defaults to true.
     */
    searchable?: boolean;
    /**
     * Custom empty state message when no options match search.
     * Optional, defaults to "No results found."
     */
    emptyIndicator?: React.ReactNode;
    /**
     * Placeholder text shown in the search input when search is enabled.
     * Optional, defaults to "Search options...".
     */
    searchPlaceholder?: string;
    /**
     * Custom label for the select-all option inside the list.
     * Optional, defaults to "Select All".
     */
    selectAllLabel?: React.ReactNode;
    /**
     * Custom label used alongside the total option count when select all is shown.
     * Optional, defaults to "options".
     */
    selectAllCountLabel?: React.ReactNode;
    /**
     * Label displayed when clearing all selected values via the footer action.
     * Optional, defaults to "Clear All".
     */
    clearAllLabel?: React.ReactNode;
    /**
     * Label displayed for the footer apply action.
     * Optional, defaults to "Apply".
     */
    applyLabel?: React.ReactNode;
    /**
     * Label appended to the overflow badge when more selections exist than can be shown.
     * Optional, defaults to "more".
     */
    moreSelectedLabel?: React.ReactNode;
    /**
     * If true, allows the component to grow and shrink with its content.
     * If false, uses fixed width behavior.
     * Optional, defaults to false.
     */
    autoSize?: boolean;
    /**
     * If true, shows badges in a single line with horizontal scroll.
     * If false, badges wrap to multiple lines.
     * Optional, defaults to false.
     */
    singleLine?: boolean;
    /**
     * Custom CSS class for the popover content.
     * Optional, can be used to customize popover appearance.
     */
    popoverClassName?: string;
    /**
     * If true, disables the component completely.
     * Optional, defaults to false.
     */
    disabled?: boolean;
    /**
     * If true, displays the component in an error/invalid state with red border.
     * Optional, defaults to false.
     */
    invalid?: boolean;
    /**
     * Responsive configuration for different screen sizes.
     * Allows customizing maxCount and other properties based on viewport.
     * Can be boolean true for default responsive behavior or an object for custom configuration.
     */
    responsive?: boolean | {
        /** Configuration for mobile devices (< 640px) */
        mobile?: {
            maxCount?: number;
            hideIcons?: boolean;
            compactMode?: boolean;
        };
        /** Configuration for tablet devices (640px - 1024px) */
        tablet?: {
            maxCount?: number;
            hideIcons?: boolean;
            compactMode?: boolean;
        };
        /** Configuration for desktop devices (> 1024px) */
        desktop?: {
            maxCount?: number;
            hideIcons?: boolean;
            compactMode?: boolean;
        };
    };
    /**
     * Minimum width for the component.
     * Optional, defaults to auto-sizing based on content.
     * When set, component will not shrink below this width.
     */
    minWidth?: string;
    /**
     * Maximum width for the component.
     * Optional, defaults to 100% of container.
     * Component will not exceed container boundaries.
     */
    maxWidth?: string;
    /**
     * If true, automatically removes duplicate options based on their value.
     * Optional, defaults to false (shows warning in dev mode instead).
     */
    deduplicateOptions?: boolean;
    /**
     * If true, the component will reset its internal state when defaultValue changes.
     * Useful for React Hook Form integration and form reset functionality.
     * Optional, defaults to true.
     */
    resetOnDefaultValueChange?: boolean;
    /**
     * If true, automatically closes the popover after selecting an option.
     * Useful for single-selection-like behavior or mobile UX.
     * Optional, defaults to false.
     */
    closeOnSelect?: boolean;
    /**
     * If true, filters options by both value and label when searching.
     * If false, only filters by label.
     * Optional, defaults to false.
     */
    filterByValueAndLabel?: boolean;
    /**
     * Custom render function for option content.
     * Allows customization of how options appear in both the dropdown and as selected badges.
     * If not provided, uses default rendering with label and optional icon.
     * Optional, defaults to a function that renders the label with remove button for badges.
     */
    renderOption?: (context: RenderOptionContext) => React.ReactNode;
}
/**
 * Imperative methods exposed through ref
 */
export interface MultiSelectRef {
    /**
     * Programmatically reset the component to its default value
     */
    reset: () => void;
    /**
     * Get current selected values
     */
    getSelectedValues: () => string[];
    /**
     * Set selected values programmatically
     */
    setSelectedValues: (values: string[]) => void;
    /**
     * Clear all selected values
     */
    clear: () => void;
    /**
     * Focus the component
     */
    focus: () => void;
}
export declare const MultiSelect: React.ForwardRefExoticComponent<MultiSelectProps & React.RefAttributes<MultiSelectRef>>;
export type { MultiSelectOption, MultiSelectGroup, MultiSelectProps };
