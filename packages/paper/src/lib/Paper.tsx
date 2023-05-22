import { forwardRef } from 'react';
import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';

export type PaperProps = Omit<MuiPaperProps, 'classes' | 'style' | 'className' | 'sx'>;

export const Paper = forwardRef<HTMLDivElement, PaperProps>((props, ref) => {
  return <MuiPaper {...props} ref={ref} />;
});
