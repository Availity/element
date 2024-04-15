// Each exported component in the package should have its own stories file

import type { StoryObj } from '@storybook/react';
import { EmptyStateImage, EmptyStateImageProps } from './EmptyStateImage';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SystemPropsList } from '../../../../data/MuiSystemProperties';
import { Box, Stack } from '@availity/mui-layout';

export default {
  title: 'Components/EmptyState/EmptyStateImage',
  component: EmptyStateImage,
  tags: ['autodocs'],
  args: {
    variant: 'NoSearchFound',
  },
  parameters: {
    docs: {
      controls: {
        exclude: SystemPropsList,
      },
    },
  },
};

export const _EmptyStateImage: StoryObj<typeof EmptyStateImage> = {
  render: (args: EmptyStateImageProps) => <EmptyStateImage {...args} />,
};

export const _variants: StoryObj<typeof EmptyStateImage> = {
  render: () => {
    const variants: EmptyStateImageProps['variant'][] = [
      'PageNotFound',
      'ContentLoading',
      'Error',
      'NoData',
      'NoSearchFound',
    ];
    return (
      <Stack direction="row" spacing={2} flexWrap="wrap">
        {variants.map((variant) => (
          <Box textAlign="center" key={variant}>
            <Box>{variant}</Box>
            <EmptyStateImage variant={variant} />
          </Box>
        ))}
      </Stack>
    );
  },
};
