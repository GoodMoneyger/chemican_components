import React from 'react';
import { cva } from 'class-variance-authority';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';
import { IconCheck } from '@tabler/icons-react';

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  label: string;
  id?: string;
  invalid?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}

export interface CheckboxGroupProps {
  children: React.ReactNode;
  className?: string;
}

const containerVariants = cva('gap-xs flex w-fit cursor-pointer items-center', {
  variants: {
    disabled: {
      true: 'text-body-disabled cursor-not-allowed',
      false: 'text-body-primary cursor-pointer',
    },
  },
});

const checkboxVariants = cva(
  `border-input-default text-body-primary focus-visible:border-input-focused
  data-[state=checked]:border-input-selected
  data-[state=checked]:bg-input-selected focus-visible:ring-interactive-focused
  hover:border-interactive-hover size-[1rem] cursor-[inherit] rounded-xs
  border-[1.5px] outline-none focus-visible:ring-4`,
  {
    variants: {
      disabled: {
        true: 'bg-input-disabled border-transparent',
        false: '', // Correct hover state currently missing in Figma.
      },
      invalid: {
        true: `border-input-alert! text-body-alert
        data-[state=checked]:border-interactive-danger
        data-[state=checked]:bg-status-alert
        focus-visible:ring-interactive-alert-focused`,
      },
    },
    defaultVariants: {
      disabled: false,
      invalid: false,
    },
  }
);

export const Checkbox: React.FC<CheckboxProps> = ({
  disabled,
  invalid,
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
      >
        <CheckboxPrimitive.Indicator
          className={`text-interactive-inverse relative flex size-full
            cursor-[inherit] items-center justify-center bg-inherit`}
        >
          <IconCheck style={{ strokeWidth: 3 }} />
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
  return <div className={twMerge(classNames(className))}>{children}</div>;
};
