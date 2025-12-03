// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion, AccordionDetails, AccordionSummary, AccordionProps, AccordionSummaryProps } from '..';
import { Box, Grid } from '@availity/mui-layout';
import { StatusChip } from '@availity/mui-chip';

const meta: Meta<typeof AccordionSummary> = {
  title: 'Components/Accordion/AccordionSummary',
  component: AccordionSummary,
  tags: ['autodocs'],
  args: {
    primary: 'Primary',
    secondary: 'Secondary',
  },
};

export default meta;

export const _AccordionSummary: StoryObj<typeof AccordionSummary> = {
  render: (args: AccordionSummaryProps) => <AccordionSummary {...args} />,
};

export const _Status: StoryObj<typeof AccordionSummary> = {
  render: (args: AccordionSummaryProps) => (
    <Grid container spacing={1}>
      <Grid size={{ xs: 12 }}>
        <Accordion {...args}>
          <AccordionSummary
            aria-controls="filled-summary-content"
            id="filled-summary-header"
            secondary={
              <>
                Secondary
                <StatusChip color="success" label="Approved" sx={{ marginLeft: 2 }} />
              </>
            }
          >
            Filled Summary
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
            <Box sx={{ mt: 2 }}>
              <Accordion>
                <AccordionSummary aria-controls="defaultexpanded-nested-content" id="defaultexpanded-nested-header">
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
          <AccordionSummary
            aria-controls="outlined-summary-content"
            id="outlined-summary-header"
            secondary={
              <>
                Secondary
                <StatusChip color="success" label="Approved" sx={{ marginLeft: 2 }} />
              </>
            }
          >
            Outlined Summary
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
            <Box sx={{ mt: 2 }}>
              <Accordion>
                <AccordionSummary aria-controls="outlinedexpanded-nested-content" id="outlinedexpanded-nested-header">
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
    </Grid>
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
      <Grid size={{ xs: 12 }}>
        <Accordion {...args} variant="outlined" defaultExpanded>
          <AccordionSummary aria-controls="outlined-summary-content" id="outlined-summary-header">
            Outlined Expanded
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
            leo lobortis eget.
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
