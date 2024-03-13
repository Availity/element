// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, AccordionProps } from '..';
import Button from '@mui/material/Button';

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
    <div>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
              leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
      <Accordion {...args}>
        <AccordionSummary aria-controls="focused-content" id="focused-header" className="Mui-focusVisible">
          Focused
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion {...args} disabled>
        <AccordionSummary aria-controls="disabled-content" id="disabled-header">
          Disabled
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  ),
};

export const _AccordionGroup: StoryObj<typeof Accordion> = {
  render: () => (
    <div>
      <Accordion>
        <AccordionSummary aria-controls="panel1-content" id="panel1-header">
          Accordion 1
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel2-content" id="panel2-header">
          Accordion 2
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
          lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary aria-controls="panel3-content" id="panel3-header">
          Accordion Actions
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
    </div>
  ),
};
