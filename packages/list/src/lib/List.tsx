// For bundling purposes, always use the direct import for an mui component, i.e. '@mui/material/xxx'
import MuiList, { ListProps as MuiListProps } from '@mui/material/List';

export type ListProps = MuiListProps;

/** Wrapper for list items. Renders as a `<ul>` by default. */
export const List = ({ children, ...rest }: ListProps): React.JSX.Element => {
  return <MuiList {...rest}>{children}</MuiList>;
};
