import { OutlinedInput as MuiInput, OutlinedInputProps as MuiInputProps } from '@mui/material';

export type InputProps = Omit<
  MuiInputProps,
  'children' | 'components' | 'componentsProps' | 'inputComponent' | 'slots' | 'slotProps' | 'sx'
>;

export const Input = (props: InputProps): JSX.Element => {
  return <MuiInput {...props} />;
};
