import React from 'react';
import { cva } from 'class-variance-authority';
import { RadioGroup } from 'radix-ui';

import { cn } from '../../utils';

export interface RadioButtonProps
  extends React.ComponentProps<typeof RadioGroup.Item> {
  value: string;
  label: React.ReactNode;
  children?: React.ReactNode;
  invalid?: boolean;
}

export interface RadioButtonGroupProps
  extends React.ComponentProps<typeof RadioGroup.Root> {
  children: React.ReactNode;
  className?: string;
}

const containerVariants = cva('gap-xs flex w-fit items-center', {
  variants: {
    disabled: {
      true: 'text-body-disabled cursor-not-allowed',
      false: 'text-body-primary cursor-pointer',
    },
  },
});

const radioButtonVariants = cva(
  `border-shape-interactive-neutral-default
  focus:border-shape-interactive-primary-hover text-body-primary
  data-[state=checked]:text-body-secondary
  focus-visible:ring-interactive-focused group size-[19px] cursor-[inherit]
  rounded-full border-[1.5px] outline-none focus-visible:ring-4`,
  {
    variants: {
      disabled: {
        true: `bg-interactive-disabled
        data-[state=checked]:bg-shape-interactive-inverse
        data-[state=checked]:disabled:border-shape-interactive-neutral-disabled
        text-body-disabled border-transparent`,
      },
      invalid: { true: '' },
    },
    compoundVariants: [
      {
        disabled: false,
        invalid: true,
        class: `border-shape-interactive-alert-default text-body-alert
        hover:border-shape-interactive-alert-hover
        data-[state=checked]:border-shape-interactive-alert-default
        data-[state=checked]:hover:border-shape-interactive-alert-hover
        focus-visible:ring-interactive-alert-focused`,
      },
      {
        disabled: false,
        invalid: false,
        class: `data-[state=checked]:border-interactive-selected
        hover:border-shape-interactive-primary-hover
        data-[state=checked]:hover:border-interactive-hover`,
      },
    ],
    defaultVariants: {
      disabled: false,
      invalid: false,
    },
  }
);

const indicatorVariants = cva(
  `group-disabled:after:bg-interactive-disabled relative flex size-full
  cursor-[inherit] items-center justify-center after:block after:size-[.5rem]
  after:rounded-full`,
  {
    variants: {
      invalid: {
        true: `after:bg-interactive-alert-default
        group-hover:after:bg-interactive-alert-hover`,
        false: `after:bg-shape-interactive-primary-selected
        group-hover:after:bg-interactive-primary-hover`,
      },
    },
  }
);

export const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  label,
  id,
  children,
  disabled = false,
  invalid = false,
  ...props
}) => {
  const usedId = id || `radio-${value}`;
  return (
    <div className={cn(containerVariants({ disabled }))}>
      <RadioGroup.Item
        id={usedId}
        value={value}
        disabled={disabled}
        aria-invalid={invalid}
        className={cn(
          radioButtonVariants({
            disabled,
            invalid,
          })
        )}
        {...props}
      >
        <RadioGroup.Indicator className={cn(indicatorVariants({ invalid }))} />
      </RadioGroup.Item>
      <label
        htmlFor={usedId}
        className="gap-xs flex cursor-[inherit] items-center text-inherit
          select-none"
      >
        {label}
        {children}
      </label>
    </div>
  );
};

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  children,
  className,
}) => {
  return (
    <RadioGroup.Root className={cn('gap-xs flex flex-col', className)}>
      {children}
    </RadioGroup.Root>
  );
};
