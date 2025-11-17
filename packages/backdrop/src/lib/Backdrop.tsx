import { default as MuiBackdrop, BackdropProps as MuiBackdropProps } from '@mui/material/Backdrop';

export interface BackdropProps extends MuiBackdropProps {
  children?: React.ReactNode;
}

export const Backdrop = ({ children, ...rest }: BackdropProps): React.JSX.Element => {
  return <MuiBackdrop {...rest}>{children}</MuiBackdrop>;
};
