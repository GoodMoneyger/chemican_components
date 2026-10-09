/**
 * dnd-kit upgrade checklist. The tree drives dnd-kit 0.5.0 through internals
 * that no type or test fully guards; verify each one after an upgrade, then
 * run a pointer and a keyboard drag in Storybook.
 *
 * - `droppable.sortable.index` is written in `syncIndexes` to animate rows.
 * - `droppable.refreshShape()` is called in `placeGap` after the gap moves.
 * - `manager.dragOperation.status.idle` is polled in `afterDrop` (Tree.tsx).
 * - `manager.dragOperation.position.current` is read in Tree.tsx.
 * - `data-dnd-placeholder` filters rows here and draws the dashed slot in
 *   Tree.tsx; `dndKitInternals.test.ts` checks the name.
 * - `plugins: []` on `useSortable` turns off optimistic and keyboard sorting.
 * - `GAP_SETTLE_MS` and `DROP_SETTLE_TIMEOUT_MS` are tuned against dnd-kit's
 *   250 ms sortable and drop animations.
 */
import type { DragDropManager } from '@dnd-kit/react';
import { isSortable } from '@dnd-kit/react/sortable';

import { byDocumentPosition } from './registry';
import type { Registry, TreeNode } from './registry';

export const DWELL_MS = 600;
/** Upper bound on waiting for dnd-kit to finish a drop before the tree moves on. */
export const DROP_SETTLE_TIMEOUT_MS = 2000;
/** How long rows take to slide into place after the gap moves, plus a margin. */
export const GAP_SETTLE_MS = 300;

export interface Pointer {
  x: number;
  y: number;
}
export const PLACEHOLDER_ATTRIBUTE = 'data-dnd-placeholder';

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
export const rowsOf = (list: Element, except?: Element) =>
  Array.from(list.children).filter(
    (child) => child !== except && !child.hasAttribute(PLACEHOLDER_ATTRIBUTE)
  );

const nextRowAfter = (row: Element, except: Element) => {
  let next = row.nextElementSibling;
  while (
    next &&
    (next === except || next.hasAttribute(PLACEHOLDER_ATTRIBUTE))
  ) {
    next = next.nextElementSibling;
  }
  return next;
};

/**
 * Numbers every row's sortable instance from the DOM so dnd-kit animates the
 * siblings into place whenever the gap moves. The dragged row is left alone.
 * Parents go first: a row measures itself after its parent has started
 * moving, so it compensates and stays put while the parent animates.
 */
export const syncIndexes = (
  manager: DragDropManager,
  registry: Registry,
  dragged?: TreeNode
) => {
  const nodes = Array.from(registry.values()).sort(byDocumentPosition);
  nodes.forEach((node) => {
    const list = node.element.parentElement;
    const droppable = manager.registry.droppables.get(node.key);
    if (node !== dragged && list && droppable && isSortable(droppable)) {
      droppable.sortable.index = rowsOf(list).indexOf(node.element);
    }
  });
};

/** Moves the dragged row, and with it the gap, in front of `before` in `list`. */
const placeGap = (
  manager: DragDropManager,
  registry: Registry,
  snapshot: DragSnapshot,
  list: Element,
  before: Element | null
) => {
  const { element } = snapshot.node;
  if (!element.isConnected || before === element) return;
  if (
    element.parentElement === list &&
    nextRowAfter(element, element) === before
  ) {
    return;
  }
  list.insertBefore(element, before);
  syncIndexes(manager, registry, snapshot.node);
  // dnd-kit only refreshes a row's cached rectangle when that row's own index
  // changes, so refresh them all once the placeholder has followed the element.
  window.requestAnimationFrame(() => {
    registry.forEach((node) => {
      manager.registry.droppables.get(node.key)?.refreshShape();
    });
  });
};

/** The visible row under the pointer, leaving out the dragged row itself. */
const rowAt = (registry: Registry, pointer: Pointer, dragged: TreeNode) => {
  let found: TreeNode | undefined;
  registry.forEach((node) => {
    if (node === dragged) return;
    const rect = node.element.firstElementChild?.getBoundingClientRect();
    if (
      rect &&
      rect.height > 0 &&
      pointer.y >= rect.top &&
      pointer.y < rect.bottom &&
      pointer.x >= rect.left &&
      pointer.x < rect.right
    ) {
      found = node;
    }
  });
  return found;
};

/**
 * Tree rules for where the gap goes relative to the row under the pointer:
 * the top half places before it; the bottom half of an open group makes it
 * the first child; the middle of a childless group nests inside it; otherwise
 * after it. Rows are hit-tested from the pointer, so the decision follows what
 * the pointer is over rather than dnd-kit's clone-based collision target.
 */
export const locateGap = (
  manager: DragDropManager,
  registry: Registry,
  snapshot: DragSnapshot,
  pointer: Pointer
) => {
  const node = rowAt(registry, pointer, snapshot.node);
  const list = node?.element.parentElement;
  const rect = node?.element.firstElementChild?.getBoundingClientRect();
  if (!node || !list || !rect || rect.height === 0) return;
  // A disabled Group takes no new children, so its list takes no gap either.
  if (snapshot.nodeOf(list.parentElement)?.disabled) return;

  const rel = (pointer.y - rect.top) / rect.height;
  const group =
    node.kind === 'group' ? node.element.querySelector(':scope > ul') : null;
  const expanded = node.element.getAttribute('aria-expanded');
  const dragged = snapshot.node.element;
  const place = (into: Element, before: Element | null) =>
    placeGap(manager, registry, snapshot, into, before);

  // A disabled Group takes no new children, so the gap only goes beside it.
  const nestable = !node.disabled;
  if (group && expanded === 'true' && nestable) {
    if (rel < 0.5) place(list, node.element);
    else place(group, rowsOf(group, dragged)[0] ?? null);
  } else if (
    group &&
    expanded === null &&
    nestable &&
    rel >= 0.25 &&
    rel <= 0.75
  ) {
    place(group, null);
  } else if (rel < 0.5) {
    place(list, node.element);
  } else {
    place(list, nextRowAfter(node.element, dragged));
  }
};

interface GapSlot {
  list: Element;
  before: Element | null;
}

/**
 * Every spot the gap can take, in document order: before each visible row,
 * at the end of each list, and inside a childless Group that can take
 * children. Lists owned by a disabled Group are left out, as is the dragged
 * subtree.
 */
const gapSlots = (tree: Element, snapshot: DragSnapshot): GapSlot[] => {
  const slots: GapSlot[] = [];
  const dragged = snapshot.node.element;
  const walk = (list: Element) => {
    if (snapshot.nodeOf(list.parentElement)?.disabled) return;
    rowsOf(list, dragged).forEach((row) => {
      slots.push({ list, before: row });
      const node = snapshot.nodeOf(row);
      const group = row.querySelector(':scope > ul');
      if (!node || !group || node.disabled) return;
      const expanded = row.getAttribute('aria-expanded');
      if (expanded === 'true') walk(group);
      else if (expanded === null) slots.push({ list: group, before: null });
    });
    slots.push({ list, before: null });
  };
  walk(tree);
  return slots;
};

/** Moves the gap to the previous or next slot, for keyboard-driven drags. */
export const stepGap = (
  manager: DragDropManager,
  registry: Registry,
  snapshot: DragSnapshot,
  tree: Element,
  direction: 1 | -1
) => {
  const element = snapshot.node.element;
  const list = element.parentElement;
  if (!list) return;
  const before = nextRowAfter(element, element);
  const slots = gapSlots(tree, snapshot);
  const index = slots.findIndex(
    (slot) => slot.list === list && slot.before === before
  );
  const next = index === -1 ? undefined : slots[index + direction];
  if (next) placeGap(manager, registry, snapshot, next.list, next.before);
};

export const restoreRow = ({ node, originList, originIndex }: DragSnapshot) => {
  const before = rowsOf(originList, node.element)[originIndex] ?? null;
  originList.insertBefore(node.element, before);
};
