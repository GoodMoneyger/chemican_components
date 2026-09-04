/**
 * Focus behaviour for dialogs that open with a form in them.
 *
 * Radix focuses the first focusable element when a dialog opens, which is
 * the wrong thing for most forms: an edit dialog opens with its fields
 * already filled, so the caret lands in the middle of existing text, and a
 * field such as an auto suggest opens its menu just from being focused.
 */
/**
 * Default `onOpenAutoFocus` handler of `Dialog`.
 *
 * Focuses the first field only when it is a plain text input or textarea
 * that is either empty or the dialog's only field. Otherwise the dialog
 * itself takes the focus, so the keyboard stays inside the dialog without a
 * field being touched.
 *
 * Exported so that a dialog passing its own handler can still fall back to
 * this behaviour.
 */
export declare function focusFirstTextField(event: Event): void;
