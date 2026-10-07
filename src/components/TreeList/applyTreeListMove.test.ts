import { describe, expect, it } from 'vitest';

import type { TreeViewMoveEvent } from '../TreeView';

import { applyTreeListMove } from './applyTreeListMove';
import type { TreeListMoveAccessors } from './applyTreeListMove';

interface Row {
  id: string;
  parent: string | null;
  order: number;
}

const accessors: TreeListMoveAccessors<Row> = {
  getItemValue: (row) => row.id,
  getParentKey: (row) => row.parent,
  getOrder: (row) => row.order,
  withPlacement: (row, parent, order) => ({
    ...row,
    parent: parent === null ? null : String(parent),
    order,
  }),
};

const rows = (): Row[] => [
  { id: 'a', parent: null, order: 0 },
  { id: 'a1', parent: 'a', order: 0 },
  { id: 'a2', parent: 'a', order: 1 },
  { id: 'a3', parent: 'a', order: 2 },
  { id: 'b', parent: null, order: 1 },
];

const move = (
  key: string,
  from: [string | null, number],
  to: [string | null, number]
): TreeViewMoveEvent => ({
  key,
  kind: 'root',
  value: undefined,
  from: { parentKey: from[0], parentValue: undefined, index: from[1] },
  to: { parentKey: to[0], parentValue: undefined, index: to[1] },
});

const placement = (list: Row[], id: string) => {
  const row = list.find((r) => r.id === id);
  return row ? [row.parent, row.order] : undefined;
};

describe('applyTreeListMove', () => {
  it('reorders siblings and numbers them again from zero', () => {
    const result = applyTreeListMove(
      rows(),
      move('a1', ['a', 0], ['a', 2]),
      accessors
    );
    expect(placement(result, 'a2')).toEqual(['a', 0]);
    expect(placement(result, 'a3')).toEqual(['a', 1]);
    expect(placement(result, 'a1')).toEqual(['a', 2]);
  });

  it('moves a row under another parent and renumbers both groups', () => {
    const result = applyTreeListMove(
      rows(),
      move('a2', ['a', 1], ['b', 0]),
      accessors
    );
    expect(placement(result, 'a2')).toEqual(['b', 0]);
    expect(placement(result, 'a1')).toEqual(['a', 0]);
    expect(placement(result, 'a3')).toEqual(['a', 1]);
  });

  it('moves a row to the top level', () => {
    const result = applyTreeListMove(
      rows(),
      move('a3', ['a', 2], [null, 0]),
      accessors
    );
    expect(placement(result, 'a3')).toEqual([null, 0]);
    expect(placement(result, 'a')).toEqual([null, 1]);
    expect(placement(result, 'b')).toEqual([null, 2]);
  });

  it('returns the same array when the key is unknown', () => {
    const list = rows();
    expect(
      applyTreeListMove(list, move('zzz', ['a', 0], ['b', 0]), accessors)
    ).toBe(list);
  });

  it('keeps rows outside both groups identical', () => {
    const list = rows();
    const result = applyTreeListMove(
      list,
      move('a1', ['a', 0], ['a', 1]),
      accessors
    );
    expect(result[0]).toBe(list[0]);
    expect(result[4]).toBe(list[4]);
  });
});
