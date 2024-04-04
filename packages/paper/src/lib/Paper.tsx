import { forwardRef } from 'react';
import { default as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material/Paper';

export type PaperProps = Omit<MuiPaperProps, 'classes' | 'style' | 'className' | 'variant'> & {
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant?: 'elevation' | 'outlined';
};

export const Paper = forwardRef<HTMLDivElement, PaperProps>((props, ref) => {
  return <MuiPaper {...props} ref={ref} />;
});
