import { default as React } from 'react';
import { Popover as RadixPopover } from 'radix-ui';
declare const Popover: React.FC<RadixPopover.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<RadixPopover.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverAnchor: React.ForwardRefExoticComponent<RadixPopover.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
export interface PopoverContentProps extends React.ComponentPropsWithoutRef<typeof RadixPopover.Content> {
    className?: string;
}
declare const PopoverContent: React.ForwardRefExoticComponent<PopoverContentProps & React.RefAttributes<HTMLDivElement>>;
export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
