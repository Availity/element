import { default as MuiPagination, PaginationProps as MuiPaginationProps } from '@mui/material/Pagination';
import { PaginationItem } from './PaginationItem';

export type PaginationProps = {
  /** The size of the component
   * @default 'determined by theme' */
  size?: 'medium' | 'large';
} & Omit<MuiPaginationProps, 'color' | 'getItemAriaLabel' | 'renderItem' | 'shape' | 'size'>;

const getItemAriaLabel: MuiPaginationProps['getItemAriaLabel'] = (type, page) => {
  if (type === 'page') return `Go to page ${page}`;
  return `Go to ${type} page`;
};

export const Pagination = (props: PaginationProps): React.JSX.Element => {
  return (
    <MuiPagination {...props} getItemAriaLabel={getItemAriaLabel} renderItem={(item) => <PaginationItem {...item} />} />
  );
};
