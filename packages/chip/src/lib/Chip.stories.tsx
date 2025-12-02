import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '@availity/mui-avatar';
import Collapse from '@mui/material/Collapse';
import { Chip, ChipProps } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: {
    label: 'Chip',
  },
};

export default meta;

export const _Chip: StoryObj<typeof Chip> = {
  render: (args: ChipProps) => <Chip {...args} />,
  args: {
    label: 'Chip',
  },
};

export const _RemovableChip: StoryObj<typeof Chip> = {
  render: (args: ChipProps) => {
    const [visible, setVisible] = useState(true);

    const onDelete = () => {
      setVisible(false);
      setTimeout(() => setVisible(true), 1000);
    };

    return (
      <Collapse in={visible}>
        <Chip {...args} onDelete={onDelete} />
      </Collapse>
    );
  },
};

export const _Avatar: StoryObj<typeof Chip> = {
  render: (args: ChipProps) => <Chip {...args} avatar={<Avatar>A</Avatar>} />,
};
