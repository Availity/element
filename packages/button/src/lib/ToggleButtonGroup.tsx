import {
  ToggleButtonGroup as MuiToggleButtonGroup,
  ToggleButtonGroupProps as MuiToggleButtonGroupProps,
  ToggleButtonGroupPropsColorOverrides,
} from '@mui/material';
import { ToggleButtonProps } from './ToggleButton';

declare module '@mui/material/ToggleButtonGroup' {
  interface ToggleButtonGroupPropsColorOverrides {
    tertiary: true;
  }
}

export type ToggleButtonGroupProps = Pick<ToggleButtonProps, 'color'> &
  Omit<MuiToggleButtonGroupProps, 'color' | 'disableElevation' | 'disableFocusRipple' | 'disableRipple'>;

export const ToggleButtonGroup = ({ ...args }: ToggleButtonGroupProps): JSX.Element => {
  return <MuiToggleButtonGroup {...args} />;
};
