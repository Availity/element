import {
  default as MuiTableContainer,
  TableContainerProps as MuiTableContainerProps,
} from '@mui/material/TableContainer';
import { TableCellBaseProps } from '@mui/material/TableCell';
import { ElementType } from 'react';

export type TableContainerProps = {
  component?: ElementType<TableCellBaseProps>;
} & MuiTableContainerProps;

export const TableContainer = (props: TableContainerProps): React.JSX.Element => {
  return <MuiTableContainer {...props} />;
};
