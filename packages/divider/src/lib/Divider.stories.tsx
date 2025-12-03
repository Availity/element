import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Divider, DividerProps } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;

const ContainerStyle = {
  position: 'fixed',
};
// We have to force a width and height for the divider to display when the orientation is vertical
const VerticalContainerStyle = {
  height: '300px',
  width: '1px',
};
const HorizontalContainerStyle = {
  height: '1px',
  width: '300px',
};
// Vertical flex tries to revert to a height of 0, if the container isn't flex
const VerticalFlexStyle = {
  display: 'flex',
};

export const _Divider: StoryObj<typeof Divider> = {
  render: (args: DividerProps) => {
    const containerStyle = {
      ...ContainerStyle,
      ...(args.orientation === 'vertical' ? VerticalContainerStyle : HorizontalContainerStyle),
      ...(args.orientation === 'vertical' && args.flexItem ? VerticalFlexStyle : {}),
    };

    return (
      <div style={containerStyle}>
        <Divider {...args} />
      </div>
    );
  },
};
