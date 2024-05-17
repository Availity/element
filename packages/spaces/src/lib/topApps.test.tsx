import { cleanup } from '@testing-library/react';
import { updateTopApps } from './topApps';
import { Space } from './spaces-types';

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem(key: string) {
      return store[key];
    },
    setItem(key: string, value: Space) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key: string) {
      delete store[key];
    },
  };
})();

describe('updateTopApps', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date('2022-01-01').getTime());
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  });
  afterEach(() => {
    jest.clearAllMocks();
    window.localStorage.clear();
    cleanup();
  });

  it('should updateTopApps for applications', async () => {
    await updateTopApps(
      { id: 'space1', configurationId: 'space1', name: 'space1', type: 'APPLICATION' },
      'aka123456789'
    );

    expect(window.localStorage.getItem('myTopApps-aka123456789')).toEqual(
      '{"space1":{"count":1,"lastUse":"2022-01-01T00:00:00+00:00"}}'
    );
  });

  it('should updateTopApps for resources', async () => {
    await updateTopApps({ id: 'space2', configurationId: 'space2', name: 'space2', type: 'RESOURCE' }, 'aka123456789');

    expect(window.localStorage.getItem('myTopApps-aka123456789')).toEqual(
      '{"space2":{"count":1,"lastUse":"2022-01-01T00:00:00+00:00"}}'
    );
  });

  it('should updateTopApps for navigations', async () => {
    await updateTopApps(
      { id: 'space3', configurationId: 'space3', name: 'space3', type: 'NAVIGATION' },
      'aka123456789'
    );

    expect(window.localStorage.getItem('myTopApps-aka123456789')).toEqual(
      '{"space3":{"count":1,"lastUse":"2022-01-01T00:00:00+00:00"}}'
    );
  });

  it('should updateTopApps for multiple clicks', async () => {
    await updateTopApps(
      { id: 'space1', configurationId: 'space1', name: 'space1', type: 'APPLICATION' },
      'aka123456789'
    );
    await updateTopApps(
      { id: 'space1', configurationId: 'space1', name: 'space1', type: 'APPLICATION' },
      'aka123456789'
    );

    expect(window.localStorage.getItem('myTopApps-aka123456789')).toEqual(
      '{"space1":{"count":2,"lastUse":"2022-01-01T00:00:00+00:00"}}'
    );
  });

  it('should not updateTopApps if type is not allowed', async () => {
    await updateTopApps({ id: 'space2', configurationId: 'space2', name: 'space2', type: 'SAML' }, 'aka123456789');

    expect(window.localStorage.getItem('myTopApps-aka123456789')).toEqual(undefined);
  });

  it('should not updateTopApps if id is blacklisted', async () => {
    await updateTopApps(
      { id: 'reporting', configurationId: 'reporting', name: 'reporting', type: 'APPLICATION' },
      'aka123456789'
    );

    expect(window.localStorage.getItem('myTopApps-aka123456789')).toEqual(undefined);
  });
});
