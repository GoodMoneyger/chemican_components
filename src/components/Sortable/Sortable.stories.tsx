import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  IconPencil,
  IconPin,
  IconPinFilled,
  IconTrash,
} from '@tabler/icons-react';

import { Button } from '../Button';

import { Sortable } from './Sortable';

const meta: Meta<typeof Sortable.Container> = {
  title: 'Components/Sortable',
  component: Sortable.Container,
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof meta>;

interface Task {
  id: string;
  label: string;
}

const VerticalList = () => {
  const [items, setItems] = useState<Task[]>([
    { id: 'draft', label: '下書き' },
    { id: 'review', label: 'レビュー' },
    { id: 'approve', label: '承認' },
    { id: 'publish', label: '公開' },
    { id: 'archive', label: 'アーカイブ' },
  ]);

  return (
    <Sortable.Container
      value={items}
      onValueChange={setItems}
      getItemValue={(item) => item.id}
    >
      {items.map((item) => (
        <Sortable.Item key={item.id} value={item.id}>
          {item.label}
        </Sortable.Item>
      ))}
    </Sortable.Container>
  );
};

export const Default: Story = { render: () => <VerticalList /> };

const DragOnlyList = () => {
  const [items, setItems] = useState<Task[]>([
    { id: 'draft', label: '下書き' },
    { id: 'review', label: 'レビュー' },
    { id: 'approve', label: '承認' },
  ]);

  return (
    <Sortable.Container
      value={items}
      onValueChange={setItems}
      getItemValue={(item) => item.id}
    >
      {items.map((item) => (
        <Sortable.Item key={item.id} value={item.id} showMoveButtons={false}>
          {item.label}
        </Sortable.Item>
      ))}
    </Sortable.Container>
  );
};

export const WithoutMoveButtons: Story = { render: () => <DragOnlyList /> };

const WithActionsList = () => {
  const [items, setItems] = useState<Task[]>([
    { id: 'draft', label: '下書き' },
    { id: 'review', label: 'レビュー' },
    { id: 'approve', label: '承認' },
  ]);

  const removeItem = (id: string) =>
    setItems((current) => current.filter((item) => item.id !== id));

  return (
    <Sortable.Container
      value={items}
      onValueChange={setItems}
      getItemValue={(item) => item.id}
    >
      {items.map((item) => (
        <Sortable.Item
          key={item.id}
          value={item.id}
          actions={
            <>
              <Button
                type="button"
                intent="text"
                size="icon"
                icon={IconPencil}
                aria-label="Edit"
              />
              <Button
                type="button"
                intent="text"
                size="icon"
                icon={IconTrash}
                aria-label="Delete"
                danger
                onClick={() => removeItem(item.id)}
              />
            </>
          }
        >
          {item.label}
        </Sortable.Item>
      ))}
    </Sortable.Container>
  );
};

export const WithActions: Story = { render: () => <WithActionsList /> };

interface PinnedTask extends Task {
  pinned?: boolean;
}

const PinnedList = () => {
  const [items, setItems] = useState<PinnedTask[]>([
    { id: 'draft', label: '下書き', pinned: true },
    { id: 'review', label: 'レビュー' },
    { id: 'approve', label: '承認', pinned: true },
    { id: 'publish', label: '公開' },
  ]);

  const togglePinned = (id: string) =>
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, pinned: !item.pinned } : item
      )
    );

  return (
    <Sortable.Container
      value={items}
      onValueChange={setItems}
      getItemValue={(item) => item.id}
    >
      {items.map((item) => (
        <Sortable.Item key={item.id} value={item.id}>
          <span className="gap-xxs flex items-center">
            {item.label}
            <Button
              type="button"
              intent="text"
              size="icon"
              icon={item.pinned ? IconPinFilled : IconPin}
              aria-label={item.pinned ? 'Unpin' : 'Pin'}
              aria-pressed={item.pinned ?? false}
              onClick={() => togglePinned(item.id)}
            />
          </span>
        </Sortable.Item>
      ))}
    </Sortable.Container>
  );
};

export const WithPinnedLabel: Story = { render: () => <PinnedList /> };
