import { StoryObj, Meta } from '@storybook/react';
import Grid from '@mui/material/Grid';
import { Button, ButtonProps } from './Button'
import React from 'react';


const meta: Meta<typeof Button> = {
  title: 'Components/Button/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
  },
};
export default meta;
type Story = StoryObj<typeof Button>;


export const _Button: Story = {
  render: ({...args}: ButtonProps ) => (
    <Button {...args}>Button</Button>
  )
};

/**
 * Availity approved button colors and variations
 */
export const _Colors: Story = {
  render: () => (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Button color="primary">Primary</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary">Secondary</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="tertiary">Tertiary</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="error">Error</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="primary" variant="outlined">Primary Outlined</Button>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary" variant="outlined">Secondary Outlined</Button>
      </Grid>
    </Grid>
  )
};
