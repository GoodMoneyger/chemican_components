import { describe, expect, it } from 'vitest';

import { resolveContent } from './content';
import { fitText } from './fit';
import type { Measure } from './fit';
import { layoutPictograms } from './pictogramLayout';
import type { PictogramAreaElement, TextElement } from './spec-types';

const MM_PER_PT = 25.4 / 72;

/** Every character is one em wide, like full-width Japanese text. */
const monospace =
  (chars: number): Measure =>
  (widthMm, sizePt) => {
    const em = sizePt * MM_PER_PT;
    const perLine = Math.floor(widthMm / em);
    if (perLine < 1) return { heightMm: em * 1.2, tooWide: true };
    return { heightMm: Math.ceil(chars / perLine) * em * 1.2, tooWide: false };
  };

const text = (extra: Partial<TextElement> = {}): TextElement => ({
  id: 't',
  type: 'text',
  x: 10,
  y: 10,
  w: 50,
  h: 10,
  content: '{{name}}',
  style: { fontSizePt: 20 },
  ...extra,
});

describe('fitText', () => {
  it('keeps text that fits in its box', () => {
    expect(fitText(text(), monospace(5))).toEqual({
      box: { x: 10, y: 10, w: 50, h: 10 },
      fontSizePt: 20,
      fits: true,
    });
  });

  it('reports text without a max box that is too long', () => {
    expect(fitText(text(), monospace(30)).fits).toBe(false);
  });

  it('grows down before it shrinks', () => {
    const el = text({
      fit: { maxBox: { x: 10, y: 10, w: 50, h: 30 }, minFontSizePt: 8 },
    });
    const layout = fitText(el, monospace(12));
    expect(layout.fontSizePt).toBe(20);
    expect(layout.box.y).toBe(10);
    expect(layout.box.h).toBeCloseTo(2 * 20 * MM_PER_PT * 1.2);
  });

  it('grows up from the bottom edge', () => {
    const el = text({
      fit: {
        maxBox: { x: 10, y: 0, w: 50, h: 20 },
        grow: 'up',
        minFontSizePt: 8,
      },
    });
    const layout = fitText(el, monospace(12));
    expect(layout.box.y + layout.box.h).toBeCloseTo(20);
  });

  it('uses the max box width when the height cannot grow', () => {
    const el = text({
      fit: { maxBox: { x: 0, y: 10, w: 100, h: 10 }, minFontSizePt: 8 },
    });
    const layout = fitText(el, monospace(12));
    expect(layout).toMatchObject({
      box: { x: 0, w: 100 },
      fontSizePt: 20,
      fits: true,
    });
  });

  it('shrinks to the largest size that fits', () => {
    const el = text({
      fit: { maxBox: { x: 10, y: 10, w: 50, h: 10 }, minFontSizePt: 8 },
    });
    const layout = fitText(el, monospace(10));
    expect(layout.fits).toBe(true);
    expect(10 * layout.fontSizePt * MM_PER_PT).toBeLessThanOrEqual(50);
    expect(10 * (layout.fontSizePt + 0.25) * MM_PER_PT).toBeGreaterThan(50);
  });

  it('gives up at the minimum size', () => {
    const el = text({
      fit: { maxBox: { x: 10, y: 10, w: 50, h: 10 }, minFontSizePt: 16 },
    });
    expect(fitText(el, monospace(40))).toMatchObject({
      fontSizePt: 16,
      fits: false,
    });
  });
});

describe('resolveContent', () => {
  it('fills placeholders and puts statements on their own lines', () => {
    const values = {
      name: { text: 'アセトン', origin: 'sds' as const },
      h: {
        statements: [
          { code: 'H225', text: '引火性の高い液体及び蒸気' },
          { code: 'H319', text: '強い眼刺激' },
        ],
        origin: 'sds' as const,
      },
    };
    expect(resolveContent('{{name}} / {{ h }} / {{missing}}', values)).toBe(
      'アセトン / 引火性の高い液体及び蒸気\n強い眼刺激 / '
    );
  });
});

describe('statement format', () => {
  it('follows the field pattern, limit and join', () => {
    const values = {
      p: {
        statements: [
          { code: 'P210', text: '熱から遠ざけること。' },
          { code: 'P233', text: '容器を密閉しておくこと。' },
          { code: 'P240', text: '容器を接地すること。' },
        ],
        origin: 'sds' as const,
      },
    };
    const field = {
      key: 'p',
      label: 'P',
      kind: 'statement_list' as const,
      source: {
        type: 'sds' as const,
        path: 'section2.p_statements.prevention',
        format: { pattern: '{code} {text}', join: ' ', limit: 2 },
      },
    };
    expect(resolveContent('{{p}}', values, [field])).toBe(
      'P210 熱から遠ざけること。 P233 容器を密閉しておくこと。'
    );
  });
});

describe('layoutPictograms', () => {
  const area: PictogramAreaElement = {
    id: 'p',
    type: 'pictogram_area',
    field: 'p',
    x: 0,
    y: 0,
    w: 70,
    h: 20,
  };

  it('lays out squares in a row, limited by the height', () => {
    expect(layoutPictograms(area, 3).map((b) => b.x)).toEqual([0, 21, 42]);
    expect(layoutPictograms(area, 3)[0].w).toBe(20);
  });

  it('shrinks to fit the width and keeps at most maxCount', () => {
    const boxes = layoutPictograms({ ...area, maxCount: 4 }, 6);
    expect(boxes).toHaveLength(4);
    expect(boxes[0].w).toBeCloseTo((70 - 3) / 4);
  });

  it('centres a column', () => {
    const boxes = layoutPictograms(
      { ...area, w: 20, h: 70, direction: 'column', align: 'center' },
      2
    );
    expect(boxes[0].y).toBeCloseTo((70 - 41) / 2);
  });
});
