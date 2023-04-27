import { StoryObj, Meta } from '@storybook/react';
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
      <LoadingButton loadingPosition='start' {...args}>Primary</LoadingButton>
    )
  };
