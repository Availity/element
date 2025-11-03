import {
  default as MuiPaginationItem,
  PaginationItemProps as MuiPaginationItemProps,
} from '@mui/material/PaginationItem';
import { NavigateNextIcon, NavigatePreviousIcon } from '@availity/mui-icon';

export type PaginationItemProps = Omit<MuiPaginationItemProps, 'components' | 'color' | 'shape' | 'size'>;

const slots = {
  first: () => (
    <>
      <NavigatePreviousIcon fontSize="inherit" sx={{ mr: '.2rem' }} /> First
    </>
  ),
  previous: () => (
    <>
      <NavigatePreviousIcon fontSize="inherit" sx={{ mr: '.2rem' }} /> Prev
    </>
  ),
  next: () => (
    <>
      Next <NavigateNextIcon fontSize="inherit" sx={{ ml: '.2rem' }} />
    </>
  ),
  last: () => (
    <>
      Last <NavigateNextIcon fontSize="inherit" sx={{ ml: '.2rem' }} />
    </>
  ),
};

export const PaginationItem = (props: PaginationItemProps): React.JSX.Element => {
  return <MuiPaginationItem slots={slots} {...props} />;
};
