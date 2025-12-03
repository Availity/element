// Each exported component in the package should have its own stories file

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box } from '@availity/mui-layout';
import { avOrganizationsApi } from '@availity/api-axios';
import { List, ListItem, ListItemText } from '@availity/mui-list';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { Pagination } from './Pagination';
import { useResourcePagination } from './ResourcePagination';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination/useResourcePagination',
  component: Pagination,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={new QueryClient()}>
        <Story />
      </QueryClientProvider>
    ),
  ],
  args: {
    count: 10,
  },
};

export default meta;

export const _useResourcePagination: StoryObj<typeof Pagination> = {
  render: () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    const resp = useResourcePagination({
      page,
      resource: avOrganizationsApi,
      getResult: (result) => result.organizations,
      itemsPerPage,
    });

    if (resp.isLoading) {
      return <div>Loading...</div>;
    }

    return resp.data ? (
      <Box>
        <List>
          {resp.data?.items.map((item) => (
            <ListItem>
              <ListItemText primary={item.name} secondary={item.customerId} />
            </ListItem>
          ))}
        </List>
        <Pagination
          page={page}
          count={Math.ceil(Math.abs(resp.data.totalCount / itemsPerPage))}
          onChange={(event, newPage) => setPage(newPage)}
        />
      </Box>
    ) : (
      <div>Error</div>
    );
  },
};
