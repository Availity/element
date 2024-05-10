import { normalizeSpaces, fetchAllSpaces } from './spaces-data';
import configurationFindMany from './configurationFindMany';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { server } from '../../../mock/src/lib/server';

beforeAll(() => {
  // Start the interception.
  server.listen();
});

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers();
});

afterAll(() => {
  // Disable request interception and clean up.
  server.close();
});

describe('getAllSpaces', () => {
  it('gets all spaces', async () => {
    const spaces = await fetchAllSpaces({
      query: configurationFindMany,
      clientId: 'clientId',
      variables: {
        types: ['space'],
      },
    });
    // Check correct spaces get returned
    expect(spaces.length).toBe(10);
    expect(spaces[0].id).toBe('1');
    expect(spaces[spaces.length - 1].id).toBe('10');
  });
});

describe('normalizeSpaces', () => {
  it('normalizes space pairs', async () => {
    const spaces = [
      {
        id: '1',
        configurationId: '1',
        type: 'space',
        name: 'Space 1',
        metadata: [
          { name: 'a', value: '1' },
          { name: 'b', value: '2' },
        ],
      },
    ];

    const sanitized = normalizeSpaces(spaces);

    expect(sanitized[0].metadata).toEqual({ a: '1', b: '2' });
  });
});
