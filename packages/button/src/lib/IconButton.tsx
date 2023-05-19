import { IconButton as MuiIconButton, Tooltip } from '@mui/material';
import type { IconButtonProps as MUIIconButtonProps } from '@mui/material';
import { Button } from './Button';

export type IconButtonProps = {
  /**
   * Text for tooltip and aria-label
   */
  title: string;
  children: React.ReactNode;
  /**
   * Toggles contained Button styling
   */
  filled?: boolean;
  /**
   * The color of the component.
   */
  color?: "primary" | "secondary" | "tertiary" | "error";
} & Omit<MUIIconButtonProps, 'aria-label' | 'color' | 'centerRipple' | 'disableRipple' | 'disableTouchRipple' | 'focusRipple' | 'disableFocusRipple' | 'TouchRippleProps' | 'touchRippleRef'>;



export const IconButton = ({ children, title, filled, color = 'tertiary', ...rest }: IconButtonProps): JSX.Element => {
  return (
    <Tooltip title={title}>
      { filled ?
        <Button aria-label={title} color={color} startIcon={children} iconOnly {...rest}>{'\u2060'}</Button>
        :
        <MuiIconButton aria-label={title} disableRipple color={color === 'tertiary' ? 'secondary' : color} {...rest}>
          {children}
        </MuiIconButton>
      }
    </Tooltip>
  );
}
