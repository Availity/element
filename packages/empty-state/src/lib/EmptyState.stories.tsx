// Each exported component in the package should have its own stories file

import type { StoryObj, Decorator } from '@storybook/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { Link } from '@availity/mui-link';
import { visuallyHidden } from '@availity/mui-utils';
import { EmptyState, EmptyStateProps } from './EmptyState';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { SystemPropsList } from '../../../../data/MuiSystemProperties';

/** Remove 508 warning of Heading Level Jump while leaving Story heading levels realistic */
const HeadingLevelDecorator: Decorator = (Story, context) => (
  <>
    {context.viewMode !== 'docs' ? (
      <>
        <Typography variant="h1" sx={visuallyHidden}>
          Component: Empty State
        </Typography>
        <Typography variant="h2" sx={visuallyHidden}>
          Story: {context.name}
        </Typography>
      </>
    ) : null}
    <Story />
  </>
);

/** Built on top of the `Stack` component, `EmptyState` will add the desired spacing to every direct descendant.
 *
 * _Accessibility Note: Check the appropriate heading level needed for your usage to not create a heading jump._
 */
export default {
  title: 'Components/EmptyState/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
  args: {
    variant: 'NoSearchFound',
  },
  decorators: [HeadingLevelDecorator],
  parameters: {
    docs: {
      controls: {
        exclude: SystemPropsList,
      },
    },
  },
};

export const _EmptyState: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <EmptyState {...args}>
      <Typography variant="h6" component="h3">
        Header
      </Typography>
      <Box>This body explains the empty state. The illustration relates to the situation.</Box>
      <Button>Optional Button</Button>
      <Link href="#">Optional Link</Link>
    </EmptyState>
  ),
};

export const _NoSearchResults: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <EmptyState {...args} alignItems="start" textAlign="start">
      <Typography variant="h6" component="h3">
        No search results found -- Results not found for [variable].
      </Typography>
      <Box>Adjust your search or filter options for better results.</Box>
      <Box>
        Suggestions:
        <List
          sx={{ listStyleType: 'disc', listStylePosition: 'inside', '.MuiListItem-root': { display: 'list-item' } }}
          disablePadding
        >
          <ListItem disableGutters disablePadding>
            Correctly spell all words in search criteria
          </ListItem>
          <ListItem disableGutters disablePadding>
            Use different keywords
          </ListItem>
          <ListItem disableGutters disablePadding>
            Use general keywords
          </ListItem>
          <ListItem disableGutters disablePadding>
            Use fewer keywords
          </ListItem>
        </List>
      </Box>
      <Link href="#">Clear filter</Link>
    </EmptyState>
  ),
  args: {
    variant: 'NoSearchFound',
  },
};

export const _Error: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <EmptyState {...args}>
      <Typography variant="h6" component="h3">
        Error
      </Typography>
      <Box>
        Oops! Something went wrong. Try your request again later. If the problem continues, contact Availity Client
        Services at 1.800.AVAILITY (282.4548).
      </Box>
    </EmptyState>
  ),
  args: {
    variant: 'Error',
  },
};

export const _ContentLoading: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <EmptyState {...args}>
      <Typography variant="h6" component="h3">
        Content Loading
      </Typography>
      <Box>Data is loading.</Box>
    </EmptyState>
  ),
  args: {
    variant: 'ContentLoading',
  },
};

export const _NoData: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <EmptyState {...args}>
      <Typography variant="h6" component="h3">
        No data
      </Typography>
      <Box>Sorry, but we cannot seem to find the data you are looking for.</Box>
    </EmptyState>
  ),
  args: {
    variant: 'NoData',
  },
};

export const _PageNotFound: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <EmptyState {...args}>
      <Typography variant="h6" component="h3">
        Page not found
      </Typography>
      <Box>The page you are looking is no longer available.</Box>
    </EmptyState>
  ),
  args: {
    variant: 'PageNotFound',
  },
};
