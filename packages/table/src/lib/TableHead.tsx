import { TableHead as MuiTableHead, TableHeadProps as MuiTableHeadProps, TableCellBaseProps } from '@mui/material';
import { ElementType } from 'react';

export type TableHeadProps = {
  component?: ElementType<TableCellBaseProps>;
} & MuiTableHeadProps;

export const TableHead = (props: TableHeadProps): JSX.Element => {
  return <MuiTableHead {...props} />;
};
