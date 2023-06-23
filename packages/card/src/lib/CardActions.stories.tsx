// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { CardActions, CardActionsProps } from './CardActions';

const meta: Meta<typeof CardActions> = {
  title: 'Components/Card/CardActions',
  component: CardActions,
  tags: ['autodocs'],
};

export default meta;

export const _CardActions: StoryObj<typeof CardActions> = {
  render: (args: CardActionsProps) => <CardActions {...args} />,
  args: {
    children: 'This text is a child of CardActions',
  },
};
