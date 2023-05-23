import React, { forwardRef, ReactElement } from 'react';
import { Tooltip as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material';

export type TooltipProps = Omit<
  MuiTooltipProps,
  | 'arrow'
  | 'id'
  | 'classes'
  | 'components'
  | 'componentsProps'
  | 'describeChild'
  | 'disableFocusListener'
  | 'disableHoverListener'
  | 'disableInteractive'
  | 'disableTouchListener'
  | 'enterDelay'
  | 'enterNextDelay'
  | 'enterTouchDelay'
  | 'followCursor'
  | 'leaveTouchDelay'
  | 'onClose'
  | 'onOpen'
  | 'open'
  | 'PopperComponent'
  | 'PopperProps'
  | 'slotProps'
  | 'slots'
  | 'sx'
  | 'TransitionComponent'
  | 'TransitionProps'
> & {
  /** Sets the duration in ms of the animation to hide/show tooltip.
   *
   * **Default:** `100` */
  dangerouslySetTransitionTimer?: number;
};

export const Tooltip = forwardRef<ReactElement, TooltipProps>((props, forwardedRef) => {
  const {
    children,
    dangerouslySetTransitionTimer,
    arrow,
    id,
    classes,
    components,
    componentsProps,
    describeChild,
    disableFocusListener,
    disableHoverListener,
    disableInteractive,
    disableTouchListener,
    enterDelay,
    enterNextDelay,
    enterTouchDelay,
    followCursor,
    leaveTouchDelay,
    onClose,
    onOpen,
    open,
    PopperComponent,
    PopperProps,
    slotProps,
    slots,
    sx,
    TransitionComponent,
    TransitionProps,
    ...rest
  } = props as TooltipProps & MuiTooltipProps;

  return (
    <MuiTooltip
      {...rest}
      ref={forwardedRef}
      TransitionProps={{ timeout: dangerouslySetTransitionTimer !== undefined ? dangerouslySetTransitionTimer : 100 }}
      arrow
    >
      {children}
    </MuiTooltip>
  );
});
