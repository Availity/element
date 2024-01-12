import { forwardRef } from 'react';
import { IconButton as MuiIconButton, Tooltip } from '@mui/material';
import type { IconButtonProps as MUIIconButtonProps } from '@mui/material';

export type IconButtonProps = {
  /**
   * Text for tooltip and aria-label
   */
  title: string;
  /**
   * The variant to use
   * @default 'text'
   */
  variant?: 'outlined' | 'text';
  /**
   * The color of the component
   * @default 'secondary'
   */
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium';
} & Omit<
  MUIIconButtonProps,
  | 'aria-label'
  | 'color'
  | 'centerRipple'
  | 'disableRipple'
  | 'disableTouchRipple'
  | 'focusRipple'
  | 'disableFocusRipple'
  | 'TouchRippleProps'
  | 'touchRippleRef'
>;

// IconButtonVariants not planned until v6 :(
const outlinedStyles = {
  borderRadius: '.25rem',
  border: 1,
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { title, variant = 'text', sx, size = 'medium', ...rest } = props;
  const styles = {
    ...sx,
    ...(variant === 'outlined' && outlinedStyles),
  };
  return (
    <Tooltip title={title}>
      <MuiIconButton aria-label={title} sx={{ ...styles }} {...rest} ref={ref} size={size} />
    </Tooltip>
  );
});
