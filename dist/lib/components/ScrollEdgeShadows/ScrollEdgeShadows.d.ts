export interface ScrollEdgeShadowsProps {
    /** Opacity of the start edge shadow, from `useHorizontalScrollEdges`. */
    startShadow: number;
    /** Opacity of the end edge shadow, from `useHorizontalScrollEdges`. */
    endShadow: number;
}
/**
 * Shades the edges of a horizontal scroller that hide more content. Place it
 * next to the scroller inside a positioned container.
 */
export declare function ScrollEdgeShadows({ startShadow, endShadow, }: ScrollEdgeShadowsProps): import("react/jsx-runtime").JSX.Element;
