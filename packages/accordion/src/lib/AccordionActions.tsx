import MuiAccordionActions, { AccordionActionsProps as MuiAccordionActionsProps } from '@mui/material/AccordionActions';
import { forwardRef } from 'react';

export type AccordionActionsProps = MuiAccordionActionsProps;

export const AccordionActions = forwardRef<unknown, AccordionActionsProps>((props, ref) => (
  <MuiAccordionActions {...props} ref={ref} />
));
