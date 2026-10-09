// @vitest-environment jsdom
import type { DragDropManager } from '@dnd-kit/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { locateGap, stepGap } from './dragAndDrop';
import type { DragSnapshot } from './dragAndDrop';
import type { Registry, TreeNode } from './registry';

// dnd-kit's DOM package needs ResizeObserver on import, which jsdom lacks.
vi.mock('@dnd-kit/react/sortable', () => ({ isSortable: () => false }));

interface Spec {
  key: string;
  /** Makes the row a Group. `undefined` leaves it childless. */
  expanded?: boolean | 'childless';
  disabled?: boolean;
  children?: Spec[];
}

const ROW_HEIGHT = 20;

const manager = {
  registry: { droppables: new Map() },
} as unknown as DragDropManager;

let tree: HTMLUListElement;
let registry: Registry;

const build = (specs: Spec[], list: Element, parentKey: string | null) => {
  specs.forEach((spec) => {
    const element = document.createElement('li');
    element.append(document.createElement('div'));
    if (spec.expanded !== undefined) {
      const group = document.createElement('ul');
      if (spec.expanded === false) group.hidden = true;
      if (spec.expanded !== 'childless') {
        element.setAttribute('aria-expanded', String(spec.expanded));
      }
      element.append(group);
      build(spec.children ?? [], group, spec.key);
    }
    list.append(element);
    registry.set(spec.key, {
      key: spec.key,
      valueKey: spec.key,
      parentKey,
      kind: spec.expanded === undefined ? 'item' : 'group',
      disabled: spec.disabled ?? false,
      hasChildren: (spec.children ?? []).length > 0,
      defaultOpen: undefined,
      element,
      getValue: () => spec.key,
    });
  });
};

const setup = (specs: Spec[]) => {
  registry = new Map();
  tree = document.createElement('ul');
  build(specs, tree, null);
  document.body.replaceChildren(tree);
};

const nodeOf = (element: Element | null) =>
  Array.from(registry.values()).find((node) => node.element === element);

const snapshotOf = (key: string): DragSnapshot => {
  const node = registry.get(key) as TreeNode;
  const originList = node.element.parentElement as Element;
  return {
    node,
    originList,
    originIndex: Array.from(originList.children).indexOf(node.element),
    reopen: false,
    nodeOf,
    keyboard: false,
  };
};

/** Gives `key` a row rectangle at `index` in the visible layout. */
const placeRow = (key: string, index: number) => {
  const row = registry.get(key)?.element.firstElementChild as HTMLElement;
  row.getBoundingClientRect = () =>
    ({
      top: index * ROW_HEIGHT,
      bottom: (index + 1) * ROW_HEIGHT,
      left: 0,
      right: 200,
      height: ROW_HEIGHT,
      width: 200,
    }) as DOMRect;
};

/** Pointer at `fraction` of the row's height. */
const over = (index: number, fraction: number) => ({
  x: 10,
  y: (index + fraction) * ROW_HEIGHT,
});

/** The tree as text: keys in order, with a Group's children in brackets. */
const layout = (list: Element = tree): string =>
  Array.from(list.children)
    .map((element) => {
      const group = element.querySelector(':scope > ul');
      const key = nodeOf(element)?.key;
      return group ? `${key}[${layout(group)}]` : key;
    })
    .join(' ');

beforeEach(() => {
  document.body.replaceChildren();
});

describe('locateGap', () => {
  const hover = (key: string, index: number, fraction: number) => {
    placeRow(key, index);
    locateGap(manager, registry, snapshotOf('x'), over(index, fraction));
  };

  it('places the gap before a row from its top half', () => {
    setup([{ key: 'a' }, { key: 'b' }, { key: 'x' }]);
    hover('b', 1, 0.25);
    expect(layout()).toBe('a x b');
  });

  it('places the gap after a row from its bottom half', () => {
    setup([{ key: 'x' }, { key: 'a' }, { key: 'b' }]);
    hover('a', 1, 0.75);
    expect(layout()).toBe('a x b');
  });

  it('makes the gap the first child from the bottom half of an open Group', () => {
    setup([
      { key: 'x' },
      { key: 'r', expanded: true, children: [{ key: 'a' }] },
    ]);
    hover('r', 1, 0.75);
    expect(layout()).toBe('r[x a]');
  });

  it('nests the gap inside a childless Group from its middle', () => {
    setup([{ key: 'x' }, { key: 'r', expanded: 'childless' }]);
    hover('r', 1, 0.5);
    expect(layout()).toBe('r[x]');
  });

  it('places the gap beside a childless Group from its edges', () => {
    setup([{ key: 'a' }, { key: 'r', expanded: 'childless' }, { key: 'x' }]);
    hover('r', 1, 0.1);
    expect(layout()).toBe('a x r[]');
  });

  it('places the gap beside a collapsed Group rather than inside it', () => {
    setup([
      { key: 'x' },
      { key: 'r', expanded: false, children: [{ key: 'a' }] },
      { key: 'b' },
    ]);
    hover('r', 1, 0.75);
    expect(layout()).toBe('r[a] x b');
  });

  it('never nests the gap inside a disabled Group', () => {
    setup([{ key: 'x' }, { key: 'r', expanded: 'childless', disabled: true }]);
    hover('r', 1, 0.5);
    expect(layout()).toBe('r[] x');
  });

  it('leaves the gap alone over a row in a disabled Group', () => {
    setup([
      { key: 'x' },
      { key: 'r', expanded: true, disabled: true, children: [{ key: 'a' }] },
    ]);
    hover('a', 2, 0.25);
    expect(layout()).toBe('x r[a]');
  });

  it('ignores the dragged row and rows without a layout', () => {
    setup([{ key: 'a' }, { key: 'x' }]);
    placeRow('x', 0);
    locateGap(manager, registry, snapshotOf('x'), over(0, 0.25));
    expect(layout()).toBe('a x');
  });
});

describe('stepGap', () => {
  const step = (direction: 1 | -1) =>
    stepGap(manager, registry, snapshotOf('x'), tree, direction);

  it('moves the gap one row at a time', () => {
    setup([{ key: 'x' }, { key: 'a' }, { key: 'b' }]);
    step(1);
    expect(layout()).toBe('a x b');
    step(1);
    expect(layout()).toBe('a b x');
    step(-1);
    expect(layout()).toBe('a x b');
  });

  it('walks into and out of an open Group', () => {
    setup([
      { key: 'x' },
      { key: 'r', expanded: true, children: [{ key: 'a' }] },
    ]);
    step(1);
    expect(layout()).toBe('r[x a]');
    step(1);
    expect(layout()).toBe('r[a x]');
    step(1);
    expect(layout()).toBe('r[a] x');
  });

  it('stops inside a childless Group', () => {
    setup([{ key: 'x' }, { key: 'r', expanded: 'childless' }]);
    step(1);
    expect(layout()).toBe('r[x]');
  });

  it('skips the lists of collapsed and disabled Groups', () => {
    setup([
      { key: 'x' },
      { key: 'c', expanded: false, children: [{ key: 'a' }] },
      { key: 'd', expanded: true, disabled: true, children: [{ key: 'b' }] },
      { key: 'e', expanded: 'childless', disabled: true },
    ]);
    step(1);
    expect(layout()).toBe('c[a] x d[b] e[]');
    step(1);
    expect(layout()).toBe('c[a] d[b] x e[]');
    step(1);
    expect(layout()).toBe('c[a] d[b] e[] x');
  });

  it('stays put at either end of the tree', () => {
    setup([{ key: 'x' }, { key: 'a' }]);
    step(-1);
    expect(layout()).toBe('x a');
    step(1);
    step(1);
    expect(layout()).toBe('a x');
  });
});
