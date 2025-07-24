import React from 'react';
import { cva } from 'class-variance-authority';
import * as RadioGroup from '@radix-ui/react-radio-group';
import { twMerge } from 'tailwind-merge';
import classNames from 'classnames';

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

const containerVariants = cva('gap-xs flex w-fit cursor-pointer items-center', {
  variants: {
    disabled: {
      true: 'text-body-disabled cursor-not-allowed',
      false: 'text-body-primary cursor-pointer',
    },
  },
});

const radioButtonVariants = cva(
  `border-input-default text-body-primary disabled:text-body-disabled
  data-[state=checked]:text-body-secondary
  focus-visible:ring-interactive-focused hover:border-interactive-hover
  size-[1rem] cursor-pointer rounded-full border-1 outline-none
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
          className="after:size-xs after:bg-input-selected relative flex
            size-full items-center justify-center after:block
            after:rounded-full"
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
    <RadioGroup.Root className={twMerge(classNames(className))}>
      {children}
    </RadioGroup.Root>
  );
};
