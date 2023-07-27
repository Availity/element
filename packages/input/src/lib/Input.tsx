import { OutlinedInput as MuiInput, OutlinedInputProps as MuiInputProps } from '@mui/material';

export type InputProps = Omit<
  MuiInputProps,
  'children' | 'components' | 'componentsProps' | 'inputComponent' | 'slots' | 'slotProps' | 'sx'
>;

// FIXME: move to theme
const styles = { input: { padding: '15px 12px' } };

export const Input = (props: InputProps): JSX.Element => {
  return <MuiInput {...props} sx={styles} />;
};
