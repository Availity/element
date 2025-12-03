// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container, ContainerProps } from './Container';

/**
 * The `Container` centers your content horizontally. It's the most basic layout element with a fluid or fixed width based on breakpoints.
 */
const meta: Meta<typeof Container> = {
  title: 'Components/Layout/Container',
  component: Container,
  tags: ['autodocs'],
};

export default meta;

export const _Container: StoryObj<typeof Container> = {
  render: (args: ContainerProps) => <Container {...args} />,
  args: {
    children: 'This text is a child of Container',
  },
};
