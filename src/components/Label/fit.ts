import type { Box, TextElement } from './spec-types';

/** Height in mm the text needs at this width and font size, and whether a line is wider than the width. */
export type Measure = (
  widthMm: number,
  fontSizePt: number
) => { heightMm: number; tooWide: boolean };

export interface TextLayout {
  box: Box;
  fontSizePt: number;
  fits: boolean;
}

const STEP_PT = 0.25;

/**
 * Where a text element goes and at what size, for the text it holds.
 *
 * Without `fit` the text stays in its box at its size. With `fit` it first grows within the max box
 * (height in the grow direction, then the max box's width) and then shrinks, down to the minimum font size.
 * Text that still does not fit is placed in the full max box at the minimum size, with `fits: false`.
 */
export function fitText(element: TextElement, measure: Measure): TextLayout {
  const box: Box = { x: element.x, y: element.y, w: element.w, h: element.h };
  const size = element.style.fontSizePt;
  const fit = element.fit;
  if (!fit) {
    const m = measure(box.w, size);
    return {
      box,
      fontSizePt: size,
      fits: !m.tooWide && m.heightMm <= box.h + 0.01,
    };
  }

  const max = fit.maxBox;
  const room = roomFor(box, max, fit.grow ?? 'down');
  const widths = max.w > box.w ? [box.w, max.w] : [box.w];
  const tryAt = (w: number, s: number) => {
    const m = measure(w, s);
    return !m.tooWide && m.heightMm <= room + 0.01 ? m.heightMm : null;
  };

  for (const w of widths) {
    const h = tryAt(w, size);
    if (h !== null)
      return {
        box: place(box, max, w, h, element),
        fontSizePt: size,
        fits: true,
      };
  }

  const w = Math.max(box.w, max.w);
  let lo = fit.minFontSizePt;
  let hi = size;
  if (tryAt(w, lo) === null) {
    return {
      box: place(box, max, w, room, element),
      fontSizePt: lo,
      fits: false,
    };
  }
  while (hi - lo > STEP_PT) {
    const mid = (lo + hi) / 2;
    if (tryAt(w, mid) !== null) lo = mid;
    else hi = mid;
  }
  const s = Math.max(fit.minFontSizePt, Math.floor(lo / STEP_PT) * STEP_PT);
  return {
    box: place(box, max, w, tryAt(w, s) ?? room, element),
    fontSizePt: s,
    fits: true,
  };
}

function roomFor(box: Box, max: Box, grow: 'down' | 'up' | 'both'): number {
  if (grow === 'down') return max.y + max.h - box.y;
  if (grow === 'up') return box.y + box.h - max.y;
  return max.h;
}

function place(
  box: Box,
  max: Box,
  w: number,
  needed: number,
  element: TextElement
): Box {
  const h = Math.max(box.h, needed);
  const grow = element.fit?.grow ?? 'down';
  let y = box.y;
  if (grow === 'up') y = box.y + box.h - h;
  if (grow === 'both')
    y = clamp(box.y + box.h / 2 - h / 2, max.y, max.y + max.h - h);
  const x = w === box.w ? box.x : max.x;
  return { x, y, w, h };
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.min(Math.max(v, lo), hi);
}
