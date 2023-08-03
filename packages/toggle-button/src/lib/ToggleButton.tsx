import { ToggleButton as MuiToggleButton, ToggleButtonProps as MuiToggleButtonProps } from '@mui/material';

export interface ToggleButtonProps extends MuiToggleButtonProps {
  children?: React.ReactNode;
}

export const ToggleButton = ({ children, ...rest }: ToggleButtonProps): JSX.Element => {
  return <MuiToggleButton {...rest}>{children}</MuiToggleButton>;
};
