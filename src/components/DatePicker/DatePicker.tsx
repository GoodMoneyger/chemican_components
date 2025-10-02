import * as React from 'react';
import { Popover } from 'radix-ui';
import {
  IconCalendar,
  IconChevronLeft,
  IconChevronRight,
} from '@tabler/icons-react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

// Calendar utilities
const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

// Component variants
const triggerVariants = cva(
  `bg-input-default rounded min-h-12 p-md gap-2 text-md inline-flex
  cursor-pointer items-center justify-between border transition-colors
  outline-none focus-visible:ring-4 focus-visible:ring-offset-0`,
  {
    variants: {
      error: {
        false: `border-interactive-default hover:border-interactive-hover
        focus-visible:border-interactive-selected
        focus-visible:ring-interactive-focused`,
        true: `border-interactive-alert-default
        hover:border-interactive-alert-hover
        focus-visible:ring-interactive-alert-focused`,
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

// Calendar layout classes
const contentClasses = `bg-surface-primary border border-interactive-default rounded-lg p-sm sm:p-md z-50 w-full max-w-sm sm:min-w-80 shadow-lg`;

const calendarHeaderClasses = 'mb-md flex items-center justify-between';

const navigationButtonVariants = cva(
  `bg-interactive-neutral-default hover:bg-interactive-neutral-hover
  active:bg-interactive-neutral-active rounded p-sm
  focus-visible:ring-interactive-focused flex cursor-pointer items-center
  justify-center border-0 transition-colors focus-visible:ring-4
  focus-visible:outline-none`,
  {
    variants: {
      disabled: {
        false: '',
        true: 'cursor-not-allowed opacity-50',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  }
);

const monthYearButtonClasses = `text-body-primary font-medium hover:bg-interactive-neutral-hover rounded
  px-sm py-xs focus-visible:ring-interactive-focused cursor-pointer transition-colors
  focus-visible:ring-4 focus-visible:outline-none`;

const dayGridClasses = 'gap-xs grid grid-cols-7';

const dayHeaderClasses =
  'text-body-secondary text-xs font-medium py-xs text-center';

const dayButtonVariants = cva(
  `text-body-primary text-sm min-w-10 min-h-10 rounded
  focus-visible:ring-interactive-focused flex cursor-pointer items-center
  justify-center transition-colors focus-visible:ring-4
  focus-visible:outline-none`,
  {
    variants: {
      isToday: {
        false: '',
        true: 'font-semibold',
      },
      isSelected: {
        false: 'hover:bg-interactive-neutral-hover',
        true: 'bg-interactive-primary-default text-interactive-inverse',
      },
      isDisabled: {
        false: '',
        true: 'text-body-disabled cursor-not-allowed hover:bg-transparent',
      },
      isOtherMonth: {
        false: '',
        true: 'text-body-secondary',
      },
      isFocused: {
        false: '',
        true: 'ring-interactive-focused ring-2',
      },
    },
    compoundVariants: [
      {
        isSelected: true,
        isToday: true,
        className: 'ring-interactive-focused ring-4 ring-offset-2',
      },
    ],
    defaultVariants: {
      isToday: false,
      isSelected: false,
      isDisabled: false,
      isOtherMonth: false,
      isFocused: false,
    },
  }
);

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
  /**
   * Whether the field is optional
   */
  optional?: boolean;
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

const isSameDay = (date1: Date | null, date2: Date | null): boolean => {
  if (!date1 || !date2) return false;
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

const isToday = (date: Date): boolean => {
  const today = new Date();
  return isSameDay(date, today);
};

const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

const isDateDisabled = (
  date: Date,
  minDate?: Date | null,
  maxDate?: Date | null
): boolean => {
  if (!date || isNaN(date.getTime())) return true; // Handle invalid dates
  if (minDate && date < minDate) return true;
  if (maxDate && date > maxDate) return true;
  return false;
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
      optional = false,
      ...props
    },
    ref
  ) => {
    // State management
    const [internalValue, setInternalValue] = React.useState<Date | null>(() =>
      parseDate(defaultValue || null)
    );
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const [focusedDate, setFocusedDate] = React.useState<Date | null>(null);
    const [currentMonth, setCurrentMonth] = React.useState(() => {
      const date =
        parseDate(value || null) ||
        parseDate(defaultValue || null) ||
        new Date();
      return { year: date.getFullYear(), month: date.getMonth() };
    });

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

    const handleDateChange = (date: Date | null) => {
      if (!isControlled) {
        setInternalValue(date);
      }
      onChange?.(date);

      // Close the popover when a date is selected
      if (date) {
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

      // Initialize focused date when opening
      if (newOpen) {
        // Priority: 1. Selected date, 2. Today
        const today = new Date();
        const initialFocusDate = selectedDate || today;
        setFocusedDate(initialFocusDate);

        // Ensure the current month shows the focused date
        setCurrentMonth({
          year: initialFocusDate.getFullYear(),
          month: initialFocusDate.getMonth(),
        });
      } else {
        // Clear focused date when closing
        setFocusedDate(null);
      }
    };

    // Navigation handlers
    const navigateMonth = (direction: 'prev' | 'next') => {
      setCurrentMonth((prev) => {
        const newMonth = direction === 'prev' ? prev.month - 1 : prev.month + 1;
        let newYear = prev.year;
        let adjustedMonth = newMonth;

        if (adjustedMonth < 0) {
          adjustedMonth = 11;
          newYear -= 1;
        } else if (adjustedMonth > 11) {
          adjustedMonth = 0;
          newYear += 1;
        }

        // Check bounds
        const newDate = new Date(newYear, adjustedMonth, 1);
        if (
          parsedMinDate &&
          newDate <
            new Date(parsedMinDate.getFullYear(), parsedMinDate.getMonth(), 1)
        ) {
          return prev;
        }
        if (
          parsedMaxDate &&
          newDate >
            new Date(parsedMaxDate.getFullYear(), parsedMaxDate.getMonth(), 1)
        ) {
          return prev;
        }

        return { year: newYear, month: adjustedMonth };
      });
    };

    const canNavigatePrev = React.useMemo(() => {
      if (!parsedMinDate) return true;
      const firstOfPrevMonth = new Date(
        currentMonth.year,
        currentMonth.month - 1,
        1
      );
      return (
        firstOfPrevMonth >=
        new Date(parsedMinDate.getFullYear(), parsedMinDate.getMonth(), 1)
      );
    }, [currentMonth, parsedMinDate]);

    const canNavigateNext = React.useMemo(() => {
      if (!parsedMaxDate) return true;
      const firstOfNextMonth = new Date(
        currentMonth.year,
        currentMonth.month + 1,
        1
      );
      return (
        firstOfNextMonth <=
        new Date(parsedMaxDate.getFullYear(), parsedMaxDate.getMonth(), 1)
      );
    }, [currentMonth, parsedMaxDate]);

    // Generate calendar days (simplified)
    const calendarDays = React.useMemo(() => {
      const days: Array<{
        date: Date;
        isCurrentMonth: boolean;
        isDisabled: boolean;
      }> = [];

      const year = currentMonth.year;
      const month = currentMonth.month;
      const firstDay = getFirstDayOfMonth(year, month);

      // Start from the first day of the calendar grid
      const startDate = new Date(year, month, 1 - firstDay);

      // Generate 42 days (6 weeks × 7 days)
      for (let i = 0; i < 42; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);

        const isCurrentMonth = date.getMonth() === month;
        const isDisabled = isDateDisabled(date, parsedMinDate, parsedMaxDate);

        days.push({
          date,
          isCurrentMonth,
          isDisabled,
        });
      }

      return days;
    }, [currentMonth, parsedMinDate, parsedMaxDate]);

    // Helper function to update focused date and month if needed
    const updateFocusedDate = (newDate: Date) => {
      setFocusedDate(newDate);
      // Update month if the new date is in a different month
      if (
        newDate.getMonth() !== currentMonth.month ||
        newDate.getFullYear() !== currentMonth.year
      ) {
        setCurrentMonth({
          year: newDate.getFullYear(),
          month: newDate.getMonth(),
        });
      }
    };

    // Keyboard navigation for the calendar grid
    const handleCalendarKeyDown = (event: React.KeyboardEvent) => {
      if (!isOpen) return;

      const currentFocused = focusedDate || selectedDate || new Date();

      switch (event.key) {
        case 'Escape':
          event.preventDefault();
          handleOpenChange(false);
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          if (
            focusedDate &&
            !isDateDisabled(focusedDate, parsedMinDate, parsedMaxDate)
          ) {
            handleDateChange(focusedDate);
          }
          break;
        case 'ArrowLeft':
          event.preventDefault();
          if (currentFocused) {
            const newDate = new Date(currentFocused);
            newDate.setDate(newDate.getDate() - 1);
            updateFocusedDate(newDate);
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          if (currentFocused) {
            const newDate = new Date(currentFocused);
            newDate.setDate(newDate.getDate() + 1);
            updateFocusedDate(newDate);
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          if (currentFocused) {
            const newDate = new Date(currentFocused);
            newDate.setDate(newDate.getDate() - 7);
            updateFocusedDate(newDate);
          }
          break;
        case 'ArrowDown':
          event.preventDefault();
          if (currentFocused) {
            const newDate = new Date(currentFocused);
            newDate.setDate(newDate.getDate() + 7);
            updateFocusedDate(newDate);
          }
          break;
        case 'Home':
          event.preventDefault();
          if (currentFocused) {
            const newDate = new Date(
              currentFocused.getFullYear(),
              currentFocused.getMonth(),
              1
            );
            updateFocusedDate(newDate);
          }
          break;
        case 'End':
          event.preventDefault();
          if (currentFocused) {
            const newDate = new Date(
              currentFocused.getFullYear(),
              currentFocused.getMonth() + 1,
              0
            );
            updateFocusedDate(newDate);
          }
          break;
        case 'PageUp':
          event.preventDefault();
          if (currentFocused) {
            const newDate = new Date(currentFocused);
            if (event.shiftKey) {
              // Shift + PageUp = previous year
              newDate.setFullYear(newDate.getFullYear() - 1);
            } else {
              // PageUp = previous month
              newDate.setMonth(newDate.getMonth() - 1);
            }
            updateFocusedDate(newDate);
          }
          break;
        case 'PageDown':
          event.preventDefault();
          if (currentFocused) {
            const newDate = new Date(currentFocused);
            if (event.shiftKey) {
              // Shift + PageDown = next year
              newDate.setFullYear(newDate.getFullYear() + 1);
            } else {
              // PageDown = next month
              newDate.setMonth(newDate.getMonth() + 1);
            }
            updateFocusedDate(newDate);
          }
          break;
      }
    };

    // Simple trigger key handler - only handles opening
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

    // Auto-focus the focused date when calendar opens or focused date changes
    React.useEffect(() => {
      if (isOpen && focusedDate) {
        // Small delay to allow DOM to render
        const timer = setTimeout(() => {
          const dateString = `${focusedDate.getDate()} ${MONTHS[focusedDate.getMonth()]} ${focusedDate.getFullYear()}`;

          // Try to find the button with the exact aria-label
          const focusedButton = document.querySelector(
            `button[aria-label="${dateString}"]`
          ) as HTMLButtonElement;

          if (focusedButton && !focusedButton.disabled) {
            focusedButton.focus();
          } else {
            // Fallback: find the button with tabIndex 0
            const fallbackButton = document.querySelector(
              `button[tabindex="0"]`
            ) as HTMLButtonElement;
            if (fallbackButton && !fallbackButton.disabled) {
              fallbackButton.focus();
            }
          }
        }, 50);
        return () => clearTimeout(timer);
      }
      return undefined;
    }, [isOpen, focusedDate]);

    const datePickerElement = (
      <Popover.Root open={isOpen} onOpenChange={handleOpenChange}>
        <Popover.Trigger asChild>
          <button
            ref={ref}
            type="button"
            disabled={disabled}
            aria-expanded={isOpen}
            aria-haspopup="dialog"
            aria-describedby={description ? `${name}-description` : undefined}
            aria-labelledby={label ? `${name}-label` : undefined}
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
            align="start"
            onEscapeKeyDown={() => handleOpenChange(false)}
            onPointerDownOutside={() => handleOpenChange(false)}
            onOpenAutoFocus={(e) => {
              e.preventDefault();
              // Focus will be managed by our tabIndex logic
            }}
            role="dialog"
            aria-label="Date picker calendar"
          >
            {/* Calendar Header */}
            <div className={calendarHeaderClasses}>
              <button
                type="button"
                onClick={() => navigateMonth('prev')}
                disabled={!canNavigatePrev}
                className={navigationButtonVariants({
                  disabled: !canNavigatePrev,
                })}
                aria-label="Previous month"
              >
                {renderIcon(IconChevronLeft, { size: 16 })}
              </button>

              <button
                type="button"
                className={monthYearButtonClasses}
                aria-label={`${MONTHS[currentMonth.month]} ${currentMonth.year}`}
              >
                {MONTHS[currentMonth.month]} {currentMonth.year}
              </button>

              <button
                type="button"
                onClick={() => navigateMonth('next')}
                disabled={!canNavigateNext}
                className={navigationButtonVariants({
                  disabled: !canNavigateNext,
                })}
                aria-label="Next month"
              >
                {renderIcon(IconChevronRight, { size: 16 })}
              </button>
            </div>

            {/* Calendar Grid */}
            <div className={dayGridClasses} onKeyDown={handleCalendarKeyDown}>
              {/* Day headers */}
              {DAYS_OF_WEEK.map((day) => (
                <div key={day} className={dayHeaderClasses}>
                  {day}
                </div>
              ))}

              {/* Calendar days */}
              {calendarDays.map((dayInfo, index) => {
                const { date, isCurrentMonth, isDisabled } = dayInfo;
                const isSelectedDay = isSameDay(date, selectedDate);
                const isTodayDay = isToday(date);
                const isFocusedDay = isSameDay(date, focusedDate);

                // Simplified focus logic: focused date takes priority, then selected, then today
                const shouldFocus =
                  !isDisabled &&
                  (isFocusedDay ||
                    (!focusedDate && isSelectedDay) ||
                    (!focusedDate &&
                      !selectedDate &&
                      isTodayDay &&
                      isCurrentMonth));

                return (
                  <button
                    key={index}
                    type="button"
                    disabled={isDisabled}
                    onClick={() => handleDateChange(date)}
                    onFocus={() => {
                      if (!isDisabled) {
                        setFocusedDate(date);
                      }
                    }}
                    tabIndex={shouldFocus ? 0 : -1}
                    className={dayButtonVariants({
                      isToday: isTodayDay,
                      isSelected: isSelectedDay,
                      isDisabled,
                      isOtherMonth: !isCurrentMonth,
                      isFocused: isFocusedDay,
                    })}
                    aria-label={`${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`}
                    aria-selected={isSelectedDay}
                    aria-current={isTodayDay ? 'date' : undefined}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    );

    // FormField functionality included inline
    return (
      <div className="flex flex-col">
        {label && (
          <label
            id={`${name}-label`}
            htmlFor={name}
            className={cn(
              'gap-1 pb-2 text-sm font-normal flex items-center leading-none',
              disabled ? 'text-body-disabled' : 'text-body-secondary'
            )}
          >
            <span>{label}</span>
            {optional && (
              <span
                className={
                  disabled ? 'text-body-disabled' : 'text-body-secondary'
                }
              >
                (任意)
              </span>
            )}
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
        {description && (
          <div className="pt-1" id={`${name}-description`}>
            <p
              className={cn(
                'text-sm font-normal leading-[1.5]',
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
