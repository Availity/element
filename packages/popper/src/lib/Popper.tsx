import { Popper as MuiPopper, PopperProps as MuiPopperProps } from '@mui/material';

export type PopperProps = MuiPopperProps;

export const Popper = ({ children, ...rest }: PopperProps): JSX.Element => {
  return <MuiPopper {...rest}>{children}</MuiPopper>;
};
