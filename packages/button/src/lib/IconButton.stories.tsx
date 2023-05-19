import type { StoryObj } from '@storybook/react';
import { SearchIcon } from '@availity/mui-icon';
import { IconButton, IconButtonProps } from './IconButton';

export default {
  title: 'Components/Button/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: {
    title: 'title text'
  }
};

export const _IconButton: StoryObj<typeof IconButton> = {
  render: ({...args}: IconButtonProps) => (
    <IconButton {...args}><SearchIcon/></IconButton>
  )
};
