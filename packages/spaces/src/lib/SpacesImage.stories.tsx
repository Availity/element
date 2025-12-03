// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Card, CardHeader, CardHeaderProps } from '@availity/mui-card';
import { Spaces } from './Spaces';
import { SpacesImage, SpacesImageProps } from './SpacesImage';

const meta: Meta<typeof SpacesImage> = {
  title: 'Components/Spaces/SpacesImage',
  component: SpacesImage,
  tags: ['autodocs'],
  argTypes: {
    spaceId: {
      table: {
        readonly: true,
      },
    },
  },
};

export default meta;

const queryClient = new QueryClient();

export const _SpacesImage: StoryObj<typeof SpacesImage> = {
  render: (args: SpacesImageProps) => (
    <QueryClientProvider client={queryClient}>
      <Spaces spaceIds={['11', '22', '33']}>
        <SpacesImage {...args} />
      </Spaces>
    </QueryClientProvider>
  ),
  args: {
    spaceId: '33',
  },
};

export const _SpacesLogo: StoryObj<typeof SpacesImage> = {
  render: (args: SpacesImageProps) => (
    <QueryClientProvider client={queryClient}>
      <Spaces spaceIds={['11', '22', '33']}>
        <SpacesImage {...args} />
      </Spaces>
    </QueryClientProvider>
  ),
  args: {
    spaceId: '11',
    imageType: 'images.logo',
  },
};

export const _SpacesTile: StoryObj<typeof SpacesImage> = {
  render: (args: SpacesImageProps) => (
    <QueryClientProvider client={queryClient}>
      <Spaces spaceIds={['11', '22', '33']}>
        <SpacesImage {...args} />
      </Spaces>
    </QueryClientProvider>
  ),
  args: {
    spaceId: '22',
    imageType: 'images.tile',
  },
};

export const _SpacesBillboard: StoryObj<typeof SpacesImage> = {
  render: (args: SpacesImageProps) => (
    <QueryClientProvider client={queryClient}>
      <Spaces spaceIds={['11', '22', '33']}>
        <SpacesImage {...args} />
      </Spaces>
    </QueryClientProvider>
  ),
  args: {
    spaceId: '22',
    imageType: 'images.billboard',
  },
};

export const _CardHeaderWithLogo: StoryObj<typeof CardHeader> = {
  render: (args: CardHeaderProps) => (
    <QueryClientProvider client={queryClient}>
      <Spaces spaceIds={['11', '22', '33']}>
        <Card>
          <CardHeader {...args} />
        </Card>
      </Spaces>
    </QueryClientProvider>
  ),
  args: {
    title: 'Card header',
    subheader: 'Subheader',
    statusChipProps: {
      position: 'right',
      label: 'Approved',
      color: 'success',
    },
    logo: <SpacesImage spaceId="11" imageType="images.logo" />,
  },
};
