import { StoryObj, Meta } from '@storybook/react';
import Grid from '@mui/material/Grid';
import { HomeIcon } from '@availity/mui-icon';
import { IconButton } from './IconButton';
import { Button, ButtonProps } from './Button'
import React from 'react';


const meta: Meta<typeof Button> = {
  title: 'Components/Button/Button',
  component: Button,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Button>;


export const _Button: Story = {
  render: ({...args}: ButtonProps ) => (
    <Button {...args}>Button</Button>
  ),
  args: {
    variant: 'contained',
    color: 'primary',
    size: 'medium',
  },
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

export const _ButtonSizes: Story = {
  render: () => (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Button color="tertiary" size="small">Small Button</Button>
        <IconButton title="title" sx={{ml: 1}} filled color="tertiary" size="small"><HomeIcon/></IconButton>
      </Grid>
      <Grid item xs={12}>
        <Button color="secondary" size="medium">Medium Button</Button>
        <IconButton title="title" sx={{ml: 1}} filled color="secondary" size="medium"><HomeIcon/></IconButton>
      </Grid>
      <Grid item xs={12}>
        <Button color="primary" size="large">Large Button</Button>
        <IconButton title="title" sx={{ml: 1}} filled color="primary" size="large"><HomeIcon/></IconButton>
      </Grid>
    </Grid>
  )
};
