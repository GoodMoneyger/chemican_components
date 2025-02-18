import React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from './Table';

const data = [
  { firstName: 'John', lastName: 'Doe', age: 28 },
  { firstName: 'Jane', lastName: 'Doe', age: 26 },
  { firstName: 'James', lastName: 'Smith', age: 32 },
  { firstName: 'Jill', lastName: 'Johnson', age: 34 },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
};

export default meta;

const Template: StoryFn = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>First Name</TableHead>
        <TableHead>Last Name</TableHead>
        <TableHead>Age</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((row, index) => (
        <TableRow key={index}>
          <TableCell>{row.firstName}</TableCell>
          <TableCell>{row.lastName}</TableCell>
          <TableCell>{row.age}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const Default = Template.bind({});
Default.args = {
  data,
};
