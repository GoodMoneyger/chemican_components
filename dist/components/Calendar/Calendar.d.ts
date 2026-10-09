import { default as React } from 'react';
export interface CalendarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue' | 'onSelect'> {
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
export declare const Calendar: React.ForwardRefExoticComponent<CalendarProps & React.RefAttributes<HTMLDivElement>>;
