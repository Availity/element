import { default as MuiTab, TabProps as MuiTabProps } from '@mui/material/Tab';

export type TabProps = Omit<
  MuiTabProps,
  | 'centerRipple'
  | 'disableFocusRipple'
  | 'disableRipple'
  | 'disableTouchRipple'
  | 'focusRipple'
  | 'icon'
  | 'iconPosition'
  | 'touchRippleRef'
  | 'TouchRippleProps'
>;

export const Tab = (props: TabProps): JSX.Element => {
  return <MuiTab {...props} disableRipple disableFocusRipple disableTouchRipple />;
};
