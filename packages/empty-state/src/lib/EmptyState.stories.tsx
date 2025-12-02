// Each exported component in the package should have its own stories file

import type { StoryObj, Decorator } from '@storybook/react-vite';
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

const StoryBox = ({ children }: { children: React.ReactNode }) => (
  <Box
    sx={{
      backgroundColor: 'background.paper',
      width: {
        xs: '100%',
        md: '25%',
      },
      mx: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    }}
  >
    {children}
  </Box>
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
    <StoryBox>
      <EmptyState {...args}>
        <Typography variant="h6" component="h3">
          Header
        </Typography>
        <Typography variant="body2">
          This body explains the empty state. The illustration relates to the situation.
        </Typography>
        <Button>Optional Button</Button>
        <Link href="#">Optional Link</Link>
      </EmptyState>
    </StoryBox>
  ),
};

export const _ContentLoading: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <StoryBox>
      <EmptyState {...args}>
        <Typography variant="h6" component="h3">
          Content Loading
        </Typography>
        <Typography variant="body2">Data is loading.</Typography>
      </EmptyState>
    </StoryBox>
  ),
  args: {
    variant: 'ContentLoading',
  },
};

export const _Error: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <StoryBox>
      <EmptyState {...args}>
        <Typography variant="h6" component="h3">
          Error
        </Typography>
        <Typography variant="body2">
          Oops! Something went wrong. Try your request again later. If the problem continues, contact Availity Client
          Services at 1.800.AVAILITY (282.4548).
        </Typography>
      </EmptyState>
    </StoryBox>
  ),
  args: {
    variant: 'Error',
  },
};

export const _Instructional: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <StoryBox>
      <EmptyState {...args}>
        <Typography variant="h6" component="h3">
          Tasks need to be completed
        </Typography>
        <Typography variant="body2">You have tasks to complete</Typography>
        <Button>Get Started</Button>
      </EmptyState>
    </StoryBox>
  ),
  args: {
    variant: 'Instructional',
  },
};

export const _NoData: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <StoryBox>
      <EmptyState {...args}>
        <Typography variant="h6" component="h3">
          No data
        </Typography>
        <Typography variant="body2">Sorry, but we cannot seem to find the data you are looking for.</Typography>
      </EmptyState>
    </StoryBox>
  ),
  args: {
    variant: 'NoData',
  },
};

export const _NoFavorites: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <StoryBox>
      <EmptyState {...args}>
        <Typography variant="h6" component="h3">
          No favorites
        </Typography>
        <Typography variant="body2">
          It's ok to have favorites. Select the heart icon next to an application to add it to the My Favorites menu for
          quick access.
        </Typography>
      </EmptyState>
    </StoryBox>
  ),
  args: {
    variant: 'NoFavorites',
  },
};

export const _NoMessages: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <StoryBox>
      <EmptyState {...args}>
        <Typography variant="h6" component="h3">
          No messages
        </Typography>
        <Typography variant="body2">You do not have any messages</Typography>
      </EmptyState>
    </StoryBox>
  ),
  args: {
    variant: 'NoMessages',
  },
};

export const _NoNotifications: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <StoryBox>
      <EmptyState {...args}>
        <Typography variant="h6" component="h3">
          No notifications
        </Typography>
        <Typography variant="body2">You do not have any notifications</Typography>
      </EmptyState>
    </StoryBox>
  ),
  args: {
    variant: 'NoNotifications',
  },
};

export const _NoPatients: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <StoryBox>
      <EmptyState {...args}>
        <Typography variant="h6" component="h3">
          Patient(s) not found
        </Typography>
      </EmptyState>
    </StoryBox>
  ),
  args: {
    variant: 'NoPatients',
  },
};

export const _NoSearchResults: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <StoryBox>
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
    </StoryBox>
  ),
  args: {
    variant: 'NoSearchFound',
  },
};

export const _PageNotFound: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <StoryBox>
      <EmptyState {...args}>
        <Typography variant="h6" component="h3">
          Page not found
        </Typography>
        <Typography variant="body2">The page you are looking is no longer available.</Typography>
      </EmptyState>
    </StoryBox>
  ),
  args: {
    variant: 'PageNotFound',
  },
};

export const _SuccessConfirmation: StoryObj<typeof EmptyState> = {
  render: (args: EmptyStateProps) => (
    <StoryBox>
      <EmptyState {...args}>
        <Typography variant="h6" component="h3">
          Success!
        </Typography>
        <Typography variant="body2">You have completed your task</Typography>
      </EmptyState>
    </StoryBox>
  ),
  args: {
    variant: 'SuccessConfirmation',
  },
};
