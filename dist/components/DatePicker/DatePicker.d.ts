import { default as React } from 'react';
import { IconProp } from '../../lib/utils';
export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'defaultValue' | 'placeholder'> {
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
    placeholder?: string;
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
export declare const DatePicker: React.ForwardRefExoticComponent<DatePickerProps & React.RefAttributes<HTMLInputElement>>;
