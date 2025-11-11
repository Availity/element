import { default as MuiRadio, RadioProps as MuiRadioProps } from '@mui/material/Radio';

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

export const Radio = (args: RadioProps): React.JSX.Element => {
  return <MuiRadio {...args} size="small" />;
};
