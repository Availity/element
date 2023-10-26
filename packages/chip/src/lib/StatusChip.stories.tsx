import type { Meta, StoryObj } from '@storybook/react';
import { StatusChip, StatusChipProps } from './StatusChip';

const meta: Meta<typeof StatusChip> = {
  title: 'Components/Chip/StatusChip',
  component: StatusChip,
  tags: ['autodocs'],
  args: {
    label: 'Chip',
    size: 'medium',
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

/** Status styling is achieved by using size `small` */
export const _Status: StoryObj<typeof StatusChip> = {
  render: () => (
    <>
      Item 1 <StatusChip color="success" label="Approved" size="small" />
      <br />
      Item 2 <StatusChip color="info" label="Info" size="small" />
      <br />
      Item 3 <StatusChip color="warning" label="Pending" size="small" />
      <br />
      Item 4 <StatusChip color="error" label="Declined" size="small" />
      <br />
      Item 5 <StatusChip color="secondary" label="Neutral" size="small" />
      <br />
    </>
  ),
};
