import React from 'react';
import { Alert as MUIAlert } from '@mui/material';
import type { AlertProps as MUIAlertProps } from '@mui/material';
import { InfoCircleIcon, WarningCircleIcon, SuccessCircleIcon } from '@availity/mui-icon';

export type AlertProps =  MUIAlertProps;

const iconMapping =  {
  error: <WarningCircleIcon aria-hidden={false} />,
  info: <InfoCircleIcon aria-hidden={false} />,
  success: <SuccessCircleIcon aria-hidden={false} />,
  warning: <WarningCircleIcon aria-hidden={false} sx={{ color: 'warning.dark' }}/>
}

export const Alert = ({ ...args }: AlertProps): JSX.Element => (
  <MUIAlert iconMapping={iconMapping} closeText="dismiss alert" {...args}/>
);
