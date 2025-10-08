import React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { IconCalendar } from '@tabler/icons-react';

import type { IconProp } from '../../lib/utils';
import { cn } from '../../lib/utils';
import { Calendar } from '../Calendar/Calendar';
import { Input } from '../Input/Input';

// Popover content classes
const contentClasses = `bg-surface-primary rounded-lg z-50 w-auto  max-w-none shadow-lg`;

export interface DatePickerProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'defaultValue' | 'placeholder'
  > {
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
   * Size of the trailing icon in pixels.
   */
  iconSize?: number;
  /**
   * Placeholder text to display when no date is selected.
   */
  placeholder?: React.ReactNode;
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
  /**
   * Which side to display the calendar relative to the input.
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
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

// Convert ReactNode to string for HTML input placeholder
const reactNodeToString = (reactNode: React.ReactNode): string => {
  let string = '';
  if (typeof reactNode === 'string') {
    string = reactNode;
  } else if (typeof reactNode === 'number') {
    string = reactNode.toString();
  } else if (reactNode instanceof Array) {
    reactNode.forEach((child) => {
      string += reactNodeToString(child);
    });
  } else if (React.isValidElement(reactNode)) {
    // Check if it's a FormattedMessage component
    const elementType = reactNode.type as unknown;
    if (
      elementType &&
      ((typeof elementType === 'function' &&
        (elementType as { name?: string }).name === 'FormattedMessage') ||
        (typeof elementType === 'object' &&
          (elementType as { displayName?: string }).displayName ===
            'FormattedMessage') ||
        (reactNode.props &&
          'id' in reactNode.props &&
          'defaultMessage' in reactNode.props))
    ) {
      // For FormattedMessage, try to get the defaultMessage or id as fallback
      const props = reactNode.props as { defaultMessage?: string; id?: string };
      string += props.defaultMessage || props.id || '[Translation]';
    } else {
      // For other React elements, try to extract from children
      string += reactNodeToString(reactNode.props.children);
    }
  }
  return string;
};

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      value,
      onChange,
      defaultValue,
      minDate,
      maxDate,
      disabled = false,
      error = false,
      icon,
      iconSize = 14,
      placeholder,
      formatDate = formatDateDefault,
      className,
      contentClassName,
      defaultOpen = false,
      open,
      onOpenChange,
      side = 'bottom',
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

    const handleDateChange = (date: Date | null) => {
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
    const handleTriggerKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
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
          <Input
            ref={ref}
            type="text"
            readOnly
            placeholder={
              placeholder ? reactNodeToString(placeholder) : undefined
            }
            value={selectedDate ? formatDate(selectedDate) : undefined}
            disabled={disabled}
            invalid={error}
            trailingIcon={icon || IconCalendar}
            trailingIconSize={iconSize}
            onTrailingIconClick={() => !disabled && handleOpenChange(!isOpen)}
            className={cn(
              'pl-0 py-md rounded-sm gap-2 text-md min-h-[46px] cursor-pointer',
              isOpen && 'ring-interactive-focused ring-4',
              className
            )}
            onKeyDown={handleTriggerKeyDown}
            onClick={() => !disabled && handleOpenChange(!isOpen)}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
          />
        </Popover.Trigger>

        <Popover.Portal>
          <Popover.Content
            className={cn(contentClasses, contentClassName)}
            sideOffset={4}
            align="start"
            alignOffset={0}
            side={side}
            avoidCollisions={false}
            collisionPadding={16}
            sticky="always"
            onEscapeKeyDown={() => handleOpenChange(false)}
            onPointerDownOutside={() => handleOpenChange(false)}
            role="dialog"
            aria-label="Date picker calendar"
          >
            <Calendar
              value={selectedDate}
              onChange={handleDateChange}
              {...(parsedMinDate && { minDate: parsedMinDate })}
              {...(parsedMaxDate && { maxDate: parsedMaxDate })}
              disabled={!isValidDateRange}
              showOutsideDays={true}
              fixedWeeks={true}
              animate={true}
              defaultMonth={selectedDate || new Date()}
            />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );

    return datePickerElement;
  }
);

DatePicker.displayName = 'DatePicker';
