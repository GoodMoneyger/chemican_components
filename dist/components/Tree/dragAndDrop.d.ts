import { DragDropManager } from '@dnd-kit/react';
import { Registry, TreeNode } from './registry';
export declare const DWELL_MS = 600;
/** Upper bound on waiting for dnd-kit to finish a drop before the tree moves on. */
export declare const DROP_SETTLE_TIMEOUT_MS = 2000;
/** How long rows take to slide into place after the gap moves, plus a margin. */
export declare const GAP_SETTLE_MS = 300;
export interface Pointer {
    x: number;
    y: number;
}
export declare const PLACEHOLDER_ATTRIBUTE = "data-dnd-placeholder";
export interface DragSnapshot {
    node: TreeNode;
    originList: Element;
    originIndex: number;
    /** The dragged Group was open and is collapsed for the duration of the drag. */
    reopen: boolean;
    /** Registered node of a row element, or of a list's parent to find its owner. */
    nodeOf: (element: Element | null) => TreeNode | undefined;
    /** Set once the drag is moved with the keyboard; the gap then steps slot by slot. */
    keyboard: boolean;
}
/** Rows of a list in DOM order, without dnd-kit's placeholder that marks the gap. */
export declare const rowsOf: (list: Element, except?: Element) => Element[];
/**
 * Numbers every row's sortable instance from the DOM so dnd-kit animates the
 * siblings into place whenever the gap moves. The dragged row is left alone.
 * Parents go first: a row measures itself after its parent has started
 * moving, so it compensates and stays put while the parent animates.
 */
export declare const syncIndexes: (manager: DragDropManager, registry: Registry, dragged?: TreeNode) => void;
/**
 * Tree rules for where the gap goes relative to the row under the pointer:
 * the top half places before it; the bottom half of an open group makes it
 * the first child; the middle of a childless group nests inside it; otherwise
 * after it. Rows are hit-tested from the pointer, so the decision follows what
 * the pointer is over rather than dnd-kit's clone-based collision target.
 */
export declare const locateGap: (manager: DragDropManager, registry: Registry, snapshot: DragSnapshot, pointer: Pointer) => void;
/** Moves the gap to the previous or next slot, for keyboard-driven drags. */
export declare const stepGap: (manager: DragDropManager, registry: Registry, snapshot: DragSnapshot, tree: Element, direction: 1 | -1) => void;
export declare const restoreRow: ({ node, originList, originIndex }: DragSnapshot) => void;
