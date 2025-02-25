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

const containerVariants = cva('flex w-fit cursor-pointer items-center gap-xs', {
  variants: {
    disabled: {
      true: 'cursor-not-allowed text-body-disabled',
      false: 'cursor-pointer text-body-primary',
    },
  },
});

const checkboxVariants = cva(
  'data-[state=checked]:bg-color-input-selected size-[1rem] cursor-[inherit] rounded-xs border-[1.5px] border-input-default text-body-primary outline-none focus-visible:border-input-focused focus-visible:ring-2 focus-visible:ring-input-focused data-[state=checked]:border-input-selected data-[state=checked]:bg-input-selected',
  {
    variants: {
      disabled: {
        true: 'border-transparent bg-input-disabled',
        false: 'hover:bg-interactive-plain-hover',
      },
      invalid: {
        true: 'data-[state=checked]:border-status-alert border-input-alert text-body-alert data-[state=checked]:bg-status-alert',
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
        <CheckboxPrimitive.Indicator className="relative flex size-full cursor-[inherit] items-center justify-center bg-inherit text-interactive-primary-default">
          <IconCheck style={{ strokeWidth: 3 }} />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {(label || children) && (
        <label
          htmlFor={usedId}
          className="flex cursor-[inherit] items-center gap-xs text-inherit select-none"
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
