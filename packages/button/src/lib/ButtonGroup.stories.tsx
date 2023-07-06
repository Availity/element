import type { Meta, StoryObj } from '@storybook/react';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
import { Button } from './Button';
import React from 'react';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Button/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
  args: {
    color: 'tertiary',
  },
};

export default meta;

export const _ButtonGroup: StoryObj<typeof ButtonGroup> = {
  render: (args: ButtonGroupProps) => (
    <ButtonGroup sx={{ mr: 1 }} {...args}>
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  ),
};
