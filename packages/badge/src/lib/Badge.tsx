import React from 'react';
import { default as MUIBadge, BadgeProps as MUIBadgeProps } from '@mui/material/Badge';

export interface BadgeProps extends MUIBadgeProps {
  badgeContent?: number;
  children: React.ReactNode;
  color?: 'primary' | 'error' | 'success';
}

export const Badge = ({ children, color = 'error', ...rest }: BadgeProps): React.JSX.Element => (
  <MUIBadge color={color} {...rest}>
    {children}
  </MUIBadge>
);
