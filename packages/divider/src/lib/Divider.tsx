import { default as MuiDivider, DividerProps as MuiDividerProps } from '@mui/material/Divider';

export type DividerProps = Omit<MuiDividerProps, 'children' | 'textAlign'>;

export const Divider = (props: DividerProps): JSX.Element => {
  return <MuiDivider {...props} />;
};
