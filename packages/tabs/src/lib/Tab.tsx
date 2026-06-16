import { default as MuiTab, TabProps as MuiTabProps } from '@mui/material/Tab';

export type TabProps = Omit<
  MuiTabProps,
  | 'centerRipple'
  | 'disableFocusRipple'
  | 'disableRipple'
  | 'disableTouchRipple'
  | 'focusRipple'
  | 'touchRippleRef'
  | 'TouchRippleProps'
>;

export const Tab = (props: TabProps): React.JSX.Element => <MuiTab {...props} disableRipple disableFocusRipple disableTouchRipple />;
