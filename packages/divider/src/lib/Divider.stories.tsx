import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Divider, DividerProps } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;

// We have to force a width and height for the divider to display when the orientation is vertical
const VerticalContainerStyle = {
  height: '300px',
  width: '1px',
};
const VerticalContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={VerticalContainerStyle}>{children}</div>
);

export const _Divider: StoryObj<typeof Divider> = {
  render: (args: DividerProps) => {
    if (args.orientation === 'vertical') {
      return (
        <VerticalContainer>
          <Divider {...args} />
        </VerticalContainer>
      );
    }
    return <Divider {...args} />;
  },
  args: {},
};
