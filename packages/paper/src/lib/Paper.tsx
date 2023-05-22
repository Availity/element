import { forwardRef } from 'react';
import { Paper as MuiPaper, PaperProps as MuiPaperProps } from '@mui/material';

export type PaperProps = Omit<MuiPaperProps, 'classes' | 'style' | 'className' | 'sx'>;

export const Paper = forwardRef<HTMLDivElement, PaperProps>(({ children, variant = 'outlined', ...rest }, ref) => {
  return (
    <MuiPaper variant={variant} {...rest} ref={ref}>
      {children}
    </MuiPaper>
  );
});
