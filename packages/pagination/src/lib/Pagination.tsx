import { default as MuiPagination, PaginationProps as MuiPaginationProps } from '@mui/material/Pagination';
import { PaginationItem } from './PaginationItem';

export type PaginationProps = {
  /** The size of the component
   * @default 'determined by theme' */
  size?: 'medium' | 'large';
} & Omit<MuiPaginationProps, 'color' | 'getItemAriaLabel' | 'renderItem' | 'shape' | 'size'>;

export const Pagination = ({ ...rest }: PaginationProps): JSX.Element => {
  return <MuiPagination {...rest} renderItem={(item) => <PaginationItem {...item} />} />;
};
