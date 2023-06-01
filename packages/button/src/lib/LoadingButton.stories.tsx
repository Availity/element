import { StoryObj, Meta } from '@storybook/react';
import Grid from '@mui/material/Grid';
import { SearchIcon } from '@availity/mui-icon';
import { LoadingButton, LoadingButtonProps } from './LoadingButton'


const meta: Meta<typeof LoadingButton> = {
    title: 'Components/Button/LoadingButton',
    component: LoadingButton,
    tags: ['autodocs'],
    args: {
      loading: true,
      color: 'primary',
      variant: 'contained'
    },
  };
  export default meta;
  type Story = StoryObj<typeof LoadingButton>;


  export const _LoadingButton: Story = {
    render: ({...args}: LoadingButtonProps ) => (
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <LoadingButton {...args}>No Icon</LoadingButton>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton {...args} startIcon={<SearchIcon/>} loadingPosition='start'>Start Icon</LoadingButton>
        </Grid>
        <Grid item xs={12}>
          <LoadingButton {...args} endIcon={<SearchIcon/>}>End Icon</LoadingButton>
        </Grid>
      </Grid>
    )
  };
