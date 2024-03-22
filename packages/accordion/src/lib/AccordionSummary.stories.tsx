// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { AccordionSummary, AccordionSummaryProps } from '..';

const meta: Meta<typeof AccordionSummary> = {
  title: 'Components/Accordion/AccordionSummary',
  component: AccordionSummary,
  tags: ['autodocs'],
};

export default meta;

export const _AccordionSummary: StoryObj<typeof AccordionSummary> = {
  render: (args: AccordionSummaryProps) => <AccordionSummary {...args}>Accordion 1</AccordionSummary>,
};
