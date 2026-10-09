import type { TreeMoveEvent, TreeNodeKey } from './Tree';

/** Keys are compared with `===`: `getItemValue` and `getParentKey` must return the same primitive type. */
export interface TreeListMoveAccessors<T> {
  getItemValue: (item: T) => TreeNodeKey;
  getParentKey: (item: T) => TreeNodeKey | null | undefined;
  getOrder: (item: T) => number;
  /** Returns the item with its new parent and order. */
  withPlacement: (item: T, parentKey: TreeNodeKey | null, order: number) => T;
}

/**
 * Applies a `TreeMoveEvent` to a flat list: the moved item gets its new
 * parent, and the siblings of both the old and the new parent are numbered
 * again from zero. Untouched items keep their identity.
 */
export const applyTreeListMove = <T>(
  items: T[],
  event: TreeMoveEvent,
  accessors: TreeListMoveAccessors<T>
): T[] => {
  const { getItemValue, getParentKey, getOrder, withPlacement } = accessors;
  const moved = items.find((item) => getItemValue(item) === event.key);
  if (!moved) return items;
  const siblingsOf = (parent: TreeNodeKey | null) =>
    items
      .filter(
        (item) =>
          (getParentKey(item) ?? null) === parent &&
          getItemValue(item) !== event.key
      )
      .sort((a, b) => getOrder(a) - getOrder(b));
  const placements = new Map<TreeNodeKey, [TreeNodeKey | null, number]>();
  const target = siblingsOf(event.to.parentKey);
  target.splice(event.to.index, 0, moved);
  target.forEach((item, index) =>
    placements.set(getItemValue(item), [event.to.parentKey, index])
  );
  if (event.from.parentKey !== event.to.parentKey) {
    siblingsOf(event.from.parentKey).forEach((item, index) =>
      placements.set(getItemValue(item), [event.from.parentKey, index])
    );
  }
  return items.map((item) => {
    const placement = placements.get(getItemValue(item));
    return placement ? withPlacement(item, placement[0], placement[1]) : item;
  });
};
