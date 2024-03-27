// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, AccordionProps } from '..';
import Grid from '@mui/material/Unstable_Grid2';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion/Accordion',
  component: Accordion,
  tags: ['autodocs'],
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

export const _States: StoryObj<typeof Accordion> = {
  render: (args: AccordionProps) => (
    <Grid container spacing={1}>
      <Grid xs={12}>
        <Accordion {...args} defaultExpanded>
          <AccordionSummary aria-controls="defaultexpanded-content" id="defaultexpanded-header">
            Default Expanded
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary aria-controls="defaultexpanded-nested-content" id="defaultexpanded-nested-header">
                Nested Accordion
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid xs={12}>
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
      <Grid xs={12}>
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

/** By default, Material will style sibling `Accordion` components into a linked accordion group (similar to button group styling). A common way to avoid this is separating the `Accordion` within a `Grid`.  */
export const _AccordionGroup: StoryObj<typeof Accordion> = {
  render: () => (
    <div>
      <Typography variant="h5" component="h2">
        Grouped
      </Typography>
      <div>
        <Accordion>
          <AccordionSummary aria-controls="grouped-panel1-content" id="grouped-panel1-header">
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="grouped-panel2-content" id="grouped-panel2-header">
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary aria-controls="grouped-panel3-content" id="grouped-panel3-header">
            Accordion Actions
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
      <Grid container spacing={1} mt={2}>
        <Typography variant="h5" component="h2">
          Separated in a Grid
        </Typography>
        <Grid xs={12}>
          <Accordion>
            <AccordionSummary aria-controls="panel1-content" id="panel1-header">
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid xs={12}>
          <Accordion>
            <AccordionSummary aria-controls="panel2-content" id="panel2-header">
              Accordion 2
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid xs={12}>
          <Accordion>
            <AccordionSummary aria-controls="panel3-content" id="panel3-header">
              Accordion Actions
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
