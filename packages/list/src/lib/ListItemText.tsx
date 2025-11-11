// For bundling purposes, always use the direct import for an mui component, i.e. '@mui/material/xxx'
import MuiListItemText, { ListItemTextProps as MuiListItemTextProps } from '@mui/material/ListItemText';

export type ListItemTextProps = MuiListItemTextProps

/** Container inside a list item, used to display text content. */
export const ListItemText = ({ children, ...rest }: ListItemTextProps): React.JSX.Element => {
  return <MuiListItemText {...rest}>{children}</MuiListItemText>;
};
