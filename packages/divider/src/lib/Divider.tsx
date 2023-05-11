import { Divider as MuiDivider, DividerProps as MuiDividerProps } from '@mui/material';

export interface DividerProps extends MuiDividerProps {
  children: React.ReactNode;
}

export const Divider = ({ children, ...rest }: DividerProps): JSX.Element => {
  return <MuiDivider {...rest}>{children}</MuiDivider>;
};
