import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@mui/material';
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
      <ToggleButtonGroup {...args} aria-label="Sample Toggle Button Group" value={value} onChange={handleChange}>
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
      <>
        <Typography variant="h3" id="yes-no-group-label">
          Yes/No Question
        </Typography>
        <ToggleButtonGroup
          aria-labelledby="yes-no-group-label"
          color="primary"
          size="small"
          value={value}
          onChange={handleChange}
          exclusive
        >
          <ToggleButton value="yes">
            <ThumbUpIcon sx={{ mr: 1 }} /> Yes
          </ToggleButton>
          <ToggleButton value="no">
            <ThumbDownIcon sx={{ mr: 1 }} /> No
          </ToggleButton>
        </ToggleButtonGroup>
      </>
    );
  },
};
