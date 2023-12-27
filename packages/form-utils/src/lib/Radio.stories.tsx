// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioProps } from './Radio';
import { FormControlLabel } from '..';

const meta: Meta<typeof Radio> = {
  title: 'Components/FormUtils/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;

export const _Radio: StoryObj<typeof Radio> = {
  render: (args: RadioProps) => <Radio inputProps={{ 'aria-label': 'example' }} {...args} />,
};

export const _WithLabel: StoryObj<typeof Radio> = {
  render: () => <FormControlLabel control={<Radio />} label="Form Control Label" />,
};
