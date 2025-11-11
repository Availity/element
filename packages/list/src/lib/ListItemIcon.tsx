// For bundling purposes, always use the direct import for an mui component, i.e. '@mui/material/xxx'
import MuiListItemIcon, { ListItemIconProps as MuiListItemIconProps } from '@mui/material/ListItemIcon';

export type ListItemIconProps = MuiListItemIconProps;

/** Icon to be used inside of a list item */
export const ListItemIcon = ({ children, ...rest }: ListItemIconProps): React.JSX.Element => {
  return <MuiListItemIcon {...rest}>{children}</MuiListItemIcon>;
};
