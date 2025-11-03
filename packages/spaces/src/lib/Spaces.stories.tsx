// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react';
import { Paper } from '@availity/mui-paper';
import { Typography } from '@availity/mui-typography';
import { Stack } from '@availity/mui-layout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Spaces, useSpaces, useSpacesContext } from './Spaces';
import { SpacesProps } from './spaces-types';

const meta: Meta<typeof Spaces> = {
  title: 'Components/Spaces/Spaces',
  component: Spaces,
  tags: ['autodocs'],
};

export default meta;

const queryClient = new QueryClient();

const SpaceComponent = ({ spaceId }: { spaceId: string }) => {
  const spaces = useSpaces(spaceId);

  const space = spaces?.find((space) => space.configurationId === spaceId);
  return (
    <div>
      <span id={`space-for-${spaceId}`}>
        {space ? `Space ${space?.configurationId} is in provider` : `Space ${spaceId} is not in provider`}
      </span>
    </div>
  );
};

const SpaceContainer = ({ children }: { children?: React.ReactNode }): React.JSX.Element => {
  const { loading } = useSpacesContext();
  return loading ? <span>loading...</span> : <div>{children}</div>;
};

export const _Spaces: StoryObj<typeof Spaces> = {
  render: (args: SpacesProps) => {
    return (
      <QueryClientProvider client={queryClient}>
        <Spaces {...args}>
          <SpaceContainer>
            <Stack spacing={2}>
              <Paper>
                <Typography>Space 1 was passed in the props.</Typography>
                <SpaceComponent spaceId="1" />
              </Paper>
              <Paper>
                <Typography>Space 2 was fetched from the api via the spaceId passed in the props.</Typography>
                <SpaceComponent spaceId="2" />
              </Paper>
              <Paper>
                <Typography>Space 3 was not returned.</Typography>
                <SpaceComponent spaceId="3" />
              </Paper>
              <Paper>
                <Typography>Space 11 was fetched from the api via the payerId passed in the props.</Typography>
                <SpaceComponent spaceId="11" />
              </Paper>
            </Stack>
          </SpaceContainer>
        </Spaces>
      </QueryClientProvider>
    );
  },
  args: {
    spaces: [{ id: '1', configurationId: '1', type: 'space', name: 'Space 1' }],
    spaceIds: ['2'],
    payerIds: ['a'],
  },
};
