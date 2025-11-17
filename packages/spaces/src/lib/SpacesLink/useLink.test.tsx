import { waitFor, cleanup, render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import nativeForm from '@availity/native-form';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Spaces } from '../Spaces';
import { SpacesLink } from './SpacesLink';
import type { Space } from '../spaces-types';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '@availity/mock/src/lib/server';

jest.mock('@availity/native-form');

const buildSpacesLink = (space: Space, linkAttributes: Record<any, any>) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Spaces clientId="my-client-id" spaces={[space]}>
        <SpacesLink
          id={`application-link-${space.id}`}
          titleTag="h5"
          space={space}
          linkAttributes={linkAttributes}
          clientId="my-client-id"
          variant="card"
          title={space.link?.text}
        />
      </Spaces>
    </QueryClientProvider>
  );
};

const originalDocumentReferrer = document.referrer;

describe('useLink', () => {
  beforeAll(() => {
    // Start the interception.
    server.listen();
  });
  beforeEach(() => {
    Object.defineProperty(window, 'open', { value: jest.fn() });
  });
  afterEach(() => {
    Object.defineProperty(document, 'referrer', {
      writable: true,
      value: originalDocumentReferrer,
    });
    jest.clearAllMocks();
    cleanup();
    server.resetHandlers();

  });

  // terminate the server
  afterAll(() => server.close());

  const space: Space = {
    type: 'APPLICATION',
    name: 'an application',
    description: 'This is an application',
    id: '1',
    configurationId: '1',
  };

  it('should not call linkUrl onclick with no url', async () => {
    space.id = '1';
    space.configurationId = '1';

    const { container } = render(buildSpacesLink(space, { spaceId: space.id }));

    fireEvent.click(container);
    await waitFor(() => {
      expect(window.open).not.toHaveBeenCalled();
      expect(nativeForm).not.toHaveBeenCalled();
    });
  });

  it('should not call linkUrl on enter keypress with no url', async () => {
    space.id = '2';
    space.configurationId = '2';

    const { container } = render(buildSpacesLink(space, { spaceId: space.id }));

    fireEvent.keyPress(container, { charCode: 13 });
    await waitFor(() => {
      expect(window.open).not.toHaveBeenCalled();
      expect(nativeForm).not.toHaveBeenCalled();
    });
  });

  it('should call linkUrl onclick with relativeUrl', async () => {
    space.id = '3';
    space.configurationId = '3';
    space.link = {
      text: 'the link',
      target: '_self',
      url: '/path/to/url',
    };

    const { container } = render(buildSpacesLink(space, { spaceId: space.id }));

    const linkHeader3 = await waitFor(() => container.querySelector('#app-title-3'));
    if (linkHeader3) fireEvent.click(linkHeader3);

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith('/path/to/url?spaceId=3', '_self');
      expect(nativeForm).not.toHaveBeenCalled();
    });
  });

  it('should call linkUrl on enter keydown with relativeUrl', async () => {
    space.id = '4';
    space.configurationId = '4';
    space.link = {
      text: 'the link',
      target: '_self',
      url: '/path/to/url',
    };

    const { container } = render(buildSpacesLink(space, { spaceId: space.id }));

    const linkHeader4 = await waitFor(() => container.querySelector('#app-title-4'));

    if (linkHeader4) fireEvent.keyDown(linkHeader4, { key: 'Enter' });

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith('/path/to/url?spaceId=4', '_self');
      expect(nativeForm).not.toHaveBeenCalled();
    });
  });

  it('should call linkUrl onclick with absoluteUrl', async () => {
    space.id = '5';
    space.configurationId = '5';
    space.link = { text: 'the link', target: '_self', url: 'https://www.google.com' };

    const { container } = render(buildSpacesLink(space, { spaceId: space.id }));

    const linkHeader5 = await waitFor(() => container.querySelector('#app-title-5'));

    if (linkHeader5) fireEvent.click(linkHeader5);
    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith('https://www.google.com', '_self');
      expect(nativeForm).not.toHaveBeenCalled();
    });
  });

  it('should call linkUrl on enter keypress with absoluteUrl', async () => {
    space.id = '6';
    space.configurationId = '6';
    space.link = { text: 'the link', target: '_self', url: 'https://www.google.com' };

    const { container } = render(buildSpacesLink(space, { spaceId: space.id }));

    const linkHeader6 = await waitFor(() => container.querySelector('#app-title-6'));

    if (linkHeader6) fireEvent.keyDown(linkHeader6, { key: 'Enter' });
    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith('https://www.google.com', '_self');
      expect(nativeForm).not.toHaveBeenCalled();
    });
  });

  it('should call linkUrl if multiPayerModal used but linkAttributes.spaceId is passed', async () => {
    space.id = '6';
    space.configurationId = '6';
    space.link = { text: 'the link', target: '_self', url: '/path/to/url' };
    space.parents = [
      {
        id: 'parentId',
        type: 'space',
        name: 'parentId',
        configurationId: 'parentId',
      },
      {
        id: 'parentId2',
        type: 'space',
        name: 'parentId2',
        configurationId: 'parentId2',
      },
    ];

    const { container } = render(buildSpacesLink(space, { spaceId: space.id }));

    const linkHeader6 = await waitFor(() => container.querySelector('#app-title-6'));

    if (linkHeader6) fireEvent.keyDown(linkHeader6, { key: 'Enter' });
    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith('/path/to/url?spaceId=6', '_self');
      expect(nativeForm).not.toHaveBeenCalled();
    });
  });

  it('should call legacySSO onclick with disclaimerId metadata', async () => {
    space.id = '7';
    space.configurationId = '7';
    space.link = { text: 'the link', target: '_self', url: '/path/to/url' };
    space.meta = { disclaimerId: 'disclaimer' };

    const { container, findByText, getByRole } = render(buildSpacesLink(space, { spaceId: space.id }));

    const linkHeader7 = await waitFor(() => container.querySelector('#app-title-7'));
    if (linkHeader7) fireEvent.click(linkHeader7);

    await waitForElementToBeRemoved(() => getByRole('progressbar'));

    const disclaimer = await findByText('This is a disclaimer.');
    expect(disclaimer).toBeDefined();

    const modalSubmit = await findByText('Accept');
    fireEvent.click(modalSubmit);

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith('/path/to/url?spaceId=7', '_self');
      expect(nativeForm).not.toHaveBeenCalled();
    });
  });



  it('should call legacySSO on enter keypress with disclaimerId metadata', async () => {
    space.id = '8';
    space.configurationId = '8';
    space.link = { text: 'the link', target: '_self', url: '/path/to/url' };
    space.meta = { disclaimerId: '1234' };

    const { container, findByText } = render(buildSpacesLink(space, { spaceId: space.id }));

    const linkHeader8 = await waitFor(() => container.querySelector('#app-title-8'));
    if (linkHeader8) fireEvent.keyDown(linkHeader8, { key: 'Enter' });

    const disclaimer = await findByText('hello world');
    expect(disclaimer).toBeDefined();

    const modalSubmit = await findByText('Accept');
    fireEvent.click(modalSubmit);

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith('/path/to/url?spaceId=8', '_self');
      expect(nativeForm).not.toHaveBeenCalled();
    });
  });


  it('should call ssoId onclick with ssoId metadata', async () => {
    space.id = '9';
    space.configurationId = '9';
    space.link = { text: 'the link', target: '_self', url: '/path/to/url' };
    space.meta = {
      ssoId: 'ssoId',
    };
    space.type = 'saml';

    const { container } = render(buildSpacesLink(space, { spaceId: space.id }));

    const linkHeader9 = await waitFor(() => container.querySelector('#app-title-9'));
    if (linkHeader9) fireEvent.click(linkHeader9);

    await waitFor(() => {
      expect(nativeForm).toHaveBeenCalledWith(
        'ssoId',
        { X_Client_ID: 'my-client-id', X_XSRF_TOKEN: '', spaceId: '9' },
        { target: '_self' },
        'saml'
      );
      expect(window.open).not.toHaveBeenCalled();
    });
  });

  it('should call ssoId on enter keypress with ssoId metadata', async () => {
    space.id = '10';
    space.configurationId = '10';
    space.link = { text: 'the link', target: '_self', url: '/path/to/url' };
    space.meta = {
      ssoId: 'ssoId',
    };
    space.type = 'saml';

    const { container } = render(buildSpacesLink(space, { spaceId: space.id }));

    const linkHeader10 = await waitFor(() => container.querySelector('#app-title-10'));
    if (linkHeader10) fireEvent.keyDown(linkHeader10, { key: 'Enter' });
    await waitFor(() => {
      expect(nativeForm).toHaveBeenCalledWith(
        'ssoId',
        { X_Client_ID: 'my-client-id', X_XSRF_TOKEN: '', spaceId: '10' },
        { target: '_self' },
        'saml'
      );
      expect(window.open).not.toHaveBeenCalled();
    });
  });

  it('should build relative onprem path to full url - t14', async () => {
    Object.defineProperty(document, 'referrer', {
      value: new URL("https://t14-apps.availity.com"),
    });

    space.id = '11';
    space.configurationId = '11';
    space.link = { text: 'the link', target: '_self', url: '/public/spaces/url' };
    space.type = 'APPLICATION';
    space.meta = {};

    const { container } = render(buildSpacesLink(space, { spaceId: space.id }));

    const linkHeader11 = await waitFor(() => container.querySelector('#app-title-11'));

    if (linkHeader11) fireEvent.click(linkHeader11);

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith('https://t14-apps.availity.com/public/spaces/url?spaceId=11', '_self');
      expect(nativeForm).not.toHaveBeenCalled();
    });
  });

  it('should build relative onprem path to full url - test', async () => {
    Object.defineProperty(document, 'referrer', {
      value: new URL("https://test-apps.availity.com"),
    });

    space.id = '12';
    space.configurationId = '12';
    space.link = { text: 'the link', target: '_self', url: '/public/spaces/url' };
    space.type = 'APPLICATION';
    space.meta = {};

    const { container } = render(buildSpacesLink(space, { spaceId: space.id }));

    const linkHeader = await waitFor(() => container.querySelector('#app-title-12'));

    if (linkHeader) fireEvent.click(linkHeader);

    await waitFor(() => {
      expect(window.open).toHaveBeenCalledWith('https://test-apps.availity.com/public/spaces/url?spaceId=12', '_self');
      expect(nativeForm).not.toHaveBeenCalled();
    });
  });
});
