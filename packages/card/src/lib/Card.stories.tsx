// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@availity/mui-button';
import { FieldHelpIcon } from '@availity/mui-form-utils';
import { Grid } from '@availity/mui-layout';
import { Card, CardProps } from './Card';
import { CardHeader } from './CardHeader';
import { CardMedia } from './CardMedia';
import { CardContent } from './CardContent';
import { CardActions } from './CardActions';

const meta: Meta<typeof Card> = {
  title: 'Components/Card/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['elevation', 'outlined'],
    },
  },
};

export default meta;

export const _Card: StoryObj<typeof Card> = {
  render: (args: CardProps) => (
    <Card {...args}>
      <CardHeader title="Card header" subheader="Subheader" />
      <CardMedia
        sx={{ height: '100px' }}
        image="https://avatars.githubusercontent.com/u/329985?s=200&v=4"
        aria-label="Orange rectangle with interlocking AV logo"
      />
      <CardContent>This is the content of the Card.</CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <FieldHelpIcon helpTopicId="1234" />
        <Grid container spacing={1}>
          <Grid>
            <Button color="secondary">Cancel</Button>
          </Grid>
          <Grid>
            <Button color="primary">Submit</Button>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  ),
  args: {
    sx: {
      maxWidth: '375px',
    },
  },
};
