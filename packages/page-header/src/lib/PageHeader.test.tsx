import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Spaces } from '@availity/mui-spaces';
import { Tab, TabContext, TabList } from '@availity/mui-tabs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '@availity/mock/src/lib/server';
import { PageHeader } from './PageHeader';

const mockImage = jest.fn();

jest.mock('react-image', () => ({
  ...(jest.requireActual('react-image') as any),
  Img: (props: any) => mockImage(props),
}));

describe('PageHeader', () => {
  beforeAll(() => {
    // Start the interception.
    server.listen();
  });

  afterEach(() => {
    // Remove any handlers you may have added
    // in individual tests (runtime handlers).
    server.resetHandlers();
    jest.restoreAllMocks();
  });

  // terminate the server
  afterAll(() => server.close());

  test('should render simple page header successfully', () => {
    const { getByText } = render(<PageHeader breadcrumbs={{ active: 'This page' }} headerText="This is the header" />);
    expect(getByText('This is the header')).toBeTruthy();
    expect(getByText('This page')).toBeTruthy();
  });

  test('should render page header with help successfully', () => {
    const { getByText } = render(
      <PageHeader
        breadcrumbs={{ active: 'This page' }}
        headerText="This is the header"
        help={{ url: 'https://www.availity.com' }}
      />
    );
    expect(getByText('This is the header')).toBeTruthy();
    expect(getByText('This page')).toBeTruthy();
    expect(getByText('Need help?').getElementsByTagName('a')[0].getAttribute('href')).toBe('https://www.availity.com');
  });

  test('should render page header with a button successfully', () => {
    const { getByText } = render(
      <PageHeader
        breadcrumbs={{ active: 'This page' }}
        headerText="This is the header"
        buttons={[{ children: 'Button 1', key: 'button1' }]}
      />
    );
    expect(getByText('This is the header')).toBeTruthy();
    expect(getByText('This page')).toBeTruthy();
    expect(getByText('Button 1')).toBeTruthy();
  });

  test('should render page header with a replaced divider successfully', () => {
    const { getByText } = render(
      <TabContext value={1}>
        <PageHeader
          breadcrumbs={{ active: 'This page' }}
          headerText="This is the header"
          divider={<TabList><Tab value={1} label="Tab One"/></TabList>}
        />
      </TabContext>
    );
    expect(getByText('This is the header')).toBeTruthy();
    expect(getByText('This page')).toBeTruthy();
    expect(getByText('Tab One')).toBeTruthy();
  });

  test('should render page header with a logo successfully', async () => {
    const queryClient = new QueryClient();
    const { getByText, container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces spaceIds={['11', '22', '33']}>
          <PageHeader breadcrumbs={{ active: 'This page' }} headerText="This is the header" logo={{ spaceId: '11' }} />
        </Spaces>
      </QueryClientProvider>
    );
    expect(getByText('This is the header')).toBeTruthy();
    expect(getByText('This page')).toBeTruthy();
    await waitForElementToBeRemoved(container.getElementsByClassName('MuiSkeleton-root')[0]);
    // Ensure the correct src was selected.
    expect(mockImage.mock.calls[0][0].src).toEqual('/spaces/test_logo.png');
  });
});
