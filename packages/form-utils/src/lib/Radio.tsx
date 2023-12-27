import { Radio as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material';

export type RadioProps = Omit<
  MuiRadioProps,
  | 'centerRipple'
  | 'color'
  | 'disableFocusRipple'
  | 'disableRipple'
  | 'disableTouchRipple'
  | 'focusRipple'
  | 'focusVisibleClassName'
  | 'TouchRippleProps'
  | 'touchRippleRef'
>;

export const Radio = (args: RadioProps): JSX.Element => {
  return <MuiRadio {...args} />;
};
