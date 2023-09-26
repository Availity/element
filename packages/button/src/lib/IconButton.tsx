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
const textStyles = {
  border: 'none',
};

const outlinedStyles = {
  borderRadius: '.25rem',
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { title, variant = 'text', sx, ...rest } = props;
  const styles = {
    ...sx,
    ...(variant === 'text' ? textStyles : outlinedStyles),
  };
  return (
    <Tooltip title={title}>
      <MuiIconButton aria-label={title} sx={{ ...styles }} {...rest} ref={ref} />
    </Tooltip>
  );
});
