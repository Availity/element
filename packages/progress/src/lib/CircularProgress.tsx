import {
  CircularProgress as MuiCircularProgress,
  CircularProgressProps as MuiCircularProgressProps,
} from '@mui/material';

export interface CircularProgressProps extends MuiCircularProgressProps {
  color?: 'primary' | 'inherit';
}

export const CircularProgress = ({ ...props }: CircularProgressProps): JSX.Element => {
  return <MuiCircularProgress {...props} />;
};
