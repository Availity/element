import {
  default as MuiTableSortLabel,
  TableSortLabelProps as MuiTableSortLabelProps,
} from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@availity/mui-utils';
import { SortDownIcon, SortIcon } from '@availity/mui-icon';

export type TableSortLabelProps = Omit<
  MuiTableSortLabelProps,
  | 'centerRipple'
  | 'disableRipple'
  | 'disableTouchRipple'
  | 'focusRipple'
  | 'focusVisibleClassName'
  | 'hideSortIcon'
  | 'IconComponent'
  | 'TouchRippleProps'
  | 'touchRippleRef'
>;

const TableSortLabel = (props: TableSortLabelProps): React.JSX.Element => {
  // mui rotates descending icon 180 degrees for ascending icon
  const IconComponent = props.active ? SortDownIcon : SortIcon;
  const SortedDescription = props.active ? (
    <Box component="span" sx={visuallyHidden}>
      {props.direction === 'desc' ? 'sorted descending' : 'sorted ascending'}
    </Box>
  ) : null;
  return (
    <MuiTableSortLabel
      {...props}
      IconComponent={IconComponent}
      children={
        <>
          {props.children} {SortedDescription}
        </>
      }
    />
  );
};

export { TableSortLabel };
