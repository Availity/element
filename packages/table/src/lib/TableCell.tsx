import { TableCell as MuiTableCell, TableCellProps as MuiTableCellProps, TableCellBaseProps } from '@mui/material';
import { ElementType } from 'react';

export type TableCellProps = {
  component?: ElementType<TableCellBaseProps>;
} & MuiTableCellProps;

export const TableCell = (props: TableCellProps): JSX.Element => {
  return <MuiTableCell {...props} />;
};
