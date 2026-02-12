import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconSearch, IconUser } from '@tabler/icons-react';

import { TextField } from './index';

const meta: Meta<typeof TextField.AutoSuggest> = {
  title: 'Components/TextField/AutoSuggest',
  component: TextField.AutoSuggest,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TextField.AutoSuggest>;

// Component wrappers for stories

const BasicStaticComponent = () => {
  const [value, setValue] = useState('');

  return (
    <div className="w-80">
      <TextField.AutoSuggest
        value={value}
        onChange={setValue}
        suggestions={[
          'React',
          'Vue',
          'Angular',
          'Svelte',
          'Solid',
          'Preact',
          'Ember',
          'Backbone',
        ]}
        placeholder="Search frameworks..."
      />
    </div>
  );
};

const WithAsyncComponent = () => {
  const [value, setValue] = useState('');

  const fetchSuggestions = async (query: string) => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    const allItems = [
      'Alice Johnson',
      'Bob Smith',
      'Charlie Brown',
      'David Wilson',
      'Emma Davis',
      'Frank Miller',
      'Grace Lee',
      'Henry Taylor',
    ];

    return allItems.filter((name) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="w-80">
      <TextField.AutoSuggest
        value={value}
        onChange={setValue}
        onSearch={fetchSuggestions}
        placeholder="Search users..."
        loadingText="Searching..."
      />
      <p className="text-body-secondary mt-2 text-sm">
        Try typing: alice, bob, or charlie
      </p>
    </div>
  );
};

const CustomRenderingComponent = () => {
  const [value, setValue] = useState('');

  const users = [
    { value: 'alice', label: 'Alice Johnson', email: 'alice@example.com' },
    { value: 'bob', label: 'Bob Smith', email: 'bob@example.com' },
    {
      value: 'charlie',
      label: 'Charlie Brown',
      email: 'charlie@example.com',
    },
    { value: 'david', label: 'David Wilson', email: 'david@example.com' },
  ];

  return (
    <div className="w-96">
      <TextField.AutoSuggest
        value={value}
        onChange={setValue}
        suggestions={users}
        placeholder="Search users..."
        renderSuggestion={(item) => {
          const user = item as {
            value: string;
            label: string;
            email: string;
          };
          return (
            <div className="gap-xs flex items-center">
              <IconUser className="text-body-secondary h-4 w-4" />
              <div className="flex flex-col">
                <span className="text-body-primary text-sm">{user.label}</span>
                <span className="text-body-secondary text-xs">
                  {user.email}
                </span>
              </div>
            </div>
          );
        }}
        getSuggestionValue={(item) => {
          const user = item as { label: string };
          return user.label;
        }}
      />
    </div>
  );
};

const LongItemsComponent = () => {
  const [value, setValue] = useState('');

  const longItems = [
    'This is a very long suggestion item that demonstrates how the component handles text wrapping when items exceed the container width',
    'Another extremely long item with a lot of text to show that the dropdown will wrap content instead of expanding horizontally beyond reasonable limits',
    'Short item',
    'Medium length item text',
    'Supercalifragilisticexpialidocious - a very long word that tests word breaking behavior',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  ];

  return (
    <div className="w-80">
      <TextField.AutoSuggest
        value={value}
        onChange={setValue}
        suggestions={longItems}
        placeholder="Search to see long items..."
      />
      <p className="text-body-secondary mt-2 text-sm">
        Focus or type to see how long items wrap properly
      </p>
    </div>
  );
};

const CompleteExampleComponent = () => {
  const [value, setValue] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const countries = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
    { value: 'fr', label: 'France' },
    { value: 'jp', label: 'Japan' },
    { value: 'cn', label: 'China' },
    { value: 'in', label: 'India' },
    { value: 'br', label: 'Brazil' },
  ];

  return (
    <div className="w-96 space-y-4">
      <TextField.AutoSuggest
        value={value}
        onChange={setValue}
        suggestions={countries}
        placeholder="Search countries..."
        onSelect={(item) => {
          const country = item as { value: string; label: string };
          setSelectedItem(country.label);
        }}
        prefixIcon={IconSearch}
      />

      {selectedItem && (
        <div className="bg-surface-secondary rounded-md p-4">
          <p className="text-body-primary text-sm">
            <strong>Selected:</strong> {selectedItem}
          </p>
        </div>
      )}

      <div className="text-body-secondary space-y-1 text-sm">
        <p>Features demonstrated:</p>
        <ul className="pl-5 list-disc">
          <li>Focus to see all options</li>
          <li>Type to filter</li>
          <li>Arrow keys to navigate</li>
          <li>Enter or click to select</li>
          <li>Escape to close</li>
        </ul>
      </div>
    </div>
  );
};

// Story exports

/**
 * Basic usage with static string array suggestions. Focuses input to see all suggestions,
 * type to filter, use arrow keys to navigate, and press Enter or click to select.
 */
export const Basic: Story = {
  render: () => <BasicStaticComponent />,
};

/**
 * Async suggestions with loading state. Demonstrates debounced API calls with a loading
 * spinner while fetching results.
 */
export const Async: Story = {
  render: () => <WithAsyncComponent />,
};

/**
 * Custom rendering with icons and multi-line content. Shows how to render complex
 * suggestion items with custom layouts.
 */
export const CustomRendering: Story = {
  render: () => <CustomRenderingComponent />,
};

/**
 * Demonstrates proper handling of long text items with automatic line wrapping.
 * Items wrap to multiple lines instead of expanding the container horizontally.
 * Max-width is set to 600px to prevent overly wide dropdowns.
 */
export const LongItems: Story = {
  render: () => <LongItemsComponent />,
};

/**
 * Complete interactive example with all features including object suggestions,
 * prefix icon, selection callback, and keyboard navigation.
 */
export const Interactive: Story = {
  render: () => <CompleteExampleComponent />,
};
