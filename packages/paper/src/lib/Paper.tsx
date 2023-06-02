import { forwardRef } from 'react';
import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';

export type PaperProps = Omit<MuiPaperProps, 'classes' | 'style' | 'className' | 'sx' | 'variant'> & {
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant?: 'elevation' | 'outlined';
};

export const Paper = forwardRef<HTMLDivElement, PaperProps>((props, ref) => {
  return <MuiPaper {...props} ref={ref} />;
});
