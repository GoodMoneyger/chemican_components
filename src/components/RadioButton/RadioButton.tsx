import React from 'react';
import { cva } from 'class-variance-authority';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

import { cn } from '../../lib/utils';

export interface RadioButtonProps
  extends React.ComponentProps<typeof RadioGroup.Item> {
  value: string;
  label: string;
  children?: React.ReactNode;
  invalid?: boolean;
}

export interface RadioButtonGroupProps
  extends React.ComponentProps<typeof RadioGroup.Root> {
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

const radioButtonVariants = cva(
  `border-input-default focus:border-input-focused text-body-primary
  disabled:text-body-disabled data-[state=checked]:text-body-secondary
  focus-visible:ring-interactive-focused hover:border-interactive-light group
  size-[19px] cursor-pointer rounded-full border-[1.5px] outline-none
  focus-visible:ring-4 disabled:cursor-not-allowed`,
  {
    variants: {
      disabled: {
        true: `bg-input-disabled text-body-disabled cursor-not-allowed
        border-transparent`,
        false: '', // Correct hover state currently missing in Figma.
      },
      invalid: {
        true: `border-input-alert! text-body-alert
        data-[state=checked]:border-interactive-danger
        focus-visible:ring-interactive-alert-focused`,
        false: 'data-[state=checked]:hover:border-[#115A53]',
      },
    },
    defaultVariants: {
      disabled: false,
      invalid: false,
    },
  }
);

const indicatorVariants = cva(
  `group-hover:after:bg-interactive-primary-hover relative flex size-full
  items-center justify-center after:block after:size-[.5rem] after:rounded-full`,
  {
    variants: {
      invalid: {
        true: `after:bg-interactive-danger-default
        group-hover:after:bg-interactive-danger-hover!`,
        false: 'after:bg-shape-interactive-primary-default',
      },
    },
  }
);

export const RadioButton: React.FC<RadioButtonProps> = ({
  value,
  label,
  id,
  children,
  ...props
}) => {
  const usedId = id || `radio-${value}`;
  return (
    <div
      className={classNames(
        twMerge(containerVariants({ disabled: props.disabled }))
      )}
    >
      <RadioGroup.Item
        id={usedId}
        value={value}
        className={twMerge(
          radioButtonVariants({
            disabled: props.disabled,
            invalid: props.invalid,
          })
        )}
        {...props}
      >
        <RadioGroup.Indicator
          className={twMerge(indicatorVariants({ invalid: props.invalid }))}
        />
      </RadioGroup.Item>
      <label
        htmlFor={usedId}
        className="gap-xs flex cursor-pointer items-center text-inherit
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
