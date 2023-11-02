import { Backdrop as MuiBackdrop, BackdropProps as MuiBackdropProps } from '@mui/material';

export interface BackdropProps extends MuiBackdropProps {
  children?: React.ReactNode;
}

export const Backdrop = ({ children, ...rest }: BackdropProps): JSX.Element => {
  return <MuiBackdrop {...rest}>{children}</MuiBackdrop>;
};
