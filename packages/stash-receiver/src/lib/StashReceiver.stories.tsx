import type { Meta, StoryObj } from '@storybook/react-vite';
import { StashReceiver, useStashContext } from './StashReceiver';

const meta: Meta<typeof StashReceiver> = {
  title: 'Components/StashReceiver/StashReceiver',
  component: StashReceiver,
  tags: ['autodocs'],
};

export default meta;

const StashDisplay = () => {
  const { data, loading, error } = useStashContext();
  if (loading) return <p>Loading stash data...</p>;
  if (error) return <p>Error: {error}</p>;
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export const _StashReceiver: StoryObj<typeof StashReceiver> = {
  render: (args) => (
    <StashReceiver {...args}>
      <StashDisplay />
    </StashReceiver>
  ),
  args: {
    sessionId: 'example-session-id',
  },
};
