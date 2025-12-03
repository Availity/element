// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Spaces } from './Spaces';
import { SpacesGhostText, SpacesGhostTextProps } from './SpacesGhostText';

const meta: Meta<typeof SpacesGhostText> = {
  title: 'Components/Spaces/SpacesGhostText',
  component: SpacesGhostText,
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

export const _SpacesGhostText: StoryObj<typeof SpacesGhostText> = {
  render: (args: SpacesGhostTextProps) => (
    <QueryClientProvider client={queryClient}>
      <Spaces spaceIds={['ghosted']}>
        <SpacesGhostText {...args} />
      </Spaces>
    </QueryClientProvider>
  ),
  args: {
    spaceId: 'ghosted',
  },
};
