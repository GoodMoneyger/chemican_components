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

const containerVariants = cva('flex w-fit cursor-pointer items-center gap-xs', {
  variants: {
    disabled: {
      true: 'cursor-not-allowed text-body-disabled',
      false: 'cursor-pointer text-body-primary',
    },
  },
});

const radioButtonVariants = cva(
  'focus:shadow-black size-[1rem] cursor-pointer rounded-full border-1 border-input-default text-body-primary outline-none focus-visible:ring-2 focus-visible:ring-input-focused disabled:cursor-not-allowed disabled:text-body-disabled data-[state=checked]:text-body-secondary',
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed border-transparent bg-input-disabled text-body-disabled',
        false:
          'hover:bg-interactive-plain-hover data-[state=checked]:border-input-selected',
      },
      invalid: {
        true: 'border-input-alert text-body-alert',
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
        <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-xs after:rounded-full after:bg-input-selected" />
      </RadioGroup.Item>
      <label
        htmlFor={usedId}
        className="flex cursor-pointer items-center gap-xs text-inherit select-none"
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
