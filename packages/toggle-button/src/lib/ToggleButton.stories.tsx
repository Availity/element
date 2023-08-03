// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButton, ToggleButtonProps } from './ToggleButton';

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/ToggleButton/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
};

export default meta;

export const _ToggleButton: StoryObj<typeof ToggleButton> = {
  render: (args: ToggleButtonProps) => <ToggleButton {...args} />,
  args: {
    value: 'test',
    children: 'This text is a child of ToggleButton',
  },
};
