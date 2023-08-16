import { forwardRef } from 'react';
import { IconButton as MuiIconButton, Tooltip } from '@mui/material';
import type { IconButtonProps as MUIIconButtonProps } from '@mui/material';

export type IconButtonProps = {
  /**
   * Text for tooltip and aria-label
   */
  title: string;
} & Omit<
  MUIIconButtonProps,
  | 'aria-label'
  | 'centerRipple'
  | 'disableRipple'
  | 'disableTouchRipple'
  | 'focusRipple'
  | 'disableFocusRipple'
  | 'TouchRippleProps'
  | 'touchRippleRef'
>;

const overrideProps = {
  disableRipple: true,
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const { title, ...rest } = props;
  return (
    <Tooltip title={title}>
      <MuiIconButton aria-label={title} {...rest} {...overrideProps} ref={ref} />
    </Tooltip>
  );
});
