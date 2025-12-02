// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableHead, TableHeadProps } from './TableHead';
import { TableCell, TableRow } from '..';

const meta: Meta<typeof TableHead> = {
  title: 'Components/Table/TableHead',
  component: TableHead,
  tags: ['autodocs'],
  args: {},
};

export default meta;

export const _TableHead: StoryObj<typeof TableHead> = {
  render: (args: TableHeadProps) => (
    <TableHead {...args}>
      <TableRow>
        <TableCell>Header 1</TableCell>
        <TableCell>Header 2</TableCell>
        <TableCell>Header 3</TableCell>
      </TableRow>
    </TableHead>
  ),
};
