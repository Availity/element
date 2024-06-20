import { forwardRef } from 'react';
import { default as MuiTypography, TypographyProps as MuiTypographyProps } from '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    agreement: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    agreement?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    agreement: true;
  }
}

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
