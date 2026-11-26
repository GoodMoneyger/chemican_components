import type { Box, PictogramAreaElement } from './spec-types';

/** Square boxes for `count` pictograms in an area, in one row or column. Extra pictograms beyond maxCount are left out. */
export function layoutPictograms(
  area: PictogramAreaElement,
  count: number
): Box[] {
  const n = Math.min(count, area.maxCount ?? 5);
  if (n <= 0) return [];
  const gap = area.gapMm ?? 1;
  const row = (area.direction ?? 'row') === 'row';
  const along = row ? area.w : area.h;
  const across = row ? area.h : area.w;
  const size = Math.max(0, Math.min(across, (along - gap * (n - 1)) / n));
  const used = size * n + gap * (n - 1);
  const align = area.align ?? 'start';
  const start =
    align === 'center'
      ? (along - used) / 2
      : align === 'end'
        ? along - used
        : 0;
  const offset = (across - size) / 2;
  return Array.from({ length: n }, (_, i) => {
    const a = start + i * (size + gap);
    return row
      ? { x: area.x + a, y: area.y + offset, w: size, h: size }
      : { x: area.x + offset, y: area.y + a, w: size, h: size };
  });
}
