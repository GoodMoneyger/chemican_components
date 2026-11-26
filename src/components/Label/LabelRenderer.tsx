import { useLayoutEffect, useMemo, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';

import { resolveContent } from './content';
import { fitText } from './fit';
import type { TextLayout } from './fit';
import { domMeasure } from './measure';
import { layoutPictograms } from './pictogramLayout';
import { GHS_PICTOGRAMS } from './pictograms';
import type {
  Box,
  ImageElement,
  LabelValues,
  PictogramAreaElement,
  ShapeStyle,
  TemplateDocument,
  TextElement,
} from './spec-types';
import { textCss, textWidth } from './textStyle';

type Element = TemplateDocument['elements'][number];

export interface LabelRendererProps {
  template: TemplateDocument;
  values: LabelValues['values'];
  /** Turns a stored asset path (e.g. gs://…) into a URL the browser can load. */
  resolveAsset?: (path: string) => string;
  /** Screen pixels per CSS pixel. 1 draws the label at its real size. */
  scale?: number;
  /** Called with each text element's final box and font size, e.g. to flag fields that do not fit. */
  onLayout?: (layouts: Record<string, TextLayout>) => void;
  className?: string;
}

/**
 * Draws a label from a template and its values, in mm. Admin, V2 and the PDF all use this, so a label
 * looks the same on screen and in print. Elements are drawn in document order; later ones are on top.
 */
export function LabelRenderer({
  template,
  values,
  resolveAsset = (path) => path,
  scale = 1,
  onLayout,
  className,
}: LabelRendererProps) {
  const layouts = useTextLayouts(template, values, onLayout);
  const { widthMm, heightMm } = template.page;

  return (
    <div
      className={className}
      style={{
        width: `${widthMm * scale}mm`,
        height: `${heightMm * scale}mm`,
        overflow: 'hidden',
      }}
    >
      <div
        data-label-page=""
        style={{
          position: 'relative',
          width: `${widthMm}mm`,
          height: `${heightMm}mm`,
          background: '#ffffff',
          overflow: 'hidden',
          transform: scale === 1 ? undefined : `scale(${scale})`,
          transformOrigin: '0 0',
        }}
      >
        {template.elements.map((element) => (
          <ElementView
            key={element.id}
            element={element}
            template={template}
            values={values}
            layout={layouts[element.id]}
            resolveAsset={resolveAsset}
          />
        ))}
      </div>
    </div>
  );
}

function useTextLayouts(
  template: TemplateDocument,
  values: LabelValues['values'],
  onLayout?: (layouts: Record<string, TextLayout>) => void
): Record<string, TextLayout> {
  const [layouts, setLayouts] = useState<Record<string, TextLayout>>({});
  const [fontsReady, setFontsReady] = useState(0);

  useLayoutEffect(() => {
    let active = true;
    document.fonts?.ready.then(() => active && setFontsReady((n) => n + 1));
    return () => {
      active = false;
    };
  }, []);

  const texts = useMemo(
    () =>
      template.elements
        .filter((e): e is TextElement => e.type === 'text')
        .map((e) => ({ element: e, text: resolveContent(e.content, values) })),
    [template, values]
  );

  useLayoutEffect(() => {
    const next: Record<string, TextLayout> = {};
    for (const { element, text } of texts)
      next[element.id] = fitText(element, domMeasure(element, text));
    setLayouts(next);
    onLayout?.(next);
    // onLayout is a callback for the caller; a new function each render must not lay out again.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [texts, fontsReady]);

  return layouts;
}

interface ElementViewProps {
  element: Element;
  template: TemplateDocument;
  values: LabelValues['values'];
  layout?: TextLayout | undefined;
  resolveAsset: (path: string) => string;
}

function ElementView({
  element,
  template,
  values,
  layout,
  resolveAsset,
}: ElementViewProps) {
  switch (element.type) {
    case 'text':
      return (
        <TextView
          element={element}
          text={resolveContent(element.content, values)}
          layout={layout}
        />
      );
    case 'rect':
      return (
        <Shapes page={template.page}>
          <rect
            x={element.x}
            y={element.y}
            width={element.w}
            height={element.h}
            rx={element.cornerRadiusMm ?? 0}
            {...shapeProps(element.style)}
          />
        </Shapes>
      );
    case 'line':
      return (
        <Shapes page={template.page}>
          <line
            x1={element.x1}
            y1={element.y1}
            x2={element.x2}
            y2={element.y2}
            {...shapeProps(element.style)}
          />
        </Shapes>
      );
    case 'path':
      return (
        <Shapes page={template.page}>
          <path
            d={element.d}
            fillRule={element.evenOdd ? 'evenodd' : 'nonzero'}
            {...shapeProps(element.style)}
          />
        </Shapes>
      );
    case 'table':
      return (
        <Shapes page={template.page}>
          {(element.rules ?? []).map((r, i) => (
            <line
              key={i}
              x1={r.x1}
              y1={r.y1}
              x2={r.x2}
              y2={r.y2}
              stroke={r.color ?? '#000000'}
              strokeWidth={r.widthMm}
            />
          ))}
        </Shapes>
      );
    case 'image':
      return (
        <ImageView
          element={element}
          template={template}
          values={values}
          resolveAsset={resolveAsset}
        />
      );
    case 'pictogram_area':
      return <PictogramsView element={element} values={values} />;
    case 'barcode':
      // Barcodes are drawn in a later step; until then the box shows where it goes.
      return (
        <div
          data-element-id={element.id}
          style={{
            ...boxCss(element, element.rotation),
            outline: '0.3mm dashed #999999',
          }}
        />
      );
  }
}

function TextView({
  element,
  text,
  layout,
}: {
  element: TextElement;
  text: string;
  layout?: TextLayout | undefined;
}) {
  const box = layout?.box ?? element;
  const fontSizePt = layout?.fontSizePt ?? element.style.fontSizePt;
  const justify = { top: 'flex-start', middle: 'center', bottom: 'flex-end' }[
    element.style.verticalAlign ?? 'top'
  ];
  return (
    <div
      data-element-id={element.id}
      data-fits={layout ? String(layout.fits) : undefined}
      style={{
        ...boxCss(box, element.rotation),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: justify,
        overflow: layout && !layout.fits ? 'hidden' : 'visible',
      }}
    >
      <div
        style={{
          ...textCss(element, fontSizePt),
          width: textWidth(element, '100%'),
        }}
      >
        {text}
      </div>
    </div>
  );
}

function ImageView({
  element,
  template,
  values,
  resolveAsset,
}: {
  element: ImageElement;
  template: TemplateDocument;
  values: LabelValues['values'];
  resolveAsset: (path: string) => string;
}) {
  const path = element.asset
    ? template.assets?.[element.asset]?.path
    : element.field && values[element.field]?.image;
  if (!path) return null;
  return (
    <img
      data-element-id={element.id}
      src={resolveAsset(path)}
      alt=""
      onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
      style={{
        ...boxCss(element, element.rotation),
        objectFit: element.objectFit ?? 'contain',
      }}
    />
  );
}

function PictogramsView({
  element,
  values,
}: {
  element: PictogramAreaElement;
  values: LabelValues['values'];
}) {
  const pictograms = values[element.field]?.pictograms ?? [];
  const boxes = layoutPictograms(element, pictograms.length);
  return (
    <div
      data-element-id={element.id}
      style={{ ...boxCss(element, element.rotation) }}
    >
      {boxes.map((b, i) => {
        const code = pictograms[i];
        return code ? (
          <img
            key={code}
            src={`data:image/svg+xml;charset=utf-8,${encodeURIComponent(GHS_PICTOGRAMS[code])}`}
            alt={code}
            style={boxCss({
              x: b.x - element.x,
              y: b.y - element.y,
              w: b.w,
              h: b.h,
            })}
          />
        ) : null;
      })}
    </div>
  );
}

function Shapes({
  page,
  children,
}: {
  page: TemplateDocument['page'];
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={`0 0 ${page.widthMm} ${page.heightMm}`}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'visible',
      }}
    >
      {children}
    </svg>
  );
}

function shapeProps(style: ShapeStyle | undefined) {
  return {
    fill: style?.fill ?? 'none',
    stroke: style?.stroke ?? 'none',
    strokeWidth: style?.strokeWidthMm ?? 0,
    opacity: style?.opacity ?? 1,
  };
}

function boxCss(box: Box, rotation = 0): CSSProperties {
  return {
    position: 'absolute',
    left: `${box.x}mm`,
    top: `${box.y}mm`,
    width: `${box.w}mm`,
    height: `${box.h}mm`,
    transform: rotation ? `rotate(${rotation}deg)` : undefined,
  };
}
