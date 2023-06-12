import React from 'react';
import { Alert as MUIAlert } from '@mui/material';
import type { AlertProps as MUIAlertProps } from '@mui/material';
import { InfoCircleIcon, WarningCircleIcon, SuccessCircleIcon } from '@availity/mui-icon';

export type AlertProps = Omit<MUIAlertProps, 'variant'>;

const iconMapping = {
  error: <WarningCircleIcon aria-hidden={false} titleAccess="error" />,
  info: <InfoCircleIcon aria-hidden={false} />,
  success: <SuccessCircleIcon aria-hidden={false} />,
  warning: <WarningCircleIcon aria-hidden={false} sx={{ color: 'warning.dark' }} />,
};

export const Alert = ({ ...args }: AlertProps): JSX.Element => (
  <MUIAlert variant="standard" iconMapping={iconMapping} closeText="dismiss alert" {...args} />
);
