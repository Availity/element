import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, Collapse } from '@mui/material';
import { Chip, ChipProps } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip/Chip',
  component: Chip,
  tags: ['autodocs'],
  args: {
    label: 'Chip',
    size: 'medium',
    color: 'default',
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

/** Status styling is achieved by using size `small` */
export const _Status: StoryObj<typeof Chip> = {
  render: () => (
    <>
      Item 1 <Chip color="success" label="Approved" size="small" />
      <br />
      Item 2 <Chip color="info" label="Info" size="small" />
      <br />
      Item 3 <Chip color="warning" label="Pending" size="small" />
      <br />
      Item 4 <Chip color="error" label="Declined" size="small" />
      <br />
      Item 5 <Chip color="secondary" label="Neutral" size="small" />
      <br />
    </>
  ),
};

/** Inline counter styling is achieved by using size `small`. For counters that affix to the corner of an element see `Badge`. */
export const _InlineCounter: StoryObj<typeof Chip> = {
  render: () => (
    <div>
      Items <Chip color="error" label="5" size="small" />
    </div>
  ),
};

export const _Typography: StoryObj<typeof Chip> = {
  render: () => (
    <>
      <h1>
        H1 <Chip color="info" label="Info" />
      </h1>
      <h2>
        H2 <Chip color="info" label="Info" />
      </h2>
      <div>
        Body <Chip color="info" label="Info" />
      </div>
    </>
  ),
};
