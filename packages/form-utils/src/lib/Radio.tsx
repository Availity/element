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
  | 'size'
  | 'TouchRippleProps'
  | 'touchRippleRef'
>;

export const Radio = (args: RadioProps): JSX.Element => {
  return <MuiRadio {...args} size="small" />;
};
