import type { TreeViewMoveEvent, TreeViewNodeKey } from './types';

export interface TreeViewMoveAccessors<N> {
  getKey: (node: N) => TreeViewNodeKey;
  /** Return undefined for leaf nodes so Roots and Items sharing a key stay apart. */
  getChildren: (node: N) => N[] | undefined;
  withChildren: (node: N, children: N[]) => N;
}

/**
 * Applies a `TreeViewMoveEvent` to nested data and returns the new nodes.
 * Untouched branches keep their identity.
 */
export const applyTreeViewMove = <N>(
  nodes: N[],
  event: TreeViewMoveEvent,
  accessors: TreeViewMoveAccessors<N>
): N[] => {
  const { getKey, getChildren, withChildren } = accessors;
  const isRoot = event.kind === 'root';
  let moved: N | undefined;

  const replaceAt = (list: N[], index: number, node: N) =>
    list.map((current, i) => (i === index ? node : current));

  const remove = (list: N[]): N[] => {
    for (let i = 0; i < list.length; i += 1) {
      const node = list[i] as N;
      const children = getChildren(node);
      if (getKey(node) === event.key && (children !== undefined) === isRoot) {
        moved = node;
        return list.filter((_, j) => j !== i);
      }
      if (children) {
        const nextChildren = remove(children);
        if (nextChildren !== children) {
          return replaceAt(list, i, withChildren(node, nextChildren));
        }
      }
    }
    return list;
  };

  const insert = (list: N[], node: N): N[] => {
    const { parentKey, index } = event.to;
    if (parentKey === null) {
      return [...list.slice(0, index), node, ...list.slice(index)];
    }
    for (let i = 0; i < list.length; i += 1) {
      const candidate = list[i] as N;
      const children = getChildren(candidate);
      if (children === undefined) continue;
      const nextChildren =
        getKey(candidate) === parentKey
          ? [...children.slice(0, index), node, ...children.slice(index)]
          : insert(children, node);
      if (nextChildren !== children) {
        return replaceAt(list, i, withChildren(candidate, nextChildren));
      }
    }
    return list;
  };

  const withoutNode = remove(nodes);
  return moved === undefined ? nodes : insert(withoutNode, moved);
};
