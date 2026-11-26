import type { CSSProperties } from 'react';

import type { TextElement } from './spec-types';

export const PX_PER_MM = 96 / 25.4;

/**
 * Width of the text area for a box width. CSS letter spacing also adds space after the last character,
 * so the area is one spacing wider on the right; the glyphs then still end at the box edge.
 */
export function textWidth(element: TextElement, boxWidth: string): string {
  const spacing = element.style.letterSpacingEm ?? 0;
  return spacing ? `calc(${boxWidth} + ${spacing}em)` : boxWidth;
}

/** CSS for a text element's text. The renderer and the measuring both use it, so they break lines the same way. */
export function textCss(
  element: TextElement,
  fontSizePt: number
): CSSProperties {
  const s = element.style;
  const columns = element.columns ?? 1;
  return {
    fontFamily: `'${s.fontFamily ?? 'Noto Sans JP'}', 'NotoSansJP', sans-serif`,
    fontSize: `${fontSizePt}pt`,
    fontWeight: s.fontWeight === 'bold' ? 700 : 400,
    fontStyle: s.fontStyle ?? 'normal',
    color: s.color ?? '#000000',
    lineHeight: s.lineHeight ?? 1.2,
    letterSpacing: `${s.letterSpacingEm ?? 0}em`,
    textAlign: s.textAlign ?? 'left',
    whiteSpace: 'pre-wrap',
    lineBreak: 'strict',
    overflowWrap: 'anywhere',
    columnCount: columns > 1 ? columns : undefined,
    columnGap: columns > 1 ? `${element.columnGapMm ?? 4}mm` : undefined,
    columnFill: columns > 1 ? 'balance' : undefined,
    margin: 0,
    padding: 0,
  };
}
