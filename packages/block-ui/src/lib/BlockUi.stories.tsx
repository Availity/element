// Each exported component in the package should have its own stories file
import type { Meta, StoryObj } from '@storybook/react';
import { Paper } from '@availity/mui-paper';

import { BlockUi, BlockUiProps } from './BlockUi';
import { Typography } from '@availity/mui-typography';

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </Typography>
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
