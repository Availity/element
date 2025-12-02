// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Spaces } from './Spaces';
import { SpacesDisclaimer, SpacesDisclaimerProps } from './SpacesDisclaimer';

const meta: Meta<typeof SpacesDisclaimer> = {
  title: 'Components/Spaces/SpacesDisclaimer',
  component: SpacesDisclaimer,
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

export const _SpacesDisclaimer: StoryObj<typeof SpacesDisclaimer> = {
  render: (args: SpacesDisclaimerProps) => (
    <QueryClientProvider client={queryClient}>
      <Spaces spaceIds={['disclaimer']}>
        <SpacesDisclaimer {...args} />
      </Spaces>
    </QueryClientProvider>
  ),
  args: {
    spaceId: 'disclaimer',
  },
};

export const _SpacesDisclaimerMarkdown: StoryObj<typeof SpacesDisclaimer> = {
  render: (args: SpacesDisclaimerProps) => (
    <QueryClientProvider client={queryClient}>
      <Spaces spaceIds={['disclaimerMarkdown']}>
        <SpacesDisclaimer {...args} />
      </Spaces>
    </QueryClientProvider>
  ),
  args: {
    markdown: true,
    spaceId: 'disclaimerMarkdown',
  },
};
