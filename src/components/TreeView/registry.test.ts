import { describe, expect, it } from 'vitest';

import { collectLeaves, rootSelectionOf } from './registry';
import type { Leaf, Registry, TreeNode } from './registry';
import type { TreeViewNodeKey, TreeViewNodeKind } from './types';

interface NodeOptions {
  valueKey?: TreeViewNodeKey;
  disabled?: boolean;
}

const node = (
  key: TreeViewNodeKey,
  parentKey: TreeViewNodeKey | null,
  kind: TreeViewNodeKind,
  options: NodeOptions = {}
): TreeNode => ({
  key,
  valueKey: options.valueKey,
  parentKey,
  kind,
  disabled: options.disabled ?? false,
  hasChildren: false,
  defaultOpen: undefined,
  element: null as unknown as HTMLLIElement,
  getValue: () => undefined,
});

const registry = (nodes: TreeNode[]): Registry =>
  new Map(nodes.map((n) => [n.key, n]));

const keys = (leaves: Leaf[] | undefined) =>
  (leaves ?? []).map((leaf) => leaf.valueKey);

describe('collectLeaves', () => {
  it('lists the valued Items under a Root', () => {
    const leaves = collectLeaves(
      registry([
        node('r', null, 'root'),
        node('a', 'r', 'item', { valueKey: 'a' }),
        node('b', 'r', 'item', { valueKey: 'b' }),
      ])
    );
    expect(keys(leaves.get('r'))).toEqual(['a', 'b']);
  });

  it('flattens the leaves of nested Roots into every ancestor', () => {
    const leaves = collectLeaves(
      registry([
        node('outer', null, 'root'),
        node('a', 'outer', 'item', { valueKey: 'a' }),
        node('inner', 'outer', 'root'),
        node('b', 'inner', 'item', { valueKey: 'b' }),
        node('c', 'inner', 'item', { valueKey: 'c' }),
      ])
    );
    expect(keys(leaves.get('outer'))).toEqual(['a', 'b', 'c']);
    expect(keys(leaves.get('inner'))).toEqual(['b', 'c']);
  });

  it('skips Items without a value', () => {
    const leaves = collectLeaves(
      registry([
        node('r', null, 'root'),
        node('a', 'r', 'item', { valueKey: 'a' }),
        node('label-only', 'r', 'item'),
      ])
    );
    expect(keys(leaves.get('r'))).toEqual(['a']);
  });

  it('uses a valued Root as its own leaf when nothing inside is selectable', () => {
    const leaves = collectLeaves(
      registry([
        node('r', null, 'root', { valueKey: 'r' }),
        node('label-only', 'r', 'item'),
        node('empty', null, 'root', { valueKey: 'empty' }),
      ])
    );
    expect(keys(leaves.get('r'))).toEqual(['r']);
    expect(keys(leaves.get('empty'))).toEqual(['empty']);
  });

  it("prefers selectable descendants over the Root's own value", () => {
    const leaves = collectLeaves(
      registry([
        node('r', null, 'root', { valueKey: 'r' }),
        node('a', 'r', 'item', { valueKey: 'a' }),
      ])
    );
    expect(keys(leaves.get('r'))).toEqual(['a']);
  });

  it('bubbles a nested valued Root up as a leaf of its parent', () => {
    const leaves = collectLeaves(
      registry([
        node('outer', null, 'root'),
        node('inner', 'outer', 'root', { valueKey: 'inner' }),
      ])
    );
    expect(keys(leaves.get('outer'))).toEqual(['inner']);
    expect(keys(leaves.get('inner'))).toEqual(['inner']);
  });

  it('gives a Root with no value and nothing selectable an empty list', () => {
    const leaves = collectLeaves(
      registry([node('r', null, 'root'), node('label-only', 'r', 'item')])
    );
    expect(leaves.get('r')).toEqual([]);
  });

  it('only keys the result by Roots', () => {
    const leaves = collectLeaves(
      registry([
        node('top', null, 'item', { valueKey: 'top' }),
        node('r', null, 'root'),
        node('a', 'r', 'item', { valueKey: 'a' }),
      ])
    );
    expect(Array.from(leaves.keys())).toEqual(['r']);
  });
});

describe('rootSelectionOf', () => {
  const leaf = (valueKey: TreeViewNodeKey, disabled = false) =>
    node(valueKey, 'r', 'item', { valueKey, disabled }) as Leaf;
  const selected =
    (...keys: TreeViewNodeKey[]) =>
    (valueKey: TreeViewNodeKey) =>
      keys.includes(valueKey);

  it('is none and not selectable without leaves', () => {
    expect(rootSelectionOf([], selected())).toEqual({
      state: 'none',
      selectable: false,
    });
  });

  it('is none when no leaf is selected', () => {
    expect(rootSelectionOf([leaf('a'), leaf('b')], selected())).toEqual({
      state: 'none',
      selectable: true,
    });
  });

  it('is some when only part of the leaves are selected', () => {
    expect(rootSelectionOf([leaf('a'), leaf('b')], selected('a')).state).toBe(
      'some'
    );
  });

  it('is all when every leaf is selected', () => {
    expect(
      rootSelectionOf([leaf('a'), leaf('b')], selected('a', 'b')).state
    ).toBe('all');
  });

  it('is all when every enabled leaf is selected and a disabled one is not', () => {
    expect(
      rootSelectionOf([leaf('a'), leaf('b', true)], selected('a')).state
    ).toBe('all');
  });

  it('is some when only a disabled leaf is selected', () => {
    expect(
      rootSelectionOf([leaf('a'), leaf('b', true)], selected('b')).state
    ).toBe('some');
  });

  it('is not selectable when every leaf is disabled', () => {
    expect(rootSelectionOf([leaf('a', true)], selected())).toEqual({
      state: 'none',
      selectable: false,
    });
    expect(rootSelectionOf([leaf('a', true)], selected('a'))).toEqual({
      state: 'all',
      selectable: false,
    });
  });
});
