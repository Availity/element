import { Badge as MUIBadge } from '@mui/material';
import type { BadgeProps as MUIBadgeProps } from '@mui/material';
// import Icon from '@availity/mui-icon';

export type BadgeProps = {
  children: React.ReactNode;
} & MUIBadgeProps;

export const Badge = ({ children, ...rest }: BadgeProps): JSX.Element => (
  <MUIBadge {...rest}>
    {children}
  </MUIBadge>
);
