import React from 'react';
import { Button as MUIButton } from '@mui/material';
import {LoadingButton as MUILoadingButton} from '@mui/lab'
import type { ButtonProps as MUIButtonProps } from '@mui/material';
// import Icon from '@availity/mui-icon';

export type ButtonProps = {
  children: React.ReactNode;
} & MUIButtonProps;

export const Button = ({ children, ...rest }: ButtonProps): JSX.Element => (
  <MUIButton {...rest}>
    {children}
  </MUIButton>
);

export const LoadingButton = ({ children, ...rest }: ButtonProps): JSX.Element => (
  <MUILoadingButton {...rest}>
    {children}
  </MUILoadingButton>
);


