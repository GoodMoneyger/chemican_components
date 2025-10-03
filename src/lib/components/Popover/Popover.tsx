import React from 'react';
import { Popover as RadixPopover } from 'radix-ui';

import { cn } from '../../utils';

const Popover = RadixPopover.Root;

const PopoverTrigger = RadixPopover.Trigger;

const PopoverAnchor = RadixPopover.Anchor;

export interface PopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof RadixPopover.Content> {
  className?: string;
}

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof RadixPopover.Content>,
  PopoverContentProps
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <RadixPopover.Portal>
    <RadixPopover.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        // NOTE: The animation styles (like fade-in, fade-out) are currently not defined
        // but we can add them later as needed.
        `bg-surface-primary border-divider-default shadow-overlay
        text-body-primary rounded-md w-72 p-4 z-50 border outline-none`,
        className
      )}
      {...props}
    />
  </RadixPopover.Portal>
));
PopoverContent.displayName = RadixPopover.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
