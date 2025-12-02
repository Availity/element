import { StoryObj, Meta } from '@storybook/react-vite';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
import { Button } from './Button';

import React from 'react';
import { HomeIcon, SearchIcon, SettingsIcon } from '@availity/mui-icon';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/Button/ButtonGroup',
  component: ButtonGroup,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const _ButtonGroup: Story = {
  render: ({ ...args }: ButtonGroupProps) => (
    <ButtonGroup {...args}>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
      <Button>Button</Button>
    </ButtonGroup>
  ),
  args: {},
};

export const _IconButtonGroup: Story = {
  render: ({ ...args }: ButtonGroupProps) => (
    <ButtonGroup {...args}>
      <Button startIcon={<HomeIcon />}>Home</Button>
      <Button startIcon={<SettingsIcon />}>Settings</Button>
      <Button startIcon={<SearchIcon />}>Search</Button>
    </ButtonGroup>
  ),
  args: {},
};
