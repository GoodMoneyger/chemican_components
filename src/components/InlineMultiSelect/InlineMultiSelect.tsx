import React from 'react';
import { IconChevronDown } from '@tabler/icons-react';

import { cn, type IconProp, renderIcon } from '../../lib/utils';
import { Button } from '../Button';
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
  CommandSeparator,
} from '../../lib/components/Command';
import { Checkbox } from '../Checkbox';

/**
 * Option interface for InlineMultiSelect component
 */
interface InlineMultiSelectOption {
  /** The text to display for the option. */
  label: string;
  /** The unique value associated with the option. */
  value: string;
  /** Optional icon component to display alongside the option. */
  icon?: IconProp;
  /** Whether this option is disabled */
  disabled?: boolean;
}

/**
 * Group interface for organizing options
 */
interface InlineMultiSelectGroup {
  /** Group heading */
  heading: string;
  /** Options in this group */
  options: InlineMultiSelectOption[];
}

/**
 * Props for InlineMultiSelect component
 */
interface InlineMultiSelectProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /**
   * An array of option objects or groups to be displayed in the multi-select component.
   */
  options: InlineMultiSelectOption[] | InlineMultiSelectGroup[];
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
   * If true, the component will reset its internal state when defaultValue changes.
   * Useful for React Hook Form integration and form reset functionality.
   * Optional, defaults to true.
   */
  resetOnDefaultValueChange?: boolean;

  /**
   * If true, filters options by both value and label when searching.
   * If false, only filters by label.
   * Optional, defaults to false.
   */
  filterByValueAndLabel?: boolean;
}

/**
 * Imperative methods exposed through ref
 */
export interface InlineMultiSelectRef {
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

export const InlineMultiSelect = React.forwardRef<
  InlineMultiSelectRef,
  InlineMultiSelectProps
>(
  (
    {
      options,
      onValueChange,
      defaultValue = [],
      placeholder = '選択してください',
      className,
      hideSelectAll = false,
      searchable = true,
      emptyIndicator = '結果が見つかりません。',
      searchPlaceholder = 'オプションを検索...',
      selectAllLabel = 'すべて選択',
      clearAllLabel = 'すべてクリア',
      applyLabel = '適用',
      popoverClassName,
      disabled = false,
      invalid = false,
      resetOnDefaultValueChange = true,
      filterByValueAndLabel = false,
      ...props
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] =
      React.useState<string[]>(defaultValue);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    const prevDefaultValueRef = React.useRef<string[]>(defaultValue);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    const isGroupedOptions = React.useCallback(
      (
        opts: InlineMultiSelectOption[] | InlineMultiSelectGroup[]
      ): opts is InlineMultiSelectGroup[] => {
        const first = opts[0];
        return Boolean(
          first && typeof first === 'object' && 'heading' in first
        );
      },
      []
    );

    const arraysEqual = React.useCallback(
      (a: string[], b: string[]): boolean => {
        if (a.length !== b.length) return false;
        const sortedA = [...a].sort();
        const sortedB = [...b].sort();
        return sortedA.every((val, index) => val === sortedB[index]);
      },
      []
    );

    const resetToDefault = React.useCallback(() => {
      setSelectedValues(defaultValue);
      setIsPopoverOpen(false);
      setSearchValue('');
      onValueChange(defaultValue);
    }, [defaultValue, onValueChange]);

    React.useImperativeHandle(
      ref,
      () => ({
        reset: resetToDefault,
        getSelectedValues: () => selectedValues,
        setSelectedValues: (values: string[]) => {
          setSelectedValues(values);
          onValueChange(values);
        },
        clear: () => {
          setSelectedValues([]);
          onValueChange([]);
        },
        focus: () => {
          if (buttonRef.current) {
            buttonRef.current.focus();
          }
        },
      }),
      [resetToDefault, selectedValues, onValueChange]
    );

    const getAllOptions = React.useCallback((): InlineMultiSelectOption[] => {
      if (options.length === 0) return [];
      if (isGroupedOptions(options)) {
        return options.flatMap((group) => group.options);
      }
      return options;
    }, [options, isGroupedOptions]);

    const getOptionByValue = React.useCallback(
      (value: string): InlineMultiSelectOption | undefined => {
        return getAllOptions().find((option) => option.value === value);
      },
      [getAllOptions]
    );

    const filterItems = React.useCallback(
      (value: string, search: string) => {
        const [optionValue, label] = value.split(':');

        if (!filterByValueAndLabel) {
          if (label && label.toLowerCase().includes(search.toLowerCase())) {
            return 1;
          }
          return 0;
        }

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

    const handleInputKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (event.key === 'Enter') {
        setIsPopoverOpen(true);
      } else if (event.key === 'Backspace' && !event.currentTarget.value) {
        const newSelectedValues = [...selectedValues];
        newSelectedValues.pop();
        setSelectedValues(newSelectedValues);
        onValueChange(newSelectedValues);
      }
    };

    const toggleOption = (optionValue: string) => {
      if (disabled) return;
      const option = getOptionByValue(optionValue);
      if (option?.disabled) return;
      const newSelectedValues = selectedValues.includes(optionValue)
        ? selectedValues.filter((value) => value !== optionValue)
        : [...selectedValues, optionValue];
      setSelectedValues(newSelectedValues);
      onValueChange(newSelectedValues);
    };

    const handleClear = () => {
      if (disabled) return;
      setSelectedValues([]);
      onValueChange([]);
    };

    const handleTogglePopover = () => {
      if (disabled) return;
      setIsPopoverOpen((prev) => !prev);
    };

    const toggleAll = () => {
      if (disabled) return;
      const allOptions = getAllOptions().filter((option) => !option.disabled);
      if (selectedValues.length === allOptions.length) {
        handleClear();
      } else {
        const allValues = allOptions.map((option) => option.value);
        setSelectedValues(allValues);
        onValueChange(allValues);
      }
    };

    const renderOptionIconNode = (option: InlineMultiSelectOption) => {
      if (!option.icon) {
        return null;
      }

      return (
        <span
          aria-hidden="true"
          className="mr-xs text-body-secondary flex items-center"
        >
          {renderIcon(option.icon, {
            className: 'h-4 w-4',
          })}
        </span>
      );
    };

    React.useEffect(() => {
      if (!resetOnDefaultValueChange) return;
      const prevDefaultValue = prevDefaultValueRef.current;
      if (!arraysEqual(prevDefaultValue, defaultValue)) {
        if (!arraysEqual(selectedValues, defaultValue)) {
          setSelectedValues(defaultValue);
        }
        prevDefaultValueRef.current = [...defaultValue];
      }
    }, [defaultValue, selectedValues, arraysEqual, resetOnDefaultValueChange]);

    React.useEffect(() => {
      if (!isPopoverOpen) {
        setSearchValue('');
      }
    }, [isPopoverOpen]);

    // Get display text for selected values
    const displayText = React.useMemo(() => {
      if (selectedValues.length === 0) return null;
      return selectedValues
        .map((v) => getOptionByValue(v)?.label)
        .filter(Boolean)
        .join(', ');
    }, [selectedValues, getOptionByValue]);

    return (
      <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
        <div className={cn('w-full', className)}>
          <PopoverTrigger asChild>
            <button
              ref={buttonRef}
              {...props}
              onClick={handleTogglePopover}
              disabled={disabled}
              className={cn(
                `border-interactive-default bg-surface-primary px-0
                disabled:bg-surface-disabled h-12 rounded relative flex w-full
                items-center border focus-visible:ring-4
                focus-visible:outline-none active:ring-4
                disabled:cursor-not-allowed`,
                !invalid &&
                  `hover:border-interactive-hover
                  active:ring-interactive-focused
                  focus:ring-interactive-focused`,
                invalid &&
                  `border-interactive-alert-default
                  hover:border-interactive-alert-default
                  focus:ring-interactive-alert-focused
                  active:ring-interactive-alert-focused`
              )}
            >
              <div
                className="mx-auto flex w-full items-center justify-between
                  overflow-hidden"
              >
                <span
                  className={cn(
                    'mx-sm truncate',
                    disabled
                      ? 'text-body-disabled'
                      : displayText
                        ? 'text-body-primary'
                        : 'text-body-placeholder'
                  )}
                >
                  {displayText || placeholder}
                </span>
                <IconChevronDown
                  className={cn(
                    'h-4 mx-xs shrink-0 cursor-pointer',
                    disabled ? 'text-body-disabled' : 'text-body-primary'
                  )}
                />
              </div>
            </button>
          </PopoverTrigger>
        </div>
        <PopoverContent
          className={cn('p-0 w-auto min-w-[300px]', popoverClassName)}
          align="start"
        >
          <Command filter={filterItems}>
            {searchable && (
              <CommandInput
                placeholder={searchPlaceholder}
                onKeyDown={handleInputKeyDown}
                value={searchValue}
                onValueChange={setSearchValue}
              />
            )}
            <CommandList className="max-h-[40vh] overflow-y-auto">
              <CommandEmpty>{emptyIndicator}</CommandEmpty>
              {!hideSelectAll && !searchValue && (
                <CommandGroup>
                  <CommandItem
                    key="all"
                    value="select-all"
                    onSelect={toggleAll}
                    className="cursor-pointer"
                  >
                    <Checkbox
                      className="mr-xs"
                      checked={
                        selectedValues.length ===
                        getAllOptions().filter((opt) => !opt.disabled).length
                      }
                    />
                    <span>({selectAllLabel})</span>
                  </CommandItem>
                </CommandGroup>
              )}
              {isGroupedOptions(options) ? (
                options.map((group) => (
                  <CommandGroup key={group.heading} heading={group.heading}>
                    {group.options.map((option) => {
                      const isSelected = selectedValues.includes(option.value);
                      return (
                        <CommandItem
                          key={option.value}
                          value={`${option.value}:${option.label}`}
                          onSelect={() => toggleOption(option.value)}
                          className={cn(
                            'cursor-pointer',
                            option.disabled &&
                              `text-interactive-disabled cursor-not-allowed
                                opacity-100 data-[disabled=true]:opacity-100`
                          )}
                          disabled={Boolean(option.disabled)}
                        >
                          <Checkbox className="mr-xs" checked={isSelected} />
                          {renderOptionIconNode(option)}
                          <span>{option.label}</span>
                        </CommandItem>
                      );
                    })}
                  </CommandGroup>
                ))
              ) : (
                <CommandGroup>
                  {options.map((option) => {
                    const isSelected = selectedValues.includes(option.value);
                    return (
                      <CommandItem
                        key={option.value}
                        value={`${option.value}:${option.label}`}
                        onSelect={() => toggleOption(option.value)}
                        className={cn(
                          'cursor-pointer',
                          option.disabled &&
                            `text-interactive-disabled cursor-not-allowed
                              opacity-100 data-[disabled=true]:opacity-100`
                        )}
                        disabled={Boolean(option.disabled)}
                      >
                        <Checkbox className="mr-xs" checked={isSelected} />
                        {renderOptionIconNode(option)}
                        <span>{option.label}</span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              )}
            </CommandList>
            <CommandSeparator />
            <div
              className="px-md py-sm bg-surface-primary bottom-0 sticky flex
                items-center justify-between"
            >
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
                onClick={() => setIsPopoverOpen(false)}
              >
                {applyLabel}
              </Button>
            </div>
          </Command>
        </PopoverContent>
      </Popover>
    );
  }
);

InlineMultiSelect.displayName = 'InlineMultiSelect';
export type {
  InlineMultiSelectOption,
  InlineMultiSelectGroup,
  InlineMultiSelectProps,
};
