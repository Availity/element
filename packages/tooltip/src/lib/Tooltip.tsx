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
>;

export const Tooltip = forwardRef<ReactElement, TooltipProps>((props, forwardedRef) => {
  const {
    children,
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
    <MuiTooltip {...rest} ref={forwardedRef} arrow>
      {children}
    </MuiTooltip>
  );
});
