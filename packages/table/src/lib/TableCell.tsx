import {
  default as MuiTableCell,
  TableCellProps as MuiTableCellProps,
  TableCellBaseProps,
} from '@mui/material/TableCell';
import { visuallyHidden } from '@availity/mui-utils';
import { ElementType } from 'react';

declare module '@mui/material/TableCell' {
  interface TableCellPropsVariantOverrides {
    header: true;
  }
}

export type TableCellProps = {
  component?: ElementType<TableCellBaseProps>;
  /** If `true` the placeholder for empty cells and accessible "No Data" text is disabled. */
  disableEmptyPlaceholder?: boolean;
} & MuiTableCellProps;

export const TableCell = ({disableEmptyPlaceholder = false, children, ...props}: TableCellProps): React.JSX.Element => {
  const isPlaceholderActive = !disableEmptyPlaceholder && !children;
  const placeholder = <><div aria-hidden>&mdash;</div><div style={visuallyHidden}>No Data</div></>;

  return <MuiTableCell {...props}>{isPlaceholderActive ? placeholder : children}</MuiTableCell>;
};
