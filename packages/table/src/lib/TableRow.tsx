import { default as MuiTableRow, TableRowProps as MuiTableRowProps } from '@mui/material/TableRow';
import { TableCellBaseProps } from '@mui/material/TableCell';
import { ElementType } from 'react';

export type TableRowProps = {
  component?: ElementType<TableCellBaseProps>;
} & MuiTableRowProps;

export const TableRow = (props: TableRowProps): React.JSX.Element => {
  return <MuiTableRow {...props} />;
};
