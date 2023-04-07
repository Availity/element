import React from 'react';
import { Button as MUIButton } from '@mui/material';
import type { ButtonProps as MUIButtonProps } from '@mui/material';

export type ButtonProps = {
  children: React.ReactNode;
} & MUIButtonProps;

export const Button = ({ children, ...rest }: ButtonProps): JSX.Element => (
  <MUIButton {...rest}>
    {children}
  </MUIButton>
);


