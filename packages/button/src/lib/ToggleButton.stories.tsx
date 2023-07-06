import { StoryObj, Meta } from '@storybook/react';
import { ToggleButton, ToggleButtonProps } from './ToggleButton';
import React from 'react';

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/Button/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const _ToggleButton: Story = {
  render: ({ ...args }: ToggleButtonProps) => <ToggleButton {...args}>ToggleButton</ToggleButton>,
  args: {
    color: 'primary',
    size: 'medium',
    value: 'value',
  },
};
