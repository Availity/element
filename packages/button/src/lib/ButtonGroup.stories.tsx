import { StoryObj, Meta } from '@storybook/react';
import { ButtonGroup, ButtonGroupProps } from './ButtonGroup';
import { Button } from './Button';

import React from 'react';

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
