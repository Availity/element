import { TableRow as MuiTableRow, TableRowProps as MuiTableRowProps, TableCellBaseProps } from '@mui/material';
import { ElementType } from 'react';

export type TableRowProps = {
  component?: ElementType<TableCellBaseProps>;
} & MuiTableRowProps;

export const TableRow = (props: TableRowProps): JSX.Element => {
  return <MuiTableRow {...props} />;
};
