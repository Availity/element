import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
} from '@mui/material';

export interface ToggleButtonGroupProps extends MuiToggleButtonGroupProps {
  children?: React.ReactNode;
}

export const ToggleButtonGroup = ({ children, ...rest }: ToggleButtonGroupProps): JSX.Element => {
  return <MuiToggleButtonGroup {...rest}>{children}</MuiToggleButtonGroup>;
};
