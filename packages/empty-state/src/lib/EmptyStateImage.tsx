import { forwardRef } from 'react';
import { styled } from '@mui/material/styles';
import { Box, BoxProps } from '@availity/mui-layout';
import { PageNotFound } from '../assets/404-Page-Not-Found_Gray';
import { ContentLoading } from '../assets/Content-Loading_Gray';
import { Error } from '../assets/Error_Gray';
import { NoData } from '../assets/No-Data_Gray';
import { NoSearchFound } from '../assets/No-Search-Found_Gray';

const EmptyStateImages = {
  PageNotFound,
  ContentLoading,
  Error,
  NoData,
  NoSearchFound,
};

export interface EmptyStateImageProps extends Omit<BoxProps, 'children'> {
  /** Empty State variant for image */
  variant?: 'PageNotFound' | 'ContentLoading' | 'Error' | 'NoData' | 'NoSearchFound';
}

const EmptyStateImageContainer = styled(Box, {
  name: 'AvEmptyState',
  slot: 'image',
  overridesResolver: (props, styles) => styles.image,
})({ fontSize: '112px' }) as typeof Box;

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
