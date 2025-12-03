// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { TableFooter, TableFooterProps } from './TableFooter';
import { Table, TableCell, TablePagination, TableRow } from '..';

const meta: Meta<typeof TableFooter> = {
  title: 'Components/Table/TableFooter',
  component: TableFooter,
  tags: ['autodocs'],
  args: {},
};

export default meta;

export const _TableFooter: StoryObj<typeof TableFooter> = {
  render: (args: TableFooterProps) => (
    <Table role="presentation">
      <TableFooter {...args}>
        <TableRow>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  ),
};

export const _Pagination: StoryObj<typeof TableFooter> = {
  render: (args: TableFooterProps) => (
    <Table>
      <TableFooter {...args}>
        <TableRow>
          <TablePagination
            count={50}
            page={0}
            rowsPerPage={10}
            rowsPerPageOptions={[5, 10, 25, { value: -1, label: 'all' }]}
            onPageChange={() => null}
          />
        </TableRow>
      </TableFooter>
    </Table>
  ),
  args: {},
};
