import MuiInput, { OutlinedInputProps as MuiInputProps } from '@mui/material/OutlinedInput';
import InputAdornment, { InputAdornmentProps } from '@mui/material/InputAdornment';

export type InputProps = Omit<
  MuiInputProps,
  'children' | 'components' | 'componentsProps' | 'inputComponent' | 'notched' | 'slots' | 'slotProps'
>;

/** Availity predefined overrides for input component */
export const InputPropOverrides = {
  notched: false,
};

export const Input = (props: InputProps): JSX.Element => {
  const { required, ...rest } = props;
  return <MuiInput {...rest} {...InputPropOverrides} aria-required={required || undefined} />;
};

export { InputAdornment };
export type { InputAdornmentProps };
