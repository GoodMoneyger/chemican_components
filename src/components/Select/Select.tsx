import React from 'react';
import { Select as RadixSelect } from 'radix-ui';
import type { TablerIcon } from '@tabler/icons-react';
import { IconChevronDown } from '@tabler/icons-react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '../../utils';

const selectVariants = cva(
  `border-interactive-default bg-surface-primary py-sm pr-sm pl-md
  text-body-primary disabled:border-interactive-disabled
  disabled:bg-surface-disabled disabled:text-body-disabled
  hover:border-interactive-hover rounded inline-flex h-[3rem] w-full
  justify-between border focus:ring-4 focus:outline-0 enabled:cursor-pointer`,
  {
    variants: {
      invalid: {
        false: 'text-body-primary focus:ring-interactive-focused',
        true: `border-interactive-alert-default
        focus:ring-interactive-alert-focused`,
      },
    },
  }
);

const itemClasses = cn(
  `gap-xs px-md text-body-primary hover:bg-interactive-neutral-hover
  focus:bg-interactive-neutral-hover active:bg-interactive-neutral-active
  disabled:bg-surface-disabled disabled:text-interactive-disabled flex
  h-[2.75rem] cursor-pointer items-center border-0 ring-0 focus:outline-0`
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
  icon?: TablerIcon;
  invalid?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  className,
  icon: Icon,
  invalid = false,
  ...props
}) => {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger
        className={cn(selectVariants({ invalid }), className)}
      >
        <div className="inline-flex">
          {Icon && <Icon className="mr-xxs h-lg text-body-primary w-lg" />}
          <RadixSelect.Value
            placeholder={placeholder || 'Select an option'}
            className="text-body-primary"
          />
        </div>
        <RadixSelect.Icon
          className={cn('h-md text-body-primary w-md', {
            'text-body-disabled': props.disabled,
          })}
        >
          <IconChevronDown className="w-full" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          className={cn(
            `border-interactive-default bg-surface-primary py-xxs max-h-96
            rounded relative z-50 w-full min-w-[8rem] overflow-hidden border`,
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
                      className="border-divider-default m-[5px] h-px border-b"
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
