// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { AccordionDetails, AccordionDetailsProps } from '..';

const meta: Meta<typeof AccordionDetails> = {
  title: 'Components/Accordion/AccordionDetails',
  component: AccordionDetails,
  tags: ['autodocs'],
};

export default meta;

export const _AccordionDetails: StoryObj<typeof AccordionDetails> = {
  render: (args: AccordionDetailsProps) => (
    <AccordionDetails {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo
      lobortis eget.
    </AccordionDetails>
  ),
};
