import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { visuallyHidden } from './Utils';

const meta: Meta = {
  title: 'Utils/Utils/Utils',
  tags: ['autodocs'],
};

export default meta;

/** css properties to visually hide content while leaving it accessible to assistive technologies. */
export const _visuallyhidden: StoryObj = {
  render: () => (
    <Paper sx={{ padding: '12px 16px' }}>
      <Typography variant="h3">Raw</Typography>
      <pre>{JSON.stringify(visuallyHidden, null, 2)}</pre>
      <Typography variant="h3">Example</Typography>
      <Typography>This text is visible</Typography>
      <Typography sx={visuallyHidden}>This text is visually hidden</Typography>
    </Paper>
  ),
};
_visuallyhidden.storyName='visuallyHidden';

export const _ComingSoon: StoryObj = {
  render: () => <div>More utilities to be added</div>
}
