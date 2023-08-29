import { forwardRef } from 'react';
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material';

export interface TypographyProps extends MuiTypographyProps {
  children?: React.ReactNode;
}

export const Typography = forwardRef<HTMLHeadElement | HTMLParagraphElement | HTMLSpanElement, TypographyProps>(
  ({ children, ...rest }, ref) => {
    return (
      <MuiTypography {...rest} ref={ref}>
        {children}
      </MuiTypography>
    );
  }
);
