import { default as React } from 'react';
import { Accordion as RadixAccordion } from 'radix-ui';
type RadixAccordionRootProps = React.ComponentPropsWithoutRef<typeof RadixAccordion.Root>;
export type AccordionRootType = 'single' | 'multiple';
export interface AccordionProps extends Omit<RadixAccordionRootProps, 'type' | 'collapsible' | 'value' | 'defaultValue' | 'onValueChange'> {
    type?: AccordionRootType;
    collapsible?: boolean;
    value?: string | string[];
    defaultValue?: string | string[];
    onValueChange?: (value: string | string[]) => void;
}
export type AccordionItemProps = React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>;
export type AccordionTriggerProps = React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger>;
export type AccordionContentProps = React.ComponentPropsWithoutRef<typeof RadixAccordion.Content>;
export declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>> & {
    Item: React.ForwardRefExoticComponent<Omit<RadixAccordion.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Trigger: React.ForwardRefExoticComponent<Omit<RadixAccordion.AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
    Content: React.ForwardRefExoticComponent<Omit<RadixAccordion.AccordionContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
};
export {};
