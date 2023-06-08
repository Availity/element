import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@mui/material';
import React from 'react';
import { tokens } from '@availity/design-tokens';

export interface AvatarProps extends MuiAvatarProps {
  children: React.ReactNode;
  size?: 'large' | 'medium' | 'small';
}

const getInitials = (name: string, size: 'large' | 'medium' | 'small'): string => {
  if (name.split(' ').length > 1 && size !== 'small') {
    return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
  }

  return name.charAt(0);
};

const formatChildren = (children: React.ReactNode, size: 'large' | 'medium' | 'small'): React.ReactNode => {
  if (typeof children === 'string') {
    return getInitials(children, size).toUpperCase();
  }

  return children;
};

export const Avatar = ({ children, size = 'large', sx, ...rest }: AvatarProps): JSX.Element => {
  const sizeStyling = {
    small: { width: 18, height: 18, fontSize: '.75rem' },
    medium: { width: 24, height: 24, fontSize: '.75rem' },
    large: { width: 40, height: 40, fontSize: '100%', fontWeight: tokens.fontWeightsBold },
  };
  return (
    <MuiAvatar
      sx={{
        ...sx,
        ...(sizeStyling[size] || sizeStyling.large),
      }}
      {...rest}
    >
      {formatChildren(children, size)}
    </MuiAvatar>
  );
};
