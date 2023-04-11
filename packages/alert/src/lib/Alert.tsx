import React from 'react';
import MUIAlert from '@mui/material/Alert';
import type { AlertProps as MUIAlertProps, AlertColor as MuiAlertColor } from '@mui/material/Alert';
import { InfoCircleIcon, WarningCircleIcon, SuccessCircleIcon } from '@availity/mui-icon';

export type AlertProps = {
  severity?: MuiAlertColor
} & MUIAlertProps;

const iconMapping =  {
  error: <WarningCircleIcon aria-hidden={false} titleAccess="error" />,
  info: <InfoCircleIcon aria-hidden={false} />,
  success: <SuccessCircleIcon aria-hidden={false} />,
  warning: <WarningCircleIcon aria-hidden={false} sx={{ color: 'warning.dark' }}/>
}

export const Alert = ({ ...args }: AlertProps): JSX.Element => (
  <MUIAlert iconMapping={iconMapping} closeText="dismiss alert" {...args}/>
);
