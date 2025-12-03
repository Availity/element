// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
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
        <Button color="secondary">Cancel</Button>
        <Button color="primary">Submit</Button>
      </CardActions>
    </Card>
  ),
  args: {
    sx: { justifyContent: 'flex-end' },
  },
};
export const _CardActionsIconButtons: StoryObj<typeof CardActions> = {
  render: (args: CardActionsProps) => (
    <Card>
      <CardActions {...args}>
        <IconButton color="primary" title="search" size="small">
          <SearchIcon fontSize="xsmall" />
        </IconButton>
      </CardActions>
    </Card>
  ),
  args: {},
};
