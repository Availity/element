import { useEffect, useState } from 'react';
import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
  Stack,
} from '@mui/material';
import { SuccessCircleIcon, WarningCircleIcon } from '@availity/mui-icon';
import { Typography } from '@availity/mui-typography';

export interface CircularProgressProps extends MuiCircularProgressProps {
  color?: 'primary' | 'inherit';
  error?: boolean;
  success?: boolean;
  loadingCaption?: boolean;
}

export type StatusIconProps = {
  status: string;
};

const StatusIcon = ({ status }: StatusIconProps) => {
  switch (status) {
    case 'error':
      return <WarningCircleIcon color="error" fontSize="large" titleAccess="loading error" />;
    case 'success':
      return <SuccessCircleIcon color="success" fontSize="large" titleAccess="loading successful" />;
    default:
      return null;
  }
};

const getCaptionText = (status: string) =>
  ({
    loading: 'Loading',
    error: 'Loading error',
    success: 'Loading successful',
  }[status] || '');

export const CircularProgress = ({
  loadingCaption = true,
  error = false,
  success = false,
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
    <Stack width="fit-content" alignItems="center">
      {status === 'loading' ? <MuiCircularProgress {...props} /> : <StatusIcon status={status} />}
      <Typography marginTop="8px" variant="caption">
        {loadingCaption || error || success ? getCaptionText(status) : null}
      </Typography>
    </Stack>
  );
};
