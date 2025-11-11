// For bundling purposes, always use the direct import for an mui component, i.e. '@mui/material/xxx'
import MuiListItemAvatar, { ListItemAvatarProps as MuiListItemAvatarProps } from '@mui/material/ListItemAvatar';

export type ListItemAvatarProps = MuiListItemAvatarProps;

/** Avatar to be used inside of a list item. */
export const ListItemAvatar = ({ children, ...rest }: ListItemAvatarProps): React.JSX.Element => {
  return <MuiListItemAvatar {...rest}>{children}</MuiListItemAvatar>;
};
