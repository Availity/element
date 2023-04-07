import { StoryObj, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button'


const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
  title: 'Components/Button/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    variant: 'contained',
    color: 'primary',
  },
};
export default meta;
type Story = StoryObj<typeof Button>;


export const _Button: Story = {
  render: ({...args}: ButtonProps ) => (
    <Button {...args}>Primary</Button>
  )
};
