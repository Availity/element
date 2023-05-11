import type { StoryObj } from '@storybook/react';
import React from 'react';
import { HomeIcon, SearchIcon } from '@availity/mui-icon';
import { IconButton, IconButtonProps } from './IconButton';

export default {
  title: 'Components/Button/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    children: {
      options: ['home', 'search'],
      control: {
        type: 'select',
      },
      mapping: {
        home: <HomeIcon/>,
        search: <SearchIcon/>
      }
    },
  },
  args: {
    children: 'home',
    title: 'title text'
  }
};

export const _IconButton: StoryObj<typeof IconButton> = {
  render: ({...args}: IconButtonProps) => (
    <IconButton {...args}/>
  )
};
