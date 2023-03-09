import { StoryObj, Meta } from '@storybook/react';
import { MemoryRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { AvBreadcrumbs as Breadcrumbs } from '@availity/mui-breadcrumbs';


const meta: Meta<typeof Breadcrumbs & { activePage: string }> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  decorators: [
    (Story) => (
      <Router initialEntries={['/react-router-demo']}>
        <Story />
      </Router>
    ),
  ],
  args: {
    emptyState: '...',
    active: 'Payer Spaces',
    homeUrl: 'public/apps/dashboard',
  },
};
export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

type StoryProps = {
  emptyState: string;
  active: string;
  homeUrl: string;
};

export const Default: Story = ({
  emptyState,
  active,
  homeUrl,
}: StoryProps) => (
  <Breadcrumbs emptyState={emptyState} active={active} homeUrl={homeUrl} />
);
Default.storyName = 'default';

export const WithParents: Story = ({
  emptyState,
  active,
  homeUrl,
}: StoryProps) => (
  <Breadcrumbs
    homeUrl={homeUrl}
    emptyState={emptyState}
    crumbs={[
      { name: 'Grand Parent', url: '/grand-parent' },
      { name: 'Parent', url: '/parent' },
    ]}
    active={active}
  />
);
WithParents.storyName = 'with parents';

export const WithCustomContent: Story = ({
  active,
  emptyState,
  homeUrl,
}: StoryProps) => (
  <Routes>
    <Route
      path="/react-router-parent"
      element={
        <>
          <Breadcrumbs active={active} homeUrl={homeUrl} />
          <Link to="/react-router-demo">Back to Demo</Link>
          <p>Sample destination page with react-router navigation</p>
        </>
      }
    />

    <Route
      path="/react-router-demo"
      element={
        <>
          <Breadcrumbs
            emptyState={emptyState}
            active={active}
            homeUrl={homeUrl}
          >
            <Link to="/react-router-parent">Custom Breadcrumb Demo</Link>
          </Breadcrumbs>
          <p>Hello! this is a demo for breadcrumbs with:</p>
          <ul>
            <li>Custom Breadcrumb Items</li>
            <li>react-router-dom Integration</li>
          </ul>
          <p>
            In this case we are using react-router-dom package to navigate from
            one page to another, but any custom content (as long as it is inside
            a reactstrap BreadcrumbItem) can be used.
          </p>
        </>
      }
    />
  </Routes>
);
WithCustomContent.storyName = 'with custom content';
