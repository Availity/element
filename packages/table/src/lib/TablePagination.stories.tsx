// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Box, Button, TablePagination as MuiTablePagination } from '@mui/material';
import { Table, TableFooter, TableRow, TablePagination, TablePaginationProps, TableCell } from '..';

const meta: Meta<typeof TablePagination> = {
  title: 'Components/Table/TablePagination',
  component: TablePagination,
  tags: ['autodocs'],
  args: {
    component: 'div',
    count: 50,
    page: 0,
    rowsPerPage: 10,
    rowsPerPageOptions: [5, 10, 25, { value: -1, label: 'all' }],
    onPageChange: () => null,
  },
};

export default meta;

export const _TablePagination: StoryObj<typeof TablePagination> = {
  render: (args: TablePaginationProps) => <TablePagination {...args} />,
};

export const _AsPartOfTable: StoryObj<typeof TablePagination> = {
  render: (args: TablePaginationProps) => (
    <Table>
      <TableFooter>
        <TableRow>
          <TablePagination {...args} />
        </TableRow>
      </TableFooter>
    </Table>
  ),
  args: {
    component: undefined,
  },
};

export const _FixedRowsPerPage: StoryObj<typeof TablePagination> = {
  render: (args: TablePaginationProps) => <TablePagination {...args} />,
  args: {
    rowsPerPageOptions: [],
  },
};

export const _ShowAll: StoryObj<typeof TablePagination> = {
  render: (args: TablePaginationProps) => <TablePagination {...args} />,
  args: {
    rowsPerPage: -1,
    rowsPerPageOptions: [-1],
  },
};
