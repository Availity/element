// For bundling purposes, always use the direct import for an mui component, i.e. '@mui/material/xxx'
import MuiListItemButton, { ListItemButtonProps as MuiListItemButtonProps, ListItemButtonTypeMap } from '@mui/material/ListItemButton';
import { forwardRef } from 'react';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type ListItemButtonProps = Omit<MuiListItemButtonProps, 'centerRipple' | 'disableRipple' | 'disableTouchRipple' | 'focusRipple' | 'TouchRippleProps' | 'touchRippleRef'>

/** Action element to be used inside a list item. */
export const ListItemButton = forwardRef<HTMLDivElement, ListItemButtonProps>((props, ref) => {
  return <MuiListItemButton {...props} ref={ref}/>;
}) as OverridableComponent<ListItemButtonTypeMap>;
