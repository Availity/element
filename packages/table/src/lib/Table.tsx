import { Table as MuiTable, TableProps as MuiTableProps, TableCellBaseProps } from '@mui/material';
import { ElementType } from 'react';

export type TableProps = {
  component?: ElementType<TableCellBaseProps>;
  /** Applies striped style to rows. _Only available for legacy bootstrap theme during migration, is not part of design system._ */
  striped?: boolean;
} & MuiTableProps;

export const Table = ({ className, striped, ...props }: TableProps): JSX.Element => {
  return <MuiTable className={`${striped ? 'striped ' : ''}${className || ''}`} {...props} />;
};
