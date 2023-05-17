import React from 'react';
import { Badge as MUIBadge } from '@mui/material';
import type { BadgeProps as MUIBadgeProps } from '@mui/material';

export interface BadgeProps extends MUIBadgeProps {
  badgeContent?: number;
  children: React.ReactNode;
  color?: 'primary' | 'error';
}

export const Badge = ({ children, color, ...rest }: BadgeProps): JSX.Element => (
  <MUIBadge color={color === 'primary' ? 'primary' : 'error'} {...rest}>
    {children}
  </MUIBadge>
);
