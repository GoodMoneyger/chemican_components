import React from 'react';
import { Select as RadixSelect } from 'radix-ui';
import { IconChevronDown } from '@tabler/icons-react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

const selectVariants = cva(
  `bg-surface-primary text-body-primary disabled:border-interactive-disabled
  disabled:bg-surface-disabled disabled:text-body-disabled inline-flex
  items-center justify-between border focus:ring-4 focus:outline-0
  enabled:cursor-pointer`,
  {
    variants: {
      variant: {
        default: `border-interactive-default py-sm pr-sm pl-md
        hover:border-interactive-hover rounded gap-md h-[3rem] w-full`,
        compact: `py-1 px-xs rounded-sm gap-xxs
        hover:bg-interactive-neutral-hover h-[26px] w-fit border-transparent`,
      },
      intent: {
        primary: '',
        secondary: '',
      },
      invalid: {
        false: 'focus:ring-interactive-focused',
        true: `border-interactive-alert-default
        focus:ring-interactive-alert-focused`,
      },
    },
    compoundVariants: [
      {
        intent: 'secondary',
        class: 'bg-surface-tertiary',
      },
    ],
    defaultVariants: {
      variant: 'default',
      intent: 'primary',
    },
  }
);

const selectContentVariants = cva(
  'bg-surface-primary relative z-50 w-full min-w-[8rem] overflow-hidden border',
  {
    variants: {
      variant: {
        default: 'border-interactive-default py-xxs max-h-96 rounded',
        compact: `border-divider-default rounded-sm
        shadow-[0px_5px_9px_0px_rgba(0,0,0,0.16)]`,
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

const selectItemVariants = cva(
  `disabled:bg-surface-disabled disabled:text-interactive-disabled flex
  cursor-pointer items-center border-0 ring-0 focus:outline-0`,
  {
    variants: {
      variant: {
        default: `gap-xs px-md text-body-primary
        hover:bg-interactive-neutral-hover focus:bg-interactive-neutral-hover
        active:bg-interactive-neutral-active h-[2.75rem]`,
        compact: `px-md text-body-primary hover:bg-interactive-neutral-hover
        focus:bg-interactive-neutral-hover h-10`,
      },
      isSelected: {
        false: '',
        true: '',
      },
    },
    compoundVariants: [
      {
        variant: 'compact',
        isSelected: true,
        class: 'bg-interactive-neutral-selected text-body-secondary',
      },
    ],
    defaultVariants: {
      variant: 'default',
      isSelected: false,
    },
  }
);

export interface SelectProps
  extends VariantProps<typeof selectVariants>,
    Omit<React.ComponentProps<typeof RadixSelect.Root>, 'value'> {
  options: {
    value: string;
    label: string | React.ReactNode;
    icon?: IconProp;
    type?: 'Option' | 'Group' | 'Separator';
  }[];
  placeholder?: string;
  className?: string;
  icon?: IconProp;
  invalid?: boolean;
  value?: string;
  intent?: 'primary' | 'secondary';
}

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder,
  className,
  icon: Icon,
  invalid = false,
  variant = 'default',
  intent = 'primary',
  value,
  ...props
}) => {
  const rootProps: React.ComponentProps<typeof RadixSelect.Root> = {
    ...props,
  };
  if (value !== undefined) {
    rootProps.value = value;
  }

  return (
    <RadixSelect.Root {...rootProps}>
      <RadixSelect.Trigger
        className={cn(selectVariants({ variant, intent, invalid }), className)}
      >
        <div className="inline-flex items-center">
          {renderIcon(Icon, {
            className: cn('text-body-primary', {
              'mr-xxs h-lg w-lg': variant === 'default',
              'mr-xxs h-4 w-4': variant === 'compact',
            }),
          })}
          <RadixSelect.Value
            placeholder={placeholder || 'Select an option'}
            className={cn('text-body-primary', {
              'text-sm': variant === 'compact',
            })}
          />
        </div>
        <RadixSelect.Icon
          className={cn('text-body-primary', {
            'h-md w-md': variant === 'default',
            'h-4 w-4': variant === 'compact',
            'text-body-disabled': props.disabled,
          })}
        >
          <IconChevronDown className="top-0.5 relative h-full w-full" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          className={cn(selectContentVariants({ variant }), className)}
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
                      className={selectItemVariants({
                        variant,
                        isSelected: value === option.value,
                      })}
                    >
                      {renderIcon(option.icon, {
                        className: cn({
                          '-ml-xxs h-lg w-lg': variant === 'default',
                          'mr-xxs h-4 w-4': variant === 'compact',
                        }),
                      })}
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

Select.displayName = 'Select';
