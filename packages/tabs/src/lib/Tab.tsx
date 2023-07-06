import { Tab as MuiTab, TabProps as MuiTabProps } from '@mui/material';

export type TabProps = Omit<
  MuiTabProps,
  | 'centerRipple'
  | 'disableFocusRipple'
  | 'disableRipple'
  | 'disableTouchRipple'
  | 'focusRipple'
  | 'icon'
  | 'iconPosition'
  | 'TouchRippleProps'
>;

export const Tab = (props: TabProps): JSX.Element => {
  return <MuiTab {...props} />;
};
