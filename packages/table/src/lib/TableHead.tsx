import { default as MuiTableHead, TableHeadProps as MuiTableHeadProps } from '@mui/material/TableHead';
import { TableCellBaseProps } from '@mui/material/TableCell';
import { ElementType } from 'react';

export type TableHeadProps = {
  component?: ElementType<TableCellBaseProps>;
} & MuiTableHeadProps;

export const TableHead = (props: TableHeadProps): React.JSX.Element => {
  return <MuiTableHead {...props} />;
};
