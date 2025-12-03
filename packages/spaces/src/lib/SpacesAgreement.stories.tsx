// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Spaces } from './Spaces';
import { SpacesAgreement, SpacesAgreementProps } from './SpacesAgreement';

const meta: Meta<typeof SpacesAgreement> = {
  title: 'Components/Spaces/SpacesAgreement',
  component: SpacesAgreement,
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

export const _SpacesAgreement: StoryObj<typeof SpacesAgreement> = {
  render: (args: SpacesAgreementProps) => (
    <QueryClientProvider client={queryClient}>
      <Spaces spaceIds={['agreement']}>
        <SpacesAgreement {...args} />
      </Spaces>
    </QueryClientProvider>
  ),
  args: {
    spaceId: 'agreement',
  },
};

export const _SpacesAgreementMarkdown: StoryObj<typeof SpacesAgreement> = {
  render: (args: SpacesAgreementProps) => (
    <QueryClientProvider client={queryClient}>
      <Spaces spaceIds={['agreementMarkdown']}>
        <SpacesAgreement {...args} />
      </Spaces>
    </QueryClientProvider>
  ),
  args: {
    markdown: true,
    spaceId: 'agreementMarkdown',
  },
};
