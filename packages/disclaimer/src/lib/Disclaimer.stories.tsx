// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Disclaimer, DisclaimerProps } from './Disclaimer';

const meta: Meta<typeof Disclaimer> = {
  title: 'Components/Disclaimer/Disclaimer',
  component: Disclaimer,
  tags: ['autodocs'],
};

export default meta;

export const _Disclaimer: StoryObj<typeof Disclaimer> = {
  render: (args: DisclaimerProps) => <Disclaimer {...args} />,
  args: {
    description: 'A description about the disclaimer.',
    headerText: 'This is a header',
    link: {
      href: '#',
      children: 'A link',
      target: '_blank',
    },
  },
};
