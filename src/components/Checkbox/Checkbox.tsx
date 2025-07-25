import React from 'react';
import { cva } from 'class-variance-authority';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { IconCheck, IconMinus } from '@tabler/icons-react';

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  label: string;
  id?: string;
  invalid?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  children?: React.ReactNode;
}

export interface CheckboxGroupProps {
  children: React.ReactNode;
  className?: string;
}

const containerVariants = cva('gap-sm flex w-fit cursor-pointer items-center', {
  variants: {
    disabled: {
      true: 'text-body-disabled cursor-not-allowed',
      false: 'text-body-primary cursor-pointer',
    },
  },
});

const checkboxVariants = cva(
  `border-input-default text-body-primary focus-visible:ring-interactive-focused
  size-[17px] cursor-[inherit] rounded-xs border-[1.5px] outline-none
  focus-visible:ring-4 data-[state=checked]:hover:border-transparent
  data-[state=indeterminate]:hover:border-transparent`,
  {
    variants: {
      disabled: { true: 'bg-interactive-disabled border-transparent' },
      invalid: { true: '' },
    },
    compoundVariants: [
      {
        disabled: false,
        invalid: true,
        class: `border-input-alert text-body-alert
        data-[state=checked]:border-interactive-danger
        data-[state=checked]:bg-status-alert
        data-[state=indeterminate]:border-interactive-danger
        data-[state=indeterminate]:bg-status-alert
        focus-visible:ring-interactive-alert-focused
        data-[state=checked]:hover:bg-interactive-danger-hover
        data-[state=indeterminate]:hover:bg-interactive-danger-hover`,
      },
      {
        disabled: false,
        invalid: false,
        class: `hover:enabled:border-interactive-hover
        focus-visible:border-input-focused
        data-[state=checked]:bg-input-selected
        data-[state=checked]:border-input-selected
        data-[state=checked]:hover:bg-interactive-primary-hover
        data-[state=indeterminate]:hover:bg-interactive-primary-hover
        data-[state=indeterminate]:border-input-selected
        data-[state=indeterminate]:bg-input-selected`,
      },
    ],
    defaultVariants: {
      disabled: false,
      invalid: false,
    },
  }
);

export const Checkbox: React.FC<CheckboxProps> = ({
  disabled,
  invalid,
  indeterminate,
  label,
  id,
  children,
  ...props
}) => {
  const usedId = id || `checkbox-${label}`;

  return (
    <div className={classNames(twMerge(containerVariants({ disabled })))}>
      <CheckboxPrimitive.Root
        id={usedId}
        className={twMerge(checkboxVariants({ disabled, invalid }))}
        disabled={disabled}
        {...props}
        {...(indeterminate && { checked: 'indeterminate' as const })}
      >
        <CheckboxPrimitive.Indicator
          className={`text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`}
        >
          {indeterminate ? (
            <IconMinus style={{ strokeWidth: 3 }} />
          ) : (
            <IconCheck style={{ strokeWidth: 3 }} />
          )}
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {(label || children) && (
        <label
          htmlFor={usedId}
          className={`gap-xs flex cursor-[inherit] items-center text-inherit
          select-none`}
        >
          {label}
          {children}
        </label>
      )}
    </div>
  );
};

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  children,
  className,
}) => {
  return (
    <div className={twMerge(classNames('gap-xs flex flex-col', className))}>
      {children}
    </div>
  );
};
