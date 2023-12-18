import { forwardRef } from 'react';
import { styled } from '@mui/material';
import { Box, BoxProps } from '@availity/mui-layout';
import PageNotFound from '../assets/404-Page-Not-Found_Gray.svg';
import ContentLoading from '../assets/Content-Loading_Gray.svg';
import Error from '../assets/Error_Gray.svg';
import NoData from '../assets/No-Data_Gray.svg';
import NoSearchFound from '../assets/No-Search-Found_Gray.svg';

const EmptyStateImages: Record<string, { src: string; alt: string }> = {
  PageNotFound: { src: PageNotFound, alt: 'Page Not Found' },
  ContentLoading: { src: ContentLoading, alt: 'Content Loading' },
  Error: { src: Error, alt: 'Error' },
  NoData: { src: NoData, alt: 'No Data' },
  NoSearchFound: { src: NoSearchFound, alt: 'No Search Found' },
};

export interface EmptyStateImageProps extends Omit<BoxProps, 'children'> {
  /** Empty State variant for image */
  variant?: 'PageNotFound' | 'ContentLoading' | 'Error' | 'NoData' | 'NoSearchFound';
}

const EmptyStateImageContainer = styled(Box, {
  name: 'AvEmptyState',
  slot: 'image',
  overridesResolver: (props, styles) => styles.image,
})({ fontSize: '112px' });

/** Image to accompany Empty State message. */
export const EmptyStateImage = forwardRef<unknown, EmptyStateImageProps>((props, ref) => {
  const { variant = 'NoSearchFound', ...rest } = props;

  return (
    <EmptyStateImageContainer ref={ref} aria-hidden {...rest}>
      <img src={EmptyStateImages[variant].src} alt={EmptyStateImages[variant].alt} />
    </EmptyStateImageContainer>
  );
});
