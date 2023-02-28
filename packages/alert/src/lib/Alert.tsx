import React from 'react';
import { Alert as MUIAlert } from '@mui/material';
import type { AlertProps as MUIAlertProps } from '@mui/material';
// import Icon from '@availity/mui-icon';

export type AlertProps = {
  children: React.ReactNode;
} & MUIAlertProps;

export const Alert = ({ children, ...rest }: AlertProps): JSX.Element => (
  <MUIAlert {...rest}>
    {children}
  </MUIAlert>
);
