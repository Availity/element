import { default as MuiPopper, PopperProps as MuiPopperProps } from '@mui/material/Popper';

export type PopperProps = MuiPopperProps;

export const Popper = ({ children, ...rest }: PopperProps): JSX.Element => {
  return <MuiPopper {...rest}>{children}</MuiPopper>;
};
