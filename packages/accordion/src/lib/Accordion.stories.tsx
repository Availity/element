// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, AccordionProps } from '..';
import { Box, Grid } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import { StatusChip } from '@availity/mui-chip';
import { Typography } from '@availity/mui-typography';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['filled', 'outlined', 'flush'],
    },
  },
};

export default meta;

export const _Accordion: StoryObj<typeof Accordion> = {
  render: (args: AccordionProps) => (
    <Accordion {...args}>
      <AccordionSummary aria-controls="panel-content" id="panel-header">
        Accordion
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
      </AccordionDetails>
      <AccordionActions>
        <Button>Cancel</Button>
        <Button>Agree</Button>
      </AccordionActions>
    </Accordion>
  ),
};

export const _Variants: StoryObj<typeof Accordion> = {
  render: (args: AccordionProps) => (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12 }}>
        <Accordion {...args}>
          <AccordionSummary aria-controls="filled-summary-content" id="filled-summary-header" secondary="Secondary">
            Filled
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
            <Box sx={{ mt: 2 }}>
              <Accordion>
                <AccordionSummary aria-controls="filled-nested-content" id="filled-nested-header">
                  Filled Nested Accordion
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Accordion {...args} variant="outlined">
          <AccordionSummary aria-controls="outlined-summary-content" id="outlined-summary-header" secondary="Secondary">
            Outlined
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
            <Box sx={{ mt: 2 }}>
              <Accordion variant="outlined">
                <AccordionSummary aria-controls="outlined-nested-content" id="outlined-nested-header">
                  Outlined Nested Accordion
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Accordion {...args} variant='flush'>
          <AccordionSummary aria-controls="filled-summary-content" id="filled-summary-header" secondary="Secondary">
            Flush
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
            <Box sx={{ mt: 2 }}>
              <Accordion {...args} variant='flush'>
                <AccordionSummary aria-controls="filled-nested-content" id="filled-nested-header">
                  Flush Nested Accordion
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                  blandit leo lobortis eget.
                </AccordionDetails>
              </Accordion>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  ),
};

/**
 * By default, Material will style sibling `Accordion` components into a linked accordion group (similar to button group styling).
 * A common way to avoid this is separating the `Accordion` within a `Grid`.
 *
 * The `Accordion` will also need to be wrapped to add any top/bottom margins -
 * this is due to Material's default gutter behavior when expanded along with how they overwrite the behavior when disabling the gutters.
 */
export const _Spacing: StoryObj<typeof Accordion> = {
  render: (args: AccordionProps) => (
    <div>
      <Typography variant="h5" component="h2">
        Grouped
      </Typography>
      <div>
        <Accordion {...args}>
          <AccordionSummary aria-controls="grouped-panel1-content" id="grouped-panel1-header">
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion {...args}>
          <AccordionSummary aria-controls="grouped-panel2-content" id="grouped-panel2-header">
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion {...args}>
          <AccordionSummary aria-controls="grouped-panel3-content" id="grouped-panel3-header">
            Accordion 3 with Actions
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      </div>
      <Grid container spacing={1} sx={{ mt: 2 }}>
        <Typography variant="h5" component="h2">
          Separated in a Grid
        </Typography>
        <Grid size={{ xs: 12 }}>
          <Accordion {...args}>
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
              Accordion 4
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Accordion {...args}>
            <AccordionSummary aria-controls="panel2-content" id="panel2-header">
              Accordion 5
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Accordion {...args}>
            <AccordionSummary aria-controls="panel3-content" id="panel3-header">
              Accordion 6 with Actions
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </AccordionDetails>
            <AccordionActions>
              <Button>Cancel</Button>
              <Button>Agree</Button>
            </AccordionActions>
          </Accordion>
        </Grid>
      </Grid>
    </div>
  ),
};

export const _States: StoryObj<typeof Accordion> = {
  render: (args: AccordionProps) => (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12 }}>
        <Accordion {...args} defaultExpanded>
          <AccordionSummary aria-controls="defaultexpanded-content" id="defaultexpanded-header">
            Filled Expanded
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary aria-controls="defaultexpanded-nested-content" id="defaultexpanded-nested-header">
                Filled Nested Accordion
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Accordion {...args} variant="outlined" defaultExpanded>
          <AccordionSummary aria-controls="outlinedexpanded-content" id="outlinedexpanded-header">
            Outlined Expanded
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary aria-controls="outlinedexpanded-nested-content" id="outlinedexpanded-nested-header">
                Outlined Nested Accordion
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Accordion {...args} variant="flush" defaultExpanded>
          <AccordionSummary aria-controls="flushexpanded-content" id="flushexpanded-header">
            Flush Expanded
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary aria-controls="flushexpanded-nested-content" id="flushexpanded-nested-header">
                Flush  Nested Accordion
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Accordion {...args}>
          <AccordionSummary aria-controls="focused-content" id="focused-header" className="Mui-focusVisible">
            Focused
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <Accordion {...args} disabled>
          <AccordionSummary aria-controls="disabled-content" id="disabled-header">
            Disabled
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  ),
};

export const _Status: StoryObj<typeof Accordion> = {
  render: (args: AccordionProps) => (
    <Accordion {...args}>
      <AccordionSummary
        aria-controls="status-summary-content"
        id="status-summary-header"
        secondary={
          <>
            Secondary
            <StatusChip color="success" label="Approved" sx={{ marginLeft: 2 }} />
          </>
        }
      >
        Accordion with Status
      </AccordionSummary>
      <AccordionDetails>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
        lobortis eget.
        <Box sx={{ mt: 2 }}>
          <Accordion>
            <AccordionSummary aria-controls="status-nested-content" id="status-nested-header">
              Nested Accordion
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </Box>
      </AccordionDetails>
    </Accordion>
  ),
};
