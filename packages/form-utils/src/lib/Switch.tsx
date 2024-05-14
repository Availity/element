import MuiSwitch, { SwitchProps as MuiSwitchProps } from '@mui/material/Switch';

export type SwitchProps = Omit<
  MuiSwitchProps,
  | 'centerRipple'
  | 'disableFocusRipple'
  | 'disableRipple'
  | 'disableTouchRipple'
  | 'focusRipple'
  | 'focusVisibleClassName'
  | 'TouchRippleProps'
  | 'touchRippleRef'
>;

export const Switch = (args: SwitchProps): JSX.Element => {
  return <MuiSwitch {...args} />;
};
