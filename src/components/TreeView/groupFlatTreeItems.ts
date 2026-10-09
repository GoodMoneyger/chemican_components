import type { TreeViewNodeKey } from './types';

/** Keys are compared with `===`: `getItemValue` and `getParentKey` must return the same primitive type. */
export interface FlatTreeAccessors<T> {
  getItemValue: (item: T) => TreeViewNodeKey;
  getParentKey: (item: T) => TreeViewNodeKey | null | undefined;
  /** Sort key among siblings. Items keep their array order when omitted. */
  getOrder?: (item: T) => number;
}

/**
 * Groups a flat list by parent key, with `null` holding the top level. Items
 * whose parent is not in the list surface at the top level. Items caught in a
 * parent cycle are grouped but cannot be reached from `null`.
 */
export const groupFlatTreeItems = <T>(
  items: T[],
  { getItemValue, getParentKey, getOrder }: FlatTreeAccessors<T>
): Map<TreeViewNodeKey | null, T[]> => {
  const keys = new Set<TreeViewNodeKey>();
  items.forEach((item) => keys.add(getItemValue(item)));

  const groups = new Map<TreeViewNodeKey | null, T[]>();
  items.forEach((item) => {
    const parent = getParentKey(item) ?? null;
    const group = parent !== null && keys.has(parent) ? parent : null;
    const siblings = groups.get(group);
    if (siblings) siblings.push(item);
    else groups.set(group, [item]);
  });

  if (getOrder) {
    groups.forEach((siblings) =>
      siblings.sort((a, b) => getOrder(a) - getOrder(b))
    );
  }

  return groups;
};
