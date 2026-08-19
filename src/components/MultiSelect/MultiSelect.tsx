import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { IconChevronDown } from '@tabler/icons-react';

import { cn } from '../../lib/utils';
import { Button } from '../Button';
import { Tag } from '../Tag';
import { ProgressIndicator } from '../ProgressIndicator';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../lib/components/Popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../../lib/components/Command';
import { Checkbox } from '../Checkbox';

/**
 * Variants for the multi-select component to handle different styles.
 */
const multiSelectVariants = cva('ease-in-out transition-all duration-300', {
  variants: {
    variant: {
      default: `border-divider-default text-body-primary bg-surface-primary
      hover:bg-surface-secondary`,
      secondary: `border-divider-default bg-surface-secondary text-body-primary
      hover:bg-surface-tertiary`,
      destructive: `bg-interactive-alert-default text-interactive-inverse
      hover:bg-interactive-alert-hover border-transparent`,
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

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
interface MultiSelectProps<T = string | number>
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      'defaultValue' | 'value'
    >,
    VariantProps<typeof multiSelectVariants> {
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
  responsive?:
    | boolean
    | {
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

const MultiSelectInner = <T extends string | number = string | number>(
  {
    options,
    onValueChange = (value) => value,
    onSearchValueChange,
    loading = false,
    loadingLabel = '読み込み中...',
    onApplySelection = (value) => value,
    variant,
    defaultValue = [] as T[],
    value: controlledValue,
    placeholder = '選択してください',
    placeholderAriaLabel = '選択してください',
    triggerDescription = 'マルチセレクトドロップダウン。矢印キーでナビゲート、Enterで選択、Escapeで閉じます。',
    noSelectionLabel = 'オプションが選択されていません',
    searchHelpText = '入力してオプションをフィルタリング。矢印キーで結果をナビゲート。',
    searchAriaLabel = '利用可能なオプションを検索',
    optionsListAriaLabel = '利用可能なオプション',
    selectAllLabel = 'すべて選択',
    selectAllCountLabel = 'オプション',
    clearAllLabel = 'すべてクリア',
    closeLabel = '閉じる',
    footerContent,
    moreSelectedLabel = 'その他',
    searchPlaceholder = 'オプションを検索...',
    maxCount = 10,
    maxSelected,
    maxSelectedReachedLabel = '選択できる上限に達しました。',
    modalPopover = false,
    className,
    hideSelectAll = false,
    searchable = true,
    emptyIndicator = '結果が見つかりません。',
    noOptionsIndicator = '利用可能なオプションがありません。',
    autoSize = false,
    singleLine = false,
    popoverClassName,
    disabled = false,
    invalid = false,
    responsive,
    minWidth,
    maxWidth,
    deduplicateOptions = false,
    resetOnDefaultValueChange = true,
    closeOnSelect = false,
    filterByValueAndLabel = false,
    filterOption,
    renderOption,
    customTrigger,
    selectionDisplayMode = 'default',
    hideSelection = false,
    maxDisplayedOptions,
    totalOptionsCount,
    moreOptionsLabel = (count: number) =>
      `検索テキストを入力して他${count}件を表示`,
    ...props
  }: MultiSelectProps<T>,
  ref: React.Ref<MultiSelectRef<T>>
) => {
  const [internalSelectedValues, setInternalSelectedValues] =
    React.useState<T[]>(defaultValue);
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');

  // Controlled when `value` is passed: the parent owns the selection and the
  // internal state is left untouched, so nothing can drift between the two.
  const isControlled = controlledValue !== undefined;
  const selectedValues = isControlled
    ? controlledValue
    : internalSelectedValues;

  const isSelectionFull =
    maxSelected !== undefined && selectedValues.length >= maxSelected;

  const [politeMessage, setPoliteMessage] = React.useState('');
  const [assertiveMessage, setAssertiveMessage] = React.useState('');
  const prevSelectedCount = React.useRef(selectedValues.length);
  const prevIsOpen = React.useRef(isPopoverOpen);
  const prevSearchValue = React.useRef(searchValue);

  const announce = React.useCallback(
    (message: string, priority: 'polite' | 'assertive' = 'polite') => {
      if (priority === 'assertive') {
        setAssertiveMessage(message);
        setTimeout(() => setAssertiveMessage(''), 100);
      } else {
        setPoliteMessage(message);
        setTimeout(() => setPoliteMessage(''), 100);
      }
    },
    []
  );

  // Single write path for the selection: keeps the uncontrolled state in step
  // while staying a no-op on the internal state when the parent controls it.
  const commitValues = React.useCallback(
    (values: T[]) => {
      if (!isControlled) {
        setInternalSelectedValues(values);
      }
      onValueChange(values);
    },
    [isControlled, onValueChange]
  );

  const multiSelectId = React.useId();
  const listboxId = `${multiSelectId}-listbox`;
  const triggerDescriptionId = `${multiSelectId}-description`;
  const selectedCountId = `${multiSelectId}-count`;

  const prevDefaultValueRef = React.useRef<T[]>(defaultValue);

  const isGroupedOptions = React.useCallback(
    (
      opts: MultiSelectOption<T>[] | MultiSelectGroup<T>[]
    ): opts is MultiSelectGroup<T>[] => {
      const first = opts[0];
      return Boolean(first && typeof first === 'object' && 'heading' in first);
    },
    []
  );

  const arraysEqual = React.useCallback((a: T[], b: T[]): boolean => {
    if (a.length !== b.length) return false;
    const sortedA = [...a].sort();
    const sortedB = [...b].sort();
    return sortedA.every((val, index) => val === sortedB[index]);
  }, []);

  const resetToDefault = React.useCallback(() => {
    setIsPopoverOpen(false);
    setSearchValue('');
    commitValues(defaultValue);
  }, [defaultValue, commitValues]);

  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useImperativeHandle(
    ref,
    () => ({
      reset: resetToDefault,
      getSelectedValues: () => selectedValues,
      setSelectedValues: commitValues,
      clear: () => commitValues([] as T[]),
      focus: () => {
        if (buttonRef.current) {
          buttonRef.current.focus();
          const originalOutline = buttonRef.current.style.outline;
          const originalOutlineOffset = buttonRef.current.style.outlineOffset;
          buttonRef.current.style.outline = '2px solid hsl(var(--ring))';
          buttonRef.current.style.outlineOffset = '2px';
          setTimeout(() => {
            if (buttonRef.current) {
              buttonRef.current.style.outline = originalOutline;
              buttonRef.current.style.outlineOffset = originalOutlineOffset;
            }
          }, 1000);
        }
      },
    }),
    [resetToDefault, selectedValues, commitValues]
  );

  const [screenSize, setScreenSize] = React.useState<
    'mobile' | 'tablet' | 'desktop'
  >('desktop');

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const getResponsiveSettings = () => {
    if (!responsive) {
      return {
        maxCount: maxCount,
        compactMode: false,
      };
    }
    if (responsive === true) {
      const defaultResponsive = {
        mobile: { maxCount: 2, compactMode: true },
        tablet: { maxCount: 4, compactMode: false },
        desktop: { maxCount: 6, compactMode: false },
      };
      const currentSettings = defaultResponsive[screenSize];
      return {
        maxCount: currentSettings?.maxCount ?? maxCount,
        compactMode: currentSettings?.compactMode ?? false,
      };
    }
    const currentSettings = responsive[screenSize];
    return {
      maxCount: currentSettings?.maxCount ?? maxCount,
      compactMode: currentSettings?.compactMode ?? false,
    };
  };

  const responsiveSettings = getResponsiveSettings();

  const getAllOptions = React.useCallback((): MultiSelectOption<T>[] => {
    if (options.length === 0) return [];
    let allOptions: MultiSelectOption<T>[];
    if (isGroupedOptions(options)) {
      allOptions = options.flatMap((group) => group.options);
    } else {
      allOptions = options;
    }
    const valueSet = new Set<T>();
    const duplicates: T[] = [];
    const uniqueOptions: MultiSelectOption<T>[] = [];
    allOptions.forEach((option) => {
      if (valueSet.has(option.value)) {
        duplicates.push(option.value);
        if (!deduplicateOptions) {
          uniqueOptions.push(option);
        }
      } else {
        valueSet.add(option.value);
        uniqueOptions.push(option);
      }
    });
    if (process.env.NODE_ENV === 'development' && duplicates.length > 0) {
      const action = deduplicateOptions ? 'automatically removed' : 'detected';
      console.warn(
        `MultiSelect: Duplicate option values ${action}: ${duplicates.join(
          ', '
        )}. ` +
          `${
            deduplicateOptions
              ? 'Duplicates have been removed automatically.'
              : "This may cause unexpected behavior. Consider setting 'deduplicateOptions={true}' or ensure all option values are unique."
          }`
      );
    }
    return deduplicateOptions ? uniqueOptions : allOptions;
  }, [options, deduplicateOptions, isGroupedOptions]);

  const getOptionByValue = React.useCallback(
    (value: T): MultiSelectOption<T> | undefined => {
      const option = getAllOptions().find((option) => option.value === value);
      if (!option && process.env.NODE_ENV === 'development') {
        console.warn(
          `MultiSelect: Option with value "${value}" not found in options list`
        );
      }
      return option;
    },
    [getAllOptions]
  );

  const filterItems = React.useCallback(
    (value: string, search: string) => {
      const [optionValue, label] = value.split(':');

      if (!filterByValueAndLabel) {
        // Only filter by label
        if (label && label.toLowerCase().includes(search.toLowerCase())) {
          return 1;
        }
        return 0;
      }

      // Filter by both value and label
      const searchLower = search.toLowerCase();
      if (
        (label && label.toLowerCase().includes(searchLower)) ||
        (optionValue && optionValue.toLowerCase().includes(searchLower))
      ) {
        return 1;
      }
      return 0;
    },
    [filterByValueAndLabel]
  );

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setIsPopoverOpen(true);
    } else if (event.key === 'Backspace' && !event.currentTarget.value) {
      const newSelectedValues = [...selectedValues];
      newSelectedValues.pop();
      commitValues(newSelectedValues);
    }
  };

  const toggleOption = (optionValue: T) => {
    if (disabled) return;
    const option = getOptionByValue(optionValue);
    if (option?.disabled) return;
    const isSelected = selectedValues.includes(optionValue);
    // Deselecting is always allowed - the limit only blocks growing the
    // selection, otherwise a full selection could not be edited at all.
    if (!isSelected && isSelectionFull) {
      announce(maxSelectedReachedLabel, 'assertive');
      return;
    }
    const newSelectedValues = isSelected
      ? selectedValues.filter((value) => value !== optionValue)
      : [...selectedValues, optionValue];
    commitValues(newSelectedValues);
    if (closeOnSelect) {
      setIsPopoverOpen(false);
    }
  };

  // Clearing edits the pending selection like any other toggle does; it is the
  // close action that commits it. Clearing used to fire `onApplySelection` too,
  // which committed an empty selection behind a popover that stayed open, with
  // no way to back out of it.
  const handleClear = () => {
    if (disabled) return;
    commitValues([] as T[]);
  };

  const handleTogglePopover = () => {
    if (disabled) return;
    setIsPopoverOpen((prev) => !prev);
  };

  const clearExtraOptions = () => {
    if (disabled) return;
    const newSelectedValues = selectedValues.slice(
      0,
      responsiveSettings.maxCount
    );
    commitValues(newSelectedValues);
  };

  const toggleAll = () => {
    if (disabled) return;
    const allOptions = getAllOptions().filter((option) => !option.disabled);
    if (maxSelected !== undefined && allOptions.length > maxSelected) return;
    if (selectedValues.length === allOptions.length) {
      handleClear();
    } else {
      commitValues(allOptions.map((option) => option.value));
    }

    if (closeOnSelect) {
      setIsPopoverOpen(false);
    }
  };

  // Default render function that maintains current behavior
  const defaultRenderOption = (
    context: RenderOptionContext<T>
  ): React.ReactNode => {
    const { option, location, onRemove, disabled: isDisabled } = context;

    if (location === 'badge') {
      // Render as selected badge with full Tag component styling

      return (
        <Tag
          className={cn(
            multiSelectVariants({ variant }),
            responsiveSettings.compactMode && 'text-xs px-1.5 py-0.5',
            screenSize === 'mobile' && 'max-w-[120px] truncate',
            singleLine && 'flex-shrink-0 whitespace-nowrap',
            '[&>svg]:pointer-events-auto',
            isDisabled && 'cursor-not-allowed'
          )}
          {...(!isDisabled && { onRemove: onRemove! })}
        >
          {option.label}
        </Tag>
      );
    }

    // Render in dropdown
    return option.label;
  };

  // Use provided renderOption or fall back to default
  const effectiveRenderOption = renderOption || defaultRenderOption;

  const hasOptions = getAllOptions().length > 0;
  const searchTerm = searchValue.trim();
  const isSearching = Boolean(searchTerm);

  // With `filterOption` the component does the filtering itself instead of
  // handing the search string to cmdk, which only ever sees `value:label`.
  const isLocallyFiltered = Boolean(filterOption) && isSearching;
  const displayOptions = React.useMemo(():
    | MultiSelectOption<T>[]
    | MultiSelectGroup<T>[] => {
    if (!filterOption || !searchTerm) return options;
    if (isGroupedOptions(options)) {
      return options.map((group) => ({
        ...group,
        options: group.options.filter((option) =>
          filterOption(option, searchTerm)
        ),
      }));
    }
    return options.filter((option) => filterOption(option, searchTerm));
  }, [options, filterOption, searchTerm, isGroupedOptions]);

  // In client-side mode, typing reveals every match so truncation is lifted while
  // searching. In server-side mode (onSearchValueChange) the parent already
  // returns a limited page, so keep truncating the displayed results even while
  // searching. Same for `filterOption`: the component knows how many options
  // matched, so it can keep truncating and still report an honest hidden count.
  const shouldTruncate =
    maxDisplayedOptions !== undefined &&
    (!isSearching || Boolean(onSearchValueChange) || Boolean(filterOption));

  // Options past the limit stay listed but unselectable, so the user can see
  // what exists and which selections they would have to give up first.
  const isOptionDisabled = React.useCallback(
    (option: MultiSelectOption<T>) =>
      Boolean(option.disabled) ||
      (isSelectionFull && !selectedValues.includes(option.value)),
    [isSelectionFull, selectedValues]
  );

  // Select-all cannot honour a limit it would overshoot, so it is hidden rather
  // than silently selecting an arbitrary subset.
  const isSelectAllBlocked =
    maxSelected !== undefined &&
    getAllOptions().filter((option) => !option.disabled).length > maxSelected;

  React.useEffect(() => {
    // A controlled component takes its selection from `value` only; syncing
    // `defaultValue` in as well would fight the parent for ownership.
    if (!resetOnDefaultValueChange || isControlled) return;
    const prevDefaultValue = prevDefaultValueRef.current;
    if (!arraysEqual(prevDefaultValue, defaultValue)) {
      if (!arraysEqual(selectedValues, defaultValue)) {
        setInternalSelectedValues(defaultValue);
      }
      prevDefaultValueRef.current = [...defaultValue];
    }
  }, [
    defaultValue,
    selectedValues,
    arraysEqual,
    resetOnDefaultValueChange,
    isControlled,
  ]);

  const getWidthConstraints = () => {
    const defaultMinWidth = screenSize === 'mobile' ? '0px' : '200px';
    const effectiveMinWidth = minWidth || defaultMinWidth;
    const effectiveMaxWidth = maxWidth || '100%';
    return {
      minWidth: effectiveMinWidth,
      maxWidth: effectiveMaxWidth,
      popoverMaxWidth: maxWidth || '32rem',
      width: autoSize ? 'auto' : '100%',
    };
  };

  const widthConstraints = getWidthConstraints();

  const triggerText = React.useMemo(() => {
    if (selectionDisplayMode === 'default' || selectedValues.length === 0)
      return placeholder;

    return selectedValues
      .map((v) => getOptionByValue(v)?.label)
      .filter(Boolean)
      .join(', ');
  }, [selectedValues, getOptionByValue, placeholder, selectionDisplayMode]);

  React.useEffect(() => {
    if (!isPopoverOpen) {
      setSearchValue('');
    }
  }, [isPopoverOpen]);

  React.useEffect(() => {
    const selectedCount = selectedValues.length;
    const allOptions = getAllOptions();
    const totalOptions = allOptions.filter((opt) => !opt.disabled).length;
    if (selectedCount !== prevSelectedCount.current) {
      const diff = selectedCount - prevSelectedCount.current;
      if (diff > 0) {
        const addedItems = selectedValues.slice(-diff);
        const addedLabels = addedItems
          .map((value) => allOptions.find((opt) => opt.value === value)?.label)
          .filter(Boolean);

        if (addedLabels.length === 1) {
          announce(
            `${addedLabels[0]} selected. ${selectedCount} of ${totalOptions} options selected.`
          );
        } else {
          announce(
            `${addedLabels.length} options selected. ${selectedCount} of ${totalOptions} total selected.`
          );
        }
      } else if (diff < 0) {
        announce(
          `Option removed. ${selectedCount} of ${totalOptions} options selected.`
        );
      }
      prevSelectedCount.current = selectedCount;
    }

    if (isPopoverOpen !== prevIsOpen.current) {
      if (isPopoverOpen) {
        announce(
          `Dropdown opened. ${totalOptions} options available. Use arrow keys to navigate.`
        );
      } else {
        announce('Dropdown closed.');
      }
      prevIsOpen.current = isPopoverOpen;
    }

    if (searchValue !== prevSearchValue.current && searchValue !== undefined) {
      if (searchValue && isPopoverOpen) {
        // Command handles filtering, so we can't easily get the count
        // Just announce that search is active
        announce(`Searching for "${searchValue}"`);
      }
      prevSearchValue.current = searchValue;
    }
  }, [selectedValues, isPopoverOpen, searchValue, announce, getAllOptions]);

  return (
    <>
      <div className="sr-only">
        <div aria-live="polite" aria-atomic="true" role="status">
          {politeMessage}
        </div>
        <div aria-live="assertive" aria-atomic="true" role="alert">
          {assertiveMessage}
        </div>
      </div>

      <Popover
        open={isPopoverOpen}
        onOpenChange={setIsPopoverOpen}
        modal={modalPopover}
      >
        <div id={triggerDescriptionId} className="sr-only">
          {triggerDescription}
        </div>

        <div id={selectedCountId} className="sr-only" aria-live="polite">
          {selectedValues.length === 0
            ? noSelectionLabel
            : `${selectedValues.length} option${
                selectedValues.length === 1 ? '' : 's'
              } selected: ${selectedValues
                .map((value) => getOptionByValue(value)?.label)
                .filter(Boolean)
                .join(', ')}`}
        </div>

        <div className={cn(autoSize && 'w-auto', className)}>
          <PopoverTrigger asChild>
            {customTrigger ? (
              customTrigger
            ) : (
              <button
                ref={buttonRef}
                {...props}
                onClick={handleTogglePopover}
                disabled={disabled}
                className={cn(
                  `border-interactive-default bg-surface-primary px-0
                    disabled:bg-surface-disabled h-12 rounded relative flex
                    w-full items-center border focus-visible:ring-4
                    focus-visible:outline-none active:ring-4
                    disabled:cursor-not-allowed`,
                  autoSize ? 'w-auto' : 'w-full',
                  !invalid &&
                    `hover:border-interactive-hover
                      active:ring-interactive-focused
                      focus:ring-interactive-focused`,
                  invalid &&
                    `border-interactive-alert-default
                      hover:border-interactive-alert-default
                      focus:ring-interactive-alert-focused
                      active:ring-interactive-alert-focused`,
                  responsiveSettings.compactMode && 'min-h-8 text-sm',
                  screenSize === 'mobile' && 'min-h-12'
                )}
                style={{
                  ...widthConstraints,
                  maxWidth: `min(${widthConstraints.maxWidth}, 100%)`,
                }}
                role="combobox"
                aria-expanded={isPopoverOpen}
                aria-haspopup="listbox"
                aria-controls={isPopoverOpen ? listboxId : undefined}
                aria-describedby={`${triggerDescriptionId} ${selectedCountId}`}
                aria-label={`Multi-select: ${selectedValues.length} of ${
                  getAllOptions().length
                } options selected. ${placeholderAriaLabel}`}
              >
                <div
                  className="mx-auto flex w-full items-center justify-between"
                >
                  <span
                    className={cn(
                      'mx-sm',
                      selectionDisplayMode === 'inline' && 'truncate',
                      disabled
                        ? 'text-body-disabled'
                        : isPopoverOpen ||
                            (selectionDisplayMode === 'inline' &&
                              triggerText !== placeholder)
                          ? 'text-body-primary'
                          : 'text-body-placeholder'
                    )}
                  >
                    {triggerText}
                  </span>
                  <IconChevronDown
                    className={cn(
                      'h-4 mx-xs cursor-pointer',
                      disabled ? 'text-body-disabled' : 'text-body-primary'
                    )}
                  />
                </div>
              </button>
            )}
          </PopoverTrigger>

          {!(hideSelection || selectionDisplayMode === 'inline') && (
            <div className="gap-xxs mt-xxs flex flex-wrap">
              {selectedValues
                .slice(0, responsiveSettings.maxCount)
                .map((value) => {
                  const option = getOptionByValue(value);
                  if (!option) {
                    return null;
                  }

                  // Always use the render function (either custom or default).
                  // Render through a keyed Fragment rather than a wrapper div so
                  // the Tag stays a direct flex child and its `max-w-full` +
                  // `truncate` resolve against the badge row, not an
                  // unconstrained wrapper that grows to fit its content.
                  return (
                    <React.Fragment key={value}>
                      {effectiveRenderOption({
                        option,
                        location: 'badge',
                        onRemove: () => toggleOption(value),
                        disabled,
                      })}
                    </React.Fragment>
                  );
                })
                .filter(Boolean)}
              {selectedValues.length > responsiveSettings.maxCount && (
                <Tag
                  className={cn(
                    `text-body-primary border-divider-default bg-transparent
                    hover:bg-transparent`,
                    multiSelectVariants({ variant }),
                    responsiveSettings.compactMode && 'text-xs px-1.5 py-0.5',
                    singleLine && 'flex-shrink-0 whitespace-nowrap',
                    '[&>svg]:pointer-events-auto',
                    disabled && 'cursor-not-allowed'
                  )}
                  {...(!disabled && { onRemove: clearExtraOptions })}
                >
                  + {selectedValues.length - responsiveSettings.maxCount}{' '}
                  {moreSelectedLabel}
                </Tag>
              )}
            </div>
          )}
        </div>

        <PopoverContent
          id={listboxId}
          role="listbox"
          aria-multiselectable="true"
          aria-label={optionsListAriaLabel}
          className={cn(
            'p-0 w-auto',
            screenSize === 'mobile' && 'w-[85vw] max-w-[280px]',
            screenSize === 'tablet' && 'max-w-md w-[70vw]',
            screenSize === 'desktop' && 'min-w-[300px]',
            popoverClassName
          )}
          style={{
            maxWidth: `min(${widthConstraints.popoverMaxWidth}, 85vw)`,
            maxHeight: screenSize === 'mobile' ? '70vh' : '60vh',
            touchAction: 'manipulation',
          }}
          align="start"
        >
          {/* Built-in client-side filtering is off when the parent handles
              search itself (onSearchValueChange) or supplies its own match
              predicate (filterOption). */}
          <Command
            filter={filterItems}
            shouldFilter={!onSearchValueChange && !filterOption}
          >
            {searchable && (
              <header>
                <div id={`${multiSelectId}-search-help`} className="sr-only">
                  {searchHelpText}
                </div>
                <CommandInput
                  placeholder={searchPlaceholder}
                  onKeyDown={handleInputKeyDown}
                  value={searchValue}
                  onValueChange={(value) => {
                    setSearchValue(value);
                    onSearchValueChange?.(value);
                  }}
                  aria-label={searchAriaLabel}
                  aria-describedby={`${multiSelectId}-search-help`}
                />
              </header>
            )}

            <CommandList
              className={cn(
                'max-h-[calc(40vh-56px)] overflow-y-auto',
                screenSize === 'mobile' && 'max-h-[calc(50vh-56px)]'
              )}
              style={{ overscrollBehaviorY: 'contain' }}
            >
              {loading && (
                <div
                  role="status"
                  className="px-md py-lg text-body-secondary gap-xs text-sm flex
                    items-center justify-center"
                >
                  <ProgressIndicator.Circular size="sm">
                    {loadingLabel}
                  </ProgressIndicator.Circular>
                </div>
              )}

              {!loading && (hasOptions || isSearching) && (
                <CommandEmpty>{emptyIndicator}</CommandEmpty>
              )}

              {!loading && !hasOptions && !isSearching && (
                <div
                  role="status"
                  className="px-md py-lg text-body-secondary text-sm flex
                    items-center justify-center"
                >
                  {noOptionsIndicator}
                </div>
              )}

              {!loading &&
                !hideSelectAll &&
                !isSelectAllBlocked &&
                !searchValue &&
                hasOptions && (
                  <CommandGroup>
                    <CommandItem
                      key="all"
                      value="select-all"
                      onSelect={toggleAll}
                      role="option"
                      aria-selected={
                        selectedValues.length ===
                        getAllOptions().filter((opt) => !opt.disabled).length
                      }
                      aria-label={`Select all ${getAllOptions().length} options`}
                      className="cursor-pointer"
                    >
                      <Checkbox
                        className="mr-xs"
                        checked={
                          selectedValues.length ===
                          getAllOptions().filter((opt) => !opt.disabled).length
                        }
                      />
                      <span>
                        ({selectAllLabel}
                        {getAllOptions().length > 20 ? (
                          <>
                            {' - '}
                            {getAllOptions().length} {selectAllCountLabel}
                          </>
                        ) : null}
                        )
                      </span>
                    </CommandItem>
                  </CommandGroup>
                )}
              {!loading &&
                (isGroupedOptions(displayOptions) ? (
                  (() => {
                    let rendered = 0;
                    const totalOptions = displayOptions.reduce(
                      (sum, g) => sum + g.options.length,
                      0
                    );
                    const groups = displayOptions.map((group) => {
                      const visibleOptions = shouldTruncate
                        ? group.options.filter(
                            (opt) =>
                              rendered++ < maxDisplayedOptions! ||
                              selectedValues.includes(opt.value)
                          )
                        : group.options;
                      return { ...group, options: visibleOptions };
                    });
                    const visibleCount = groups.reduce(
                      (sum, g) => sum + g.options.length,
                      0
                    );
                    // Use the server total when provided so the hint reflects
                    // every available option, not just the loaded subset. It
                    // does not apply once a local search narrowed the list down.
                    const hiddenCount =
                      (isLocallyFiltered
                        ? totalOptions
                        : (totalOptionsCount ?? totalOptions)) - visibleCount;
                    return (
                      <>
                        {groups.map((group) => {
                          if (group.options.length === 0) return null;
                          return (
                            <CommandGroup
                              key={group.heading}
                              heading={group.heading}
                            >
                              {group.options.map((option) => {
                                const isSelected = selectedValues.includes(
                                  option.value
                                );
                                const isDisabledOption =
                                  isOptionDisabled(option);
                                return (
                                  <CommandItem
                                    key={option.value}
                                    value={`${option.value}:${option.label}`}
                                    onSelect={() => toggleOption(option.value)}
                                    role="option"
                                    aria-selected={isSelected}
                                    aria-disabled={isDisabledOption}
                                    aria-label={`${option.label}${
                                      isSelected
                                        ? ', selected'
                                        : ', not selected'
                                    }${isDisabledOption ? ', disabled' : ''}`}
                                    className={cn(
                                      'cursor-pointer',
                                      isDisabledOption &&
                                        `text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100`
                                    )}
                                    disabled={isDisabledOption}
                                  >
                                    <Checkbox
                                      className="mr-xs"
                                      checked={isSelected}
                                    />
                                    <span className="min-w-0 overflow-hidden">
                                      {effectiveRenderOption({
                                        option,
                                        location: 'dropdown',
                                        isSelected,
                                      })}
                                    </span>
                                  </CommandItem>
                                );
                              })}
                            </CommandGroup>
                          );
                        })}
                        {shouldTruncate && hiddenCount > 0 && (
                          <div className="text-body-secondary px-lg py-sm text-sm italic">
                            {moreOptionsLabel(hiddenCount)}
                          </div>
                        )}
                      </>
                    );
                  })()
                ) : (
                  <CommandGroup>
                    {(() => {
                      const visibleOptions = shouldTruncate
                        ? displayOptions.filter(
                            (opt, i) =>
                              i < maxDisplayedOptions! ||
                              selectedValues.includes(opt.value)
                          )
                        : displayOptions;
                      // Use the server total when provided so the hint reflects
                      // every available option, not just the loaded subset. It
                      // does not apply once a local search narrowed the list
                      // down.
                      const hiddenCount =
                        (isLocallyFiltered
                          ? displayOptions.length
                          : (totalOptionsCount ?? displayOptions.length)) -
                        visibleOptions.length;
                      return (
                        <>
                          {visibleOptions.map((option) => {
                            const isSelected = selectedValues.includes(
                              option.value
                            );
                            const isDisabledOption = isOptionDisabled(option);
                            return (
                              <CommandItem
                                key={option.value}
                                value={`${option.value}:${option.label}`}
                                onSelect={() => toggleOption(option.value)}
                                role="option"
                                aria-selected={isSelected}
                                aria-disabled={isDisabledOption}
                                aria-label={`${option.label}${
                                  isSelected ? ', selected' : ', not selected'
                                }${isDisabledOption ? ', disabled' : ''}`}
                                className={cn(
                                  'cursor-pointer',
                                  isDisabledOption &&
                                    `text-interactive-disabled cursor-not-allowed opacity-100 data-[disabled=true]:opacity-100`
                                )}
                                disabled={isDisabledOption}
                              >
                                <Checkbox
                                  className="mr-xs"
                                  checked={isSelected}
                                />
                                <span className="min-w-0 overflow-hidden">
                                  {effectiveRenderOption({
                                    option,
                                    location: 'dropdown',
                                    isSelected,
                                  })}
                                </span>
                              </CommandItem>
                            );
                          })}
                          {shouldTruncate && hiddenCount > 0 && (
                            <div className="text-body-secondary px-lg py-sm text-sm italic">
                              {moreOptionsLabel(hiddenCount)}
                            </div>
                          )}
                        </>
                      );
                    })()}
                  </CommandGroup>
                ))}
            </CommandList>

            <footer
              className="bg-surface-primary bottom-0 border-t-divider-default
                border-t"
            >
              {footerContent && (
                <div className="px-md pt-sm text-body-secondary text-sm">
                  {footerContent}
                </div>
              )}
              <div className="px-md py-sm flex items-center justify-between">
                <Button
                  intent="text"
                  size="xs"
                  className="min-w-auto"
                  onClick={handleClear}
                  disabled={selectedValues.length === 0}
                >
                  {clearAllLabel}
                </Button>
                <Button
                  intent="primary"
                  size="xs"
                  className="min-w-auto"
                  onClick={() => {
                    onApplySelection(selectedValues);
                    setIsPopoverOpen(false);
                  }}
                >
                  {closeLabel}
                </Button>
              </div>
            </footer>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

type MultiSelectComponent = <T extends string | number = string | number>(
  props: MultiSelectProps<T> & { ref?: React.Ref<MultiSelectRef<T>> }
) => React.ReactElement;

export const MultiSelect = React.forwardRef(
  MultiSelectInner
) as MultiSelectComponent & {
  displayName?: string;
};

MultiSelect.displayName = 'MultiSelect';
export type { MultiSelectOption, MultiSelectGroup, MultiSelectProps };
