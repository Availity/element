import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { useResourcePagination } from './ResourcePagination';
import { avOrganizationsApi } from '@availity/api-axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '@availity/mock/src/lib/server';
// eslint-disable-next-line @nx/enforce-module-boundaries
import organizations from '@availity/mock/src/lib/data/organizations.json';

beforeAll(() => {
  // Start the interception.
  server.listen();
});

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers();
});

const client = new QueryClient();

const ResourcePaginationComponent = (): React.JSX.Element => {
  const resp = useResourcePagination({
    page: 1,
    resource: avOrganizationsApi,
    getResult: (result) => result.organizations,
  });

  if (resp.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div data-testid="response">{JSON.stringify(resp?.data?.items)}</div>
      <div data-testid="totalCount">{JSON.stringify(resp?.data?.totalCount)}</div>
    </>
  );
};

describe('ResourcePagination', () => {
  test('should render successfully', async () => {
    const { getByText, getByTestId } = render(
      <QueryClientProvider client={client}>
        <ResourcePaginationComponent />
      </QueryClientProvider>
    );

    await waitForElementToBeRemoved(() => getByText('Loading...'));

    const data = getByTestId('response').innerHTML;

    expect(JSON.parse(data)).toStrictEqual(organizations.organizations.slice(0, 10));

    const totalCount = getByTestId('totalCount').innerHTML;

    expect(totalCount).toStrictEqual(JSON.stringify(organizations.totalCount));
  });
});
