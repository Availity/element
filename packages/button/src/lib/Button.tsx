import { forwardRef } from 'react';
import { Button as MUIButton, ButtonPropsColorOverrides } from '@mui/material';
import type { ButtonProps as MUIButtonProps } from '@mui/material';

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
  }
}

export type ButtonProps = {
  /** The color of the component.
   * @default secondary */
  color?: 'primary' | 'secondary' | 'tertiary' | 'error';
  /** The variant to use.
   * @default contained */
  variant?: 'outlined' | 'contained';
  /** Internal prop used by IconButton for contained variant. */
  iconOnly?: boolean;
} & Omit<
  MUIButtonProps,
  | 'color'
  | 'component'
  | 'variant'
  | 'disableElevation'
  | 'disableFocusRipple'
  | 'disableTouchRipple'
  | 'centerRipple'
  | 'disableRipple'
  | 'focusRipple'
  | 'TouchRippleProps'
  | 'touchRippleRef'
>;

const overrideProps = {
  disableRipple: true,
  disableFocusRipple: true,
  disableTouchRipple: true,
};

const iconOnlyStyles = {
  minWidth: 2,
  px: 1,
  '& .MuiButton-startIcon': {
    m: 0,
  },
  '& .MuiButton-endIcon': {
    m: 0,
  },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { iconOnly, sx, ...rest } = props;
  const styles = {
    ...(iconOnly && iconOnlyStyles),
  };

  return <MUIButton sx={{ ...styles, ...sx }} {...rest} {...overrideProps} ref={ref} />;
});
