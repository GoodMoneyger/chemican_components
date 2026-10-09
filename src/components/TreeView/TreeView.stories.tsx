import { useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  IconDotsVertical,
  IconPencil,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react';

import { Button } from '../Button';
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
  const [selected, setSelected] = useState<TreeNode[]>([]);

  return (
    <div className="gap-md flex flex-col">
      <TreeView
        aria-label="ドキュメント"
        selectable
        selected={selected}
        onSelectedChange={(values) => setSelected(values as TreeNode[])}
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
        onSelectedChange={(values) => setSelected(values as string[])}
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

type SortableMoveEvent = TreeViewMoveEvent<never, SortableNode>;

const describeMove = (event: SortableMoveEvent) => {
  const parent = event.to.parentValue;
  return `${event.value?.name} を ${parent ? parent.name : 'トップレベル'} の ${event.to.index + 1} 番目へ`;
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
        onMove={(event: SortableMoveEvent) => {
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
        onMove={(event: SortableMoveEvent) => {
          const parent = event.to.parentValue;
          if (parent?.id === READ_ONLY_FOLDER) {
            setMessage(
              `${event.value?.name} は ${parent.name} の下へ移動できません。`
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

/** Appends under the target, turning a file into a folder when needed. */
const appendChild = (
  nodes: TreeNode[],
  targetId: string,
  child: TreeNode
): TreeNode[] =>
  nodes.map((node) => {
    if (node.id === targetId) {
      const existing = isFolder(node) ? node.children : [];
      return { ...node, children: [...existing, child] };
    }
    return isFolder(node)
      ? { ...node, children: appendChild(node.children, targetId, child) }
      : node;
  });

const AllFeaturesExample = () => {
  const nextIdRef = useRef(1);
  const [nodes, setNodes] = useState<TreeNode[]>(documents);
  const [selected, setSelected] = useState<TreeNode[]>([]);

  const add = (parent: TreeNode) => {
    const id = nextIdRef.current++;
    const child: FileNode = { id: `new-${id}`, name: `新しい項目${id}` };
    setNodes((current) => appendChild(current, parent.id, child));
  };

  const remove = (ids: string[]) => {
    setNodes((current) => removeNodes(current, ids));
    setSelected((current) => current.filter((node) => !ids.includes(node.id)));
  };

  const renderRowOverlay = (node: TreeNode) => (
    <TreeView.RootOverlay>
      <Button
        type="button"
        intent="tertiary"
        size="xs"
        icon={IconPlus}
        aria-label={`${node.name}に追加`}
        onClick={() => add(node)}
      />
      <Button
        type="button"
        intent="tertiary"
        size="xs"
        icon={IconTrash}
        aria-label={`${node.name}を削除`}
        onClick={() => remove([node.id])}
      />
    </TreeView.RootOverlay>
  );

  return (
    <div className="gap-md flex flex-col">
      <div>
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
      <TreeView
        aria-label="ドキュメント"
        selectable
        sortable
        selected={selected}
        onSelectedChange={(values) => setSelected(values as TreeNode[])}
        onMove={(event) =>
          setNodes((current) =>
            applyTreeViewMove(current, event, documentAccessors)
          )
        }
      >
        {renderNodes(nodes, { renderRowOverlay })}
      </TreeView>
      <p className="text-md text-body-secondary">
        選択中: {selected.map((node) => node.name).join('、') || 'なし'}
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
          'Selection, sorting and row overlays together on folders and files. A folder checkbox selects every file inside it, or the folder itself once it holds no files, and any row can be dragged by its grip. Each row overlay adds a file under that row, turning a file into a folder, or deletes the row; the button above deletes every selected row at once. Selection is keyed by id, so a selected file stays selected after it moves.',
      },
    },
  },
};
