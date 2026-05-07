import { CompositionEventHandler, KeyboardEvent } from '../../../node_modules/react';
export interface CompositionHandlers<T extends Element> {
    onCompositionStart: CompositionEventHandler<T>;
    onCompositionEnd: CompositionEventHandler<T>;
}
export interface UseCompositionGuardResult<T extends Element> {
    /**
     * Spread these handlers onto the input/textarea so the hook can track IME
     * composition state.
     */
    compositionHandlers: CompositionHandlers<T>;
    /**
     * Wraps a keyboard handler so it is skipped while an IME composition is in
     * progress. Use this for any onKeyDown / onKeyUp handler that has Enter (or
     * other confirm-style) semantics, to avoid triggering submission when the
     * user is just confirming an IME candidate.
     */
    guardKeyHandler: <E extends KeyboardEvent<T>>(handler: ((event: E) => void) | undefined) => ((event: E) => void) | undefined;
    /**
     * Imperative check (current value of `isComposing`). Prefer `guardKeyHandler`
     * for handler wrapping; use this only when integrating with code that cannot
     * use the wrapper.
     */
    isComposingRef: React.RefObject<boolean>;
}
/**
 * Tracks IME composition state so that Enter (and similar) key events fired
 * while the user is confirming a Japanese / Chinese / Korean IME candidate are
 * not interpreted as form submission.
 *
 * Browsers fire `compositionend` before `keydown` for the confirming Enter on
 * modern engines, but Safari historically fires `keydown` first; therefore the
 * wrapper additionally checks `event.nativeEvent.isComposing` to cover both
 * orderings.
 */
export declare const useCompositionGuard: <T extends Element = HTMLInputElement>() => UseCompositionGuardResult<T>;
