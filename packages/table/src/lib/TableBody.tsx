import { default as MuiTableBody, TableBodyProps as MuiTableBodyProps } from '@mui/material/TableBody';
import { TableCellBaseProps } from '@mui/material/TableCell';
import { ElementType } from 'react';

export type TableBodyProps = {
  component?: ElementType<TableCellBaseProps>;
} & MuiTableBodyProps;

export const TableBody = (props: TableBodyProps): React.JSX.Element => {
  return <MuiTableBody {...props} />;
};
