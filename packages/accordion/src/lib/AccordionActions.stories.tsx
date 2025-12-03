// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { AccordionActions, AccordionActionsProps } from '..';
import { Button } from '@availity/mui-button';

const meta: Meta<typeof AccordionActions> = {
  title: 'Components/Accordion/AccordionActions',
  component: AccordionActions,
  tags: ['autodocs'],
};

export default meta;

export const _AccordionActions: StoryObj<typeof AccordionActions> = {
  render: (args: AccordionActionsProps) => (
    <AccordionActions {...args}>
      <Button>Cancel</Button>
      <Button>Agree</Button>
    </AccordionActions>
  ),
};
