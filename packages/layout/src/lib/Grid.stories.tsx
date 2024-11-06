// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Paper } from '@availity/mui-paper';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SystemPropsList } from '../../../../data/MuiSystemProperties';
import { Grid, GridProps } from './Grid';

/** The grid system is implemented with the `Grid` component:
 *
 * + It uses CSS Flexbox (rather than CSS Grid) for high flexibility.
 * + The grid is always a flex item. Use the `container` prop to add a flex container.
 * + Item widths are set in percentages, so they're always fluid and sized relative to their parent element.
 * + There are five default grid breakpoints: xs, sm, md, lg, and xl.
 * + You can give integer values for each breakpoint, to indicate how many of the 1 available columns are occupied by the component when the viewport width satisfies the breakpoint constraints.
 * + It uses negative margins and padding to create gaps between children, which behave similarly to the `gap` CSS property.
 * + It does not support row spanning. Children elements cannot span multiple rows. We recommend using CSS Grid if you need this functionality.
 * + It does not automatically place children. It will try to fit the children one by one, and if there is not enough space, the rest of the children will start on the next line, and so on. If you need auto-placement, we recommend using CSS Grid instead.
 *
 * > As a CSS utility, the `Grid` component also supports all [system properties](https://mui.com/system/properties/). They are omitted for brevity, but can be used as props directly on the component.
 */
const meta: Meta<typeof Grid> = {
  title: 'Components/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      controls: {
        exclude: SystemPropsList,
      },
    },
    canvas: {
      controls: {
        exclude: SystemPropsList,
      },
    },
  },
};

export default meta;

export const _Grid: StoryObj<typeof Grid> = {
  render: ({ children, container, spacing, ...args }: GridProps) => (
    <Grid container={container} spacing={spacing} {...args}>
      <Grid size={{ xs: 8 }}>
        <Paper>{children}</Paper>
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Paper>{children}</Paper>
      </Grid>
      <Grid size={{ xs: 4 }}>
        <Paper>{children}</Paper>
      </Grid>
      <Grid size={{ xs: 8 }}>
        <Paper>{children}</Paper>
      </Grid>
    </Grid>
  ),
  args: {
    children: 'Grid Item',
    container: true,
    spacing: 2,
  },
};
