import React from 'react';

import type { IconProp } from '../../lib/utils';
import { cn } from '../../lib/utils';
import { Input } from '../Input';
import { FormField } from '../FormField';

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size'> {
  /**
   * The label for the text field
   */
  label?: React.ReactNode;
  /**
   * The name attribute for the input element
   */
  name: string;
  /**
   * Error message to display
   */
  error?: string;
  /**
   * Description text to display below the input
   */
  description?: string;
  /**
   * Whether the field is optional
   */
  optional?: boolean;
  /**
   * Whether the field is invalid
   */
  invalid?: boolean;
  /**
   * Icon to display as prefix
   */
  prefixIcon?: IconProp;
  /**
   * Icon to display as trailing
   */
  trailingIcon?: IconProp;
  /**
   * Callback when trailing icon is clicked
   */
  onTrailingIconClick?: () => void;
  /**
   * Size of the trailing icon in pixels
   */
  trailingIconSize?: number;
  /**
   * Size of the prefix icon in pixels
   */
  prefixIconSize?: number;
  /**
   * Size variant for the text field
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Custom class name for the FormField container
   */
  containerClassName?: string;
}

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      name,
      error,
      description,
      optional = false,
      invalid,
      prefixIcon,
      trailingIcon,
      onTrailingIconClick,
      trailingIconSize = 14,
      prefixIconSize = 14,
      containerClassName,
      className,
      size = 'medium',
      ...props
    },
    ref
  ) => {
    // Determine if field is invalid based on error prop or explicit invalid prop
    const isInvalid = invalid !== undefined ? invalid : !!error;

    return (
      <FormField
        name={name}
        label={label}
        {...(error && { error })}
        {...(description && { description })}
        optional={optional}
        {...(containerClassName && { className: containerClassName })}
      >
        <Input
          ref={ref}
          id={name}
          name={name}
          invalid={isInvalid}
          prefixIcon={prefixIcon}
          trailingIcon={trailingIcon}
          {...(onTrailingIconClick && { onTrailingIconClick })}
          trailingIconSize={trailingIconSize}
          prefixIconSize={prefixIconSize}
          className={cn(
            {
              'text-sm': size === 'small',
              'text-md': size === 'medium',
              'text-lg': size === 'large',
            },
            className
          )}
          {...props}
        />
      </FormField>
    );
  }
);

TextField.displayName = 'TextField';
