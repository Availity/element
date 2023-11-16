// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { TableRow, TableRowProps } from './TableRow';
import { TableBody, TableCell } from '..';

const meta: Meta<typeof TableRow> = {
  title: 'Components/Table/TableRow',
  component: TableRow,
  tags: ['autodocs'],
  args: {
    children: 'This text is a child of TableRow',
  },
};

export default meta;

export const _TableRow: StoryObj<typeof TableRow> = {
  render: (args: TableRowProps) => (
    <TableBody>
      <TableRow {...args}>
        <TableCell>Cell 1</TableCell>
        <TableCell>Cell 2</TableCell>
        <TableCell>Cell 3</TableCell>
      </TableRow>
    </TableBody>
  ),
};
