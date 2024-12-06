import React, { forwardRef } from 'react';
import { default as MUIAlert, AlertProps as MUIAlertProps } from '@mui/material/Alert';
import { IconButton } from '@availity/mui-button';
import type { IconButtonProps } from '@availity/mui-button';
import { InfoCircleIcon, WarningCircleIcon, SuccessCircleIcon, CloseIcon } from '@availity/mui-icon';

export type AlertProps = Omit<MUIAlertProps, 'variant' | 'color' | 'components' | 'componentProps' | 'slots'> & {
  severity?: 'success' | 'info' | 'warning' | 'error';
};

export const AlertIcons = {
  error: <WarningCircleIcon color="error"/>,
  info: <InfoCircleIcon color="info"/>,
  success: <SuccessCircleIcon color="success"/>,
  warning: <WarningCircleIcon color="warning" sx={{ color: 'warning.dark' }} />,
};

export const Alert = forwardRef<HTMLDivElement, AlertProps>((allProps, ref) => {
  const { action, onClose, closeText = "dismiss alert", ...args } = allProps;

const ComboActionClose = (args: IconButtonProps) => (
  <>
    {action}
    <IconButton size="small" {...args}/>
  </>
);

const slots = {
  closeButton: action ? ComboActionClose : IconButton,
  closeIcon: CloseIcon
};

  return (
    <MUIAlert
      variant="standard"
      action={onClose ? undefined : action}
      onClose={onClose}
      closeText={closeText}
      iconMapping={AlertIcons}
      slots={slots}
      ref={ref}
      {...args}
    />
  )
});
