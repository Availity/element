import { ElementType, forwardRef } from 'react';
import {
  TablePagination as MuiTablePagination,
  TablePaginationProps as MuiTablePaginationProps,
  TableCellBaseProps,
  Toolbar as MuiToolbar,
  styled,
} from '@mui/material';
import { Pagination, PaginationProps } from '@availity/mui-pagination';

export type TablePaginationProps = {
  Actions?: React.ReactNode;
  component?: ElementType<TableCellBaseProps>;
  /** Props applied to the `Pagination` actions element */
  paginationProps?: PaginationProps;
} & Omit<
  MuiTablePaginationProps,
  | 'ActionsComponent'
  | 'getItemArialabel'
  | 'labelDisplayedRows'
  | 'labelRowsPerPage'
  | 'showFirstButton'
  | 'showLastButton'
>;

interface TablePaginationActionsProps {
  count: number | 'Infinity';
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

export const TablePagination = forwardRef<unknown, TablePaginationProps>((props, ref) => {
  const { Actions, paginationProps, ...rest } = props;

  const ActionsPagination = (props: TablePaginationActionsProps): JSX.Element => {
    const { count, page, rowsPerPage, onPageChange, ...rest } = props;

    return (
      <>
        {typeof count === 'number' && count / rowsPerPage > 1 ? (
          <Pagination
            {...rest}
            {...paginationProps}
            count={Math.ceil(Math.abs(count / rowsPerPage))}
            page={(page as number) + 1}
            onChange={(event: React.MouseEvent<HTMLButtonElement>, newPage) => {
              onPageChange(event, newPage - 1);
            }}
            boundaryCount={0}
            siblingCount={1}
            hidePrevButton
            hideNextButton
            showFirstButton
            showLastButton
          />
        ) : null}
        {Actions || null}
      </>
    );
  };

  return (
    <MuiTablePagination
      // colSpan={undefined}
      ActionsComponent={ActionsPagination}
      {...rest}
      ref={ref}
    />
  );
});
