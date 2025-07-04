import React from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import classNames from 'classnames';
import { IconChevronDown, TablerIcon } from '@tabler/icons-react';
import { VariantProps, cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const selectVariants = cva(
  `inline-flex h-[3rem] w-full cursor-pointer justify-between rounded border
  border-input-default bg-surface-primary py-sm pr-sm pl-md text-body-primary
  hover:bg-surface-secondary focus:border-input-focused focus:outline-0
  disabled:border-input-disabled disabled:bg-surface-disabled
  disabled:text-body-disabled`,
  {
    variants: {
      invalid: {
        false: 'text-body-primary focus:ring-input-focused',
        true: 'border-input-alert focus:ring-input-alert',
      },
    },
  }
);

const itemClasses = classNames(
  `flex h-[2.75rem] cursor-pointer items-center gap-xs border-0 px-md
  text-body-primary ring-0 hover:bg-interactive-neutral-hover
  focus:bg-interactive-neutral-hover focus:outline-0
  active:bg-interactive-neutral-active disabled:bg-surface-disabled
  disabled:text-interactive-disabled`
);

export interface SelectProps
  extends VariantProps<typeof selectVariants>,
    React.ComponentProps<typeof RadixSelect.Root> {
  options: {
    value: string;
    label: string;
    icon?: TablerIcon;
    type?: 'Option' | 'Group' | 'Separator';
  }[];
  placeholder?: string;
  className?: string;
  invalid?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  className,
  invalid = false,
  ...props
}) => {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger
        className={classNames(twMerge(selectVariants({ invalid })), className)}
      >
        <RadixSelect.Value
          placeholder={placeholder || 'Select an option'}
          className="text-body-primary"
        />
        <RadixSelect.Icon
          className={twMerge(
            classNames('h-md w-md text-body-primary', {
              'text-body-disabled': props.disabled,
            })
          )}
        >
          <IconChevronDown className="w-full" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          className={classNames(
            `relative z-50 max-h-96 w-full min-w-[8rem] overflow-hidden rounded
            border border-input-default bg-surface-primary py-xxs`,
            className
          )}
        >
          <RadixSelect.ScrollUpButton />
          <RadixSelect.Viewport className="min-w-[var(--radix-select-trigger-width)]">
            {options.map((option, index) => {
              switch (option.type) {
                case 'Group':
                  return (
                    <RadixSelect.Group key={index}>
                      <RadixSelect.Label>{option.label}</RadixSelect.Label>
                    </RadixSelect.Group>
                  );
                case 'Separator':
                  return (
                    <RadixSelect.Separator
                      key={index}
                      className="m-[5px] h-px border-b border-divider-default"
                    />
                  );
                default:
                  return (
                    <RadixSelect.Item
                      key={index}
                      value={option.value}
                      className={itemClasses}
                    >
                      {option.icon && (
                        <option.icon className="-ml-xxs h-lg w-lg" />
                      )}
                      <RadixSelect.ItemText>
                        {option.label}
                      </RadixSelect.ItemText>
                      <RadixSelect.ItemIndicator />
                    </RadixSelect.Item>
                  );
              }
            })}
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton />
          <RadixSelect.Arrow />
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};
