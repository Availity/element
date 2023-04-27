import React from 'react';
import { IconButton as MUIIconButton, Tooltip, useThemeProps } from '@mui/material';
import type { IconButtonProps as MUIIconButtonProps } from '@mui/material';

export type IconButtonProps = {
  /**
   * Text for tooltip and aria-label
   */
  title: string;
  children: React.ReactNode;
} & Omit<MUIIconButtonProps, 'aria-label'>;



export const IconButton = ({ children, title, ...rest }: IconButtonProps): JSX.Element => (
  <Tooltip title={title}>
    <MUIIconButton aria-label={title} disableRipple {...rest}>
      {children}
    </MUIIconButton>
  </Tooltip>
);
