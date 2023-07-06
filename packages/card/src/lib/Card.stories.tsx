// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../button';
import { Card, CardProps } from './Card';
import { CardHeader } from './CardHeader';
import { CardMedia } from './CardMedia';
import { CardContent } from './CardContent';
import { CardActions } from './CardActions';

const meta: Meta<typeof Card> = {
  title: 'Components/Card/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;

export const _Card: StoryObj<typeof Card> = {
  render: (args: CardProps) => (
    <Card {...args}>
      <CardHeader title="Card header" subheader="Subheader" />
      <CardMedia sx={{ height: '100px' }} image="https://avatars.githubusercontent.com/u/329985?s=200&v=4" />
      <CardContent>This is the content of the Card.</CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Submit
        </Button>
        <Button size="small">Cancel</Button>
      </CardActions>
    </Card>
  ),
  args: {},
};
