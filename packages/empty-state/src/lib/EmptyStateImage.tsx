import { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, BoxProps } from '@availity/mui-layout';

import { ContentLoading } from '../assets/Content-Loading_Gray';
import { Error } from '../assets/Error_Gray';
import { Instructional } from '../assets/Instructional_Gray';
import { NoData } from '../assets/No-Data_Gray';
import { NoFavorites } from '../assets/No-Favorites_Gray';
import { NoMessages } from '../assets/No-Messages_Gray';
import { NoNotifications } from '../assets/No-Notifications_Gray';
import { NoPatients } from '../assets/No-Patients_Gray';
import { NoSearchFound } from '../assets/No-Search-Found_Gray';
import { PageNotFound } from '../assets/404-Page-Not-Found_Gray';
import { SuccessConfirmation } from '../assets/Success-Confirmation_Gray';

export const EmptyStateImages = {
  ContentLoading,
  Error,
  Instructional,
  NoData,
  NoFavorites,
  NoMessages,
  NoNotifications,
  NoPatients,
  NoSearchFound,
  PageNotFound,
  SuccessConfirmation,
};

export interface EmptyStateImageProps extends Omit<BoxProps, 'children'> {
  /** Empty State variant for image */
  variant?: keyof typeof EmptyStateImages;
}

const EmptyStateImageContainer = styled(Box, {
  name: 'AvEmptyState',
  slot: 'image',
  overridesResolver: (props, styles) => styles.image,
})({ fontSize: '112px' });

/** Image to accompany Empty State message. */
export const EmptyStateImage = forwardRef<unknown, EmptyStateImageProps>((props, ref) => {
  const { variant = 'NoSearchFound', ...rest } = props;

  const Image = EmptyStateImages[variant];

  return (
    <EmptyStateImageContainer ref={ref} aria-hidden {...rest}>
      <Image />
    </EmptyStateImageContainer>
  );
});
