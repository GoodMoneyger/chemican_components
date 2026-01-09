import React from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';
import 'react-day-picker/style.css';
import { ja, enUS } from 'react-day-picker/locale';

import { cn } from '../../lib/utils';
import './Calendar.css';

// Component styles
const getCalendarStyles = (inline: boolean) =>
  `bg-surface-primary border-surface-default rounded-md p-md gap-2.5 flex
  flex-col border border-surface-default transition-shadow duration-200 flex-shrink-0 ${
    inline ? '' : 'shadow-overlay'
  }`;

export interface CalendarProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    'onChange' | 'defaultValue' | 'onSelect'
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
   * Whether the calendar is disabled.
   */
  disabled?: boolean;
  /**
   * Custom class name for the calendar container.
   */
  className?: string;
  /**
   * Whether to show days outside the current month.
   */
  showOutsideDays?: boolean;
  /**
   * Whether to use fixed weeks (always show 6 weeks).
   */
  fixedWeeks?: boolean;
  /**
   * The month to display by default.
   */
  defaultMonth?: Date;
  /**
   * Whether the calendar is rendered inline (true) or as an overlay (false).
   * When inline=true, no shadow is applied. When inline=false (default), shadow is applied for overlay usage.
   */
  inline?: boolean;
  /**
   * The locale for date picker localization.
   * Defaults to 'ja' (Japanese).
   * Supported values: 'ja', 'en'
   */
  locale?: 'ja' | 'en';
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

export const Calendar = React.forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      value,
      onChange,
      defaultValue,
      minDate,
      maxDate,
      disabled = false,
      className,
      showOutsideDays = true,
      fixedWeeks = true,
      defaultMonth,
      inline = false,
      locale = 'ja',
      ...props
    },
    ref
  ) => {
    // State management for single date selection
    const [internalValue, setInternalValue] = React.useState<Date | null>(() =>
      parseDate(defaultValue || null)
    );

    // Controlled vs uncontrolled
    const isControlled = value !== undefined;
    const selectedDate = isControlled ? parseDate(value) : internalValue;

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

    // Handle date selection
    const handleDateChange = (date: Date | undefined) => {
      const newDate = date || null;
      if (!isControlled) {
        setInternalValue(newDate);
      }
      onChange?.(newDate);
    };

    return (
      <div
        ref={ref}
        className={cn(getCalendarStyles(inline), className)}
        {...props}
      >
        <DayPicker
          animate={false}
          mode="single"
          selected={selectedDate || undefined}
          onSelect={handleDateChange}
          locale={locale === 'ja' ? ja : enUS}
          captionLayout="dropdown"
          navLayout="after"
          formatters={{
            formatYearDropdown: (year: Date) =>
              `${year.getFullYear()}${locale === 'ja' ? '年' : ''}`,
          }}
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
                  ...(disabled ? [{ before: new Date('3000-01-01') }] : []),
                ]
          }
          showOutsideDays={showOutsideDays}
          fixedWeeks={fixedWeeks}
          defaultMonth={defaultMonth || selectedDate || new Date()}
          autoFocus={false}
          classNames={(() => {
            const defaultClassNames = getDefaultClassNames();

            // Base styles for reuse
            const navigationButton =
              'text-interactive-primary-default hover:bg-interactive-neutral-hover hover:text-interactive-primary-hover transition-colors p-xxs cursor-pointer';

            return {
              // Root container
              root: `${defaultClassNames.root} shadow-none gap-2.5 ![--rdp-nav-height:20px] ![--rdp-nav-button-width:20px] ![--rdp-nav-button-height:20px]`,

              // Month wrapper - CSS Grid with 2 columns for header row
              month: `grid grid-cols-[1fr_auto] auto-rows-auto`,

              // Header elements - dropdowns on left (col 1, row 1)
              month_caption: `col-start-1 row-start-1 px-xxs mb-md flex items-center`,
              caption_label: `hidden`,
              dropdowns: `flex gap-xxs items-center`,
              dropdown: `border border-shape-interactive-neutral-default rounded-xs px-xs pr-xxs py-xxs gap-xxxs flex items-center text-lg font-bold text-body-primary cursor-pointer hover:border-shape-interactive-neutral-hover focus:outline-none focus:ring-2 focus:ring-interactive-focused transition-colors disabled:opacity-50 disabled:cursor-not-allowed`,
              dropdown_root: `relative`,

              // Navigation - on right (col 2, row 1)
              nav: `col-start-2 row-start-1 flex gap-xs items-center px-xxs mb-md`,

              // Calendar grid below (spans both columns, row 2)
              month_grid: `col-span-2 row-start-2`,

              weekdays: `mb-xs`,
              weekday: `text-body-secondary text-[13px] font-normal leading-5 tracking-normal text-center`,
              button_previous: `${navigationButton} flex items-center justify-center`,
              button_next: `${navigationButton} flex items-center justify-center`,
              chevron: `fill-current text-interactive-primary-default w-5 h-5`,

              // Day states
              day: `rounded-md transition-colors text-body-primary text-md !w-9.5 !h-9.5`,
              day_button: `!w-9 !h-9 border border-transparent rounded-sm active:text-interactive-primary-active hover:bg-interactive-neutral-hover  cursor-pointer`,
              today: `text-interactive-primary-active border-surface-warning [&>button]:!border-interactive-default`,
              selected: `[&>button]:!bg-input-selected [&>button]:!text-body-inverse [&>button]:!font-bold hover:[&>button]:!bg-input-selected hover:[&>button]:!border-transparent hover:[&>button]:!text-body-inverse`,
              outside: `text-body-secondary text-md border border-transparent`,
              disabled: `text-body-disabled text-md leading-none tracking-normal cursor-not-allowed`,
            };
          })()}
        />
      </div>
    );
  }
);

Calendar.displayName = 'Calendar';
