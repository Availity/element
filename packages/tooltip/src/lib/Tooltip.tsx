import { default as MuiTooltip, TooltipProps as MuiTooltipProps } from '@mui/material/Tooltip';

export type TooltipProps = Omit<
  MuiTooltipProps,
  | 'arrow'
  | 'classes'
  | 'components'
  | 'componentsProps'
  | 'disableFocusListener'
  | 'disableHoverListener'
  | 'disableInteractive'
  | 'disableTouchListener'
  | 'enterDelay'
  | 'enterNextDelay'
  | 'enterTouchDelay'
  | 'followCursor'
  | 'leaveTouchDelay'
  | 'PopperComponent'
  | 'PopperProps'
  | 'slotProps'
  | 'slots'
  | 'sx'
  | 'TransitionComponent'
  | 'TransitionProps'
> & {
  /** Sets the duration in ms of the animation to hide/show tooltip.
   * @default 100 */
  dangerouslySetTransitionTimer?: number;
};

export const Tooltip = (props: TooltipProps) => {
  const { children, dangerouslySetTransitionTimer, ...rest } = props;

  return (
    <MuiTooltip
      {...rest}
      TransitionProps={{ timeout: dangerouslySetTransitionTimer !== undefined ? dangerouslySetTransitionTimer : 100 }}
      arrow
    >
      {children}
    </MuiTooltip>
  );
};
