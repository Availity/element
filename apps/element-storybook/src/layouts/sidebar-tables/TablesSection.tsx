import { useState } from 'react';
import { AttachmentIcon, Badge, Chip } from '@availity/element';
import {
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
  TableContainer,
  TableBody,
  Typography,
  Paper,
} from '@mui/material';
import type { AlertColor } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { datarows, Data } from './TableData';

const StatusChip = (status: string) => {
  const color: Record<string, AlertColor> = {
    Pending: 'warning',
    'Needs Info': 'info',
    Denied: 'error',
    Approved: 'success',
  };

  return <Chip size="small" color={color[status]} label={status} />;
};

type Order = 'asc' | 'desc';

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
  sortable?: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'Transaction ID',
  },
  {
    id: 'payer',
    numeric: false,
    disablePadding: false,
    label: 'Payer',
    sortable: true,
  },
  {
    id: 'patientname',
    numeric: false,
    disablePadding: false,
    label: 'Patient',
  },
  {
    id: 'accountid',
    numeric: true,
    disablePadding: false,
    label: 'Account ID',
  },
  {
    id: 'attachments',
    numeric: false,
    disablePadding: false,
    label: 'Attachments',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
];

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
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
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
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

export const TablesSection = (): JSX.Element => {
  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setOrderBy] = useState<keyof Data>('id');

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Paper variant="elevation" elevation={0} sx={{ padding: '10px' }}>
      <Typography variant="h2" id="tableTitle">
        Table
      </Typography>
      <TableContainer>
        <Table aria-labelledby="tableTitle">
          <EnhancedTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
          <TableBody>
            {datarows.map((row, index) => {
              const labelId = `enhanced-table-checkbox-${index}`;

              return (
                <TableRow key={row.id}>
                  <TableCell component="th" id={labelId} scope="row" padding="none">
                    {row.id}
                  </TableCell>
                  <TableCell align="right">{row.payer}</TableCell>
                  <TableCell align="right">{row.patientname}</TableCell>
                  <TableCell align="right">{row.accountid}</TableCell>
                  <TableCell align="right">
                    <Badge badgeContent={row.attachments?.length || 0}>
                      <AttachmentIcon color="primary" />
                    </Badge>
                  </TableCell>
                  <TableCell align="right">{StatusChip(row.status)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
