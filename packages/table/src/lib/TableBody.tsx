import { TableBody as MuiTableBody, TableBodyProps as MuiTableBodyProps, TableCellBaseProps } from '@mui/material';
import { ElementType } from 'react';

export type TableBodyProps = {
  component?: ElementType<TableCellBaseProps>;
} & MuiTableBodyProps;

export const TableBody = (props: TableBodyProps): JSX.Element => {
  return <MuiTableBody {...props} />;
};
