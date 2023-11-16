import {
  TableFooter as MuiTableFooter,
  TableFooterProps as MuiTableFooterProps,
  TableCellBaseProps,
} from '@mui/material';
import { ElementType } from 'react';

export type TableFooterProps = {
  component?: ElementType<TableCellBaseProps>;
} & MuiTableFooterProps;

export const TableFooter = (props: TableFooterProps): JSX.Element => {
  return <MuiTableFooter {...props} />;
};
