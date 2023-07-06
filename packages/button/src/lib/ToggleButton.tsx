import { forwardRef } from 'react';
import { ToggleButton as MUIToggleButton, ToggleButtonPropsColorOverrides } from '@mui/material';
import type { ToggleButtonProps as MUIToggleButtonProps } from '@mui/material';

declare module '@mui/material/ToggleButton' {
  interface ToggleButtonPropsColorOverrides {
    tertiary: true;
  }
}

export type ToggleButtonProps = {
  /** The color of the component.
   * @default secondary */
  color?: 'primary' | 'secondary' | 'tertiary';
} & Omit<
  MUIToggleButtonProps,
  | 'color'
  | 'component'
  | 'disableElevation'
  | 'disableFocusRipple'
  | 'disableTouchRipple'
  | 'centerRipple'
  | 'disableRipple'
  | 'focusRipple'
  | 'TouchRippleProps'
  | 'touchRippleRef'
>;

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>((props, ref) => {
  return <MUIToggleButton disableRipple {...props} ref={ref} />;
});
