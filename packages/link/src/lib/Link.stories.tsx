import type { Meta, StoryObj } from '@storybook/react-vite';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SystemPropsList } from '../../../../data/MuiSystemProperties';
import { Link, LinkProps } from './Link';

const excludedProps = [...SystemPropsList, 'align'];

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
        exclude: excludedProps,
      },
    },
    canvas: {
      controls: {
        exclude: excludedProps,
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

/** Inline styling is achieved with the `inherit` variant. */
export const _Variants: StoryObj<typeof Link> = {
  render: () => (
    <div>
      <Link href="#" gutterBottom>
        Medium standalone link (default)
      </Link>
      <br />
      <Link href="#" gutterBottom variant="body2">
        Small standalone link
      </Link>
      <br />
      <Link href="#" gutterBottom variant="inherit">
        Inline link
      </Link>
    </div>
  ),
};

/** The `OpenInNewIcon` has an accessible name to tell screenreaders that it opens in a new window.  */
export const _NewWindow: StoryObj<typeof Link> = {
  render: (args: LinkProps) => <Link {...args} loadApp={false} target="_blank" />,
  args: {
    children: 'Link opens in new window',
  },
};

export const _NewWindowEndIcon: StoryObj<typeof Link> = {
  render: (args: LinkProps) => <Link {...args} loadApp={false} target="_blank" iconPosition="end" />,
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

/** The `gutterBottom` prop achieves correct spacing for a list of links. */
export const _Lists: StoryObj<typeof Link> = {
  render: () => (
    <div>
      <Link href="#" gutterBottom>
        Link 1
      </Link>
      <br />
      <Link href="#" gutterBottom>
        Link 2
      </Link>
      <br />
      <Link href="#" gutterBottom>
        Link 3
      </Link>
      <br />
      <Link href="#" gutterBottom>
        Link 4
      </Link>
      <br />
      <Link href="#" gutterBottom>
        Link 5
      </Link>
      <br />
      <Link href="#" gutterBottom>
        Link 6
      </Link>
      <br />
    </div>
  ),
};
