import type { Measure } from './fit';
import type { TextElement } from './spec-types';
import {
  KEEP_LINE_WHOLE,
  PX_PER_MM,
  textCss,
  textWidth,
  wholeLines,
} from './textStyle';

let probe: HTMLDivElement | null = null;

function getProbe(): HTMLDivElement {
  if (!probe || !probe.isConnected) {
    probe = document.createElement('div');
    probe.setAttribute('aria-hidden', 'true');
    Object.assign(probe.style, {
      position: 'absolute',
      left: '-100000px',
      top: '0',
      visibility: 'hidden',
    });
    document.body.appendChild(probe);
  }
  return probe;
}

/** Measures text in the browser with the same CSS the renderer uses. */
export function domMeasure(element: TextElement, text: string): Measure {
  return (widthMm, fontSizePt) => {
    const el = getProbe();
    el.removeAttribute('style');
    Object.assign(el.style, {
      position: 'absolute',
      left: '-100000px',
      top: '0',
      visibility: 'hidden',
    });
    const css = Object.entries(textCss(element, fontSizePt)).filter(
      ([, v]) => v !== undefined
    );
    Object.assign(el.style, Object.fromEntries(css), {
      width: textWidth(element, `${widthMm}mm`),
      height: 'auto',
    });
    const lines = wholeLines(element, text);
    if (lines) {
      el.replaceChildren(
        ...lines.map((line) => {
          const div = document.createElement('div');
          Object.assign(div.style, KEEP_LINE_WHOLE);
          div.textContent = line;
          return div;
        })
      );
    } else {
      el.textContent = text;
    }
    return {
      heightMm: el.scrollHeight / PX_PER_MM,
      tooWide: el.scrollWidth > el.clientWidth + 1,
    };
  };
}
