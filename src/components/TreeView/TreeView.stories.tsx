import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  IconDotsVertical,
  IconFolderSymlink,
  IconPencil,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react';

import { Button } from '../Button';
import { Dialog } from '../Dialog';
import { FormField } from '../FormField';
import { RadioButton, RadioButtonGroup } from '../RadioButton';
import { TextField } from '../TextField';
import { Select } from '../Select';
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from '../DropdownMenu';

import { TreeView, applyTreeViewMove } from './TreeView';
import type {
  TreeViewHandle,
  TreeViewMoveAccessors,
  TreeViewMoveEvent,
} from './TreeView';

const meta: Meta<typeof TreeView> = {
  title: 'Components/TreeView',
  component: TreeView,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof meta>;

interface FileNode {
  id: string;
  name: string;
}

interface FolderNode {
  id: string;
  name: string;
  children: TreeNode[];
}

type TreeNode = FolderNode | FileNode;

const isFolder = (node: TreeNode): node is FolderNode => 'children' in node;

const documents: TreeNode[] = [
  {
    id: 'products',
    name: '製品',
    children: [
      {
        id: 'sds',
        name: '安全データシート',
        children: [
          {
            id: 'sds-2024',
            name: '2024年度',
            children: [
              { id: 'sds-2024-q1', name: '第1四半期.pdf' },
              { id: 'sds-2024-q2', name: '第2四半期.pdf' },
            ],
          },
          { id: 'sds-2023', name: '2023年度.pdf' },
        ],
      },
      { id: 'catalog', name: 'カタログ.pdf' },
    ],
  },
  {
    id: 'regulations',
    name: '法規制',
    children: [
      { id: 'reach', name: 'REACH規則.pdf' },
      { id: 'ghs', name: 'GHS分類.pdf' },
    ],
  },
  { id: 'readme', name: 'README.md' },
];

interface RenderOptions {
  disabledIds?: string[];
  defaultOpenIds?: string[];
  renderRowOverlay?: (node: TreeNode) => React.ReactNode;
}

const renderNodes = (
  nodes: TreeNode[],
  options: RenderOptions = {}
): React.ReactNode =>
  nodes.map((node) => {
    const disabled = options.disabledIds?.includes(node.id) ?? false;
    const overlayProps = options.renderRowOverlay
      ? { renderRowOverlay: options.renderRowOverlay }
      : {};

    if (isFolder(node)) {
      const defaultOpen = options.defaultOpenIds?.includes(node.id);
      return (
        <TreeView.Root
          key={node.id}
          value={node}
          label={node.name}
          disabled={disabled}
          {...(defaultOpen !== undefined && { defaultOpen })}
          {...overlayProps}
        >
          {renderNodes(node.children, options)}
        </TreeView.Root>
      );
    }

    return (
      <TreeView.Item
        key={node.id}
        value={node}
        disabled={disabled}
        {...overlayProps}
      >
        {node.name}
      </TreeView.Item>
    );
  });

export const Default: Story = {
  render: () => (
    <TreeView aria-label="ドキュメント">{renderNodes(documents)}</TreeView>
  ),
};

export const AllCollapsed: Story = {
  render: () => (
    <TreeView aria-label="ドキュメント" allCollapsed>
      {renderNodes(documents)}
    </TreeView>
  ),
};

const CollapseExpandFromOutsideExample = () => {
  const treeRef = useRef<TreeViewHandle>(null);

  return (
    <div className="gap-md flex flex-col">
      <div className="gap-xs flex">
        <Button
          type="button"
          intent="tertiary"
          size="sm"
          onClick={() => treeRef.current?.collapseAll()}
        >
          すべて閉じる
        </Button>
        <Button
          type="button"
          intent="tertiary"
          size="sm"
          onClick={() => treeRef.current?.expandAll()}
        >
          すべて開く
        </Button>
      </div>
      <TreeView ref={treeRef} aria-label="ドキュメント" allCollapsed>
        {renderNodes(documents, { defaultOpenIds: ['regulations'] })}
      </TreeView>
    </div>
  );
};

export const CollapseExpandFromOutside: Story = {
  render: () => <CollapseExpandFromOutsideExample />,
  parameters: {
    docs: {
      description: {
        story:
          'The tree starts with `allCollapsed`, except the "法規制" Root which sets `defaultOpen`. Both buttons call the ref handle, which overrides every per-node state.',
      },
    },
  },
};

const WithOverlayExample = () => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const renderRowOverlay = (node: TreeNode) => (
    <TreeView.RootOverlay forceVisible={openMenuId === node.id}>
      <Button
        type="button"
        intent="tertiary"
        size="xs"
        icon={IconPencil}
        aria-label={`${node.name}を編集`}
      />
      <Dropdown
        open={openMenuId === node.id}
        onOpenChange={(open) => setOpenMenuId(open ? node.id : null)}
      >
        <DropdownTrigger asChild>
          <Button
            type="button"
            intent="tertiary"
            size="xs"
            icon={IconDotsVertical}
            aria-label={`${node.name}のその他の操作`}
          />
        </DropdownTrigger>
        <DropdownContent align="end">
          <DropdownItem intent="danger" icon={IconTrash}>
            削除
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </TreeView.RootOverlay>
  );

  return (
    <TreeView aria-label="ドキュメント">
      {renderNodes(documents, { renderRowOverlay })}
    </TreeView>
  );
};

export const WithOverlay: Story = {
  render: () => <WithOverlayExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Hover a row, or tab into it, to reveal the overlay. The callback returns `TreeView.RootOverlay` explicitly so `forceVisible` can keep it visible while the dropdown is open, since a modal dropdown removes the hover state from the row.',
      },
    },
  },
};

const WithSelectionExample = () => {
  const [selected, setSelected] = useState<FileNode[]>([]);

  return (
    <div className="gap-md flex flex-col">
      <TreeView
        aria-label="ドキュメント"
        selectable
        selected={selected}
        onSelectedChange={setSelected}
        getItemValue={(node) => node.id}
      >
        {renderNodes(documents, { disabledIds: ['ghs', 'sds-2024'] })}
      </TreeView>
      <p className="text-md text-body-secondary">
        選択中: {selected.map((node) => node.name).join('、') || 'なし'}
      </p>
    </div>
  );
};

export const WithSelection: Story = {
  render: () => <WithSelectionExample />,
  parameters: {
    docs: {
      description: {
        story:
          'A Root checkbox selects or clears every enabled Item below it and shows an indeterminate state when only some are selected. Only Items are reported through `onSelectedChange`. "GHS分類.pdf" is a disabled Item and "2024年度" is a disabled Root, so their Items are never selected by a parent.',
      },
    },
  },
};

const WithStringItemsExample = () => {
  const [selected, setSelected] = useState<string[]>(['りんご']);

  return (
    <div className="gap-md flex flex-col">
      <TreeView
        aria-label="食材"
        selectable
        selected={selected}
        onSelectedChange={setSelected}
      >
        <TreeView.Root label="果物">
          <TreeView.Item value="りんご">りんご</TreeView.Item>
          <TreeView.Item value="みかん">みかん</TreeView.Item>
          <TreeView.Item value="ぶどう">ぶどう</TreeView.Item>
        </TreeView.Root>
        <TreeView.Root label="野菜">
          <TreeView.Item value="にんじん">にんじん</TreeView.Item>
          <TreeView.Item value="たまねぎ">たまねぎ</TreeView.Item>
        </TreeView.Root>
      </TreeView>
      <p className="text-md text-body-secondary">
        選択中: {selected.join('、') || 'なし'}
      </p>
    </div>
  );
};

export const WithStringItems: Story = {
  render: () => <WithStringItemsExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Item values can be plain strings, in which case `getItemValue` is not needed. Roots without a `value` still get a cascading checkbox.',
      },
    },
  },
};

interface SortableNode {
  id: string;
  name: string;
  children: SortableNode[];
}

const toSortableNode = (node: TreeNode): SortableNode => ({
  id: node.id,
  name: node.name,
  children: isFolder(node) ? node.children.map(toSortableNode) : [],
});

const sortableAccessors: TreeViewMoveAccessors<SortableNode> = {
  getKey: (node) => node.id,
  getChildren: (node) => node.children,
  withChildren: (node, children) => ({ ...node, children }),
};

const renderSortableNodes = (nodes: SortableNode[]): React.ReactNode =>
  nodes.map((node) => (
    <TreeView.Root key={node.id} value={node} label={node.name}>
      {renderSortableNodes(node.children)}
    </TreeView.Root>
  ));

const describeMove = (event: TreeViewMoveEvent) => {
  const parent = event.to.parentValue as { name: string } | undefined;
  return `${(event.value as { name: string }).name} を ${parent ? parent.name : 'トップレベル'} の ${event.to.index + 1} 番目へ`;
};

const SortableExample = () => {
  const [nodes, setNodes] = useState<SortableNode[]>(() => [
    ...documents.map(toSortableNode),
    { id: 'archive', name: 'アーカイブ', children: [] },
  ]);
  const [lastMove, setLastMove] = useState<string | null>(null);

  return (
    <div className="gap-md flex flex-col">
      <TreeView
        aria-label="ドキュメント"
        sortable
        onMove={(event) => {
          setNodes((current) =>
            applyTreeViewMove(current, event, sortableAccessors)
          );
          setLastMove(describeMove(event));
        }}
      >
        {renderSortableNodes(nodes)}
      </TreeView>
      <p className="text-md text-body-secondary">
        最後の移動: {lastMove ?? 'なし'}
      </p>
    </div>
  );
};

export const Sortable: Story = {
  render: () => <SortableExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Every node here is a `TreeView.Root`, so any node can receive children. Drag a row by the grip that appears at its left edge on hover. The dashed slot always sits where the node will land: the top half of a row places it before that row, the bottom half of an open group makes it the first child, the middle of a node without children nests it inside, and the bottom half of any other row places it after. Keep the pointer over a collapsed group to open it. A dragged group collapses while it moves and can never be dropped into itself. `onMove` fires once per drop and `applyTreeViewMove` applies it to nested data. Use `TreeView.Item` for nodes that must stay leaves.',
      },
    },
  },
};

const READ_ONLY_FOLDER = 'regulations';

const SortableWithValidationExample = () => {
  const [nodes, setNodes] = useState<SortableNode[]>(() =>
    documents.map(toSortableNode)
  );
  const [message, setMessage] = useState<string | null>(null);

  return (
    <div className="gap-md flex flex-col">
      <TreeView
        aria-label="ドキュメント"
        sortable
        onMove={(event) => {
          const parent = event.to.parentValue as SortableNode | undefined;
          if (parent?.id === READ_ONLY_FOLDER) {
            setMessage(
              `${(event.value as SortableNode).name} は ${parent.name} の下へ移動できません。`
            );
            return;
          }
          setNodes((current) =>
            applyTreeViewMove(current, event, sortableAccessors)
          );
          setMessage(describeMove(event));
        }}
      >
        {renderSortableNodes(nodes)}
      </TreeView>
      <p className="text-md text-body-secondary">{message ?? 'なし'}</p>
    </div>
  );
};

export const SortableWithValidation: Story = {
  render: () => <SortableWithValidationExample />,
  parameters: {
    docs: {
      description: {
        story:
          '`onMove` decides whether a drop is applied. Drops under 法規制 are rejected here, so the row snaps back to where it came from because the data did not change; every other drop is applied as usual. Update the data synchronously inside `onMove` for the row to settle in its new place.',
      },
    },
  },
};

const documentAccessors: TreeViewMoveAccessors<TreeNode> = {
  getKey: (node) => node.id,
  getChildren: (node) => (isFolder(node) ? node.children : undefined),
  withChildren: (node, children) => ({ ...node, children }),
};

const removeNodes = (nodes: TreeNode[], ids: string[]): TreeNode[] =>
  nodes
    .filter((node) => !ids.includes(node.id))
    .map((node) =>
      isFolder(node)
        ? { ...node, children: removeNodes(node.children, ids) }
        : node
    );

/**
 * Nodes the selection can be moved under: any node, file or folder, except the
 * selected nodes, anything inside them, and the parent they already sit in.
 */
const moveTargets = (
  nodes: TreeNode[],
  movingIds: string[],
  excludedId: string | null,
  path: string[] = []
): { value: string; label: string }[] =>
  nodes.flatMap((node) => {
    if (movingIds.includes(node.id)) return [];
    const label = [...path, node.name].join(' / ');
    return [
      ...(node.id === excludedId ? [] : [{ value: node.id, label }]),
      ...(isFolder(node)
        ? moveTargets(node.children, movingIds, excludedId, [
            ...path,
            node.name,
          ])
        : []),
    ];
  });

const parentIdOf = (
  nodes: TreeNode[],
  id: string,
  parent: string | null = null
): string | null | undefined => {
  for (const node of nodes) {
    if (node.id === id) return parent;
    if (isFolder(node)) {
      const found = parentIdOf(node.children, id, node.id);
      if (found !== undefined) return found;
    }
  }
  return undefined;
};

/** The parent shared by every selected node, or null when they differ or sit at the top. */
const sharedParentId = (nodes: TreeNode[], ids: string[]): string | null => {
  const parents = ids.map((id) => parentIdOf(nodes, id) ?? null);
  const first = parents[0] ?? null;
  return parents.every((parent) => parent === first) ? first : null;
};

/** Nodes with the given ids in document order, without descending into a collected node. */
const collectNodes = (nodes: TreeNode[], ids: string[]): TreeNode[] =>
  nodes.flatMap((node) =>
    ids.includes(node.id)
      ? [node]
      : isFolder(node)
        ? collectNodes(node.children, ids)
        : []
  );

/** Appends under the target, turning a file into a folder when needed. */
const appendChildren = (
  nodes: TreeNode[],
  targetId: string,
  children: TreeNode[]
): TreeNode[] =>
  nodes.map((node) => {
    if (node.id === targetId) {
      const existing = isFolder(node) ? node.children : [];
      return { ...node, children: [...existing, ...children] };
    }
    if (!isFolder(node)) return node;
    return {
      ...node,
      children: appendChildren(node.children, targetId, children),
    };
  });

const renameNode = (nodes: TreeNode[], id: string, name: string): TreeNode[] =>
  nodes.map((node) => {
    const renamed = node.id === id ? { ...node, name } : node;
    return isFolder(renamed)
      ? { ...renamed, children: renameNode(renamed.children, id, name) }
      : renamed;
  });

/** Select value standing for the top level of the tree. */
const TOP_LEVEL = '__top__';

const moveNodesUnder = (nodes: TreeNode[], ids: string[], targetId: string) => {
  const moving = collectNodes(nodes, ids);
  const rest = removeNodes(nodes, ids);
  return targetId === TOP_LEVEL
    ? [...rest, ...moving]
    : appendChildren(rest, targetId, moving);
};

const AllFeaturesExample = () => {
  const treeRef = useRef<TreeViewHandle>(null);
  const [moving, setMoving] = useState<TreeNode[]>([]);
  const [moveTarget, setMoveTarget] = useState<string | undefined>(undefined);
  const [addOpen, setAddOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [addMode, setAddMode] = useState<'root' | 'child'>('root');
  const [addParent, setAddParent] = useState<string | undefined>(undefined);
  const nextIdRef = useRef(1);
  const [addUnder, setAddUnder] = useState<TreeNode | null>(null);
  const [editing, setEditing] = useState<TreeNode | null>(null);
  const [editName, setEditName] = useState('');
  const [nodes, setNodes] = useState<TreeNode[]>(documents);
  const [selected, setSelected] = useState<TreeNode[]>([]);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [lastMove, setLastMove] = useState<string | null>(null);

  const remove = (ids: string[]) => {
    setNodes((current) => removeNodes(current, ids));
    setSelected((current) => current.filter((node) => !ids.includes(node.id)));
  };

  const movingIds = moving.map((node) => node.id);
  const atTopLevel =
    movingIds.length > 0 &&
    movingIds.every((id) => parentIdOf(nodes, id) === null);
  const targets = [
    ...(atTopLevel ? [] : [{ value: TOP_LEVEL, label: 'トップレベル' }]),
    ...moveTargets(nodes, movingIds, sharedParentId(nodes, movingIds)),
  ];

  const closeMoveDialog = (value?: unknown) => {
    if (value === true && moveTarget) {
      const target = moveTarget;
      const ids = movingIds;
      setNodes((current) => moveNodesUnder(current, ids, target));
    }
    setMoving([]);
    setMoveTarget(undefined);
  };

  const addTargets = moveTargets(nodes, [], null);

  const openAddUnder = (node: TreeNode) => {
    setAddUnder(node);
    setAddOpen(true);
  };

  const openEdit = (node: TreeNode) => {
    setEditing(node);
    setEditName(node.name);
  };

  const closeEditDialog = (value?: unknown) => {
    const name = editName.trim();
    if (value === true && editing && name) {
      const id = editing.id;
      setNodes((current) => renameNode(current, id, name));
      setSelected((current) =>
        current.map((node) => (node.id === id ? { ...node, name } : node))
      );
    }
    setEditing(null);
    setEditName('');
  };

  const closeAddDialog = (value?: unknown) => {
    const name = newName.trim();
    const parent = addUnder
      ? addUnder.id
      : addMode === 'child'
        ? addParent
        : null;
    if (
      value === true &&
      name &&
      (parent || (!addUnder && addMode === 'root'))
    ) {
      const node: FileNode = { id: `new-${nextIdRef.current++}`, name };
      setNodes((current) =>
        parent ? appendChildren(current, parent, [node]) : [...current, node]
      );
    }
    setAddOpen(false);
    setAddUnder(null);
    setNewName('');
    setAddMode('root');
    setAddParent(undefined);
  };

  const renderRowOverlay = (node: TreeNode) => (
    <TreeView.RootOverlay forceVisible={openMenuId === node.id}>
      <Button
        type="button"
        intent="tertiary"
        size="xs"
        icon={IconPlus}
        aria-label={`${node.name}に追加`}
        onClick={() => openAddUnder(node)}
      />
      <Button
        type="button"
        intent="tertiary"
        size="xs"
        icon={IconPencil}
        aria-label={`${node.name}を編集`}
        onClick={() => openEdit(node)}
      />
      <Dropdown
        open={openMenuId === node.id}
        onOpenChange={(open) => setOpenMenuId(open ? node.id : null)}
      >
        <DropdownTrigger asChild>
          <Button
            type="button"
            intent="tertiary"
            size="xs"
            icon={IconDotsVertical}
            aria-label={`${node.name}のその他の操作`}
          />
        </DropdownTrigger>
        <DropdownContent align="end">
          <DropdownItem
            icon={IconFolderSymlink}
            onSelect={() => setMoving([node])}
          >
            移動
          </DropdownItem>
          <DropdownItem
            intent="danger"
            icon={IconTrash}
            onSelect={() => remove([node.id])}
          >
            削除
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </TreeView.RootOverlay>
  );

  return (
    <div className="gap-md flex flex-col">
      <div className="gap-xs flex flex-wrap items-center">
        <Button
          type="button"
          intent="tertiary"
          size="sm"
          onClick={() => treeRef.current?.collapseAll()}
        >
          すべて閉じる
        </Button>
        <Button
          type="button"
          intent="tertiary"
          size="sm"
          onClick={() => treeRef.current?.expandAll()}
        >
          すべて開く
        </Button>
        <Button
          type="button"
          intent="secondary"
          size="sm"
          icon={IconPlus}
          onClick={() => setAddOpen(true)}
        >
          追加
        </Button>
        <Button
          type="button"
          intent="secondary"
          size="sm"
          icon={IconFolderSymlink}
          disabled={selected.length === 0}
          onClick={() => setMoving(selected)}
        >
          選択した{selected.length}件を移動
        </Button>
        <Button
          type="button"
          intent="secondary"
          size="sm"
          icon={IconTrash}
          danger
          disabled={selected.length === 0}
          onClick={() => remove(selected.map((node) => node.id))}
        >
          選択した{selected.length}件を削除
        </Button>
      </div>
      <Dialog
        isOpen={addOpen}
        onClose={closeAddDialog}
        title="項目を追加"
        cancellable
        cancelButtonLabel="キャンセル"
        actions={[
          {
            label: '追加',
            value: true,
            intent: 'primary',
            disabled:
              newName.trim() === '' ||
              (!addUnder && addMode === 'child' && !addParent),
          },
        ]}
      >
        <div className="gap-md flex flex-col">
          <FormField name="new-item-name" label="名前">
            <TextField
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
              placeholder="新しい項目の名前"
            />
          </FormField>
          {addUnder ? (
            <p className="text-md text-body-secondary">
              {addUnder.name} の下に追加します。
            </p>
          ) : (
            <>
              <RadioButtonGroup
                value={addMode}
                onValueChange={(value) => setAddMode(value as 'root' | 'child')}
                className="gap-md flex flex-col"
              >
                <RadioButton value="root" label="トップレベルに追加" />
                <RadioButton value="child" label="サブフォルダに追加" />
              </RadioButtonGroup>
              {addMode === 'child' && (
                <Select
                  options={addTargets}
                  value={addParent}
                  onValueChange={setAddParent}
                  placeholder="追加先"
                />
              )}
            </>
          )}
        </div>
      </Dialog>
      <Dialog
        isOpen={editing !== null}
        onClose={closeEditDialog}
        title="名前を変更"
        cancellable
        cancelButtonLabel="キャンセル"
        actions={[
          {
            label: '保存',
            value: true,
            intent: 'primary',
            disabled: editName.trim() === '',
          },
        ]}
      >
        <FormField name="edit-item-name" label="名前">
          <TextField
            value={editName}
            onChange={(event) => setEditName(event.target.value)}
          />
        </FormField>
      </Dialog>
      <Dialog
        isOpen={moving.length > 0}
        onClose={closeMoveDialog}
        title="選択した項目を移動"
        cancellable
        cancelButtonLabel="キャンセル"
        actions={[
          {
            label: '移動',
            value: true,
            intent: 'primary',
            disabled: !moveTarget,
          },
        ]}
      >
        <div className="gap-md flex flex-col">
          <p className="text-md text-body-secondary">
            {moving.map((node) => node.name).join('、')}{' '}
            の移動先を選択してください。
          </p>
          <Select
            options={targets}
            value={moveTarget}
            onValueChange={setMoveTarget}
            placeholder="移動先"
          />
        </div>
      </Dialog>
      <TreeView
        ref={treeRef}
        aria-label="ドキュメント"
        selectable
        sortable
        selected={selected}
        onSelectedChange={setSelected}
        getItemValue={(node) => node.id}
        onMove={(event) => {
          setNodes((current) =>
            applyTreeViewMove(current, event, documentAccessors)
          );
          setLastMove(describeMove(event));
        }}
      >
        {renderNodes(nodes, { renderRowOverlay })}
      </TreeView>
      <p className="text-md text-body-secondary">
        選択中: {selected.map((node) => node.name).join('、') || 'なし'}
      </p>
      <p className="text-md text-body-secondary">
        最後の移動: {lastMove ?? 'なし'}
      </p>
    </div>
  );
};

export const AllFeatures: Story = {
  render: () => <AllFeaturesExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Selection, sorting, row overlays and collapse controls together on folders and files. Folders are `TreeView.Root` and files are `TreeView.Item`, so a folder checkbox selects every file inside it, or the folder itself once it holds no files, any row can be dragged by the grip that appears at its left edge on hover, and files can be dropped between the files of another folder or into an empty one but never inside another file. The overlay offers add, edit, move and delete actions per row, with move and delete in the row menu: add opens a dialog that only asks for a name and creates the item under that row, and edit opens a dialog to rename the row. The buttons above collapse or expand every folder, the add button opens a dialog to create an item at the top level or under any existing node, the move button opens a dialog to pick the top level or any node, file or folder, to put the selected nodes under (a file becomes a folder), leaving out the selection itself and the place it already sits in, and the delete button removes every selected file or empty folder at once. Selection is keyed by id, so a selected file stays selected after it moves.',
      },
    },
  },
};
