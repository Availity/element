import React from 'react';
import { default as MUIAlert, AlertProps as MUIAlertProps } from '@mui/material/Alert';
import { IconButton } from '@availity/mui-button';
import { InfoCircleIcon, WarningCircleIcon, SuccessCircleIcon } from '@availity/mui-icon';

export type AlertProps = Omit<MUIAlertProps, 'variant' | 'color'> & {
  severity?: 'success' | 'info' | 'warning' | 'error';
};

const iconMapping = {
  error: <WarningCircleIcon />,
  info: <InfoCircleIcon />,
  success: <SuccessCircleIcon />,
  warning: <WarningCircleIcon sx={{ color: 'warning.dark' }} />,
};

export const Alert = ({ ...args }: AlertProps): JSX.Element => (
  <MUIAlert
    variant="standard"
    iconMapping={iconMapping}
    closeText="dismiss alert"
    slots={{ closeButton: IconButton }}
    slotProps={{ closeButton: { size: 'small' } }}
    {...args}
  />
);
