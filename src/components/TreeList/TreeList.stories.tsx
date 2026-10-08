import { useState } from 'react';
import type { ReactNode } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconPlus } from '@tabler/icons-react';

import { Button } from '../Button';
import { Callout } from '../Callout';
import { Dialog } from '../Dialog';
import { FormField } from '../FormField';
import { RadioButton, RadioButtonGroup } from '../RadioButton';
import { Select } from '../Select';
import { TextField } from '../TextField';
import type { TreeViewMoveEvent } from '../TreeView';

import { TreeList, applyTreeListMove } from './TreeList';
import type { TreeListMoveAccessors } from './TreeList';

const meta: Meta<typeof TreeList> = {
  title: 'Components/TreeList',
  component: TreeList,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div className="bg-surface-secondary px-xxl pt-sm pb-xl min-h-screen">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

interface Department {
  uuid: string;
  name: string;
  parent_id: string | null;
  display_order: number;
}

const departments: Department[] = [
  { uuid: 'kyushu', name: '九州支社', parent_id: null, display_order: 0 },
  { uuid: 'seizo', name: '製造本部', parent_id: 'kyushu', display_order: 0 },
  {
    uuid: 'kaihatsu-team',
    name: '開発チーム',
    parent_id: 'seizo',
    display_order: 0,
  },
  { uuid: 'seizo-1', name: '製造第一課', parent_id: 'seizo', display_order: 1 },
  {
    uuid: 'hinshitsu',
    name: '品質保証課',
    parent_id: 'seizo',
    display_order: 2,
  },
  { uuid: 'somu', name: '総務部', parent_id: 'kyushu', display_order: 1 },
  { uuid: 'honsha', name: '本社', parent_id: null, display_order: 1 },
  { uuid: 'eigyo', name: '営業本部', parent_id: 'honsha', display_order: 0 },
  { uuid: 'eigyo-1', name: '営業第一部', parent_id: 'eigyo', display_order: 0 },
  { uuid: 'shinki', name: '新規営業部', parent_id: 'eigyo', display_order: 1 },
  { uuid: 'kaihatsu', name: '開発本部', parent_id: 'honsha', display_order: 1 },
  { uuid: 'ai', name: 'AI開発チーム', parent_id: 'kaihatsu', display_order: 0 },
  {
    uuid: 'design',
    name: 'デザインチーム',
    parent_id: 'kaihatsu',
    display_order: 1,
  },
  {
    uuid: 'kaihatsu-team-2',
    name: '開発チーム',
    parent_id: 'kaihatsu',
    display_order: 2,
  },
  { uuid: 'kenkyu', name: '研究開発部', parent_id: 'honsha', display_order: 2 },
];

const accessors: TreeListMoveAccessors<Department> = {
  getItemValue: (d) => d.uuid,
  getParentKey: (d) => d.parent_id,
  getOrder: (d) => d.display_order,
  withPlacement: (d, parentKey, order) => ({
    ...d,
    parent_id: parentKey === null ? null : String(parentKey),
    display_order: order,
  }),
};

const labels = { expandAll: '全てを開く', collapseAll: '全てを閉じる' };

export const Default: Story = {
  render: () => (
    <TreeList
      header="部署名"
      items={departments}
      getItemValue={(d) => d.uuid}
      getParentKey={(d) => d.parent_id}
      getOrder={(d) => d.display_order}
      getLabel={(d) => d.name}
      labels={labels}
      aria-label="部署一覧"
    />
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The department list from the design: page toolbar, expand all and collapse all as text links with the inactive one greyed, a header bar with the list title, and 48px rows indented 20px per level. Rows come from a flat list through `getParentKey` and `getOrder`.',
      },
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                         Flat list helpers for the story                     */
/* -------------------------------------------------------------------------- */

const byOrder = (a: Department, b: Department) =>
  a.display_order - b.display_order;

const childrenOf = (list: Department[], parentId: string | null) =>
  list.filter((d) => d.parent_id === parentId).sort(byOrder);

const subtreeIds = (list: Department[], uuid: string): string[] => [
  uuid,
  ...childrenOf(list, uuid).flatMap((child) => subtreeIds(list, child.uuid)),
];

const ancestorIds = (list: Department[], uuid: string): string[] => {
  const parentId = list.find((d) => d.uuid === uuid)?.parent_id;
  return parentId ? [parentId, ...ancestorIds(list, parentId)] : [];
};

/** Numbers every sibling group from zero in its current order. */
const renumber = (list: Department[]): Department[] => {
  const orders = new Map<string, number>();
  const visit = (parentId: string | null) =>
    childrenOf(list, parentId).forEach((d, index) => {
      orders.set(d.uuid, index);
      visit(d.uuid);
    });
  visit(null);
  return list.map((d) => {
    const order = orders.get(d.uuid);
    return order === undefined || order === d.display_order
      ? d
      : { ...d, display_order: order };
  });
};

/** Select value standing for the top level of the tree. */
const TOP_LEVEL = '__top__';

/** Puts the departments last under the target, keeping their relative order. */
const moveUnder = (
  list: Department[],
  ids: string[],
  target: string
): Department[] => {
  const parentId = target === TOP_LEVEL ? null : target;
  const moving = list.filter((d) => ids.includes(d.uuid)).sort(byOrder);
  const rest = list.filter((d) => !ids.includes(d.uuid));
  const offset = childrenOf(rest, parentId).length;
  return renumber([
    ...rest,
    ...moving.map((d, index) => ({
      ...d,
      parent_id: parentId,
      display_order: offset + index,
    })),
  ]);
};

/**
 * Departments in tree order labelled by their path, without the `skip`
 * subtrees and without an option for the `omit` department itself.
 */
const targetOptions = (
  list: Department[],
  skip: string[],
  omit: string | null,
  parentId: string | null = null,
  path: string[] = []
): { value: string; label: string }[] =>
  childrenOf(list, parentId).flatMap((d) => {
    if (skip.includes(d.uuid)) return [];
    const label = [...path, d.name].join(' / ');
    return [
      ...(d.uuid === omit ? [] : [{ value: d.uuid, label }]),
      ...targetOptions(list, skip, omit, d.uuid, [...path, d.name]),
    ];
  });

const topLevelOption = { value: TOP_LEVEL, label: 'トップレベル' };

/* -------------------------------------------------------------------------- */
/*                     Pending changes since the last save                     */
/* -------------------------------------------------------------------------- */

type Change =
  | { kind: 'added'; item: Department }
  | { kind: 'removed'; item: Department }
  | { kind: 'moved'; item: Department; before: Department }
  | { kind: 'renamed'; item: Department; before: Department };

const changeGroups: { kind: Change['kind']; label: string }[] = [
  { kind: 'added', label: '追加' },
  { kind: 'moved', label: '移動' },
  { kind: 'removed', label: '削除' },
  { kind: 'renamed', label: '名称変更' },
];

/** Ids whose relative order changed: everything outside the longest common subsequence. */
const reorderedIds = (before: string[], after: string[]): Set<string> => {
  const lcs: number[][] = Array.from({ length: before.length + 1 }, () =>
    new Array<number>(after.length + 1).fill(0)
  );
  for (let i = before.length - 1; i >= 0; i -= 1) {
    for (let j = after.length - 1; j >= 0; j -= 1) {
      lcs[i][j] =
        before[i] === after[j]
          ? lcs[i + 1][j + 1] + 1
          : Math.max(lcs[i + 1][j], lcs[i][j + 1]);
    }
  }
  const kept = new Set<string>();
  for (let i = 0, j = 0; i < before.length && j < after.length; ) {
    if (before[i] === after[j]) {
      kept.add(before[i]);
      i += 1;
      j += 1;
    } else if (lcs[i + 1][j] >= lcs[i][j + 1]) {
      i += 1;
    } else {
      j += 1;
    }
  }
  return new Set(after.filter((id) => !kept.has(id)));
};

/**
 * Departments that differ between the saved list and the current one. A
 * department counts as moved when its parent changed, or when it is one of
 * the fewest siblings that must have moved to produce the new order, so
 * adding, removing or moving a neighbour does not report the others as moved.
 */
const diffDepartments = (
  saved: Department[],
  current: Department[]
): Change[] => {
  const savedById = new Map(saved.map((d) => [d.uuid, d]));
  const currentById = new Map(current.map((d) => [d.uuid, d]));
  const stayed = (d: Department) =>
    savedById.get(d.uuid)?.parent_id === currentById.get(d.uuid)?.parent_id;
  const reordered = new Set<string>();
  new Set(current.map((d) => d.parent_id)).forEach((parentId) => {
    reorderedIds(
      childrenOf(saved, parentId)
        .filter(stayed)
        .map((d) => d.uuid),
      childrenOf(current, parentId)
        .filter(stayed)
        .map((d) => d.uuid)
    ).forEach((id) => reordered.add(id));
  });
  const changes: Change[] = [];
  current.forEach((item) => {
    const before = savedById.get(item.uuid);
    if (!before) {
      changes.push({ kind: 'added', item });
      return;
    }
    if (before.parent_id !== item.parent_id || reordered.has(item.uuid)) {
      changes.push({ kind: 'moved', item, before });
    }
    if (before.name !== item.name) {
      changes.push({ kind: 'renamed', item, before });
    }
  });
  saved.forEach((item) => {
    if (!currentById.has(item.uuid)) changes.push({ kind: 'removed', item });
  });
  return changes;
};

const Muted = ({ children }: { children: ReactNode }) => (
  <span className="text-body-secondary">{children}</span>
);

const describeChange = (change: Change, items: Department[]): ReactNode => {
  const { item } = change;
  const parentLabel =
    item.parent_id === null
      ? '最上位の配下'
      : `${items.find((d) => d.uuid === item.parent_id)?.name ?? item.parent_id}の配下`;
  switch (change.kind) {
    case 'added':
      return (
        <>
          {item.name}
          <Muted>（{parentLabel}）</Muted>
        </>
      );
    case 'removed':
      return item.name;
    case 'moved': {
      const position =
        childrenOf(items, item.parent_id).findIndex(
          (d) => d.uuid === item.uuid
        ) + 1;
      return (
        <>
          {item.name} <Muted>→</Muted> {parentLabel}
          {change.before.parent_id === item.parent_id && (
            <Muted>（{position}番目）</Muted>
          )}
        </>
      );
    }
    case 'renamed':
      return (
        <>
          {change.before.name} <Muted>→</Muted> {item.name}
          <Muted>（{parentLabel}）</Muted>
        </>
      );
  }
};

/** The grouped change list of the save confirmation from the design. */
const ChangeSummary = ({
  changes,
  items,
}: {
  changes: Change[];
  items: Department[];
}) => (
  <ul
    className="bg-surface-primary border-surface-default divide-surface-default
      rounded-sm divide-y border"
  >
    {changeGroups.map(({ kind, label }) => {
      const group = changes.filter((change) => change.kind === kind);
      if (group.length === 0) return null;
      return (
        <li key={kind} className="gap-xs px-md py-sm flex flex-col">
          <p className="text-sm text-body-secondary leading-none">
            {label}（{group.length}件）
          </p>
          <ul className="gap-xxs text-md text-body-primary flex flex-col">
            {group.map((change) => (
              <li key={`${change.kind}:${change.item.uuid}`}>
                {describeChange(change, items)}
              </li>
            ))}
          </ul>
        </li>
      );
    })}
  </ul>
);

type ActionKind = 'add' | 'edit' | 'move' | 'delete' | 'save' | 'reset';
type AddMode = 'root' | 'child';
type DeleteMode = 'cascade' | 'move';

let nextId = 1;

const WithActionsExample = () => {
  const [items, setItems] = useState<Department[]>(departments);
  const [saved, setSaved] = useState<Department[]>(departments);
  const [deletedIds, setDeletedIds] = useState<Set<string>>(() => new Set());
  const [lastAction, setLastAction] = useState<string | null>(null);
  const [dialog, setDialog] = useState<{
    kind: ActionKind;
    item: Department | null;
  } | null>(null);
  const [name, setName] = useState('');
  const [target, setTarget] = useState<string | undefined>(undefined);
  const [addMode, setAddMode] = useState<AddMode>('root');
  const [deleteMode, setDeleteMode] = useState<DeleteMode>('cascade');

  /** Departments that are not pending deletion. */
  const live = items.filter((d) => !deletedIds.has(d.uuid));
  const item = dialog?.item ?? null;
  const children = item ? childrenOf(live, item.uuid) : [];
  const moveOptions = item
    ? [
        ...(item.parent_id === null ? [] : [topLevelOption]),
        ...targetOptions(live, [item.uuid], item.parent_id),
      ]
    : [];
  const childTargetOptions = item
    ? [topLevelOption, ...targetOptions(live, [item.uuid], null)]
    : [];
  const addTargets = targetOptions(live, [], null);
  const changes = diffDepartments(saved, live);

  const nameOf = (value: string) =>
    value === TOP_LEVEL
      ? topLevelOption.label
      : (items.find((d) => d.uuid === value)?.name ?? value);

  const open = (kind: ActionKind) => (d: Department | null) => {
    setDialog({ kind, item: d });
    setName(kind === 'edit' && d ? d.name : '');
    setTarget(undefined);
    setAddMode('root');
    setDeleteMode('cascade');
  };

  const close = () => setDialog(null);

  const confirmAdd = () => {
    const trimmed = name.trim();
    const parentId = item ? item.uuid : addMode === 'child' ? target : null;
    if (parentId === undefined) return;
    setItems((current) => [
      ...current,
      {
        uuid: `new-${nextId++}`,
        name: trimmed,
        parent_id: parentId,
        display_order: childrenOf(current, parentId).length,
      },
    ]);
    setLastAction(`${nameOf(parentId ?? TOP_LEVEL)} に ${trimmed} を追加`);
  };

  const confirmEdit = () => {
    if (!item) return;
    const id = item.uuid;
    const trimmed = name.trim();
    setItems((current) =>
      current.map((d) => (d.uuid === id ? { ...d, name: trimmed } : d))
    );
    setLastAction(`${item.name} を ${trimmed} に変更`);
  };

  const confirmMove = () => {
    if (!item || !target) return;
    const moved = item;
    const to = target;
    setItems((current) => moveUnder(current, [moved.uuid], to));
    setLastAction(`${moved.name} を ${nameOf(to)} へ移動`);
  };

  /** Deletion only marks departments until the changes are saved. */
  const markDeleted = (ids: string[]) =>
    setDeletedIds((current) => new Set([...Array.from(current), ...ids]));

  const confirmDelete = () => {
    if (!item) return;
    const removed = item;
    if (children.length > 0 && deleteMode === 'move' && target) {
      const ids = children.map((d) => d.uuid);
      const to = target;
      setItems((current) => moveUnder(current, ids, to));
      markDeleted([removed.uuid]);
      setLastAction(
        `${removed.name} を削除し、下位部署を ${nameOf(to)} へ移動`
      );
    } else {
      markDeleted(subtreeIds(items, removed.uuid));
      setLastAction(`${removed.name} を削除`);
    }
  };

  /** Brings back the department with everything below and above it. */
  const restore = (d: Department) => {
    const ids = [...subtreeIds(items, d.uuid), ...ancestorIds(items, d.uuid)];
    setDeletedIds(
      (current) =>
        new Set(Array.from(current).filter((id) => !ids.includes(id)))
    );
    setLastAction(`${d.name} を復元`);
  };

  const confirmSave = () => {
    const next = renumber(live);
    setSaved(next);
    setItems(next);
    setDeletedIds(new Set());
    setLastAction(`${changes.length}件の変更を保存`);
  };

  const confirmReset = () => {
    setItems(saved);
    setDeletedIds(new Set());
    setLastAction(`${changes.length}件の変更をリセット`);
  };

  const confirmThen = (confirm: () => void) => (value?: unknown) => {
    if (value === true) confirm();
    close();
  };

  return (
    <div className="gap-md flex flex-col">
      <div className="gap-xs flex items-center">
        <Button
          type="button"
          intent="secondary"
          size="sm"
          icon={IconPlus}
          onClick={() => open('add')(null)}
        >
          部署を追加
        </Button>
        <div className="gap-xs ml-auto flex">
          {changes.length > 0 && (
            <Button
              type="button"
              intent="secondary"
              size="sm"
              onClick={() => open('reset')(null)}
            >
              リセット
            </Button>
          )}
          <Button
            type="button"
            intent="primary"
            size="sm"
            disabled={changes.length === 0}
            onClick={() => open('save')(null)}
          >
            保存
          </Button>
        </div>
      </div>
      <TreeList
        header="部署名"
        items={items}
        getItemValue={(d) => d.uuid}
        getParentKey={(d) => d.parent_id}
        getOrder={(d) => d.display_order}
        getLabel={(d) => d.name}
        labels={labels}
        aria-label="部署一覧"
        sortable
        onMove={(event: TreeViewMoveEvent) => {
          setItems((current) => applyTreeListMove(current, event, accessors));
          setLastAction(`${(event.value as Department).name} を移動`);
        }}
        isDeleted={(d) => deletedIds.has(d.uuid)}
        actions={{
          add: { label: '部署を追加', onAction: open('add') },
          edit: { label: '部署を編集', onAction: open('edit') },
          move: { label: '部署を移動', onAction: open('move') },
          delete: { label: '部署を削除', onAction: open('delete') },
          restore: { label: '部署を復元', onAction: restore },
        }}
      />
      <p className="text-md text-body-secondary">
        最後の操作: {lastAction ?? 'なし'}
      </p>
      <Dialog
        isOpen={dialog?.kind === 'add'}
        onClose={confirmThen(confirmAdd)}
        title="部署を追加"
        actions={[
          {
            label: '追加',
            value: true,
            intent: 'primary',
            disabled:
              name.trim() === '' || (!item && addMode === 'child' && !target),
          },
        ]}
      >
        <div className="gap-md flex flex-col">
          <FormField name="new-department-name" label="部署名">
            <TextField
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="新しい部署の名前"
            />
          </FormField>
          {item ? (
            <p className="text-md text-body-secondary">
              {item.name} の下に追加します。
            </p>
          ) : (
            <>
              <RadioButtonGroup
                value={addMode}
                onValueChange={(value) => setAddMode(value as AddMode)}
                className="gap-md flex flex-col"
              >
                <RadioButton value="root" label="トップレベルに追加" />
                <RadioButton value="child" label="部署の下に追加" />
              </RadioButtonGroup>
              {addMode === 'child' && (
                <Select
                  options={addTargets}
                  value={target}
                  onValueChange={setTarget}
                  placeholder="追加先"
                />
              )}
            </>
          )}
        </div>
      </Dialog>
      <Dialog
        isOpen={dialog?.kind === 'edit'}
        onClose={confirmThen(confirmEdit)}
        title="部署名を変更"
        actions={[
          {
            label: '保存',
            value: true,
            intent: 'primary',
            disabled: name.trim() === '',
          },
        ]}
      >
        <FormField name="edit-department-name" label="部署名">
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </FormField>
      </Dialog>
      <Dialog
        isOpen={dialog?.kind === 'move'}
        onClose={confirmThen(confirmMove)}
        title="部署を移動"
        actions={[
          { label: '移動', value: true, intent: 'primary', disabled: !target },
        ]}
      >
        {item && (
          <div className="gap-md flex flex-col">
            <p className="text-md text-body-secondary">
              {item.name} の移動先を選択してください。
            </p>
            <Select
              options={moveOptions}
              value={target}
              onValueChange={setTarget}
              placeholder="移動先"
            />
          </div>
        )}
      </Dialog>
      <Dialog
        isOpen={dialog?.kind === 'delete'}
        onClose={confirmThen(confirmDelete)}
        title="部署を削除"
        actions={[
          {
            label: '削除',
            value: true,
            intent: 'primary',
            danger: true,
            disabled: children.length > 0 && deleteMode === 'move' && !target,
          },
        ]}
      >
        {item && (
          <div className="gap-md flex flex-col">
            {children.length === 0 ? (
              <p className="text-md text-body-primary">
                {item.name} を削除しますか？
              </p>
            ) : (
              <>
                <p className="text-md text-body-primary">
                  {item.name} には下位部署が {children.length} 件あります。
                </p>
                <RadioButtonGroup
                  value={deleteMode}
                  onValueChange={(value) => setDeleteMode(value as DeleteMode)}
                  className="gap-md flex flex-col"
                >
                  <RadioButton
                    value="cascade"
                    label="下位部署もすべて削除する"
                  />
                  <RadioButton
                    value="move"
                    label="下位部署を別の部署へ移動する"
                  />
                </RadioButtonGroup>
                {deleteMode === 'move' && (
                  <Select
                    options={childTargetOptions}
                    value={target}
                    onValueChange={setTarget}
                    placeholder="移動先"
                  />
                )}
              </>
            )}
          </div>
        )}
      </Dialog>
      <Dialog
        isOpen={dialog?.kind === 'save'}
        onClose={confirmThen(confirmSave)}
        title={`この内容で保存しますか？（${changes.length}件）`}
        actions={[{ label: '保存する', value: true, intent: 'primary' }]}
      >
        <div className="gap-lg flex flex-col">
          <ChangeSummary changes={changes} items={live} />
          <Callout
            intent="info"
            description="保存すると、ここまでの変更がすべて同時に反映されます。"
          />
        </div>
      </Dialog>
      <Dialog
        isOpen={dialog?.kind === 'reset'}
        onClose={confirmThen(confirmReset)}
        title="変更をリセットしますか？"
        actions={[
          {
            label: 'リセットする',
            value: true,
            intent: 'primary',
            danger: true,
          },
        ]}
      >
        <div className="gap-lg flex flex-col">
          <p className="text-md text-body-primary">
            部署一覧を最後に保存した状態に戻します。
          </p>
          <Callout
            intent="warning"
            description={`リセットすると、保存していない ${changes.length} 件の変更がすべて失われます。`}
          />
        </div>
      </Dialog>
    </div>
  );
};

export const WithActions: Story = {
  render: () => <WithActionsExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Hover a row to reveal the optional add, edit, move and delete actions, each a button showing its icon and `label`. Every action is optional. The button above the list opens a dialog to add a department at the top level or under any department picked from a list, the row action opens the same dialog asking only for the name of the department created under that row, edit opens a dialog to rename it, and move opens a dialog listing the top level and every other department by path, leaving out the department itself, its descendants and its current parent. Delete asks for confirmation; when the department has children it also asks whether to delete them as well or move them to a department picked from the same list. Deleting only marks the department through `isDeleted`: it stays in the list looking disabled, its action bar shows the `restore` action alone, and it is removed once the changes are saved. The list is also `sortable`, with `applyTreeListMove` keeping `parent_id` and `display_order` of the flat list in step after a drop. Nothing is saved until the primary save button is pressed: it stays disabled while the list matches the last saved state, and opens a confirmation listing every pending addition, move, deletion and rename grouped by type before applying them all at once. A secondary reset button appears next to it as soon as there are unsaved changes and, after a confirmation warning that they will be lost, restores the last saved version.',
      },
    },
  },
};
