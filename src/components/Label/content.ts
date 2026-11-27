import type { Field, FieldValue, LabelValues, SdsFormat } from './spec-types';

const PLACEHOLDER = /\{\{\s*([a-z][a-z0-9_]*)\s*\}\}/g;

/** Field keys used in a text element's content, in order. */
export function placeholderKeys(content: string): string[] {
  return Array.from(content.matchAll(PLACEHOLDER), (m) => m[1] ?? '');
}

/**
 * The text a field puts on the label. Statements follow the field's SDS format
 * (pattern with {code} and {text}, limit, join); without one they go one per line.
 */
export function valueText(
  value: FieldValue | undefined,
  field?: Field | undefined
): string {
  if (!value) return '';
  if (!value.statements) return value.text ?? '';
  const format: SdsFormat =
    field?.source.type === 'sds' ? (field.source.format ?? {}) : {};
  const items = format.limit
    ? value.statements.slice(0, format.limit)
    : value.statements;
  const pattern = format.pattern ?? '{text}';
  return items
    .map((s) =>
      pattern
        .replace('{code}', s.code ?? '')
        .replace('{text}', s.text)
        .trim()
    )
    .join(format.join ?? '\n');
}

/** Content with every placeholder replaced by its value. Missing values become empty. */
export function resolveContent(
  content: string,
  values: LabelValues['values'],
  fields: Field[] = []
): string {
  return content.replace(PLACEHOLDER, (_, key: string) =>
    valueText(
      values[key],
      fields.find((f) => f.key === key)
    )
  );
}
