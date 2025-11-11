import { AttachmentIcon, Badge, StatusChip } from '@availity/element';
import { Paper, Typography } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import type { AlertColor } from '@mui/material';
import { datarows } from './TableData';

const columns: GridColDef[] = [
  {
    field: 'id',
    type: 'string',
    headerName: 'Transaction ID',
    flex: 2,
  },
  {
    field: 'payer',
    type: 'string',
    headerName: 'Payer',
    flex: 1,
  },
  {
    field: 'patientname',
    type: 'string',
    headerName: 'Patient',
    flex: 2,
  },
  {
    field: 'accountid',
    type: 'number',
    headerName: 'Account ID',
    flex: 1,
  },
  {
    field: 'attachments',
    type: 'number',
    headerName: 'Attachments',
    flex: 1,
    valueGetter: (params: GridValueGetterParams) => params.row.attachments.length || 0,
    renderCell: (params: GridRenderCellParams) => (
      <Badge badgeContent={params.value}>
        <AttachmentIcon color="primary" />
      </Badge>
    ),
  },
  {
    field: 'status',
    type: 'string',
    headerName: 'Status',
    flex: 1,
    renderCell: (params: GridRenderCellParams) => {
      const color: Record<string, AlertColor> = {
        Pending: 'warning',
        'Needs Info': 'info',
        Denied: 'error',
        Approved: 'success',
      };
      return <StatusChip color={color[params.value] || 'secondary'} label={params.value || 'Unknown'} />;
    },
  },
];

export const DataGridSection = (): React.JSX.Element => (
  <Paper variant="elevation" elevation={0} sx={{ padding: '10px' }}>
    <Typography variant="h2" id="datagridTitle">
      DataGrid
    </Typography>
    <DataGrid aria-labelledby="datagridTitle" rows={datarows} columns={columns} disableColumnMenu hideFooter />
  </Paper>
);
