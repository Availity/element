import React from 'react';
import MUILoadingButton, { LoadingButtonProps as MuiLoadingButtonProps} from '@mui/lab/LoadingButton';

export type LoadingButtonProps = {
  children: React.ReactNode;
} & MuiLoadingButtonProps;

export const LoadingButton = ({ children, ...rest }: LoadingButtonProps): JSX.Element => (
  <MUILoadingButton {...rest}>
    {children}
  </MUILoadingButton>
);


