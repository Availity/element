import { forwardRef } from 'react';
import { Button as MUIButton } from '@mui/material';
import type { ButtonProps as MUIButtonProps } from '@mui/material';

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

const tertiaryContainedStyles = {
  bgcolor: 'tertiary.main',
  color: 'black',
  '&:focus, &:hover': {
    bgcolor: 'tertiary.dark',
  },
  '&:active': {
    bgcolor: 'tertiary.light',
  },
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
  const { color = 'secondary', variant = 'contained', iconOnly, sx, ...rest } = props;
  const styles = {
    ...(color == 'tertiary' && variant == 'contained' && tertiaryContainedStyles),
    ...(iconOnly && iconOnlyStyles),
  };

  return (
    <MUIButton
      color={color == 'tertiary' ? 'secondary' : color}
      variant={variant}
      sx={{ ...styles, ...sx }}
      disableRipple
      {...rest}
      ref={ref}
    />
  );
});
