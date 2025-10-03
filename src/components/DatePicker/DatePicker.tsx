import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import 'react-day-picker/style.css';
import { IconCalendar } from '@tabler/icons-react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

// Component variants
const triggerVariants = cva(
  `bg-input-default rounded min-h-12 min-w-48 p-md gap-2 text-md inline-flex
  cursor-pointer items-center justify-between border transition-colors
  outline-none focus:ring-4 focus:ring-offset-0`,
  {
    variants: {
      error: {
        false: `border-interactive-default hover:border-interactive-hover
        focus:border-interactive-selected focus:ring-interactive-focused`,
        true: `border-interactive-alert-default
        hover:border-interactive-alert-hover
        focus:ring-interactive-alert-focused`,
      },
      disabled: {
        false: 'cursor-pointer',
        true: `border-interactive-disabled bg-input-disabled text-body-disabled
        cursor-not-allowed`,
      },
    },
    defaultVariants: {
      error: false,
      disabled: false,
    },
  }
);

// Popover content classes
const contentClasses = `bg-surface-primary border border-interactive-default rounded-lg p-md z-50 w-auto min-w-80 max-w-none shadow-lg`;

export interface DatePickerProps
  extends Omit<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      'value' | 'onChange' | 'defaultValue'
    >,
    VariantProps<typeof triggerVariants> {
  /**
   * The selected date value. Can be a Date object, string, or null.
   */
  value?: Date | string | null;
  /**
   * Callback function called when the date selection changes.
   */
  onChange?: (date: Date | null) => void;
  /**
   * The default date value for uncontrolled usage.
   */
  defaultValue?: Date | string | null;
  /**
   * Placeholder text to display when no date is selected.
   */
  placeholder?: string;
  /**
   * The minimum selectable date.
   */
  minDate?: Date;
  /**
   * The maximum selectable date.
   */
  maxDate?: Date;
  /**
   * Whether the date picker is disabled.
   */
  disabled?: boolean;
  /**
   * Whether the date picker input is in an error state.
   */
  error?: boolean;
  /**
   * Custom icon to display in the trigger button.
   */
  icon?: IconProp;
  /**
   * Format function for displaying the selected date.
   */
  formatDate?: (date: Date) => string;
  /**
   * Custom class name for the trigger element.
   */
  className?: string;
  /**
   * Custom class name for the popover content.
   */
  contentClassName?: string;
  /**
   * Whether the popover should be open by default.
   */
  defaultOpen?: boolean;
  /**
   * Controlled open state of the popover.
   */
  open?: boolean;
  /**
   * Callback function called when the popover open state changes.
   */
  onOpenChange?: (open: boolean) => void;

  // FormField integration props
  /**
   * Label text for the form field
   */
  label?: string;
  /**
   * Name attribute for the form field
   */
  name?: string;
  /**
   * Description text to show below the field
   */
  description?: string;
  /**
   * Error message to display
   */
  errorMessage?: string;
}

// Utility functions
const parseDate = (value: Date | string | null): Date | null => {
  if (!value) return null;
  if (value instanceof Date) {
    return isNaN(value.getTime()) ? null : value;
  }
  const parsed = new Date(value);
  return isNaN(parsed.getTime()) ? null : parsed;
};

const formatDateDefault = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

export const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      value,
      onChange,
      defaultValue,
      placeholder = '選択してください',
      minDate,
      maxDate,
      disabled = false,
      error = false,
      icon,
      formatDate = formatDateDefault,
      className,
      contentClassName,
      defaultOpen = false,
      open,
      onOpenChange,
      // FormField props
      label,
      name,
      description,
      errorMessage,
      ...props
    },
    ref
  ) => {
    // State management
    const [internalValue, setInternalValue] = React.useState<Date | null>(() =>
      parseDate(defaultValue || null)
    );
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);

    // Controlled vs uncontrolled
    const isControlled = value !== undefined;
    const selectedDate = isControlled ? parseDate(value) : internalValue;
    const isOpen = open !== undefined ? open : internalOpen;

    // Parse min/max dates to ensure they're Date objects
    const parsedMinDate = React.useMemo(
      () => parseDate(minDate || null),
      [minDate]
    );
    const parsedMaxDate = React.useMemo(
      () => parseDate(maxDate || null),
      [maxDate]
    );

    // Validate date range
    const isValidDateRange = React.useMemo(() => {
      if (!parsedMinDate || !parsedMaxDate) return true;
      return parsedMinDate <= parsedMaxDate;
    }, [parsedMinDate, parsedMaxDate]);

    const handleDateChange = (date: Date | undefined) => {
      const newDate = date || null;
      if (!isControlled) {
        setInternalValue(newDate);
      }
      onChange?.(newDate);

      // Close the popover when a date is selected
      if (newDate) {
        const newOpen = false;
        if (open === undefined) {
          setInternalOpen(newOpen);
        }
        onOpenChange?.(newOpen);
      }
    };

    const handleOpenChange = (newOpen: boolean) => {
      if (open === undefined) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    };

    // Trigger key handler - handles opening and arrow navigation
    const handleTriggerKeyDown = (event: React.KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowUp':
        case 'Enter':
        case ' ':
          event.preventDefault();
          if (!isOpen) {
            handleOpenChange(true);
          }
          break;
        case 'Escape':
          if (isOpen) {
            event.preventDefault();
            handleOpenChange(false);
          }
          break;
      }
    };

    const datePickerElement = (
      <Popover.Root open={isOpen} onOpenChange={handleOpenChange}>
        <Popover.Trigger asChild>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            aria-describedby={
              description && name ? `${name}-description` : undefined
            }
            aria-labelledby={label && name ? `${name}-label` : undefined}
            className={cn(triggerVariants({ error, disabled }), className)}
            onKeyDown={handleTriggerKeyDown}
            {...props}
          >
            <span
              className={cn(
                'text-body-primary flex-1 text-left',
                !selectedDate && 'text-body-placeholder'
              )}
            >
              {selectedDate ? formatDate(selectedDate) : placeholder}
            </span>
            {renderIcon(icon || IconCalendar, {
              size: 14,
              className: cn(
                'shrink-0',
                disabled ? 'text-interactive-disabled' : 'text-shape-primary'
              ),
            })}
          </button>
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className={cn(contentClasses, contentClassName)}
            sideOffset={8}
            align="center"
            alignOffset={0}
            side="bottom"
            avoidCollisions={true}
            collisionPadding={16}
            sticky="always"
            onEscapeKeyDown={() => handleOpenChange(false)}
            onPointerDownOutside={() => handleOpenChange(false)}
            role="dialog"
            aria-label="Date picker calendar"
          >
            <DayPicker
              animate
              mode="single"
              selected={selectedDate || undefined}
              onSelect={handleDateChange}
              disabled={
                !isValidDateRange
                  ? [
                      {
                        before: new Date('1900-01-01'),
                        after: new Date('1899-12-31'),
                      },
                    ] // Disable all dates if invalid range
                  : [
                      ...(parsedMinDate ? [{ before: parsedMinDate }] : []),
                      ...(parsedMaxDate ? [{ after: parsedMaxDate }] : []),
                    ]
              }
              showOutsideDays
              fixedWeeks
              autoFocus={isOpen}
              defaultMonth={selectedDate || new Date()}
              classNames={(() => {
                const defaultClassNames = getDefaultClassNames();
                return {
                  today: `border-interactive-primary-default border-2`,
                  selected: `bg-interactive-primary-default text-interactive-inverse hover:bg-interactive-primary-default hover:text-interactive-inverse`,
                  root: `${defaultClassNames.root} shadow-lg p-2`,
                  chevron: `fill-current text-interactive-primary-default`,
                  day: `${defaultClassNames.day} hover:bg-interactive-neutral-hover transition-colors`,
                  outside: `text-body-disabled opacity-50`,
                  disabled: `text-body-disabled opacity-40 cursor-not-allowed`,
                  caption_label: `text-body-primary font-semibold`,
                  button_previous: `text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors rounded-md p-1`,
                  button_next: `text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors rounded-md p-1`,
                };
              })()}
            />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );

    // FormField functionality included inline
    return (
      <div className="min-w-48 flex w-full flex-col">
        {label && name && (
          <label
            id={`${name}-label`}
            className={cn(
              'gap-1 pb-2 text-sm font-normal flex items-center leading-none',
              disabled ? 'text-body-disabled' : 'text-body-secondary'
            )}
          >
            <span>{label}</span>
          </label>
        )}
        {datePickerElement}
        {errorMessage && (
          <div className="pt-1">
            <p className="text-body-alert text-sm font-normal leading-[1.5]">
              {errorMessage}
            </p>
          </div>
        )}
        {description && name && (
          <div className="pt-1" id={`${name}-description`}>
            <p
              className={cn(
                `text-sm font-normal leading-[1.5] break-words
                whitespace-normal`,
                disabled ? 'text-body-disabled' : 'text-body-secondary'
              )}
            >
              {description}
            </p>
          </div>
        )}
      </div>
    );
  }
);

DatePicker.displayName = 'DatePicker';
