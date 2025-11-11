import React from 'react';
import { default as MUIAlertTitle, AlertTitleProps as MUIAlertTitleProps } from '@mui/material/AlertTitle';

export type AlertTitleProps = {
  children: React.ReactNode;
} & MUIAlertTitleProps;

export const AlertTitle = ({ children, ...rest }: AlertTitleProps): React.JSX.Element => (
  <MUIAlertTitle {...rest}>{children}</MUIAlertTitle>
);
