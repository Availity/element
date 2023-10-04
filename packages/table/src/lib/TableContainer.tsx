import {
  TableContainer as MuiTableContainer,
  TableContainerProps as MuiTableContainerProps,
  TableCellBaseProps,
} from '@mui/material';
import { ElementType } from 'react';

export type TableContainerProps = {
  component?: ElementType<TableCellBaseProps>;
} & MuiTableContainerProps;

export const TableContainer = (props: TableContainerProps): JSX.Element => {
  return <MuiTableContainer {...props} />;
};
