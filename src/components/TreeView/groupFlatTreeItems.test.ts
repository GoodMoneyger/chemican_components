import { describe, expect, it } from 'vitest';

import { groupFlatTreeItems } from './groupFlatTreeItems';
import type { FlatTreeAccessors } from './groupFlatTreeItems';

interface Row {
  id: string;
  parent?: string | null;
  order: number;
}

const accessors: FlatTreeAccessors<Row> = {
  getItemValue: (row) => row.id,
  getParentKey: (row) => row.parent,
};

const ids = (rows: Row[] | undefined) => rows?.map((row) => row.id);

describe('groupFlatTreeItems', () => {
  it('groups items under their parent key, with null for the top level', () => {
    const groups = groupFlatTreeItems(
      [
        { id: 'a', parent: null, order: 0 },
        { id: 'a1', parent: 'a', order: 0 },
        { id: 'b', order: 1 },
        { id: 'a2', parent: 'a', order: 1 },
      ],
      accessors
    );

    expect(ids(groups.get(null))).toEqual(['a', 'b']);
    expect(ids(groups.get('a'))).toEqual(['a1', 'a2']);
    expect(groups.has('b')).toBe(false);
  });

  it('surfaces items with a missing parent at the top level', () => {
    const groups = groupFlatTreeItems(
      [
        { id: 'a', parent: null, order: 0 },
        { id: 'orphan', parent: 'gone', order: 1 },
      ],
      accessors
    );

    expect(ids(groups.get(null))).toEqual(['a', 'orphan']);
    expect(groups.has('gone')).toBe(false);
  });

  it('keeps array order without getOrder and sorts siblings with it', () => {
    const rows: Row[] = [
      { id: 'b', parent: null, order: 1 },
      { id: 'a', parent: null, order: 0 },
      { id: 'a2', parent: 'a', order: 1 },
      { id: 'a1', parent: 'a', order: 0 },
    ];

    expect(ids(groupFlatTreeItems(rows, accessors).get(null))).toEqual([
      'b',
      'a',
    ]);

    const sorted = groupFlatTreeItems(rows, {
      ...accessors,
      getOrder: (row) => row.order,
    });
    expect(ids(sorted.get(null))).toEqual(['a', 'b']);
    expect(ids(sorted.get('a'))).toEqual(['a1', 'a2']);
  });

  it('does not reorder the input array', () => {
    const rows: Row[] = [
      { id: 'b', parent: null, order: 1 },
      { id: 'a', parent: null, order: 0 },
    ];

    groupFlatTreeItems(rows, { ...accessors, getOrder: (row) => row.order });

    expect(ids(rows)).toEqual(['b', 'a']);
  });
});
