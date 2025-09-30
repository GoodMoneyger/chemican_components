import React, { useState } from 'react';
import type { Meta, StoryFn } from 'storybook/react-vite';

import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
    },
    totalPages: {
      control: { type: 'number', min: 1 },
    },
    totalItems: {
      control: { type: 'number', min: 0 },
    },
    rowsPerPage: {
      control: { type: 'select' },
      options: [10, 25, 50, 100],
    },
    rowsPerPageOptions: {
      control: { type: 'object' },
    },
    rowsPerPageLabel: {
      control: { type: 'text' },
    },
    pageSelectLabel: {
      control: { type: 'text' },
    },
    showNavigation: {
      control: { type: 'boolean' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/f46iSbgpNKClOOIDRfG7AB/Master-v2.0-SDS%E7%AE%A1%E7%90%86%EF%BC%88JP_Products%EF%BC%89?node-id=6129-803&m=dev',
    },
  },
};

export default meta;

// Template with state management for interactive stories
const InteractiveTemplate: StoryFn<typeof Pagination> = (args) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);
  const [rowsPerPage, setRowsPerPage] = useState(args.rowsPerPage);

  // Recalculate total pages when rows per page changes
  const totalPages = Math.ceil(args.totalItems / rowsPerPage);

  return (
    <Pagination
      {...args}
      currentPage={Math.min(currentPage, totalPages)} // Ensure current page doesn't exceed total
      totalPages={totalPages}
      rowsPerPage={rowsPerPage}
      onPageChange={setCurrentPage}
      onRowsPerPageChange={(newRowsPerPage) => {
        setRowsPerPage(newRowsPerPage);
        setCurrentPage(1); // Reset to first page
      }}
    />
  );
};

// Static template for controlled stories
const StaticTemplate: StoryFn<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Default = InteractiveTemplate.bind({});
Default.args = {
  currentPage: 1,
  totalItems: 484,
  rowsPerPage: 50,
  rowsPerPageOptions: [10, 25, 50, 100],
  rowsPerPageLabel: '表示行数',
  pageSelectLabel: 'ページ選択',
  showNavigation: true,
  onPageChange: () => {},
  onRowsPerPageChange: () => {},
};

export const FirstPage = InteractiveTemplate.bind({});
FirstPage.args = {
  currentPage: 1,
  totalItems: 484,
  rowsPerPage: 50,
  rowsPerPageOptions: [10, 25, 50, 100],
  rowsPerPageLabel: '表示行数',
  pageSelectLabel: 'ページ選択',
  showNavigation: true,
  onPageChange: () => {},
  onRowsPerPageChange: () => {},
};

export const MiddlePage = InteractiveTemplate.bind({});
MiddlePage.args = {
  currentPage: 5,
  totalItems: 484,
  rowsPerPage: 50,
  rowsPerPageOptions: [10, 25, 50, 100],
  rowsPerPageLabel: '表示行数',
  pageSelectLabel: 'ページ選択',
  showNavigation: true,
  onPageChange: () => {},
  onRowsPerPageChange: () => {},
};

export const LastPage = InteractiveTemplate.bind({});
LastPage.args = {
  currentPage: 10,
  totalItems: 484,
  rowsPerPage: 50,
  rowsPerPageOptions: [10, 25, 50, 100],
  rowsPerPageLabel: '表示行数',
  pageSelectLabel: 'ページ選択',
  showNavigation: true,
  onPageChange: () => {},
  onRowsPerPageChange: () => {},
};

export const SmallDataset = InteractiveTemplate.bind({});
SmallDataset.args = {
  currentPage: 1,
  totalItems: 15,
  rowsPerPage: 10,
  rowsPerPageOptions: [5, 10, 25, 50],
  rowsPerPageLabel: '表示行数',
  pageSelectLabel: 'ページ選択',
  showNavigation: true,
  onPageChange: () => {},
  onRowsPerPageChange: () => {},
};

export const SinglePage = StaticTemplate.bind({});
SinglePage.args = {
  currentPage: 1,
  totalPages: 1,
  totalItems: 5,
  rowsPerPage: 10,
  rowsPerPageOptions: [5, 10, 25, 50],
  rowsPerPageLabel: '表示行数',
  pageSelectLabel: 'ページ選択',
  showNavigation: true,
  onPageChange: () => {},
  onRowsPerPageChange: () => {},
};

export const WithoutNavigation = InteractiveTemplate.bind({});
WithoutNavigation.args = {
  currentPage: 3,
  totalItems: 484,
  rowsPerPage: 50,
  rowsPerPageOptions: [10, 25, 50, 100],
  rowsPerPageLabel: '表示行数',
  pageSelectLabel: 'ページ選択',
  showNavigation: false,
  onPageChange: () => {},
  onRowsPerPageChange: () => {},
};

export const EnglishLabels = InteractiveTemplate.bind({});
EnglishLabels.args = {
  currentPage: 1,
  totalItems: 484,
  rowsPerPage: 50,
  rowsPerPageOptions: [10, 25, 50, 100],
  rowsPerPageLabel: 'Rows per page',
  pageSelectLabel: 'Page selection',
  showNavigation: true,
  onPageChange: () => {},
  onRowsPerPageChange: () => {},
};
