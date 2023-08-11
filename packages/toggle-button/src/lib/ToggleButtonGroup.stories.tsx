// Each exported component in the package should have its own stories file

import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HomeIcon, FilterIcon, BellIcon } from '@availity/mui-icon';
import { ToggleButton } from './ToggleButton';
import { ToggleButtonGroup, ToggleButtonGroupProps } from './ToggleButtonGroup';

const meta: Meta<typeof ToggleButtonGroup> = {
  title: 'Components/ToggleButton/ToggleButtonGroup',
  component: ToggleButtonGroup,
  tags: ['autodocs'],
  argTypes: {
    size: {
      // this guarantees the options display in the correct order
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

export const _ToggleButtonGroup: StoryObj<typeof ToggleButtonGroup> = {
  render: (args: ToggleButtonGroupProps) => {
    const [value, setValue] = useState<string | null>('left');

    const handleValue = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
      setValue(newValue);
    };
    return (
      <ToggleButtonGroup {...args} value={value} onChange={handleValue}>
        <ToggleButton value={1} children="One" />
        <ToggleButton value={2} children="Two" />
        <ToggleButton value={3} children="Three" disabled />
      </ToggleButtonGroup>
    );
  },
  args: {
    exclusive: true,
  },
};

export const _ToggleButtonGroupIcons: StoryObj<typeof ToggleButtonGroup> = {
  render: (args: ToggleButtonGroupProps) => {
    const [value, setValue] = useState<string | null>('left');

    const handleValue = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
      setValue(newValue);
    };
    return (
      <ToggleButtonGroup {...args} value={value} onChange={handleValue}>
        <ToggleButton value={1} children={<HomeIcon />} />
        <ToggleButton value={2} children={<FilterIcon />} />
        <ToggleButton value={3} children={<BellIcon />} disabled />
      </ToggleButtonGroup>
    );
  },
  args: {
    exclusive: true,
  },
};

export const _ToggleButtonGroupIconsLabels: StoryObj<typeof ToggleButtonGroup> = {
  render: (args: ToggleButtonGroupProps) => {
    const [value, setValue] = useState<string | null>('left');

    const handleValue = (event: React.MouseEvent<HTMLElement>, newValue: string | null) => {
      setValue(newValue);
    };
    return (
      <ToggleButtonGroup {...args} value={value} onChange={handleValue}>
        <ToggleButton
          value={1}
          children={
            <>
              <HomeIcon fontSize="small" sx={{ paddingRight: '.5rem' }} /> Home
            </>
          }
        />
        <ToggleButton
          value={2}
          children={
            <>
              <FilterIcon fontSize="small" sx={{ paddingRight: '.5rem' }} /> Filter
            </>
          }
        />
        <ToggleButton
          value={3}
          disabled
          children={
            <>
              <BellIcon fontSize="small" sx={{ paddingRight: '.5rem' }} /> Notification
            </>
          }
        />
      </ToggleButtonGroup>
    );
  },
  args: {
    exclusive: true,
  },
};
