import React from 'react';
import { Accordion as RadixAccordion } from 'radix-ui';
import { IconChevronDown } from '@tabler/icons-react';

import { cn } from '../../lib/utils';

type RadixAccordionRootProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Root
>;

export type AccordionRootType = 'single' | 'multiple';

export interface AccordionProps
  extends Omit<
    RadixAccordionRootProps,
    'type' | 'collapsible' | 'value' | 'defaultValue' | 'onValueChange'
  > {
  type?: AccordionRootType;
  collapsible?: boolean;
  value?: string | string[];
  defaultValue?: string | string[];
  onValueChange?: (value: string | string[]) => void;
}

const AccordionRoot = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      type = 'multiple',
      collapsible = true,
      value,
      defaultValue,
      onValueChange,
      ...props
    },
    ref
  ) => {
    if (type === 'single') {
      return (
        <RadixAccordion.Root
          ref={ref}
          type="single"
          collapsible={collapsible}
          {...(value !== undefined && { value: value as string })}
          {...(defaultValue !== undefined && {
            defaultValue: defaultValue as string,
          })}
          {...(onValueChange !== undefined && {
            onValueChange: onValueChange as (value: string) => void,
          })}
          {...props}
        />
      );
    }

    return (
      <RadixAccordion.Root
        ref={ref}
        type="multiple"
        {...(value !== undefined && { value: value as string[] })}
        {...(defaultValue !== undefined && {
          defaultValue: defaultValue as string[],
        })}
        {...(onValueChange !== undefined && {
          onValueChange: onValueChange as (value: string[]) => void,
        })}
        {...props}
      />
    );
  }
) as React.ForwardRefExoticComponent<
  AccordionProps & React.RefAttributes<HTMLDivElement>
>;

AccordionRoot.displayName = 'Accordion';

export type AccordionItemProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Item
>;

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ className, ...props }, ref) => (
    <RadixAccordion.Item
      ref={ref}
      className={cn(
        `bg-surface-primary data-[disabled]:bg-surface-tertiary rounded-sm mt-2
        first:mt-0 overflow-hidden`,
        className
      )}
      {...props}
    />
  )
);

AccordionItem.displayName = 'AccordionItem';

export type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Trigger
>;

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ className, children, ...props }, ref) => (
  <RadixAccordion.Header className="flex">
    <RadixAccordion.Trigger
      ref={ref}
      className={cn(
        `text-body-primary py-sm px-md text-lg font-bold
        focus-visible:ring-interactive-focused flex flex-1 items-center
        justify-between leading-[1.2] transition-all focus-visible:ring-4
        focus-visible:outline-none data-[disabled]:pointer-events-none
        [&[data-state=open]>svg]:rotate-180`,
        className
      )}
      {...props}
    >
      {children}
      <IconChevronDown
        size={22}
        className="text-shape-primary shrink-0 transition-transform
          duration-200"
      />
    </RadixAccordion.Trigger>
  </RadixAccordion.Header>
));

AccordionTrigger.displayName = 'AccordionTrigger';

export type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof RadixAccordion.Content
>;

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <RadixAccordion.Content
    ref={ref}
    className={cn(
      'text-body-secondary px-md pt-md pb-xl overflow-hidden',
      className
    )}
    {...props}
  >
    {children}
  </RadixAccordion.Content>
));

AccordionContent.displayName = 'AccordionContent';

export const Accordion = Object.assign(AccordionRoot, {
  Item: AccordionItem,
  Trigger: AccordionTrigger,
  Content: AccordionContent,
});
