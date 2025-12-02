// Each exported component in the package should have its own stories file

import type { StoryObj } from '@storybook/react-vite';
import { Tooltip, TooltipProps } from './Tooltip';

// TODO: use our components when forwardRef is being applied correctly
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';

const positions = [
  'bottom-end',
  'bottom-start',
  'bottom',
  'left-end',
  'left-start',
  'left',
  'right-end',
  'right-start',
  'right',
  'top-end',
  'top-start',
  'top',
];
const positionsTypeSummary =
  '"bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top"';

const argTypes = {
  title: {
    description: 'Text that displays in the tooltip.',
    table: { type: { summary: 'string' } },
    type: { required: true },
  },
  children: {
    description: 'Element that triggers the tooltip.',
    options: ['span', 'button', 'link', 'text field'],
    control: { type: 'select' },
    table: { type: { summary: 'ReactElement<any, any>' } },
    type: { required: true },
    mapping: {
      span: <span>Hover me</span>,
      button: (
        <Button color="secondary" variant="contained">
          Hover me
        </Button>
      ),
      link: (
        <Link href="#" onClick={(event) => event.preventDefault()}>
          Hover me
        </Link>
      ),
      'text field': <TextField label="Hover me" variant="outlined" />,
    },
  },
  leaveDelay: {
    description: 'Delay before the tooltip is hidden. (micro seconds)',
    control: { type: 'number' },
    table: { type: { summary: 'number' } },
    defaultValue: { summary: 0 },
  },
  placement: {
    description: 'Where the container of the tooltip is aligned and placed.',
    options: positions,
    control: { type: 'select' },
    table: { type: { summary: positionsTypeSummary } },
    defaultValue: { summary: '"bottom"' },
  },
};

export default {
  title: 'Components/Tooltip/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes,
  args: {
    children: 'button',
    title: 'This is a tooltip',
  },
};

export const _Tooltip: StoryObj<typeof Tooltip> = {
  render: (props: TooltipProps) => <Tooltip {...props} />,
};
