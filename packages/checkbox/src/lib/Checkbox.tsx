import { forwardRef } from 'react';
import { default as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material/Checkbox';

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
