import { PaginationItem as MuiPaginationItem, PaginationItemProps as MuiPaginationItemProps } from '@mui/material';
import { NavigateNextIcon, NavigatePreviousIcon } from '@availity/mui-icon';

export type PaginationItemProps = Omit<MuiPaginationItemProps, 'components' | 'color' | 'shape'>;

const slots = {
  first: () => (
    <>
      <NavigatePreviousIcon sx={{ mr: '.2rem' }} /> First
    </>
  ),
  previous: () => (
    <>
      <NavigatePreviousIcon sx={{ mr: '.2rem' }} /> Prev
    </>
  ),
  next: () => (
    <>
      Next <NavigateNextIcon sx={{ ml: '.2rem' }} />
    </>
  ),
  last: () => (
    <>
      Last <NavigateNextIcon sx={{ ml: '.2rem' }} />
    </>
  ),
};

export const PaginationItem = (props: PaginationItemProps): JSX.Element => {
  return <MuiPaginationItem slots={slots} {...props} />;
};
