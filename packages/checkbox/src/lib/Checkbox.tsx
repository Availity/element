import { forwardRef } from 'react';
import { Checkbox as MuiCheckbox, CheckboxProps as MuiCheckboxProps } from '@mui/material';

export interface CheckboxProps extends Omit<MuiCheckboxProps, 'size'> {
  children?: React.ReactNode;
  color?: 'primary' | 'error';
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>((props, ref) => {
  return <MuiCheckbox {...props} ref={ref} size="medium" />;
});
