import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButtonGroup, ToggleButtonGroupProps } from './ToggleButtonGroup';
import { ThumbUpIcon, ThumbDownIcon } from '@availity/mui-icon';
import { ToggleButton } from './ToggleButton';
import React from 'react';

const meta: Meta<typeof ToggleButtonGroup> = {
  title: 'Components/Button/ToggleButtonGroup',
  component: ToggleButtonGroup,
  tags: ['autodocs'],
  args: {
    color: 'tertiary',
    exclusive: true,
  },
};

export default meta;

export const _ToggleButtonGroup: StoryObj<typeof ToggleButtonGroup> = {
  render: (args: ToggleButtonGroupProps) => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
      setValue(newValue);
    };
    return (
      <ToggleButtonGroup {...args} value={value} onChange={handleChange}>
        <ToggleButton value="one">One</ToggleButton>
        <ToggleButton value="two">Two</ToggleButton>
        <ToggleButton value="three">Three</ToggleButton>
      </ToggleButtonGroup>
    );
  },
};

export const _YesNo: StoryObj<typeof ToggleButtonGroup> = {
  render: () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.MouseEvent<HTMLElement>, newValue: string) => {
      setValue(newValue);
    };
    return (
      <ToggleButtonGroup color="primary" size="small" value={value} onChange={handleChange} exclusive>
        <ToggleButton value="yes">
          <ThumbUpIcon /> Yes
        </ToggleButton>
        <ToggleButton value="no">
          <ThumbDownIcon /> No
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};
