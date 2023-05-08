import React from 'react';
import { Button as MUIButton } from '@mui/material';
import type { ButtonProps as MUIButtonProps } from '@mui/material';

export type ButtonProps = {
  /**
   * The color of the component.
   */
  color?: "primary" | "secondary" | "tertiary" | "error";
} & Omit<MUIButtonProps, 'color' | 'disableElevation' | 'disableFocusRipple' | 'disableTouchRipple' | 'centerRipple' | 'disableRipple' | 'focusRipple' | 'TouchRippleProps' | 'touchRippleRef'>;

const tertiaryContainedStyles = {
  bgcolor: 'tertiary.main',
  color: 'black',
  '&:focus, &:hover': {
    bgcolor: 'tertiary.dark'
  },
  '&:active': {
    bgcolor: 'tertiary.light'
  }
};

export const Button = ({ color="secondary",  variant="contained", ...rest }: ButtonProps): JSX.Element => (
  <MUIButton
    color={color=="tertiary" ? "secondary" : color}
    variant={variant}
    sx={color=="tertiary" && variant=="contained" ? {...tertiaryContainedStyles} : undefined}
    disableRipple
    {...rest}
  />
);
