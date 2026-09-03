/**
 * Focus behaviour for dialogs that open with a form in them.
 *
 * Radix focuses the first focusable element when a dialog opens, which is
 * the wrong thing for most forms: an edit dialog opens with its fields
 * already filled, so the caret lands in the middle of existing text, and a
 * field such as an auto suggest opens its menu just from being focused.
 */

/** Input types that behave like a plain text box. */
const PLAIN_TEXT_INPUT_TYPES = new Set([
  'text',
  'search',
  'email',
  'url',
  'tel',
  'number',
  'password',
]);

/** Everything the user can type into or open a menu from. */
const FORM_CONTROL_SELECTOR =
  'input, textarea, select, [role="combobox"], [contenteditable="true"]';

function isVisible(element: HTMLElement): boolean {
  if (element.hasAttribute('hidden')) return false;
  if (element.closest('[aria-hidden="true"]')) return false;
  if (element instanceof HTMLInputElement && element.type === 'hidden') {
    return false;
  }

  const style = element.ownerDocument.defaultView?.getComputedStyle(element);
  return style?.display !== 'none' && style?.visibility !== 'hidden';
}

/**
 * True for a text box the user can type into directly. An auto suggest is
 * rendered as an input too, but carries combobox semantics, so it is
 * excluded.
 */
function isPlainTextControl(
  element: HTMLElement
): element is HTMLInputElement | HTMLTextAreaElement {
  const role = element.getAttribute('role');
  if (role !== null && role !== 'textbox') return false;
  if (element.hasAttribute('aria-autocomplete')) return false;
  if (element.hasAttribute('aria-haspopup')) return false;

  if (element instanceof HTMLTextAreaElement) return true;
  if (element instanceof HTMLInputElement) {
    return PLAIN_TEXT_INPUT_TYPES.has(element.type);
  }
  return false;
}

/**
 * The first field of the dialog, but only when it is a plain text field the
 * user can start typing into right away.
 */
function findEmptyFirstTextField(root: HTMLElement): HTMLElement | null {
  const firstControl = Array.from(
    root.querySelectorAll<HTMLElement>(FORM_CONTROL_SELECTOR)
  ).find(isVisible);

  if (!firstControl || !isPlainTextControl(firstControl)) return null;
  if (firstControl.disabled || firstControl.readOnly) return null;
  if (firstControl.value.trim() !== '') return null;

  return firstControl;
}

/**
 * Default `onOpenAutoFocus` handler of `Dialog`.
 *
 * Focuses the first field only when it is an empty plain text input or
 * textarea. Otherwise the dialog itself takes the focus, so the keyboard
 * stays inside the dialog without a field being touched.
 *
 * Exported so that a dialog passing its own handler can still fall back to
 * this behaviour.
 */
export function focusFirstEmptyTextField(event: Event): void {
  // Take over the default focus handling in every case, so a field that
  // does not qualify is not focused instead.
  event.preventDefault();

  const root =
    event.currentTarget instanceof HTMLElement
      ? event.currentTarget
      : event.target;
  if (!(root instanceof HTMLElement)) return;

  // The dialog element is focusable itself (Radix gives it tabIndex -1).
  (findEmptyFirstTextField(root) ?? root).focus();
}
