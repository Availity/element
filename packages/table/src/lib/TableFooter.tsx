import { default as MuiTableFooter, TableFooterProps as MuiTableFooterProps } from '@mui/material/TableFooter';
import { TableCellBaseProps } from '@mui/material/TableCell';
import { ElementType } from 'react';

export type TableFooterProps = {
  component?: ElementType<TableCellBaseProps>;
} & MuiTableFooterProps;

export const TableFooter = (props: TableFooterProps): React.JSX.Element => {
  return <MuiTableFooter {...props} />;
};
