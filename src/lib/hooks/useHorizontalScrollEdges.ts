import React from 'react';

// Scroll distance over which an edge shadow ramps out as that end comes into view.
const EDGE_SHADOW_RAMP_PX = 48;

interface HorizontalScrollEdges {
  hasOverflow: boolean;
  /** Shadow opacity at the start edge: 0 while at the start, 1 once scrolled past the ramp. */
  startShadow: number;
  /** Shadow opacity at the end edge: 1 while far from the end, 0 once it is in view. */
  endShadow: number;
}

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

/**
 * Tracks whether a horizontal scroller overflows and how strongly to shade
 * each edge that hides more content.
 */
export const useHorizontalScrollEdges = (
  ref: React.RefObject<HTMLElement | null>
) => {
  const [edges, setEdges] = React.useState<HorizontalScrollEdges>({
    hasOverflow: false,
    startShadow: 0,
    endShadow: 0,
  });

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      const { scrollWidth, clientWidth, scrollLeft } = element;
      const next = {
        hasOverflow: scrollWidth > clientWidth,
        startShadow: clamp01(scrollLeft / EDGE_SHADOW_RAMP_PX),
        endShadow: clamp01(
          (scrollWidth - clientWidth - scrollLeft) / EDGE_SHADOW_RAMP_PX
        ),
      };
      setEdges((prev) =>
        prev.hasOverflow === next.hasOverflow &&
        prev.startShadow === next.startShadow &&
        prev.endShadow === next.endShadow
          ? prev
          : next
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    const observer = new ResizeObserver(schedule);

    observer.observe(element);
    Array.from(element.children).forEach((child) => observer.observe(child));
    element.addEventListener('scroll', schedule, { passive: true });
    measure();

    return () => {
      observer.disconnect();
      element.removeEventListener('scroll', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref]);

  return edges;
};
