import { StoryObj, Meta } from '@storybook/react';
import { Button } from '@mui/material';
import {LoadingButton, LoadingButtonProps} from '@mui/lab'
import type {ButtonProps} from '@mui/material'


const meta: Meta<typeof Button> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'Components/Button',
    component: Button,
    args: {
      variant: 'contained',
      color: 'primary',
      isLoading: false
    },
  };
  export default meta;
  type Story = StoryObj<typeof Button>;
  

  export const Default: Story = ({
    variant,
    color,
  }: ButtonProps) => (
    <Button variant={variant} color={color}>Primary</Button>
  );
  Default.storyName = 'Primary';

 
  export const LoaderButton: Story = ({
    variant,
    color,
    isLoading,
  }: LoadingButtonProps & {isLoading: boolean}) => (
    <LoadingButton loadingPosition='end' variant={variant} color={color} loading={isLoading}>Primary</LoadingButton>
  );
 LoaderButton.storyName = 'Loader';