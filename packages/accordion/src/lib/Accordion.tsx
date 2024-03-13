import MuiAccordion, { AccordionProps as MuiAccordionProps } from '@mui/material/Accordion';
import { forwardRef } from 'react';

export type AccordionProps = Omit<MuiAccordionProps, 'component' | 'TransitionComponent' | 'TransitionProps'>;

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>((props, ref) => (
  <MuiAccordion {...props} ref={ref} />
));
