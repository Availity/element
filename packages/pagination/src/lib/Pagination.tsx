import { Pagination as MuiPagination, PaginationProps as MuiPaginationProps } from '@mui/material';
import { PaginationItem } from './PaginationItem';

export type PaginationProps = Omit<MuiPaginationProps, 'color' | 'shape' | 'renderItem'>;

export const Pagination = ({ ...rest }: PaginationProps): JSX.Element => {
  return <MuiPagination {...rest} renderItem={(item) => <PaginationItem {...item} />} />;
};
