import {
  TableCell as MuiTableCell,
  TableCellProps as MuiTableCellProps,
  TableCellBaseProps,
  TableCellPropsVariantOverrides,
} from '@mui/material';
import { ElementType } from 'react';

declare module '@mui/material/TableCell' {
  interface TableCellPropsVariantOverrides {
    header: true;
  }
}

export type TableCellProps = {
  component?: ElementType<TableCellBaseProps>;
} & MuiTableCellProps;

export const TableCell = (props: TableCellProps): JSX.Element => {
  return <MuiTableCell {...props} />;
};
