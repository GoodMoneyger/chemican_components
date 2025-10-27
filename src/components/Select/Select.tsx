import React from 'react';
import { Select as RadixSelect } from 'radix-ui';
import { IconChevronDown } from '@tabler/icons-react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import type { IconProp } from '../../lib/utils';
import { cn, renderIcon } from '../../lib/utils';

const selectVariants = cva(
  `bg-surface-primary text-body-primary disabled:border-interactive-disabled
  disabled:bg-surface-disabled disabled:text-body-disabled
  [&[data-placeholder]]:text-body-placeholder
  disabled:[&[data-placeholder]]:text-body-disabled
  data-[state=open]:ring-interactive-focused inline-flex items-center
  justify-between border focus-visible:ring-4 focus-visible:outline-none
  enabled:cursor-pointer data-[state=open]:ring-4`,
  {
    variants: {
      variant: {
        default: `border-interactive-default p-md hover:border-interactive-hover
        rounded gap-xs h-11.5 w-full`,
        compact: `py-xxs px-xs rounded-sm gap-xxs
        hover:bg-interactive-neutral-hover h-[26px] w-fit border-transparent`,
      },
      intent: {
        primary: '',
        secondary: '',
      },
      invalid: {
        false: `focus-visible:ring-interactive-focused
        data-[state=open]:border-interactive-primary-default`,
        true: `border-interactive-alert-default
        focus-visible:ring-interactive-focused`,
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
  `bg-surface-primary z-dropdown relative -mt-px w-full min-w-[8rem]
  overflow-hidden border`,
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
  `disabled:bg-surface-disabled disabled:text-interactive-disabled
  data-[disabled]:text-interactive-disabled flex cursor-pointer items-center
  border-0 ring-0 focus:outline-0 disabled:cursor-not-allowed
  data-[disabled]:cursor-not-allowed`,
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
    label: React.ReactNode;
    icon?: IconProp;
    type?: 'Option' | 'Group' | 'Separator';
    disabled?: boolean;
  }[];
  placeholder?: React.ReactNode;
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
            className: cn('text-body-secondary mr-xxs h-3.5 w-3.5'),
          })}
          <RadixSelect.Value
            placeholder={placeholder || 'Select an option'}
            className={cn({
              'text-sm': variant === 'compact',
            })}
          />
        </div>
        <RadixSelect.Icon
          className={cn('text-body-primary h-3.5 w-3.5', {
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
                      disabled={option.disabled ?? false}
                      className={selectItemVariants({
                        variant,
                        isSelected: value === option.value,
                      })}
                    >
                      {renderIcon(option.icon, {
                        className: cn('h-5 w-5', {
                          '-ml-xxs': variant === 'default',
                          'mr-xxs': variant === 'compact',
                          'text-interactive-disabled': option.disabled,
                        }),
                      })}
                      <RadixSelect.ItemText
                        className={cn('flex-1', {
                          'text-interactive-disabled': option.disabled,
                        })}
                      >
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
