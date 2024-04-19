import type { Meta, StoryObj } from '@storybook/react';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SystemPropsList } from '../../../../data/MuiSystemProperties';
import { Link, LinkProps } from './Link';

/**
 * Simple link component that renders an `<a>` tag with the href formatted to leverage loadApp so the link gets loaded inside the home page's iframe
 *
 * > Built on top of `Typography`, a CSS utility, the `Link` component also supports all [system properties](https://mui.com/system/properties/). They are omitted for brevity, but can be used as props directly on the component.
 */
const meta: Meta<typeof Link> = {
  title: 'Components/Link/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    docs: {
      controls: {
        exclude: SystemPropsList,
      },
    },
    canvas: {
      controls: {
        exclude: SystemPropsList,
      },
    },
  },
  args: {
    href: '#',
  },
};

export default meta;

export const _Link: StoryObj<typeof Link> = {
  render: (args: LinkProps) => <Link {...args} />,
  args: {
    loadApp: true,
    children: 'This text is a child of Link',
  },
};

/** The `OpenInNewIcon` has an accessible name to tell screenreaders that it opens in a new window.  */
export const _NewWindow: StoryObj<typeof Link> = {
  render: (args: LinkProps) => <Link {...args} loadApp={false} target="_blank" />,
  args: {
    children: 'Link opens in new window',
  },
};

export const _AbsoluteUrl: StoryObj<typeof Link> = {
  render: (args: LinkProps) => <Link {...args} href="https://github.com/Availity" target="_blank" />,
  args: {
    children: 'Availity Github',
  },
};

/** Inspect the link to see the `loadApp` url transformation in action. */
export const _RelativeUrl: StoryObj<typeof Link> = {
  render: (args: LinkProps) => <Link {...args} href="/public/apps/portal-app" />,
  args: {
    children: 'Portal App',
  },
};
