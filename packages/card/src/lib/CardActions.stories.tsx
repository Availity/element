// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { CardActions, CardActionsProps } from './CardActions';
import { Card } from './Card';
import { Button, IconButton } from '@availity/mui-button';
import { SearchIcon } from '@availity/mui-icon';

const meta: Meta<typeof CardActions> = {
  title: 'Components/Card/CardActions',
  component: CardActions,
  tags: ['autodocs'],
};

export default meta;

export const _CardActions: StoryObj<typeof CardActions> = {
  render: (args: CardActionsProps) => (
    <Card>
      <CardActions {...args}>
        <Button size="small" color="primary">
          Submit
        </Button>
        <Button size="small">Cancel</Button>
      </CardActions>
    </Card>
  ),
  args: {},
};
export const _CardActionsIconButtons: StoryObj<typeof CardActions> = {
  render: (args: CardActionsProps) => (
    <Card>
      <CardActions {...args}>
        <IconButton color="primary" title="search">
          <SearchIcon fontSize="small" />
        </IconButton>
      </CardActions>
    </Card>
  ),
  args: {},
};
