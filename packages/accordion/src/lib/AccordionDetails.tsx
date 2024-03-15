import MuiAccordionDetails, { AccordionDetailsProps as MuiAccordionDetailsProps } from '@mui/material/AccordionDetails';
import { forwardRef } from 'react';

export type AccordionDetailsProps = MuiAccordionDetailsProps;

export const AccordionDetails = forwardRef<unknown, AccordionDetailsProps>((props, ref) => (
  <MuiAccordionDetails {...props} ref={ref} />
));
