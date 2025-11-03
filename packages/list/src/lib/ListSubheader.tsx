// For bundling purposes, always use the direct import for an mui component, i.e. '@mui/material/xxx'
import MuiListSubheader, { ListSubheaderProps as MuiListSubheaderProps } from '@mui/material/ListSubheader';

export type ListSubheaderProps = MuiListSubheaderProps

/** A label for a nested list. */
export const ListSubheader = ({ children, ...rest }: ListSubheaderProps): React.JSX.Element => {
  return <MuiListSubheader {...rest}>{children}</MuiListSubheader>;
};
