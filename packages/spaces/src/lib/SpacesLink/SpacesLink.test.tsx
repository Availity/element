import { render, waitFor, cleanup } from '@testing-library/react';
import dayjs from 'dayjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SpacesLink } from './SpacesLink';
import { Spaces } from '../Spaces';
import { FileIcon, NavigateTopIcon } from '@availity/mui-icon';

describe('SpacesLink', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it('renders link card from space', async () => {
    const space = {
      id: 'encoded1',
      configurationId: '1',
      type: 'APPLICATION',
      name: 'An application',
      description: 'This is an application',
      link: {
        url: '/path/to/url',
        text: 'the link',
        target: '_self',
      },
    };
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="application-link-1"
            titleTag="h5"
            space={space}
            linkAttributes={{
              spaceId: '1',
            }}
            clientId="my-client-id"
            variant="card"
            title={space.link.text}
            description
            analytics={{
              'data-av-analytics-application-id': space.configurationId,
              'data-av-analytics-action': 'click',
              'data-av-analytics-value': space.link?.url,
              'data-av-analytics-label': space.name,
            }}
          />
        </Spaces>
      </QueryClientProvider>
    );

    expect(container.tagName).toBe('DIV');

    const linkHeader = await waitFor(() => container.querySelector('#app-title-1'));
    expect(linkHeader?.attributes.getNamedItem('variant')?.value).toBe('h6');
    expect(linkHeader?.attributes.getNamedItem('role')?.value).toBe('link');
    expect(linkHeader?.attributes.getNamedItem('data-av-analytics-application-id')?.value).toBe('1');
    expect(linkHeader?.attributes.getNamedItem('data-av-analytics-action')?.value).toBe('click');
    expect(linkHeader?.attributes.getNamedItem('data-av-analytics-value')?.value).toBe('/path/to/url');
    expect(linkHeader?.attributes.getNamedItem('data-av-analytics-label')?.value).toBe('An application');
    expect(linkHeader?.textContent).toBe('An application');

    const linkDescription = await waitFor(() => container.querySelector('#app-description-1'));
    expect(linkDescription?.textContent).toBe('This is an application');
  });

  it('renders link card from space with custom link tag', async () => {
    const space = {
      id: 'encoded2',
      configurationId: '2',
      type: 'APPLICATION',
      name: 'An application',
      description: 'This is an application',
      link: {
        url: '/path/to/url',
        text: 'the link',
        target: '_self',
      },
    };
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="application-link-2"
            titleTag="h5"
            tag="li"
            space={space}
            linkAttributes={{
              spaceId: '2',
            }}
            clientId="my-client-id"
            title={space.link.text}
          />
        </Spaces>
      </QueryClientProvider>
    );

    const link2 = await waitFor(() => container.querySelector('#application-link-2'));

    expect(link2?.tagName).toBe('LI');
  });

  it('renders link card from space with no titleTag', async () => {
    const space = {
      id: 'encoded3',
      configurationId: '3',
      type: 'APPLICATION',
      name: 'An application',
      description: 'This is an application',
      link: {
        url: '/path/to/url',
        text: 'the link',
        target: '_self',
      },
    };
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="application-link-3"
            space={space}
            linkAttributes={{
              spaceId: '3',
            }}
            clientId="my-client-id"
            title={space.link.text}
          />
        </Spaces>
      </QueryClientProvider>
    );

    const link3_header = await waitFor(() => container.querySelector('#app-title-3'));

    expect(link3_header?.tagName).toBe('DIV');
  });

  it('renders link card from space with custom title class', async () => {
    const space = {
      id: 'encoded3',
      configurationId: '3',
      type: 'APPLICATION',
      name: 'An application',
      description: 'This is an application',
      link: {
        url: '/path/to/url',
        text: 'the link',
        target: '_self',
      },
    };
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="application-link-3"
            titleClassName="custom_class"
            space={space}
            linkAttributes={{
              spaceId: '3',
            }}
            clientId="my-client-id"
            title={space.link.text}
          />
        </Spaces>
      </QueryClientProvider>
    );

    const link3_title = await waitFor(() => container.querySelector('#app-title-3'));

    expect(link3_title?.className).toContain('custom_class');
  });

  it('renders link card from new space with new badge', async () => {
    const space = {
      id: 'encoded7',
      configurationId: '7',
      type: 'NAVIGATION',
      name: 'A navigation',
      description: 'This is a navigation',
      link: {
        url: '/path/to/url',
        text: 'the link',
        target: '_self',
      },
      isNew: true,
    };
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="navigation-link-7"
            space={space}
            linkAttributes={{
              spaceId: '7',
            }}
            clientId="my-client-id"
            title={space.link.text}
            showNew
          />
        </Spaces>
      </QueryClientProvider>
    );

    const link7_newBadge = await waitFor(() => container.querySelector('#app-new-badge-7'));

    expect(link7_newBadge?.className.includes('MuiChip-colorDefault')).toBeTruthy();
    expect(link7_newBadge?.textContent).toBe('New!');
  });

  it('renders link card from new space with date', async () => {
    const space = {
      id: 'encoded8',
      configurationId: '8',
      type: 'NAVIGATION',
      name: 'A navigation',
      description: 'This is a navigation',
      link: {
        url: '/path/to/url',
        text: 'the link',
        target: '_self',
      },
      activeDate: dayjs('01/01/2022').format(),
    };
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="navigation-link-8"
            space={space}
            linkAttributes={{
              spaceId: '8',
            }}
            clientId="my-client-id"
            title={space.link.text}
            showDate
          />
        </Spaces>
      </QueryClientProvider>
    );

    const link8_date = await waitFor(() => container.querySelector('#app-date-badge-8'));

    expect(link8_date?.tagName).toBe('SPAN');
    expect(link8_date?.className.includes('MuiTypography-caption')).toBeTruthy();
    expect(link8_date?.textContent).toBe('01/01/2022');
  });

  it('renders link card from space with children', async () => {
    const space = {
      id: 'encoded9',
      configurationId: '9',
      type: 'NAVIGATION',
      name: 'A navigation',
      description: 'This is a navigation',
      link: {
        url: '/path/to/url',
        text: 'the link',
        target: '_self',
      },
    };
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="navigation-link-9"
            space={space}
            linkAttributes={{
              spaceId: '9',
            }}
            clientId="my-client-id"
            title={space.link.text}
            analytics={{
              'data-av-analytics-application-id': space.configurationId,
              'data-av-analytics-action': 'click',
              'data-av-analytics-value': space.link?.url,
              'data-av-analytics-label': space.name,
            }}
          >
            <span id="space-link-child-1">{space.name}</span>
          </SpacesLink>
        </Spaces>
      </QueryClientProvider>
    );

    const link9_child = await waitFor(() => container.querySelector('#space-link-child-1'));

    expect(link9_child?.tagName).toBe('SPAN');
    expect(link9_child?.attributes.getNamedItem('role')?.value).toBe('link');
    expect(link9_child?.attributes.getNamedItem('data-av-analytics-application-id')?.value).toBe('9');
    expect(link9_child?.attributes.getNamedItem('data-av-analytics-action')?.value).toBe('click');
    expect(link9_child?.attributes.getNamedItem('data-av-analytics-value')?.value).toBe('/path/to/url');
    expect(link9_child?.attributes.getNamedItem('data-av-analytics-label')?.value).toBe('A navigation');
  });

  it('renders link card from space with children function', async () => {
    const space = {
      id: 'encoded10',
      configurationId: '10',
      type: 'NAVIGATION',
      name: 'A navigation',
      description: 'This is a navigation',
      link: {
        url: '/path/to/url',
        text: 'the link',
        target: '_self',
      },
    };
    const children = ({ name }: { name: string }) => <span id="space-link-child-2">{name}</span>;
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="navigation-link-10"
            space={space}
            linkAttributes={{
              spaceId: '10',
            }}
            clientId="my-client-id"
            title={space.link.text}
          >
            {children}
          </SpacesLink>
        </Spaces>
      </QueryClientProvider>
    );

    const link10_child = await waitFor(() => container.querySelector('#space-link-child-2'));

    expect(link10_child?.tagName).toBe('SPAN');
    expect(link10_child?.textContent).toBe('A navigation');
  });

  it('renders title with link role when url is provided', async () => {
    const space = {
      id: 'encoded11',
      configurationId: '11',
      type: 'APPLICATION',
      name: 'application with link',
      description: 'This is a application',
      link: {
        url: '/path/to/url',
        text: 'title',
        target: '_self',
      },
    };
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="application-link-11"
            space={space}
            linkAttributes={{
              spaceId: '11',
            }}
            role="listitem"
            clientId="my-client-id"
            title={space.link.text}
          />
        </Spaces>
      </QueryClientProvider>
    );

    const link11_title = await waitFor(() => container.querySelector('#app-title-11'));

    expect(link11_title?.getAttribute('role')).toBe('link');
  });

  it('renders title without link role when no url is provided', async () => {
    const space = {
      id: 'encoded12',
      configurationId: '12',
      type: 'APPLICATION',
      name: 'no link application',
      description: 'This is a application',
      link: {
        text: 'title',
        target: '_self',
      },
    };
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="application-link-12"
            space={space}
            linkAttributes={{
              spaceId: '12',
            }}
            role="listitem"
            clientId="my-client-id"
            title={space.link.text}
          />
        </Spaces>
      </QueryClientProvider>
    );

    const link12_title = await waitFor(() => container.querySelector('#app-title-12'));

    expect(link12_title?.getAttribute('role')).toBe('listitem');
  });

  it('renders title without link role when isGhosted', async () => {
    const space = {
      id: 'encoded13',
      configurationId: '13',
      type: 'APPLICATION',
      name: 'no link application',
      description: 'This is a application',
      link: {
        url: '/path/to/url',
        text: 'title',
        target: '_self',
      },
      isGhosted: true,
    };
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="application-link-13"
            space={space}
            linkAttributes={{
              spaceId: '13',
            }}
            role="listitem"
            clientId="my-client-id"
            title={space.link.text}
          />
        </Spaces>
      </QueryClientProvider>
    );

    const link13_title = await waitFor(() => container.querySelector('#app-title-13'));

    expect(link13_title?.getAttribute('role')).toBe('listitem');
  });

  it('renders title with link role when url is provided and isGhosted = false', async () => {
    const space = {
      id: 'encoded14',
      configurationId: '14',
      type: 'APPLICATION',
      name: 'application with link',
      description: 'This is a application',
      link: {
        url: '/path/to/url',
        text: 'title',
        target: '_self',
      },
      isGhosted: false,
    };
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="application-link-14"
            space={space}
            linkAttributes={{
              spaceId: '14',
            }}
            role="listitem"
            clientId="my-client-id"
            title={space.link.text}
          />
        </Spaces>
      </QueryClientProvider>
    );

    const link14_title = await waitFor(() => container.querySelector('#app-title-14'));

    expect(link14_title?.getAttribute('role')).toBe('link');
  });

  it('renders title with link role when url is provided and isGhosted is undefined', async () => {
    const space = {
      id: 'encoded14',
      configurationId: '14',
      type: 'APPLICATION',
      name: 'application with link',
      description: 'This is a application',
      link: {
        url: '/path/to/url',
        text: 'title',
        target: '_self',
      },
    };
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="application-link-14"
            space={space}
            linkAttributes={{
              spaceId: '14',
            }}
            role="listitem"
            clientId="my-client-id"
            title={space.link.text}
          />
        </Spaces>
      </QueryClientProvider>
    );

    const link14_title = await waitFor(() => container.querySelector('#app-title-14'));

    expect(link14_title?.getAttribute('role')).toBe('link');
  });

  it('renders link with icon for type file when icon is true', async () => {
    const space = {
      id: 'encoded14',
      configurationId: '14',
      type: 'FILE',
      url: '/path/to/url',
      name: 'file with link',
      metadataPairs: [{ name: 'icon', value: 'file-archive' }],
      description: 'This is a file',
      link: {
        url: '/path/to/url',
        text: 'title',
        target: '_self',
      },
    };
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="application-link-14"
            icon
            space={space}
            linkAttributes={{
              spaceId: '14',
            }}
            role="listitem"
            clientId="my-client-id"
            title={space.link.text}
          />
        </Spaces>
      </QueryClientProvider>
    );

    const link = await waitFor(() => container.getElementsByTagName('a'));
    expect(link[0]?.getAttribute('href')).toContain('/public/apps/home/#!/loadApp?appUrl=%2Fpath%2Fto%2Furl');
    const icon = await waitFor(() => container.getElementsByTagName('svg')[1]);

    const { container: testContainer } = render(<FileIcon data-testid="icon" />);

    expect(icon).toStrictEqual(testContainer.getElementsByTagName('svg')[0]);
  });

  it('renders icon for non file type when icon is true', async () => {
    const space = {
      id: 'encoded14',
      configurationId: '14',
      type: 'LINK',
      name: 'file with link',
      url: '/path/to/url',
      icons: {
        navigation: 'desktop',
      },
      description: 'This is a file',
      link: {
        url: '/path/to/url',
        text: 'title',
        target: '_self',
      },
    };
    const queryClient = new QueryClient();
    const { container } = render(
      <QueryClientProvider client={queryClient}>
        <Spaces clientId="my-client-id" spaces={[space]}>
          <SpacesLink
            id="application-link-14"
            space={space}
            linkAttributes={{
              spaceId: '14',
            }}
            role="listitem"
            clientId="my-client-id"
            title={space.link.text}
          />
        </Spaces>
      </QueryClientProvider>
    );

    const icon = await waitFor(() => container.getElementsByTagName('svg')[0]);

    const { container: testContainer } = render(<NavigateTopIcon data-testid="icon" />);

    expect(icon).toStrictEqual(testContainer.getElementsByTagName('svg')[0]);
  });
});
