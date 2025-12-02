// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { HomeIcon } from '@availity/mui-icon';
import { ToggleButton, ToggleButtonProps } from './ToggleButton';

const meta: Meta<typeof ToggleButton> = {
  title: 'Components/ToggleButton/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      // this guarantees the options display in the correct order
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

export const _ToggleButton: StoryObj<typeof ToggleButton> = {
  render: (args: ToggleButtonProps) => <ToggleButton {...args} />,
  args: {
    value: 'test',
    children: 'This text is a child of ToggleButton',
  },
};

export const _ToggleButtonIcon: StoryObj<typeof ToggleButton> = {
  render: (args: ToggleButtonProps) => <ToggleButton {...args} />,
  args: {
    value: '1',
    children: <HomeIcon />,
    'aria-label': 'Home',
  },
};

export const _ToggleButtonIconLabel: StoryObj<typeof ToggleButton> = {
  render: (args: ToggleButtonProps) => <ToggleButton {...args} />,
  args: {
    value: '1',
    children: (
      <>
        <HomeIcon fontSize="small" sx={{ paddingRight: '.5rem' }} />
        Home
      </>
    ),
  },
};
