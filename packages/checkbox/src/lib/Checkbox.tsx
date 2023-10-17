import { forwardRef } from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';

export interface CheckboxProps
  extends Omit<
    MuiCheckboxProps,
    | 'centerRipple'
    | 'disableFocusRipple'
    | 'disableRipple'
    | 'disableTouchRipple'
    | 'focusRipple'
    | 'size'
    | 'TouchRippleProps'
    | 'touchRippleRef'
  > {
  color?: 'primary' | 'error';
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => {
  return <MuiCheckbox {...props} ref={ref} size="medium" />;
});
