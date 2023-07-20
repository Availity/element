import { AttachmentIcon, Badge, Chip, Paper } from '@availity/element';
import { Table } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
import type { AlertColor } from '@mui/material';

export interface Data {
  transactionid: string;
  payer: string;
  patientname: string;
  accountid: string;
  attachments?: object[];
  status: string;
}

function createRowData(
  transactionid = 'SAMPLE123456789',
  payer = 'Payer 1',
  patientname = 'firstname lastname',
  accountid = '123456789',
  attachments = [] as Data['attachments'],
  status = 'Pending'
): Data {
  return {
    transactionid,
    payer,
    patientname,
    accountid,
    attachments,
    status,
  };
}

let d;

export const datarows = [
  createRowData(),
  createRowData(d, d, 'Mary Appleseed', '111111111', [{ title: 'attachment1' }], d),
  createRowData('EXAMPLE12345678', 'Payer 2', d, d, d, 'Needs Info'),
  createRowData(d, 'Payer 3'),
  createRowData('ANOTHERSAMPLE12', d, d, d, [{ title: 'attachment1' }, { title: 'attachment2' }], 'Denied'),
  createRowData(),
];
