// Copied from GoodMoneyger/sds_manager_label_spec@7909ee650fcd02d8f10f8a7650ebb403a4d3721a (generated/types.ts).
// Do not edit; run: node tools/copy-label-spec-types.mjs <spec repo path>
/* Generated from generated/schema.json by json-schema-to-typescript. Do not edit; run make generate. */

/**
 * Label templates and filled labels, schema version 1. Generated from the Pydantic models; do not edit.
 */
export interface LabelSpec {
  [k: string]: unknown;
}
/**
 * Written by the AI from the SDS; customers have to check it.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "AiSource".
 */
export interface AiSource {
  /**
   * Read only these SDS values. Leave out to read the whole SDS markdown.
   */
  inputs?: string[] | null;
  instruction: string;
  /**
   * Sections to look at first when reading the whole SDS.
   */
  sdsSections?: number[];
  type: "ai";
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "Asset".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z][a-z0-9_]*$".
 */
export interface Asset {
  mimeType: "image/png" | "image/jpeg" | "image/svg+xml";
  /**
   * Where the file is stored, e.g. a gs:// path.
   */
  path: string;
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "BarcodeElement".
 */
export interface BarcodeElement {
  field?: string | null;
  h: number;
  humanReadable?: boolean;
  id: string;
  /**
   * What the import took the element for, e.g. product_name or supplier.
   */
  role?: string | null;
  /**
   * Degrees clockwise around the centre of the box.
   */
  rotation?: number;
  symbology: "ean13" | "code128" | "gs1_128" | "qr" | "datamatrix";
  type: "barcode";
  value?: string | null;
  w: number;
  x: number;
  y: number;
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "Box".
 */
export interface Box {
  h: number;
  w: number;
  x: number;
  y: number;
}
/**
 * A company value: the same on all labels of one company.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "CompanySource".
 */
export interface CompanySource {
  /**
   * Company value key, e.g. name, address, emergency_phone or logo.
   */
  key: string;
  type: "company";
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "Field".
 */
export interface Field {
  key: string;
  kind?: "text" | "statement_list" | "pictogram_list" | "image";
  /**
   * Name shown to staff and customers.
   */
  label: string;
  maxChars?: number | null;
  required?: boolean;
  source: SdsSource | RuleSource | AiSource | FixedSource | CompanySource | ManualSource | PerPrintSource;
}
/**
 * Copied from the SDS data, with simple formatting.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "SdsSource".
 */
export interface SdsSource {
  format?: SdsFormat | null;
  /**
   * Structured SDS value, e.g. product.name or section2.h_statements.
   */
  path: string;
  type: "sds";
}
/**
 * Simple formatting for SDS data copied as is.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "SdsFormat".
 */
export interface SdsFormat {
  /**
   * Joins list values, e.g. 「、」 or a line break.
   */
  join?: string | null;
  /**
   * Keeps only the first N list items.
   */
  limit?: number | null;
  /**
   * Format for each item, e.g. "{name} {concentration}".
   */
  pattern?: string | null;
}
/**
 * Built from SDS data by fixed code, for exact legal text.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "RuleSource".
 */
export interface RuleSource {
  params?: {
    [k: string]: string | number | boolean;
  };
  /**
   * Name of the rule, e.g. fire_service_act.
   */
  rule: string;
  type: "rule";
}
/**
 * The same text on every label made from this template.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "FixedSource".
 */
export interface FixedSource {
  type: "fixed";
  value: string;
}
/**
 * Typed by the customer in the editor and saved with the label.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "ManualSource".
 */
export interface ManualSource {
  default?: string | null;
  placeholder?: string | null;
  type: "manual";
}
/**
 * Asked at every download and not saved with the label, e.g. lot number or production date.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "PerPrintSource".
 */
export interface PerPrintSource {
  /**
   * May be left blank, e.g. to stamp the lot on later.
   */
  allowBlank?: boolean;
  default?: "today" | null;
  format?: "text" | "date";
  maxLength?: number | null;
  type: "per_print";
}
/**
 * At most one of text, statements, pictograms or image is set; none set means the field is empty.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "FieldValue".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z][a-z0-9_]*$".
 */
export interface FieldValue {
  /**
   * Short reason when the status is not ok.
   */
  detail?: string | null;
  /**
   * The part of the source the AI left out.
   */
  droppedText?: string | null;
  /**
   * Asset path, e.g. the company logo.
   */
  image?: string | null;
  origin: "sds" | "rule" | "ai" | "fixed" | "company" | "manual" | "per_print" | "edited";
  pictograms?: ("GHS01" | "GHS02" | "GHS03" | "GHS04" | "GHS05" | "GHS06" | "GHS07" | "GHS08" | "GHS09")[] | null;
  /**
   * The SDS text the value was built from.
   */
  sourceText?: string | null;
  statements?: Statement[] | null;
  status?: "ok" | "missing_in_sds" | "dropped_essential" | "bad_format" | "conflict" | "does_not_fit";
  text?: string | null;
}
/**
 * One hazard (H) or precautionary (P) statement. Combined codes look like P303+P361+P353.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "Statement".
 */
export interface Statement {
  code?: string | null;
  text: string;
}
/**
 * A static image from the template's assets, or an image field such as the company logo.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "ImageElement".
 */
export interface ImageElement {
  asset?: string | null;
  field?: string | null;
  h: number;
  id: string;
  objectFit?: "contain" | "cover" | "fill";
  /**
   * What the import took the element for, e.g. product_name or supplier.
   */
  role?: string | null;
  /**
   * Degrees clockwise around the centre of the box.
   */
  rotation?: number;
  type: "image";
  w: number;
  x: number;
  y: number;
}
/**
 * A draft template plus what staff need to check it.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "ImportResult".
 */
export interface ImportResult {
  /**
   * 0 to 1 per element; low values need a check.
   */
  confidence?: {
    [k: string]: number;
  };
  document: TemplateDocument;
  /**
   * What the sample label said, so the draft can be shown filled in.
   */
  sampleValues?: LabelValues | null;
  source: ImportSource;
  /**
   * Data URL of the rendered sample page, to compare against.
   */
  tracePng?: string | null;
  warnings?: string[];
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "TemplateDocument".
 */
export interface TemplateDocument {
  assets?: {
    [k: string]: Asset;
  };
  elements: (
    | TextElement
    | RectElement
    | LineElement
    | PathElement
    | ImageElement
    | PictogramAreaElement
    | BarcodeElement
    | TableElement
  )[];
  fields: Field[];
  language: "ja" | "en";
  page: Page;
  schemaVersion?: 1;
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "TextElement".
 */
export interface TextElement {
  columnGapMm?: number;
  /**
   * Text flows into this many columns of equal width.
   */
  columns?: number;
  /**
   * Literal text with {{field_key}} placeholders.
   */
  content: string;
  fit?: TextFit | null;
  h: number;
  id: string;
  /**
   * What the import took the element for, e.g. product_name or supplier.
   */
  role?: string | null;
  /**
   * Degrees clockwise around the centre of the box.
   */
  rotation?: number;
  style: TextStyle;
  type: "text";
  w: number;
  x: number;
  y: number;
}
/**
 * Room a text may take when the filled value is longer than the sample.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "TextFit".
 */
export interface TextFit {
  grow?: "down" | "up" | "both";
  maxBox: Box;
  /**
   * Smallest size the text may shrink to; below that the field does not fit.
   */
  minFontSizePt: number;
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "TextStyle".
 */
export interface TextStyle {
  color?: string;
  fontFamily?: string;
  fontSizePt: number;
  fontStyle?: "normal" | "italic";
  fontWeight?: "normal" | "bold";
  /**
   * Extra space between characters, in em.
   */
  letterSpacingEm?: number;
  /**
   * Baseline pitch divided by font size.
   */
  lineHeight?: number;
  textAlign?: "left" | "center" | "right" | "justify";
  verticalAlign?: "top" | "middle" | "bottom";
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "RectElement".
 */
export interface RectElement {
  cornerRadiusMm?: number;
  h: number;
  id: string;
  /**
   * What the import took the element for, e.g. product_name or supplier.
   */
  role?: string | null;
  /**
   * Degrees clockwise around the centre of the box.
   */
  rotation?: number;
  style?: ShapeStyle;
  type: "rect";
  w: number;
  x: number;
  y: number;
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "ShapeStyle".
 */
export interface ShapeStyle {
  fill?: string | null;
  opacity?: number;
  stroke?: string | null;
  strokeWidthMm?: number;
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "LineElement".
 */
export interface LineElement {
  h: number;
  id: string;
  /**
   * What the import took the element for, e.g. product_name or supplier.
   */
  role?: string | null;
  /**
   * Degrees clockwise around the centre of the box.
   */
  rotation?: number;
  style?: ShapeStyle;
  type: "line";
  w: number;
  x: number;
  x1: number;
  x2: number;
  y: number;
  y1: number;
  y2: number;
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "PathElement".
 */
export interface PathElement {
  /**
   * SVG path data in mm.
   */
  d: string;
  evenOdd?: boolean;
  h: number;
  id: string;
  /**
   * What the import took the element for, e.g. product_name or supplier.
   */
  role?: string | null;
  /**
   * Degrees clockwise around the centre of the box.
   */
  rotation?: number;
  style?: ShapeStyle;
  type: "path";
  w: number;
  x: number;
  y: number;
}
/**
 * Lays out 1 to max_count GHS pictograms from a pictogram_list field.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "PictogramAreaElement".
 */
export interface PictogramAreaElement {
  align?: "start" | "center" | "end";
  direction?: "row" | "column";
  field: string;
  gapMm?: number;
  h: number;
  id: string;
  maxCount?: number;
  /**
   * What the import took the element for, e.g. product_name or supplier.
   */
  role?: string | null;
  /**
   * Degrees clockwise around the centre of the box.
   */
  rotation?: number;
  type: "pictogram_area";
  w: number;
  x: number;
  y: number;
}
/**
 * Table rules as found on the sample label. Cells give text fields a natural max box.
 *
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "TableElement".
 */
export interface TableElement {
  cells?: TableCell[];
  h: number;
  id: string;
  /**
   * What the import took the element for, e.g. product_name or supplier.
   */
  role?: string | null;
  /**
   * Degrees clockwise around the centre of the box.
   */
  rotation?: number;
  rules?: TableRule[];
  type: "table";
  w: number;
  x: number;
  y: number;
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "TableCell".
 */
export interface TableCell {
  col: number;
  colSpan?: number;
  h: number;
  row: number;
  rowSpan?: number;
  w: number;
  x: number;
  y: number;
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "TableRule".
 */
export interface TableRule {
  color?: string;
  widthMm: number;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "Page".
 */
export interface Page {
  heightMm: number;
  widthMm: number;
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "LabelValues".
 */
export interface LabelValues {
  schemaVersion?: 1;
  values: {
    [k: string]: FieldValue;
  };
}
/**
 * This interface was referenced by `LabelSpec`'s JSON-Schema
 * via the `definition` "ImportSource".
 */
export interface ImportSource {
  filename: string;
  /**
   * vector: the PDF has a text layer. ocr: text was recovered from an image.
   */
  method: "vector" | "ocr";
  pageIndex: number;
  pages: number;
}
