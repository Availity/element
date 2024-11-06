import { useEffect, useState } from 'react';
import {
  default as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import { SuccessCircleIcon, WarningCircleIcon } from '@availity/mui-icon';
import { Typography } from '@availity/mui-typography';

export interface CircularProgressProps
  extends Omit<MuiCircularProgressProps, 'disableShrink' | 'thickness' | 'variant'> {
  /**@default 'primary' */
  color?: 'primary' | 'inherit';
  /** If `true` the the loading animation is replaced with Error Icon and the words "Loading error" display.
   * @default false
   */
  error?: boolean;
  /** If `true` the the loading animation is replaced with Success Icon and the words "Loading successful" display. Note: This is overridden by the `error` prop.
   * @default false
   */
  success?: boolean;
  /** If `true` the  word "Loading" displays beneath the icon
   * @default true
   */
  loadingCaption?: boolean;
  /** The size of the component.
   * @default 'default'
   */
  size?: 'default' | 'small';
}

export type StatusIconProps = {
  status: string;
  size: 'default' | 'small';
};

const StatusIcon = ({ status, size }: StatusIconProps) => {
  const fontSize = size === 'small' ? 'medium' : 'large';

  switch (status) {
    case 'error':
      return <WarningCircleIcon color="error" fontSize={fontSize} titleAccess="loading error" />;
    case 'success':
      return <SuccessCircleIcon color="success" fontSize={fontSize} titleAccess="loading successful" />;
    default:
      return null;
  }
};

const getCaptionText = (status: string) =>
  ({
    loading: 'Loading',
    error: 'Loading error',
    success: 'Loading successful',
  })[status] || '';

export const CircularProgress = ({
  loadingCaption = true,
  error = false,
  success = false,
  size = 'default',
  ...props
}: CircularProgressProps): JSX.Element => {
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    if (error) {
      setStatus('error');
    } else if (success) {
      setStatus('success');
    } else {
      setStatus('loading');
    }
  }, [error, success]);

  return (
    <Stack sx={{ width: 'fit-content', alignItems: 'center' }}>
      {status === 'loading' ? (
        <MuiCircularProgress
          aria-label="Loading"
          {...props}
          size={size === 'small' ? 24 : 40}
          variant="indeterminate"
        />
      ) : (
        <StatusIcon status={status} size={size} />
      )}
      <Typography sx={{ marginTop: '8px' }} variant="caption">
        {loadingCaption || error || success ? getCaptionText(status) : null}
      </Typography>
    </Stack>
  );
};
