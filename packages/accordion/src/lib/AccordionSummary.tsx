import MuiAccordionSummary, { AccordionSummaryProps as MuiAccordionSummaryProps } from '@mui/material/AccordionSummary';
import { TriangleExpandIcon } from '@availity/mui-icon';
import { forwardRef } from 'react';

export type AccordionSummaryProps = Omit<
  MuiAccordionSummaryProps,
  | 'centerRipple'
  | 'component'
  | 'disableRipple'
  | 'disableTouchRipple'
  | 'expandIcon'
  | 'focusRipple'
  | 'focusVisibleClassname'
  | 'onFocusVisible'
  | 'TouchRippleProps'
  | 'touchRippleRef'
>;

export const AccordionSummary = forwardRef<HTMLDivElement, AccordionSummaryProps>((props, ref) => (
  <MuiAccordionSummary {...props} expandIcon={<TriangleExpandIcon />} ref={ref} />
));
