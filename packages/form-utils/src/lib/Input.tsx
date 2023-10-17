import { OutlinedInput as MuiInput, OutlinedInputProps as MuiInputProps } from '@mui/material';

export type InputProps = Omit<
  MuiInputProps,
  'children' | 'components' | 'componentsProps' | 'inputComponent' | 'notched' | 'slots' | 'slotProps' | 'sx'
>;

/** Availity predefined overrides for input component */
export const InputPropOverrides = {
  notched: false,
};

export const Input = (props: InputProps): JSX.Element => {
  return <MuiInput {...props} {...InputPropOverrides} />;
};
