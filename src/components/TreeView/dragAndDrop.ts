import type { DragDropManager } from '@dnd-kit/react';
import { isSortable } from '@dnd-kit/react/sortable';

import { byDocumentPosition } from './registry';
import type { Registry, TreeNode } from './registry';

export const DWELL_MS = 600;
/** Upper bound on waiting for dnd-kit to finish a drop before the tree moves on. */
export const DROP_SETTLE_TIMEOUT_MS = 2000;
export const PLACEHOLDER_ATTRIBUTE = 'data-dnd-placeholder';

export interface DragSnapshot {
  node: TreeNode;
  originList: Element;
  originIndex: number;
  /** The dragged Root was open and is collapsed for the duration of the drag. */
  reopen: boolean;
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

/** The Root whose group is `list`, or undefined for the tree's own list. */
const ownerOf = (registry: Registry, list: Element) => {
  const element = list.parentElement;
  let owner: TreeNode | undefined;
  registry.forEach((node) => {
    if (node.element === element) owner = node;
  });
  return owner;
};

/**
 * Tree rules for where the gap goes relative to the hovered row: the top half
 * places before it; the bottom half of an open group makes it the first child;
 * the middle of a childless group nests inside it; otherwise after it.
 */
export const locateGap = (
  manager: DragDropManager,
  registry: Registry,
  snapshot: DragSnapshot,
  pointerY: number
) => {
  const { source, target } = manager.dragOperation;
  const node =
    source && target && target.id !== source.id
      ? registry.get(target.id)
      : undefined;
  const list = node?.element.parentElement;
  const rect = node?.element.firstElementChild?.getBoundingClientRect();
  if (!node || !list || !rect || rect.height === 0) return;
  // A disabled Root takes no new children, so its list takes no gap either.
  if (ownerOf(registry, list)?.disabled) return;

  const rel = (pointerY - rect.top) / rect.height;
  const group =
    node.kind === 'root' ? node.element.querySelector(':scope > ul') : null;
  const expanded = node.element.getAttribute('aria-expanded');
  const dragged = snapshot.node.element;
  const place = (into: Element, before: Element | null) =>
    placeGap(manager, registry, snapshot, into, before);

  // A disabled Root takes no new children, so the gap only goes beside it.
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

export const restoreRow = ({ node, originList, originIndex }: DragSnapshot) => {
  const before = rowsOf(originList, node.element)[originIndex] ?? null;
  originList.insertBefore(node.element, before);
};
