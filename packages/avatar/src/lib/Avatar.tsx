import { default as MuiAvatar, AvatarProps as MuiAvatarProps } from '@mui/material/Avatar';
import React, { useEffect } from 'react';
import { avSettingsApi } from '@availity/api-axios';
import { UserIcon } from '@availity/mui-icon';

export interface AvatarProps extends Omit<MuiAvatarProps, 'variant'> {
  /** The size of the component.
   * @default xl */
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'; // If this changes, you will need to update the story as well. Options are hardcoded to ensure order.
}

const sizeStyling = {
  xs: { width: 18, height: 18, fontSize: 'caption.fontSize' },
  s: { width: 24, height: 24, fontSize: 'caption.fontSize' },
  m: { width: 40, height: 40, fontSize: 'h5.fontSize', fontWeight: 'fontWeightBold' },
  l: { width: 80, height: 80, fontSize: 'h3.fontSize', fontWeight: 'fontWeightBold' },
  xl: { width: 140, height: 140, fontSize: 'h1.fontSize', fontWeight: 'fontWeightBold' },
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

export const Avatar = ({ children, size = 'xl', src, sx, ...rest }: AvatarProps): React.JSX.Element => {
  const [avatar, setAvatar] = React.useState<string>();

  useEffect(() => {
    const fetchAvatar = async () => {
      if (src) {
        setAvatar(src);
      } else {
        const resp = await avSettingsApi.getApplication('AVATAR');

        const avi = resp.data.settings[0].avatar;

        setAvatar(avi);
      }
    };

    fetchAvatar();
  }, [src]);

  return (
    <MuiAvatar
      {...rest}
      variant="circular"
      src={children ? undefined : avatar}
      sx={{
        ...sx,
        ...(sizeStyling[size] || sizeStyling.xl),
      }}
    >
      {children ? formatChildren(children, size) : <UserIcon />}
    </MuiAvatar>
  );
};
