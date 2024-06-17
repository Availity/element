import { fetchAllSpaces } from './spaces-data';
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
    let apiCalls = 0;
    server.events.on('request:start', () => (apiCalls += 1));

    const spaces = await fetchAllSpaces({
      query: configurationFindMany,
      clientId: 'clientId',
      variables: {
        types: ['space'],
        perPage: 10,
      },
    });
    // Check correct spaces get returned
    expect(spaces.length).toBe(18);

    // Check that it took 2 calls to return all 18
    expect(apiCalls).toBe(2);
  });
});
