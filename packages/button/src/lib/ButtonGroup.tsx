import {
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps,
  ButtonGroupPropsColorOverrides,
} from '@mui/material';
import { ButtonProps } from './Button';

declare module '@mui/material/ButtonGroup' {
  interface ButtonGroupPropsColorOverrides {
    tertiary: true;
  }
}

export type ButtonGroupProps = {
  /** The color of the component.
   * @default secondary */
  color?: 'primary' | 'secondary' | 'tertiary';
} & Pick<ButtonProps, 'variant'> &
  Omit<MuiButtonGroupProps, 'color' | 'variant' | 'disableElevation' | 'disableFocusRipple' | 'disableRipple'>;

export const ButtonGroup = ({ ...args }: ButtonGroupProps): JSX.Element => {
  return <MuiButtonGroup {...args} />;
};
