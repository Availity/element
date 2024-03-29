import { Divider as MuiDivider, DividerProps as MuiDividerProps } from '@mui/material';

export type DividerProps = Omit<MuiDividerProps, 'children' | 'textAlign'>;

export const Divider = (props: DividerProps): JSX.Element => {
  return <MuiDivider {...props} />;
};
