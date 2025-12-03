// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableBody, TableBodyProps } from './TableBody';
import { TableRow } from './TableRow';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableBody> = {
  title: 'Components/Table/TableBody',
  component: TableBody,
  tags: ['autodocs'],
  args: {},
};

export default meta;

export const _TableBody: StoryObj<typeof TableBody> = {
  render: (args: TableBodyProps) => (
    <TableBody {...args}>
      <TableRow>
        <TableCell>Cell a1</TableCell>
        <TableCell>Cell a2</TableCell>
        <TableCell>Cell a3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell b1</TableCell>
        <TableCell>Cell b2</TableCell>
        <TableCell>Cell b3</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell c1</TableCell>
        <TableCell>Cell c2</TableCell>
        <TableCell>Cell c3</TableCell>
      </TableRow>
    </TableBody>
  ),
};
