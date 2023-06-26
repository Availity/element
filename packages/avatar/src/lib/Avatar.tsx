import { Avatar as MuiAvatar, AvatarProps as MuiAvatarProps } from '@mui/material';
import React from 'react';
import { tokens } from '@availity/design-tokens';

export interface AvatarProps extends Omit<MuiAvatarProps, 'variant'> {
  /** The size of the component.
   * @default xl */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'; // If this changes, you will need to update the story as well. Options are hardcoded to ensure order.
}

const sizeStyling = {
  xs: { width: 18, height: 18, fontSize: tokens.fontSizesCaption },
  s: { width: 24, height: 24, fontSize: tokens.fontSizesCaption },
  m: { width: 40, height: 40, fontSize: tokens.fontSizesH5, fontWeight: tokens.fontWeightsBold },
  l: { width: 80, height: 80, fontSize: tokens.fontSizesH3, fontWeight: tokens.fontWeightsBold },
  xl: { width: 140, height: 140, fontSize: tokens.fontSizesH1, fontWeight: tokens.fontWeightsBold },
};

const getInitials = (name: string, size: 'xs' | 's' | 'm' | 'l' | 'xl'): string => {
  if (name.split(' ').length > 1 && size !== 'xs') {
    return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
  }

  return name.charAt(0);
};

const formatChildren = (children: React.ReactNode, size: 'xs' | 's' | 'm' | 'l' | 'xl'): React.ReactNode => {
  if (typeof children === 'string') {
    return getInitials(children, size).toUpperCase();
  }

  return children;
};

export const Avatar = ({ children, size = 'xl', sx, ...rest }: AvatarProps): JSX.Element => {
  return (
    <MuiAvatar
      {...rest}
      variant="circular"
      sx={{
        ...sx,
        ...(sizeStyling[size] || sizeStyling.xl),
      }}
    >
      {formatChildren(children, size)}
    </MuiAvatar>
  );
};
