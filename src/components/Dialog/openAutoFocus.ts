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
 * True for a control the user can actually act on. A disabled or read only
 * field is not a field the user can do anything with, so it is not counted
 * as the dialog's first field.
 */
function isInteractive(element: HTMLElement): boolean {
  if (element.getAttribute('aria-disabled') === 'true') return false;

  const control = element as Partial<HTMLInputElement>;
  return !control.disabled && !control.readOnly;
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
 *
 * Disabled and read only controls are ignored entirely, so a dialog opening
 * with a disabled field on top — a reference value the user cannot change —
 * still starts at the first field they can act on.
 *
 * A filled field is skipped, so an edit dialog does not drop the caret into
 * text the user did not ask to edit — unless it is the only field the user
 * can act on, in which case there is nothing else to reach for and focusing
 * it saves a click.
 */
function findFieldToFocus(root: HTMLElement): HTMLElement | null {
  const controls = Array.from(
    root.querySelectorAll<HTMLElement>(FORM_CONTROL_SELECTOR)
  )
    .filter(isVisible)
    .filter(isInteractive);
  const firstControl = controls[0];

  if (!firstControl || !isPlainTextControl(firstControl)) return null;
  if (firstControl.value.trim() !== '' && controls.length > 1) return null;

  return firstControl;
}

/**
 * Default `onOpenAutoFocus` handler of `Dialog`.
 *
 * Focuses the first field the user can act on, and only when it is a plain
 * text input or textarea that is either empty or the only such field.
 * Disabled and read only controls are ignored. Otherwise the dialog itself
 * takes the focus, so the keyboard stays inside the dialog without a field
 * being touched.
 *
 * Exported so that a dialog passing its own handler can still fall back to
 * this behaviour.
 */
export function focusFirstTextField(event: Event): void {
  // Take over the default focus handling in every case, so a field that
  // does not qualify is not focused instead.
  event.preventDefault();

  const root =
    event.currentTarget instanceof HTMLElement
      ? event.currentTarget
      : event.target;
  if (!(root instanceof HTMLElement)) return;

  // The dialog element is focusable itself (Radix gives it tabIndex -1).
  (findFieldToFocus(root) ?? root).focus();
}
