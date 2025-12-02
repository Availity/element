// Each exported component in the package should have its own stories file

import type { StoryObj } from '@storybook/react-vite';
import { Box, Stack } from '@availity/mui-layout';
import { Typography } from '@availity/mui-typography';

import { EmptyStateImage, EmptyStateImageProps, EmptyStateImages } from './EmptyStateImage';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SystemPropsList } from '../../../../data/MuiSystemProperties';

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
  render: (args: EmptyStateImageProps) => (
    <Box
      sx={{
        backgroundColor: 'background.paper',
        padding: '2rem',
        width: {
          xs: '100%',
          md: '25%',
        },
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <EmptyStateImage {...args} />
    </Box>
  ),
};

const variants = Object.keys(EmptyStateImages);

export const _variants: StoryObj<typeof EmptyStateImage> = {
  render: () => {
    return (
      <Stack direction="row" spacing={2} alignItems="flex-start" flexWrap="wrap" useFlexGap>
        {variants.map((variant) => (
          <Box textAlign="center" key={variant} sx={{ backgroundColor: 'background.paper', padding: '3rem' }}>
            <Typography>{variant}</Typography>
            <EmptyStateImage variant={variant as keyof typeof EmptyStateImages} />
          </Box>
        ))}
      </Stack>
    );
  },
};
