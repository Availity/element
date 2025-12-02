import { StoryObj, Meta } from '@storybook/react-vite';
import { Grid } from '@availity/mui-layout';
import { SearchIcon } from '@availity/mui-icon';
import { LoadingButton, LoadingButtonProps } from './LoadingButton';

const meta: Meta<typeof LoadingButton> = {
  title: 'Components/Button/LoadingButton',
  component: LoadingButton,
  tags: ['autodocs'],
  args: {
    loading: true,
    color: 'primary',
  },
};
export default meta;
type Story = StoryObj<typeof LoadingButton>;

export const _LoadingButton: Story = {
  render: ({ ...args }: LoadingButtonProps) => (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12 }}>
        <LoadingButton {...args}>No Icon</LoadingButton>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <LoadingButton {...args} startIcon={<SearchIcon />}>
          Start Icon
        </LoadingButton>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <LoadingButton {...args} endIcon={<SearchIcon />}>
          End Icon
        </LoadingButton>
      </Grid>
    </Grid>
  ),
};
