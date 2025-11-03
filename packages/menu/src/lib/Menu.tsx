import { default as MuiMenu, MenuProps as MuiMenuProps } from '@mui/material/Menu';
import { default as MuiMenuItem, MenuItemProps as MuiMenuItemProps } from '@mui/material/MenuItem';
import { default as MuiMenuList, MenuListProps as MuiMenuListProps } from '@mui/material/MenuList';

export type MenuProps = Omit<
  MuiMenuProps,
  | 'BackdropComponent'
  | 'BackdropProps'
  | 'classes'
  | 'disableAutoFocusItem'
  | 'disableEnforceFocus'
  | 'disableEscapeKeyDown'
  | 'elevation'
  | 'onBackdropClick'
  | 'PopoverClasses'
  | 'ref'
  | 'sx'
  | 'TransitionComponent'
  | 'TransitionProps'
>;

export const Menu = (props: MenuProps): React.JSX.Element => {
  return <MuiMenu {...props} />;
};

export type MenuItemProps = Omit<
  MuiMenuItemProps,
  'centerRipple' | 'disableRipple' | 'disableTouchRipple' | 'focusRipple' | 'TouchRippleProps' | 'touchRippleRef'
>;

export const MenuItem = (props: MenuItemProps) => {
  return <MuiMenuItem {...props} disableRipple disableTouchRipple />;
};

export type MenuListProps = MuiMenuListProps;

export const MenuList = (props: MenuListProps) => {
  return <MuiMenuList {...props} />;
};
