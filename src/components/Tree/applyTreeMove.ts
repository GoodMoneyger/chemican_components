import type { TreeMoveEvent, TreeNodeKey } from './types';

export interface TreeMoveAccessors<N> {
  getKey: (node: N) => TreeNodeKey;
  /** Return undefined for leaf nodes so Groups and Items sharing a key stay apart. */
  getChildren: (node: N) => N[] | undefined;
  withChildren: (node: N, children: N[]) => N;
}

/**
 * Applies a `TreeMoveEvent` to nested data and returns the new nodes.
 * Untouched branches keep their identity.
 */
export const applyTreeMove = <N>(
  nodes: N[],
  event: TreeMoveEvent,
  accessors: TreeMoveAccessors<N>
): N[] => {
  const { getKey, getChildren, withChildren } = accessors;
  const isGroup = event.kind === 'group';
  let moved: N | undefined;

  const replaceAt = (list: N[], index: number, node: N) =>
    list.map((current, i) => (i === index ? node : current));

  const remove = (list: N[]): N[] => {
    for (let i = 0; i < list.length; i += 1) {
      const node = list[i] as N;
      const children = getChildren(node);
      if (getKey(node) === event.key && (children !== undefined) === isGroup) {
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

  /** Returns undefined when no node in `list` has the destination key. */
  const insert = (list: N[], node: N): N[] | undefined => {
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
      if (nextChildren !== undefined) {
        return replaceAt(list, i, withChildren(candidate, nextChildren));
      }
    }
    return undefined;
  };

  const withoutNode = remove(nodes);
  if (moved === undefined) return nodes;
  // The destination can be missing from the data, for instance a Group whose
  // `getChildren` returns undefined. Keep the node rather than dropping it.
  return insert(withoutNode, moved) ?? nodes;
};
