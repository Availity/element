import React from 'react';
import { AlertTitle as MUIAlertTitle } from '@mui/material';
import type { AlertTitleProps as MUIAlertTitleProps } from '@mui/material';

export type AlertTitleProps = {
  children: React.ReactNode;
} & MUIAlertTitleProps;

export const AlertTitle = ({ children, ...rest }: AlertTitleProps): JSX.Element => (
  <MUIAlertTitle {...rest}>
    {children}
  </MUIAlertTitle>
);
