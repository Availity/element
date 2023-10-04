import {
  Menu as MuiMenu,
  MenuProps as MuiMenuProps,
  MenuItem as MuiMenuItem,
  MenuItemProps as MuiMenuItemProps,
  MenuList as MuiMenuList,
  MenuListProps as MuiMenuListProps,
} from '@mui/material';

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

export const Menu = (props: MenuProps): JSX.Element => {
  return <MuiMenu {...props} slotProps={{ paper: { variant: 'elevation' } }} />;
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
