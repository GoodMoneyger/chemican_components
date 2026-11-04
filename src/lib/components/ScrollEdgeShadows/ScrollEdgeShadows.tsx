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
export function ScrollEdgeShadows({
  startShadow,
  endShadow,
}: ScrollEdgeShadowsProps) {
  return (
    <div
      aria-hidden
      className="z-slight inset-0 pointer-events-none absolute flex
        justify-between"
    >
      <div
        className="bg-scroll-shadow-start w-8"
        style={{ opacity: startShadow }}
      />
      <div
        className="bg-scroll-shadow-end w-8"
        style={{ opacity: endShadow }}
      />
    </div>
  );
}
