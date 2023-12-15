// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react';
import { Paper } from '@availity/mui-paper';
import { Button } from '@availity/mui-button';
import { Typography } from '@availity/mui-typography';

import { BlockUi, BlockUiProps } from './BlockUi';

const meta: Meta<typeof BlockUi> = {
  title: 'Components/BlockUi/BlockUi',
  component: BlockUi,
  tags: ['autodocs'],
};

export default meta;

export const _BlockUi: StoryObj<typeof BlockUi> = {
  render: (args: BlockUiProps) => {
    return (
      <BlockUi {...args}>
        <Paper sx={{ padding: '1.5rem', minHeight: '250px' }}>
          <Typography variant="h1">Header</Typography>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at sapien efficitur turpis semper consequat.
            Cras vitae est quis ex vestibulum ultricies. Phasellus turpis massa, commodo eu nisi fringilla, cursus
            convallis ex. Fusce at hendrerit quam. Praesent vel leo eget ex feugiat eleifend vitae ut nunc. Sed ut
            lobortis enim. Aliquam non sagittis elit.
          </Typography>
          <Typography paragraph>
            Donec elementum urna in nisi ultricies, id venenatis nunc dictum. Phasellus fringilla nibh tellus, eget
            fermentum magna mollis suscipit. In ac leo vel ipsum luctus molestie id vel sem. Nullam tortor nisl,
            convallis vel purus vel, efficitur placerat lorem. Donec elementum gravida massa eget volutpat. Donec enim
            sapien, vestibulum ut erat ac, tincidunt ullamcorper justo. Quisque accumsan facilisis tincidunt. Duis
            molestie lorem a eros convallis sodales. Aenean malesuada leo eros, sed rutrum enim commodo quis
          </Typography>
          <Button>Click</Button>
        </Paper>
      </BlockUi>
    );
  },
  args: {
    blocking: false,
    renderChildren: true,
    message: 'Loading',
  },
};
