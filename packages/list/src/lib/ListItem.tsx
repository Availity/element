// For bundling purposes, always use the direct import for an mui component, i.e. '@mui/material/xxx'
import MuiListItem, { ListItemProps as MuiListItemProps } from '@mui/material/ListItem';
import { forwardRef } from 'react';

export type ListItemProps = Omit<
  MuiListItemProps,
  'components' | 'componentsProps' | 'ContainerComponent' | 'ContainerProps'
>;

/** A common list item. Renders as an `<li>` by default. */
export const ListItem = forwardRef<HTMLLIElement, ListItemProps>((props, ref) => {
  return <MuiListItem {...props} ref={ref} />;
});
