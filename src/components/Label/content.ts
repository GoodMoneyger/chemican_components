import type { FieldValue, LabelValues } from './spec-types';

const PLACEHOLDER = /\{\{\s*([a-z][a-z0-9_]*)\s*\}\}/g;

/** Field keys used in a text element's content, in order. */
export function placeholderKeys(content: string): string[] {
  return Array.from(content.matchAll(PLACEHOLDER), (m) => m[1] ?? '');
}

/** The text a field puts on the label. Statements go one per line. */
export function valueText(value: FieldValue | undefined): string {
  if (!value) return '';
  if (value.statements) return value.statements.map((s) => s.text).join('\n');
  return value.text ?? '';
}

/** Content with every placeholder replaced by its value. Missing values become empty. */
export function resolveContent(
  content: string,
  values: LabelValues['values']
): string {
  return content.replace(PLACEHOLDER, (_, key: string) =>
    valueText(values[key])
  );
}
