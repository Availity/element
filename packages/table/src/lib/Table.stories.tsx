/* eslint-disable @nx/enforce-module-boundaries */
// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { useMemo, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { IconButton } from '@availity/mui-button';
import { StatusChip, StatusChipProps } from '@availity/mui-chip';
import { TriangleCollapseIcon, TriangleExpandIcon } from '@availity/mui-icon';
import { Grid } from '@availity/mui-layout';
import { Collapse } from '@availity/mui-transitions';
import { Typography } from '@availity/mui-typography';
import { visuallyHidden } from '@availity/mui-utils';
import Patients from '../../../../data/patients.json';
import { Patient } from '../../../../data/patient';
import {
  Table,
  TableProps,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableContainer,
  TableBody,
  TablePagination,
  TableFooter,
} from '../index';

const meta: Meta<typeof Table> = {
  title: 'Components/Table/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['small', 'medium'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

const Status = (status: string) => {
  const color: Record<string, StatusChipProps['color']> = {
    Pending: 'warning',
    'Needs Info': 'info',
    Denied: 'error',
    Approved: 'success',
  };

  return <StatusChip color={color[status]} label={status} />;
};

const dataRows = Patients.data.patientPagination.items.slice(0, 7);

export const _Table: StoryObj<typeof Table> = {
  render: (args: TableProps) => {
    return (
      <TableContainer>
        <Typography id="table-title" sx={visuallyHidden}>
          Table
        </Typography>
        <Table aria-labelledby="table-title" {...args}>
          <TableHead>
            <TableRow>
              <TableCell>Payer</TableCell>
              <TableCell>Patient First Name</TableCell>
              <TableCell>Patient Middle Initial</TableCell>
              <TableCell>Patient Last Name</TableCell>
              <TableCell>Birth Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRows.map((row) => {
              return (
                <TableRow key={`basicTable-${row.payerName}-${row.birthDate}`}>
                  <TableCell>{row.payerName}</TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.middleName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  {/* TODO: switch to dayjs */}
                  <TableCell>{new Date(row.birthDate).toLocaleDateString('en-us')}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
};

export const _SortableTable: StoryObj<typeof Table> = {
  render: (args: TableProps) => {
    type Order = 'asc' | 'desc';

    const [order, setOrder] = useState<Order>();
    const [orderBy, setOrderBy] = useState<keyof Patient>();

    const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Patient) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };

    function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
      if (b[orderBy] < a[orderBy]) {
        return -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return 1;
      }
      return 0;
    }

    function getComparator<Key extends keyof Patient>(
      order: Order,
      orderBy: Key
    ): (a: { [key in Key]: number | string | null }, b: { [key in Key]: number | string | null }) => number {
      return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
    }

    const sortedRows = useMemo(() => dataRows.slice().sort(getComparator(order, orderBy)), [order, orderBy]);

    interface HeadCell {
      id: keyof Patient;
      label: string;
      disablePadding?: boolean;
      numeric?: boolean;
      sortable?: boolean;
    }

    const headCells: readonly HeadCell[] = [
      {
        id: 'firstName',
        label: 'First Name',
        sortable: true,
      },
      {
        id: 'lastName',
        label: 'Last Name',
        sortable: true,
      },
      {
        id: 'birthDate',
        label: 'Birth Date',
      },
      {
        id: 'payerName',
        label: 'Payer',
      },
    ];

    interface EnhancedTableProps {
      onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Patient) => void;
      order?: Order;
      orderBy?: string;
    }

    function EnhancedTableHead(props: EnhancedTableProps) {
      const { order, orderBy, onRequestSort } = props;
      const createSortHandler = (property: keyof Patient) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
      };

      return (
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? 'right' : 'left'}
                padding={headCell.disablePadding ? 'none' : 'normal'}
                sortDirection={headCell.sortable && orderBy === headCell.id ? order : false}
              >
                {headCell.sortable ? (
                  <TableSortLabel
                    active={orderBy === headCell.id}
                    direction={orderBy === headCell.id ? order : 'asc'}
                    onClick={createSortHandler(headCell.id)}
                  >
                    {headCell.label}
                  </TableSortLabel>
                ) : (
                  headCell.label
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      );
    }

    return (
      <TableContainer>
        <Typography id="sortable-table-title" sx={visuallyHidden}>
          Sortable Table
        </Typography>
        <Table aria-labelledby="sortable-table-title" {...args}>
          <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
          <TableBody>
            {sortedRows.map((row, index) => {
              return (
                <TableRow key={`SortableTable-${index}`}>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{new Date(row.birthDate).toLocaleDateString('en-us')}</TableCell>
                  <TableCell>{row.payerName}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
};

export const _SelectableTable: StoryObj<typeof Table> = {
  render: (args: TableProps) => {
    const [selected, setSelected] = useState<readonly string[]>([]);

    interface HeadCell {
      id: keyof Patient;
      label: string;
      disablePadding?: boolean;
      numeric?: boolean;
      sortable?: boolean;
    }

    const headCells: readonly HeadCell[] = [
      {
        id: 'firstName',
        label: 'First Name',
      },
      {
        id: 'lastName',
        label: 'Last Name',
      },
      {
        id: 'birthDate',
        label: 'Birth Date',
      },
      {
        id: 'payerName',
        label: 'Payer',
      },
    ];

    interface EnhancedTableProps {
      numSelected: number;
      onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
      rowCount: number;
    }

    function EnhancedTableHead(props: EnhancedTableProps) {
      const { onSelectAllClick, numSelected, rowCount } = props;

      return (
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox" aria-label="Select Row">
              <Checkbox
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  'aria-label': 'select all rows',
                }}
              />
            </TableCell>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                align={headCell.numeric ? 'right' : 'left'}
                padding={headCell.disablePadding ? 'none' : 'normal'}
              >
                {headCell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
      );
    }

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        const newSelected = dataRows.map((n) => n.birthDate);
        setSelected(newSelected);
        return;
      }
      setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
      const selectedIndex = selected.indexOf(name);
      let newSelected: readonly string[] = [];

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
      }

      setSelected(newSelected);
    };

    const isSelected = (name: string) => selected.indexOf(name) !== -1;

    return (
      <TableContainer>
        <Typography id="selectable-table-title" sx={visuallyHidden}>
          Selectable Table
        </Typography>
        <Table aria-labelledby="selectable-table-title" {...args}>
          <EnhancedTableHead
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={dataRows.length}
          />
          <TableBody>
            {dataRows.map((row, index) => {
              const isItemSelected = isSelected(row.birthDate);
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.birthDate)}
                  key={`SelectableTable-${index}`}
                  selected={isItemSelected}
                  sx={{ cursor: 'pointer' }}
                  id={labelId}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      inputProps={{
                        'aria-labelledby': labelId,
                      }}
                    />
                  </TableCell>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{new Date(row.birthDate).toLocaleDateString('en-us')}</TableCell>
                  <TableCell>{row.payerName}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
  args: {
    striped: true,
  },
};

export const _PaginatedTable: StoryObj<typeof Table> = {
  render: (args: TableProps) => {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    interface HeadCell {
      id: keyof Patient;
      label: string;
      disablePadding?: boolean;
      numeric?: boolean;
      sortable?: boolean;
    }

    const headCells: readonly HeadCell[] = [
      {
        id: 'firstName',
        label: 'First Name',
      },
      {
        id: 'lastName',
        label: 'Last Name',
      },
      {
        id: 'birthDate',
        label: 'Birth Date',
      },
      {
        id: 'deathDate',
        label: 'Death Date',
      },
      {
        id: 'payerName',
        label: 'Payer',
      },
    ];

    const handleChangePage = (event: unknown, newPage: number) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

    const dataRowsLarge = Patients.data.patientPagination.items;

    const visibleRows = useMemo(
      () =>
        rowsPerPage > 0 ? dataRowsLarge.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : dataRowsLarge,
      [page, rowsPerPage]
    );

    return (
      <TableContainer>
        <Typography id="paginated-table-title" sx={visuallyHidden}>
          Paginated Table
        </Typography>
        <Table aria-labelledby="paginated-table-title" {...args}>
          <TableHead>
            <TableRow>
              {headCells.map((headCell) => (
                <TableCell
                  key={headCell.id}
                  align={headCell.numeric ? 'right' : 'left'}
                  padding={headCell.disablePadding ? 'none' : 'normal'}
                >
                  {headCell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleRows.map((row, index) => (
              <TableRow key={`PaginatedTable-${index}`}>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{new Date(row.birthDate).toLocaleDateString('en-us')}</TableCell>
                <TableCell>{row.deathDate && new Date(row.deathDate).toLocaleDateString('en-us')}</TableCell>
                <TableCell>{row.payerName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                colSpan={12}
                rowsPerPageOptions={[5, 10, 25, { value: -1, label: 'all' }]}
                count={dataRowsLarge.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    );
  },
};

export const _ExpandableTable: StoryObj<typeof Table> = {
  render: (args: TableProps) => {
    const [expanded, setExpanded] = useState<readonly string[]>([]);
    const numExpanded = expanded.length;
    const rowCount = dataRows.length;

    const handleExpandAllClick = () => {
      if (rowCount > 0 && numExpanded !== rowCount) {
        const newExpanded = dataRows.map((n) => n.subscriberMemberId);
        setExpanded(newExpanded);
        return;
      }
      setExpanded([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
      const expandedIndex = expanded.indexOf(name);
      let newExpanded: readonly string[] = [];

      if (expandedIndex === -1) {
        newExpanded = newExpanded.concat(expanded, name);
      } else if (expandedIndex === 0) {
        newExpanded = newExpanded.concat(expanded.slice(1));
      } else if (expandedIndex === expanded.length - 1) {
        newExpanded = newExpanded.concat(expanded.slice(0, -1));
      } else if (expandedIndex > 0) {
        newExpanded = newExpanded.concat(expanded.slice(0, expandedIndex), expanded.slice(expandedIndex + 1));
      }

      setExpanded(newExpanded);
    };

    return (
      <TableContainer>
        <Typography id="table-title" sx={visuallyHidden}>
          Table
        </Typography>
        <Table aria-labelledby="table-title" {...args}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" aria-label="Expand Row">
                <IconButton
                  title={`${rowCount > 0 && numExpanded !== rowCount ? 'expand' : 'collapse'} all rows`}
                  size="medium"
                  onClick={handleExpandAllClick}
                >
                  {rowCount > 0 && numExpanded !== rowCount ? (
                    <TriangleExpandIcon fontSize="xsmall" />
                  ) : (
                    <TriangleCollapseIcon fontSize="xsmall" />
                  )}
                </IconButton>
              </TableCell>
              <TableCell>Payer</TableCell>
              <TableCell>Patient First Name</TableCell>
              <TableCell>Patient Last Name</TableCell>
              <TableCell>Birth Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRows.map((row, index) => {
              const isItemExpanded = expanded.includes(row.subscriberMemberId);
              return (
                <>
                  <TableRow
                    key={`expandableTable-row-${index}`}
                    id={`expandableTable-row-${index}`}
                    aria-labelledby={`first-name-${index} last-name-${index}`}
                  >
                    <TableCell padding="checkbox">
                      <IconButton
                        title={isItemExpanded ? 'collapse row' : 'expand row'}
                        size="medium"
                        onClick={(event) => handleClick(event, row.subscriberMemberId)}
                        aria-controls={`expandableTable-expanded-row-${index}`}
                        aria-expanded={isItemExpanded}
                      >
                        {isItemExpanded ? (
                          <TriangleCollapseIcon fontSize="xsmall" />
                        ) : (
                          <TriangleExpandIcon fontSize="xsmall" />
                        )}
                      </IconButton>
                    </TableCell>
                    <TableCell>{row.payerName}</TableCell>
                    <TableCell id={`first-name-${index}`}>{row.firstName}</TableCell>
                    <TableCell id={`last-name-${index}`}>{row.lastName}</TableCell>
                    {/* TODO: switch to dayjs */}
                    <TableCell>{new Date(row.birthDate).toLocaleDateString('en-us')}</TableCell>
                  </TableRow>
                  <TableRow
                    key={`expandableTable-expanded-row-${index}`}
                    id={`expandableTable-expanded-row-${index}`}
                    aria-label="Additional information for"
                    aria-labelledby={`expandableTable-expanded-row-${index} first-name-${index} last-name-${index}`}
                  >
                    <td colSpan={12}>
                      <Collapse in={isItemExpanded} timeout="auto" unmountOnExit>
                        <TableCell component="div" sx={{ display: 'block' }}>
                          <Grid container spacing={2} paddingLeft="3rem">
                            <Grid size="grow">
                              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                Subscriber Member Id
                              </Typography>
                              <Typography variant="body2">{row.subscriberMemberId}</Typography>
                            </Grid>
                            <Grid size="grow">
                              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                Subscriber Relationship
                              </Typography>
                              <Typography variant="body2">{row.subscriberRelationship}</Typography>
                            </Grid>
                            <Grid size="grow">
                              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                Subscriber Relationship Code
                              </Typography>
                              <Typography variant="body2">{row.subscriberRelationshipCode}</Typography>
                            </Grid>
                          </Grid>
                        </TableCell>
                      </Collapse>
                    </td>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    );
  },
};
