import { default as React } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
/**
 * Variants for the multi-select component to handle different styles.
 */
declare const multiSelectVariants: (props?: ({
    variant?: "default" | "secondary" | "destructive" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
/**
 * Option interface for MultiSelect component
 */
interface MultiSelectOption<T = string | number> {
    value: T;
    label: string;
    disabled?: boolean;
    [key: string]: unknown;
}
/**
 * Group interface for organizing options
 */
interface MultiSelectGroup<T = string | number> {
    /** Group heading */
    heading: string;
    /** Options in this group */
    options: MultiSelectOption<T>[];
}
/**
 * Render function context for rendering custom option content
 */
export interface RenderOptionContext<T = string | number> {
    /** The option being rendered */
    option: MultiSelectOption<T>;
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
interface MultiSelectProps<T = string | number> extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'defaultValue' | 'value'>, VariantProps<typeof multiSelectVariants> {
    /**
     * Array of options or grouped options to display in the dropdown.
     * Can be a flat array of options or an array of groups with nested options.
     */
    options: MultiSelectOption<T>[] | MultiSelectGroup<T>[];
    /**
     * Initial selected values when the component mounts.
     * Ignored when `value` is provided.
     * Optional, defaults to an empty array.
     */
    defaultValue?: T[];
    /**
     * Selected values. Providing this makes the component controlled: it renders
     * exactly what is passed and never changes the selection on its own, so every
     * mutation has to be applied by the parent from `onValueChange`.
     *
     * Use this when the selection has to stay in sync with state the parent also
     * writes to (resetting a draft when a popover reopens, confirming a
     * destructive change before applying it), instead of pushing values in
     * through the ref.
     *
     * When omitted, the component keeps its own selection state and `defaultValue`
     * seeds it.
     * Optional.
     */
    value?: T[];
    /**
     * Content displayed in the trigger button when no options are selected.
     * Optional, defaults to "選択してください" (Please select).
     */
    placeholder?: React.ReactNode;
    /**
     * Accessible label for the placeholder, announced to screen readers.
     * Optional, defaults to "選択してください" (Please select).
     */
    placeholderAriaLabel?: string;
    /**
     * Description of the component for screen readers, providing usage instructions.
     * Optional, defaults to navigation instructions in Japanese.
     */
    triggerDescription?: React.ReactNode;
    /**
     * Label announced to screen readers when no options are selected.
     * Optional, defaults to "オプションが選択されていません" (No options selected).
     */
    noSelectionLabel?: React.ReactNode;
    /**
     * Help text for screen readers explaining how to use the search input.
     * Optional, defaults to search instructions in Japanese.
     */
    searchHelpText?: React.ReactNode;
    /**
     * Accessible label for the search input field.
     * Optional, defaults to "利用可能なオプションを検索" (Search available options).
     */
    searchAriaLabel?: string;
    /**
     * Accessible label for the options list element.
     * Optional, defaults to "利用可能なオプション" (Available options).
     */
    optionsListAriaLabel?: string;
    /**
     * Maximum number of items to display. Extra selected items will be summarized.
     * Optional, defaults to 3.
     */
    maxCount?: number;
    /**
     * Maximum number of options that can be selected at once.
     * Once the limit is reached, unselected options render disabled (they stay
     * visible, so the user can see what they would have to deselect first) and
     * select-all is hidden when it would overshoot the limit.
     * Optional, defaults to undefined (no limit).
     */
    maxSelected?: number;
    /**
     * Message announced to screen readers when the user tries to select past
     * `maxSelected`.
     * Optional, defaults to "選択できる上限に達しました。" (Selection limit reached).
     */
    maxSelectedReachedLabel?: string;
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
     * Message shown in the popover when the component has no options at all.
     * In that case the select-all option is not rendered either.
     * Optional, defaults to "No options available."
     */
    noOptionsIndicator?: React.ReactNode;
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
     * Label displayed for the footer close action.
     * Optional, defaults to "閉じる" (Close).
     */
    closeLabel?: React.ReactNode;
    /**
     * Content rendered in the popover footer, above the clear/close actions.
     * It sits outside the scroll container, so it stays visible while the user
     * scrolls or searches - use it for counters, limits and hints that have to
     * remain readable for the whole session (e.g. "3 / 15 seats used").
     * Optional.
     */
    footerContent?: React.ReactNode;
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
            compactMode?: boolean;
        };
        /** Configuration for tablet devices (640px - 1024px) */
        tablet?: {
            maxCount?: number;
            compactMode?: boolean;
        };
        /** Configuration for desktop devices (> 1024px) */
        desktop?: {
            maxCount?: number;
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
     * Ignored when `filterOption` is provided.
     */
    filterByValueAndLabel?: boolean;
    /**
     * Custom match predicate used to filter options as the user searches.
     * Receives the whole option object, so it can match on fields the built-in
     * filter never sees (secondary text, ids, tags) - return true to keep the
     * option. `search` is passed trimmed but with its original casing.
     *
     * Takes precedence over both the built-in filter and `filterByValueAndLabel`.
     * Do not combine it with `onSearchValueChange`-driven server-side search: the
     * predicate filters the options the parent already narrowed down.
     *
     * Because the component then knows the real match count, `maxDisplayedOptions`
     * keeps truncating while searching and `moreOptionsLabel` reports how many
     * matches are hidden.
     * Optional.
     */
    filterOption?: (option: MultiSelectOption<T>, search: string) => boolean;
    /**
     * Custom trigger element to replace the default button trigger.
     * Allows complete customization of the trigger component.
     * Optional, if not provided uses the default button with placeholder and chevron icon.
     */
    customTrigger?: React.ReactNode;
    /**
     * If true, hides the selected option badges below the trigger button.
     * Useful when you want to show selections only in the trigger or use a custom display.
     * Optional, defaults to false.
     */
    hideSelection?: boolean;
    /**
     * Controls how selected values are displayed in the component.
     * - 'default': Shows selected items as removable badge components below the trigger button
     * - 'inline': Displays selected items as comma-separated text within the trigger button itself
     *
     * Use 'inline' mode for more compact layouts or when badge removal functionality
     * is not needed in the trigger area. The 'default' mode provides better visual
     * feedback and individual item removal capabilities.
     *
     * Optional, defaults to 'default'.
     */
    selectionDisplayMode?: 'default' | 'inline';
    /**
     * Custom render function for option content.
     * Allows customization of how options appear in both the dropdown and as selected badges.
     * If not provided, uses default rendering with label and optional icon.
     * Optional, defaults to a function that renders the label with remove button for badges.
     */
    renderOption?: (context: RenderOptionContext<T>) => React.ReactNode;
    /**
     * Callback fired when selected values change.
     * Receives the array of currently selected values.
     * Optional, called after each selection/deselection.
     */
    onValueChange?: (value: T[]) => void;
    /**
     * Callback fired whenever the search input value changes.
     * Use this to drive server-side search. When provided, the component disables
     * its built-in client-side filtering so the parent fully controls `options`.
     * Optional.
     */
    onSearchValueChange?: (search: string) => void;
    /**
     * If true, shows a loading indicator inside the dropdown instead of the
     * options list. Useful while options are being fetched (e.g. server-side
     * search). Optional, defaults to false.
     */
    loading?: boolean;
    /**
     * Label displayed next to the spinner while `loading` is true.
     * Optional, defaults to "読み込み中..." (Loading...).
     */
    loadingLabel?: React.ReactNode;
    /**
     * Maximum number of options to display before the user starts searching.
     * When set and the total exceeds this number, only the first N options are shown
     * with an indicator for the remaining items. Selected items always remain visible.
     * All matching options are shown when searching.
     * Optional, defaults to undefined (show all).
     */
    maxDisplayedOptions?: number;
    /**
     * Total number of options available, used to compute the truncation indicator
     * count. Set this when `options` is only a server-provided subset (e.g.
     * server-side search returns a page) so the "+N more" hint reflects the true
     * total instead of just the loaded options.
     * Optional, defaults to the number of loaded options.
     */
    totalOptionsCount?: number;
    /**
     * Label template for the truncation indicator shown when options exceed maxDisplayedOptions.
     * Receives the number of hidden items as a parameter.
     * Optional, defaults to (count) => `検索テキストを入力して他${count}件を表示`.
     */
    moreOptionsLabel?: (count: number) => React.ReactNode;
    /**
     * Callback fired when the Apply button is clicked in the popover footer.
     * Receives the array of currently selected values.
     * Optional, called only when user confirms their selection.
     */
    onApplySelection?: (value: T[]) => void;
}
/**
 * Imperative methods exposed through ref
 */
export interface MultiSelectRef<T = string | number> {
    /**
     * Programmatically reset the component to its default value
     */
    reset: () => void;
    /**
     * Get current selected values
     */
    getSelectedValues: () => T[];
    /**
     * Set selected values programmatically
     */
    setSelectedValues: (values: T[]) => void;
    /**
     * Clear all selected values
     */
    clear: () => void;
    /**
     * Focus the component
     */
    focus: () => void;
}
type MultiSelectComponent = <T extends string | number = string | number>(props: MultiSelectProps<T> & {
    ref?: React.Ref<MultiSelectRef<T>>;
}) => React.ReactElement;
export declare const MultiSelect: MultiSelectComponent & {
    displayName?: string;
};
export type { MultiSelectOption, MultiSelectGroup, MultiSelectProps };
