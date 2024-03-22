import { forwardRef } from 'react';
import MuiRadioGroup, { RadioGroupProps as MuiRadioGroupProps } from '@mui/material/RadioGroup';

export interface RadioGroupProps extends MuiRadioGroupProps {
  children?: React.ReactNode;
}

export const RadioGroup = forwardRef(({ children, ...rest }: RadioGroupProps, ref) => {
  return (
    <MuiRadioGroup {...rest} ref={ref}>
      {children}
    </MuiRadioGroup>
  );
});
