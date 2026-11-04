import { default as React } from '../../../node_modules/react';
interface HorizontalScrollEdges {
    hasOverflow: boolean;
    /** Shadow opacity at the start edge: 0 while at the start, 1 once scrolled past the ramp. */
    startShadow: number;
    /** Shadow opacity at the end edge: 1 while far from the end, 0 once it is in view. */
    endShadow: number;
}
/**
 * Tracks whether a horizontal scroller overflows and how strongly to shade
 * each edge that hides more content.
 */
export declare const useHorizontalScrollEdges: (ref: React.RefObject<HTMLElement | null>) => HorizontalScrollEdges;
export {};
