import React from 'react';
import { IconChevronDown, IconPlus } from '@tabler/icons-react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';
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

const selectVariants = cva(
  `bg-surface-primary text-body-primary disabled:border-interactive-disabled
  disabled:bg-surface-disabled disabled:text-body-disabled inline-flex
  items-center justify-between border focus-visible:ring-4
  focus-visible:outline-none enabled:cursor-pointer data-[state=open]:ring-4`,
  {
    variants: {
      variant: {
        default: 'border-interactive-default p-md rounded gap-xs h-11.5 w-full',
        compact: `py-xxs px-xs rounded-sm gap-xxs
        hover:bg-interactive-neutral-hover h-[26px] w-fit border-transparent`,
      },
      intent: {
        primary: '',
        secondary: '',
      },
      invalid: {
        false: `hover:border-interactive-hover
        focus-visible:ring-interactive-focused
        data-[state=open]:ring-interactive-focused
        data-[state=open]:border-interactive-primary-default`,
        true: `border-interactive-alert-default
        hover:border-interactive-alert-default
        focus-visible:ring-interactive-alert-focused
        data-[state=open]:ring-interactive-alert-focused`,
      },
    },
    compoundVariants: [
      {
        intent: 'secondary',
        class: 'bg-surface-tertiary',
      },
    ],
    defaultVariants: {
      variant: 'default',
      intent: 'primary',
    },
  }
);

const selectContentVariants = cva(
  `bg-surface-primary z-dropdown relative w-full min-w-[8rem] overflow-hidden
  border`,
  {
    variants: {
      variant: {
        default: 'border-interactive-default py-xxs max-h-96 rounded',
        compact: `border-divider-default rounded-sm
        shadow-[0px_5px_9px_0px_rgba(0,0,0,0.16)]`,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const selectItemVariants = cva(
  `flex !cursor-pointer items-center border-0 ring-0 focus:outline-0
  data-[disabled=true]:!cursor-not-allowed data-[disabled=true]:opacity-50`,
  {
    variants: {
      variant: {
        default: `gap-xs px-md text-body-primary
        hover:bg-interactive-neutral-hover focus:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active h-[2.75rem]`,
        compact: `px-md text-body-primary hover:bg-interactive-neutral-hover
        focus:bg-interactive-neutral-hover h-10`,
      },
      isSelected: {
        false: '',
        true: '',
      },
    },
    compoundVariants: [
      {
        variant: 'compact',
        isSelected: true,
        class: 'bg-interactive-neutral-selected text-body-secondary',
      },
    ],
    defaultVariants: {
      variant: 'default',
      isSelected: false,
    },
  }
);

export interface SelectOption {
  value: string;
  label: React.ReactNode;
  icon?: IconProp;
  type?: 'Option' | 'Group' | 'Separator';
  disabled?: boolean;
  isCreated?: boolean;
}

export interface SelectProps extends VariantProps<typeof selectVariants> {
  options: SelectOption[];
  placeholder?: React.ReactNode;
  className?: string;
  icon?: IconProp;
  invalid?: boolean;
  value?: string;
  intent?: 'primary' | 'secondary';
  hideChevron?: boolean;
  disabled?: boolean;
  onValueChange?: (value: string) => void;

  // New props for search and create functionality
  /**
   * If true, shows a search input in the dropdown.
   * @default false
   */
  searchable?: boolean;

  /**
   * If true, allows creating new items by typing and pressing Enter.
   * Requires searchable to be true (automatically enabled if allowCreate is true).
   * @default false
   */
  allowCreate?: boolean;

  /**
   * Callback fired when a new item is created.
   * Should return the new option, or void if handled externally.
   */
  onCreate?: (inputValue: string) => SelectOption | void;

  /**
   * Label shown next to created items.
   * @default "(created)"
   */
  createdLabel?: React.ReactNode;

  /**
   * Placeholder text for the search input.
   * @default "Search..."
   */
  searchPlaceholder?: string;

  /**
   * Content displayed when no options match search.
   * @default "No results found."
   */
  emptyIndicator?: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder = 'Select an option',
  className,
  icon: Icon,
  invalid = false,
  variant = 'default',
  intent = 'primary',
  value,
  hideChevron = false,
  disabled = false,
  onValueChange,
  searchable = false,
  allowCreate = false,
  onCreate,
  createdLabel = '(created)',
  searchPlaceholder = 'Search...',
  emptyIndicator = 'No results found.',
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');
  const [createdOptions, setCreatedOptions] = React.useState<SelectOption[]>(
    []
  );

  // Enable search if allowCreate is true
  const showSearch = searchable || allowCreate;

  // Clear search when popover closes
  React.useEffect(() => {
    if (!isPopoverOpen) {
      setSearchValue('');
    }
  }, [isPopoverOpen]);

  // Get all options including created ones
  const allOptions = React.useMemo(() => {
    return [...createdOptions, ...options];
  }, [createdOptions, options]);

  // Get only selectable options (not groups/separators)
  const selectableOptions = React.useMemo(() => {
    return allOptions.filter(
      (opt) => opt.type !== 'Group' && opt.type !== 'Separator'
    );
  }, [allOptions]);

  const getOptionByValue = React.useCallback(
    (val: string): SelectOption | undefined => {
      return selectableOptions.find((opt) => opt.value === val);
    },
    [selectableOptions]
  );

  const selectedOption = value ? getOptionByValue(value) : undefined;

  const filterItems = React.useCallback((itemValue: string, search: string) => {
    const [, label] = itemValue.split(':');
    if (label && label.toLowerCase().includes(search.toLowerCase())) {
      return 1;
    }
    return 0;
  }, []);

  const handleSelect = (optionValue: string) => {
    if (disabled) return;
    const option = getOptionByValue(optionValue);
    if (option?.disabled) return;

    onValueChange?.(optionValue);
    setIsPopoverOpen(false);
  };

  const handleCreate = () => {
    if (!allowCreate || !searchValue.trim()) return;

    const trimmedValue = searchValue.trim();

    // Check if value already exists
    const exists = selectableOptions.some(
      (opt) =>
        String(opt.label).toLowerCase() === trimmedValue.toLowerCase() ||
        opt.value.toLowerCase() === trimmedValue.toLowerCase()
    );

    if (exists) return;

    let newOption: SelectOption;

    if (onCreate) {
      // Parent manages created options via onCreate callback
      const result = onCreate(trimmedValue);
      if (result) {
        newOption = { ...result, isCreated: true };
        onValueChange?.(newOption.value);
      }
    } else {
      // No onCreate provided - use internal state to track created items
      newOption = {
        value: trimmedValue,
        label: trimmedValue,
        isCreated: true,
      };
      setCreatedOptions((prev) => [newOption, ...prev]);
      onValueChange?.(newOption.value);
    }

    setSearchValue('');
    setIsPopoverOpen(false);
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && allowCreate && searchValue.trim()) {
      const exactMatch = selectableOptions.some(
        (opt) =>
          String(opt.label).toLowerCase() === searchValue.trim().toLowerCase()
      );

      if (!exactMatch) {
        event.preventDefault();
        handleCreate();
      }
    }
  };

  const showCreateOption =
    allowCreate &&
    searchValue.trim() &&
    !selectableOptions.some(
      (opt) =>
        String(opt.label).toLowerCase() === searchValue.trim().toLowerCase()
    );

  // Separate created options from original options
  const createdItems = allOptions.filter((opt) => opt.isCreated);
  const originalOptions = options.filter((opt) => !opt.isCreated);

  return (
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          data-state={isPopoverOpen ? 'open' : 'closed'}
          className={cn(
            selectVariants({ variant, intent, invalid }),
            'group',
            className
          )}
          onClick={() => !disabled && setIsPopoverOpen(!isPopoverOpen)}
        >
          <div className="inline-flex items-center">
            {renderIcon(Icon, {
              className: cn('text-body-secondary mr-xxs h-3.5 w-3.5'),
            })}
            <span
              className={cn(
                'truncate',
                !selectedOption && 'text-body-placeholder',
                variant === 'compact' && 'text-sm'
              )}
            >
              {selectedOption ? (
                <span className="gap-xs flex items-center">
                  {renderIcon(selectedOption.icon, {
                    className: 'h-4 w-4',
                  })}
                  {selectedOption.label}
                  {selectedOption.isCreated && (
                    <span className="text-body-secondary text-sm">
                      {createdLabel}
                    </span>
                  )}
                </span>
              ) : (
                placeholder
              )}
            </span>
          </div>
          {!hideChevron && (
            <IconChevronDown
              className={cn(
                `text-body-primary h-3.5 w-3.5 transition-transform
                duration-200`,
                isPopoverOpen && 'rotate-180',
                disabled && 'text-body-disabled'
              )}
            />
          )}
        </button>
      </PopoverTrigger>

      <PopoverContent
        className={cn(selectContentVariants({ variant }), 'p-0')}
        style={{ minWidth: 'var(--radix-popover-trigger-width)' }}
        align="start"
      >
        <Command filter={filterItems}>
          {showSearch && (
            <CommandInput
              placeholder={searchPlaceholder}
              value={searchValue}
              onValueChange={setSearchValue}
              onKeyDown={handleInputKeyDown}
            />
          )}

          <CommandList>
            <CommandEmpty>
              {showCreateOption ? null : emptyIndicator}
            </CommandEmpty>

            {/* Create new item option */}
            {showCreateOption && (
              <CommandGroup>
                <CommandItem
                  value={`create:${searchValue}`}
                  onSelect={handleCreate}
                  className={cn(
                    selectItemVariants({ variant, isSelected: false }),
                    'text-interactive-primary-default'
                  )}
                >
                  <IconPlus className="h-4 w-4 mr-xs" />
                  <span>Create &quot;{searchValue.trim()}&quot;</span>
                </CommandItem>
              </CommandGroup>
            )}

            {/* Created items */}
            {createdItems.length > 0 && (
              <CommandGroup heading="Created Items">
                {createdItems.map((option) => {
                  const isSelected = value === option.value;
                  return (
                    <CommandItem
                      key={option.value}
                      value={`${option.value}:${option.label}`}
                      onSelect={() => handleSelect(option.value)}
                      disabled={Boolean(option.disabled)}
                      className={selectItemVariants({ variant, isSelected })}
                    >
                      {renderIcon(option.icon, {
                        className: cn('h-5 w-5', {
                          '-ml-xxs': variant === 'default',
                          'mr-xxs': variant === 'compact',
                        }),
                      })}
                      <span className="flex-1">{option.label}</span>
                      <span className="text-body-secondary text-sm">
                        {createdLabel}
                      </span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            )}

            {/* Original options (supporting Group/Separator types) */}
            <CommandGroup
              heading={createdItems.length > 0 ? 'Available Items' : undefined}
            >
              {originalOptions.map((option, index) => {
                if (option.type === 'Group') {
                  return (
                    <div
                      key={index}
                      className="text-body-secondary px-md py-1.5 text-xs
                        font-semibold"
                    >
                      {option.label}
                    </div>
                  );
                }

                if (option.type === 'Separator') {
                  return (
                    <div
                      key={index}
                      className="border-divider-default my-1 h-px border-b"
                    />
                  );
                }

                const isSelected = value === option.value;
                return (
                  <CommandItem
                    key={option.value}
                    value={`${option.value}:${option.label}`}
                    onSelect={() => handleSelect(option.value)}
                    disabled={Boolean(option.disabled)}
                    className={selectItemVariants({ variant, isSelected })}
                  >
                    {renderIcon(option.icon, {
                      className: cn('h-5 w-5', {
                        '-ml-xxs': variant === 'default',
                        'mr-xxs': variant === 'compact',
                      }),
                    })}
                    <span className="flex-1">{option.label}</span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

Select.displayName = 'Select';
