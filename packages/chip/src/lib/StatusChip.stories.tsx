import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusChip, StatusChipProps } from './StatusChip';

const meta: Meta<typeof StatusChip> = {
  title: 'Components/Chip/StatusChip',
  component: StatusChip,
  tags: ['autodocs'],
  args: {
    label: 'Chip',
    color: 'default',
  },
};

export default meta;

export const _Chip: StoryObj<typeof StatusChip> = {
  render: (args: StatusChipProps) => <StatusChip {...args} />,
  args: {
    label: 'Chip',
    color: 'primary',
  },
};

export const _Status: StoryObj<typeof StatusChip> = {
  render: () => (
    <>
      Item 1 <StatusChip color="success" label="Approved" />
      <br />
      Item 2 <StatusChip color="info" label="Info" />
      <br />
      Item 3 <StatusChip color="warning" label="Pending" />
      <br />
      Item 4 <StatusChip color="error" label="Declined" />
      <br />
      Item 5 <StatusChip color="secondary" label="Neutral" />
      <br />
    </>
  ),
};
