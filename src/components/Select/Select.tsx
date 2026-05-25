import React from 'react';
import { Select as RadixSelect } from 'radix-ui';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

const selectVariants = cva(
  `bg-surface-primary text-body-primary disabled:border-interactive-disabled
  disabled:bg-surface-disabled disabled:text-body-disabled
  [&[data-placeholder]]:text-body-placeholder
  disabled:[&[data-placeholder]]:text-body-disabled inline-flex items-center
  justify-between border focus-visible:ring-4 focus-visible:outline-none
  enabled:cursor-pointer data-[state=open]:ring-4`,
  {
    variants: {
      variant: {
        default: 'border-interactive-default p-md rounded gap-xs h-11.5 w-full',
        compact: `py-xxs px-xs rounded-sm gap-xxs
        hover:bg-interactive-neutral-hover max-w-62 h-[26px] w-fit
        border-transparent`,
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
  'bg-surface-primary z-dropdown relative overflow-hidden border',
  {
    variants: {
      variant: {
        default: `border-interactive-default max-h-96 rounded
        w-[var(--radix-select-trigger-width)]`,
        compact: `border-divider-default max-h-96 rounded-sm
        min-w-[max(12rem,var(--radix-select-trigger-width))]
        shadow-[0px_5px_9px_0px_rgba(0,0,0,0.16)]`,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const selectItemVariants = cva(
  `disabled:bg-surface-disabled disabled:text-interactive-disabled
  data-[disabled]:text-interactive-disabled flex cursor-pointer items-center
  border-0 wrap-anywhere ring-0 focus:outline-0 disabled:cursor-not-allowed
  data-[disabled]:cursor-not-allowed`,
  {
    variants: {
      variant: {
        default: `gap-xs px-md text-body-primary
        hover:bg-interactive-neutral-hover focus:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active py-sm min-h-[2.75rem]`,
        compact: `px-md text-body-primary hover:bg-interactive-neutral-hover
        focus:bg-interactive-neutral-hover min-h-10 py-sm`,
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

type SelectOption<T extends number | string = string> =
  | {
      value: T;
      label: React.ReactNode;
      icon?: IconProp;
      type?: 'Option';
      disabled?: boolean;
    }
  | {
      label: React.ReactNode;
      type: 'Group';
    }
  | {
      type: 'Separator';
    };

export interface SelectProps<T extends number | string = string>
  extends VariantProps<typeof selectVariants>,
    Omit<
      React.ComponentProps<typeof RadixSelect.Root>,
      'value' | 'onValueChange'
    > {
  options: SelectOption<T>[];
  placeholder?: React.ReactNode;
  className?: string;
  icon?: IconProp;
  invalid?: boolean;
  value?: T;
  onValueChange?: (value: T) => void;
  intent?: 'primary' | 'secondary';
  hideChevron?: boolean;
  searchPlaceholder?: string;
  searchThreshold?: number;
}

export const Select = <T extends number | string = string>({
  options,
  placeholder,
  className,
  icon: Icon,
  invalid = false,
  variant = 'default',
  intent = 'primary',
  value,
  hideChevron = false,
  onValueChange,
  searchPlaceholder = 'Search...',
  searchThreshold = 7,
  ...props
}: SelectProps<T>) => {
  const [searchValue, setSearchValue] = React.useState('');
  const searchInputRef = React.useRef<HTMLInputElement>(null);

  const selectableOptions = options.filter(
    (opt) => !('type' in opt) || opt.type === 'Option' || opt.type === undefined
  );
  const showSearch = selectableOptions.length >= searchThreshold;

  const getTextContent = (node: React.ReactNode): string => {
    if (typeof node === 'string') return node;
    if (typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(getTextContent).join('');
    if (React.isValidElement(node)) {
      const { children } = node.props as { children?: React.ReactNode };
      if (children) return getTextContent(children);
    }
    return '';
  };

  const isOptionVisible = (opt: SelectOption<T>): boolean => {
    if (!showSearch || !searchValue) return true;
    if ('type' in opt && (opt.type === 'Group' || opt.type === 'Separator'))
      return true;
    if ('label' in opt) {
      return getTextContent(opt.label)
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    }
    return true;
  };

  const rootProps: React.ComponentProps<typeof RadixSelect.Root> = {
    ...props,
  };

  // Convert value to string for Radix compatibility
  const stringValue = value !== undefined ? String(value) : undefined;

  // Helper to convert string back to original type
  const parseValue = (strValue: string): T => {
    const option = options.find(
      (opt) => 'value' in opt && String(opt.value) === strValue
    );
    return option && 'value' in option ? option.value : (strValue as T);
  };

  if (stringValue !== undefined) {
    rootProps.value = stringValue;
  }

  if (onValueChange) {
    rootProps.onValueChange = (strValue: string) => {
      const parsedValue = parseValue(strValue);
      onValueChange(parsedValue);
    };
  }

  return (
    <RadixSelect.Root
      {...rootProps}
      onOpenChange={(open) => {
        if (!open) setSearchValue('');
        rootProps.onOpenChange?.(open);
      }}
    >
      <RadixSelect.Trigger
        className={cn(
          selectVariants({ variant, intent, invalid }),
          'group',
          className
        )}
      >
        <div className="inline-flex items-center truncate">
          {renderIcon(Icon, {
            className: cn('shrink-0 text-body-secondary mr-xxs h-3.5 w-3.5'),
          })}
          <span className="truncate text-ellipsis">
            <RadixSelect.Value
              placeholder={placeholder || 'Select an option'}
              className={cn('hidden', {
                'text-sm': variant === 'compact',
              })}
            />
          </span>
        </div>
        {!hideChevron && (
          <RadixSelect.Icon
            className={cn('text-body-primary h-3.5 w-3.5 shrink-0', {
              'text-body-disabled': props.disabled,
            })}
          >
            <IconChevronDown
              className="top-0.5 relative h-full w-full transition-transform
                duration-200 group-data-[state=open]:rotate-180"
            />
          </RadixSelect.Icon>
        )}
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          sideOffset={-1} // Needed to not have the 1px spacing because of the borders.
          className={cn(selectContentVariants({ variant }), className)}
        >
          {showSearch && (
            <div
              className="border-divider-default gap-xs px-md py-xs flex
                items-center border-b"
            >
              <IconSearch className="text-body-secondary h-3.5 w-3.5 shrink-0" />
              <input
                ref={searchInputRef}
                className="text-body-primary placeholder:text-body-placeholder
                  w-full bg-transparent outline-none"
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyDown={(e) => e.stopPropagation()}
              />
            </div>
          )}
          <RadixSelect.ScrollUpButton />
          <RadixSelect.Viewport>
            {options.map((option, index) => {
              const visible = isOptionVisible(option);
              switch (option.type) {
                case 'Group':
                  return (
                    <RadixSelect.Group
                      key={index}
                      className={cn(!visible && 'hidden')}
                    >
                      <RadixSelect.Label>{option.label}</RadixSelect.Label>
                    </RadixSelect.Group>
                  );
                case 'Separator':
                  return (
                    <RadixSelect.Separator
                      key={index}
                      className={cn(
                        'border-divider-default h-px border-b',
                        !visible && 'hidden'
                      )}
                    />
                  );
                default:
                  return (
                    <RadixSelect.Item
                      key={index}
                      value={String(option.value)}
                      disabled={option.disabled ?? false}
                      className={cn(
                        selectItemVariants({
                          variant,
                          isSelected: value === option.value,
                        }),
                        !visible && 'hidden'
                      )}
                    >
                      {renderIcon(option.icon, {
                        className: cn('h-5 w-5', {
                          '-ml-xxs': variant === 'default',
                          'mr-xxs': variant === 'compact',
                          'text-interactive-disabled': option.disabled,
                        }),
                      })}
                      <RadixSelect.ItemText
                        className={cn('flex-1 break-words whitespace-normal', {
                          'text-interactive-disabled': option.disabled,
                        })}
                      >
                        {option.label}
                      </RadixSelect.ItemText>
                      <RadixSelect.ItemIndicator />
                    </RadixSelect.Item>
                  );
              }
            })}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton />
          <RadixSelect.Arrow />
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

Select.displayName = 'Select';
