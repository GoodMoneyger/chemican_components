import { Slot as RadixSlot } from 'radix-ui';
export * from './components';
/**
 * Radix `Slot` re-export for consuming apps that need to merge props onto an
 * arbitrary child (e.g. tooltip wrappers), so they don't have to depend on
 * radix directly.
 */
export declare const Slot: import('react').ForwardRefExoticComponent<RadixSlot.SlotProps & import('react').RefAttributes<HTMLElement>>;
