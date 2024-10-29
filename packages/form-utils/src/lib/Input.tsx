import { forwardRef } from 'react';
import MuiInput, { OutlinedInputProps as MuiInputProps } from '@mui/material/OutlinedInput';
import InputAdornment, { InputAdornmentProps } from '@mui/material/InputAdornment';

export type InputProps = Omit<
  MuiInputProps,
  'children' | 'components' | 'componentsProps' | 'notched' | 'slots' | 'slotProps'
>;

/** Availity predefined overrides for input component */
export const InputPropOverrides = {
  notched: false,
};

export const Input = forwardRef((props: InputProps, ref) => {
  const { required, inputProps, ...rest } = props;
  return (
    <MuiInput
      {...rest}
      {...InputPropOverrides}
      ref={ref}
      inputProps={{ 'aria-required': required || undefined, ...inputProps }}
    />
  );
});

export { InputAdornment };
export type { InputAdornmentProps };
