// Each exported component in the package should have its own stories file

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from '@availity/mui-layout';
import { FaSvgIconProps } from './FaSvgIcon';
import { HomeIcon } from './Icons/Common';

const meta: Meta<typeof HomeIcon> = {
  title: 'Components/Icon/Named Icons',
  component: HomeIcon,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'text',
    },
    fontSize: {
      control: 'text',
    },
  },
};

export default meta;

/** Any named icon, like the `<HomeIcon />` below, extend mui's `SvgIcon` component and accept the same parameters.
 *
 * Icon is `aria-hidden` by default. If not accompanied with any on screen text then must pass `aria-hidden={false}`.
 */
export const _HomeIcon: StoryObj<typeof HomeIcon> = {
  render: (args: Omit<FaSvgIconProps, 'icon'>) => <HomeIcon {...args} />,
};

export const _Sizes: StoryObj<typeof HomeIcon> = {
  render: () => (
    <Grid container spacing={1}>
      <Grid size={{ xs: 2 }}>Inherit (default)</Grid>
      <Grid size={{ xs: 10 }}>
        <HomeIcon fontSize="inherit" />
      </Grid>
      <Grid size={{ xs: 2 }}>XXSmall</Grid>
      <Grid size={{ xs: 10 }}>
        <HomeIcon fontSize="xxsmall" />
      </Grid>
      <Grid size={{ xs: 2 }}>XSmall</Grid>
      <Grid size={{ xs: 10 }}>
        <HomeIcon fontSize="xsmall" />
      </Grid>
      <Grid size={{ xs: 2 }}>Small</Grid>
      <Grid size={{ xs: 10 }}>
        <HomeIcon fontSize="small" />
      </Grid>
      <Grid size={{ xs: 2 }}>Medium</Grid>
      <Grid size={{ xs: 10 }}>
        <HomeIcon fontSize="medium" />
      </Grid>
      <Grid size={{ xs: 2 }}>Large</Grid>
      <Grid size={{ xs: 10 }}>
        <HomeIcon fontSize="large" />
      </Grid>
      <Grid size={{ xs: 2 }}>XLarge</Grid>
      <Grid size={{ xs: 10 }}>
        <HomeIcon fontSize="xlarge" />
      </Grid>
    </Grid>
  ),
};
