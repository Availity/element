import { ElementType, forwardRef, useState } from 'react';
import {
  default as MuiTablePagination,
  TablePaginationProps as MuiTablePaginationProps,
} from '@mui/material/TablePagination';
import { SvgIconProps } from '@mui/material/SvgIcon';
import { TableCellBaseProps } from '@mui/material/TableCell';
import { Pagination, PaginationProps } from '@availity/mui-pagination';
import { SelectAccessibilityOverrides } from '@availity/mui-form-utils';
import { TriangleExpandIcon } from '@availity/mui-icon';

export type TablePaginationProps = {
  Actions?: React.ReactNode;
  component?: ElementType<TableCellBaseProps>;
  /** Props applied to the `Pagination` actions element */
  paginationProps?: PaginationProps;
} & Omit<
  MuiTablePaginationProps,
  | 'ActionsComponent'
  | 'backIconButtonProps'
  | 'nextIconButtonProps'
  | 'getItemArialabel'
  | 'labelDisplayedRows'
  | 'labelRowsPerPage'
  | 'SelectProps'
  | 'showFirstButton'
  | 'showLastButton'
  | 'slotProps'
  | 'slots'
>;

type TablePaginationActionsProps = {
  count: number | 'Infinity';
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
} & Pick<MuiTablePaginationProps, 'backIconButtonProps' | 'nextIconButtonProps'>;

const IconComponent = (args: SvgIconProps) => (
  <TriangleExpandIcon fontSize='xxsmall' sx={{marginRight: '4px'}} {...args}/>
);

export const TablePagination = forwardRef<unknown, TablePaginationProps>((props, ref) => {
  const { Actions, paginationProps, ...rest } = props;
  const [ openDetected, setOpenDetected ] = useState(false);

  const ActionsPagination = (props: TablePaginationActionsProps): JSX.Element => {
    const { count, page, rowsPerPage, onPageChange, backIconButtonProps, nextIconButtonProps, ...rest } = props;

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
          />
        ) : null}
        {Actions || null}
      </>
    );
  };

  return <MuiTablePagination ActionsComponent={ActionsPagination} {...rest} slotProps={{select: {IconComponent: IconComponent, ...SelectAccessibilityOverrides(openDetected, setOpenDetected)}}} ref={ref} />;
});
