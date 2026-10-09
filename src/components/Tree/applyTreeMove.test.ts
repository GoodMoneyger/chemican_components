import { describe, expect, it } from 'vitest';

import { applyTreeMove } from './applyTreeMove';
import type { TreeMoveAccessors } from './applyTreeMove';
import type { TreeMoveEvent, TreeNodeKind } from './types';

interface Node {
  id: string;
  children?: Node[];
}

const accessors: TreeMoveAccessors<Node> = {
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
  kind: TreeNodeKind,
  from: [string | null, number],
  to: [string | null, number]
): TreeMoveEvent => ({
  key,
  kind,
  value: undefined,
  from: { parentKey: from[0], parentValue: undefined, index: from[1] },
  to: { parentKey: to[0], parentValue: undefined, index: to[1] },
});

const ids = (nodes: Node[] | undefined) => (nodes ?? []).map((n) => n.id);

describe('applyTreeMove', () => {
  it('reorders within a parent using the index counted after removal', () => {
    const result = applyTreeMove(
      tree(),
      move('a1', 'item', ['a', 0], ['a', 2]),
      accessors
    );
    expect(ids(result[0]?.children)).toEqual(['a2', 'a3', 'a1']);
  });

  it('moves a node under another parent at the given index', () => {
    const result = applyTreeMove(
      tree(),
      move('a2', 'item', ['a', 1], ['b', 0]),
      accessors
    );
    expect(ids(result[0]?.children)).toEqual(['a1', 'a3']);
    expect(ids(result[1]?.children)).toEqual(['a2']);
  });

  it('moves a node to the top level', () => {
    const result = applyTreeMove(
      tree(),
      move('a3', 'item', ['a', 2], [null, 1]),
      accessors
    );
    expect(ids(result)).toEqual(['a', 'a3', 'b', 'c']);
  });

  it('moves a whole branch with its children', () => {
    const result = applyTreeMove(
      tree(),
      move('a', 'group', [null, 0], ['b', 0]),
      accessors
    );
    expect(ids(result)).toEqual(['b', 'c']);
    expect(ids(result[0]?.children)).toEqual(['a']);
    expect(ids(result[0]?.children?.[0]?.children)).toEqual(['a1', 'a2', 'a3']);
  });

  it('tells a Group and an Item apart when they share a key', () => {
    const nodes: Node[] = [
      { id: 'x', children: [{ id: 'x' }] },
      { id: 'b', children: [] },
    ];
    const result = applyTreeMove(
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
      applyTreeMove(nodes, move('zzz', 'item', ['a', 0], ['b', 0]), accessors)
    ).toBe(nodes);
  });

  it('returns the same array when the destination parent has no children array', () => {
    const nodes = tree();
    expect(
      applyTreeMove(nodes, move('a1', 'item', ['a', 0], ['c', 0]), accessors)
    ).toBe(nodes);
  });

  it('keeps untouched branches identical', () => {
    const nodes = tree();
    const result = applyTreeMove(
      nodes,
      move('a1', 'item', ['a', 0], ['a', 1]),
      accessors
    );
    expect(result[1]).toBe(nodes[1]);
    expect(result[2]).toBe(nodes[2]);
    expect(result[0]).not.toBe(nodes[0]);
  });
});
