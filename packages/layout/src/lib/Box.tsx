import MuiBox, { BoxProps as MuiBoxProps } from '@mui/material/Box';

export interface BoxProps extends MuiBoxProps {
  children?: React.ReactNode;
}

export const Box = ({ children, ...rest }: BoxProps): JSX.Element => {
  return <MuiBox {...rest}>{children}</MuiBox>;
};
