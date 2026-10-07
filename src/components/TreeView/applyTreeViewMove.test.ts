import { describe, expect, it } from 'vitest';

import { applyTreeViewMove } from './applyTreeViewMove';
import type { TreeViewMoveAccessors } from './applyTreeViewMove';
import type { TreeViewMoveEvent, TreeViewNodeKind } from './types';

interface Node {
  id: string;
  children?: Node[];
}

const accessors: TreeViewMoveAccessors<Node> = {
  getKey: (node) => node.id,
  getChildren: (node) => node.children,
  withChildren: (node, children) => ({ ...node, children }),
};

const tree = (): Node[] => [
  { id: 'a', children: [{ id: 'a1' }, { id: 'a2' }, { id: 'a3' }] },
  { id: 'b', children: [] },
  { id: 'c' },
];

const move = (
  key: string,
  kind: TreeViewNodeKind,
  from: [string | null, number],
  to: [string | null, number]
): TreeViewMoveEvent => ({
  key,
  kind,
  value: undefined,
  from: { parentKey: from[0], parentValue: undefined, index: from[1] },
  to: { parentKey: to[0], parentValue: undefined, index: to[1] },
});

const ids = (nodes: Node[] | undefined) => (nodes ?? []).map((n) => n.id);

describe('applyTreeViewMove', () => {
  it('reorders within a parent using the index counted after removal', () => {
    const result = applyTreeViewMove(
      tree(),
      move('a1', 'item', ['a', 0], ['a', 2]),
      accessors
    );
    expect(ids(result[0]?.children)).toEqual(['a2', 'a3', 'a1']);
  });

  it('moves a node under another parent at the given index', () => {
    const result = applyTreeViewMove(
      tree(),
      move('a2', 'item', ['a', 1], ['b', 0]),
      accessors
    );
    expect(ids(result[0]?.children)).toEqual(['a1', 'a3']);
    expect(ids(result[1]?.children)).toEqual(['a2']);
  });

  it('moves a node to the top level', () => {
    const result = applyTreeViewMove(
      tree(),
      move('a3', 'item', ['a', 2], [null, 1]),
      accessors
    );
    expect(ids(result)).toEqual(['a', 'a3', 'b', 'c']);
  });

  it('moves a whole branch with its children', () => {
    const result = applyTreeViewMove(
      tree(),
      move('a', 'root', [null, 0], ['b', 0]),
      accessors
    );
    expect(ids(result)).toEqual(['b', 'c']);
    expect(ids(result[0]?.children)).toEqual(['a']);
    expect(ids(result[0]?.children?.[0]?.children)).toEqual(['a1', 'a2', 'a3']);
  });

  it('tells a Root and an Item apart when they share a key', () => {
    const nodes: Node[] = [
      { id: 'x', children: [{ id: 'x' }] },
      { id: 'b', children: [] },
    ];
    const result = applyTreeViewMove(
      nodes,
      move('x', 'item', ['x', 0], ['b', 0]),
      accessors
    );
    expect(ids(result)).toEqual(['x', 'b']);
    expect(ids(result[0]?.children)).toEqual([]);
    expect(ids(result[1]?.children)).toEqual(['x']);
  });

  it('returns the same array when the key is unknown', () => {
    const nodes = tree();
    expect(
      applyTreeViewMove(
        nodes,
        move('zzz', 'item', ['a', 0], ['b', 0]),
        accessors
      )
    ).toBe(nodes);
  });

  it('keeps untouched branches identical', () => {
    const nodes = tree();
    const result = applyTreeViewMove(
      nodes,
      move('a1', 'item', ['a', 0], ['a', 1]),
      accessors
    );
    expect(result[1]).toBe(nodes[1]);
    expect(result[2]).toBe(nodes[2]);
    expect(result[0]).not.toBe(nodes[0]);
  });
});
