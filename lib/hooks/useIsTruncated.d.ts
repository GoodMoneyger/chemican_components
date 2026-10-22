/**
 * Reports whether an element's text is cut off by `truncate`, so the full
 * text can be exposed elsewhere (e.g. a tooltip) only when it is needed.
 */
export declare function useIsTruncated<T extends HTMLElement>(): {
    ref: import('../../../node_modules/react').RefObject<T | null>;
    isTruncated: boolean;
};
