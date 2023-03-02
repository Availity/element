import React from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { AvLink } from '@availity/mui-link';

type Story = StoryObj<typeof AvLink>;

const meta: Meta<typeof AvLink> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Link',
  component: AvLink,
};

export default meta;

export const StyledLink: Story = () => (
  <div className="py-3">
    <AvLink href="https://github.com/Availity" target="_blank">
      Availity Github
    </AvLink>
  </div>
);
StyledLink.storyName = 'mui styled link';

export const UnstyledLink: Story = () => (
  <div className="py-3">
    <AvLink tag="a" href="/public/apps/my-app" target="_blank">
      My Application
    </AvLink>
  </div>
);
UnstyledLink.storyName = 'unstyled link';