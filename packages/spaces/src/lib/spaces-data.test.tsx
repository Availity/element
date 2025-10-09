import { fetchAllSpaces, parseOperationName } from './spaces-data';
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
      variables: {
        types: ['space'],
        perPage: 10,
      },
    });
    // Check correct spaces get returned
    expect(spaces.length).toBe(20);

    // Check that it took 2 calls to return all 18
    expect(apiCalls).toBe(2);
  });
});

describe('parseQueryName', () => {
  it('should return the query name if one exists in the query', async () => {
    const opName = parseOperationName(configurationFindMany);

    expect(opName).toBe('PuiSpacesCmpConfigurationFindMany');
  });

  it('should return the mutation name if one exists in the mutation', async () => {
    const opName = parseOperationName(`
      mutation FakeMutation($ids: [String!]) {
        fakeMutation({ ids: $ids }) {
          id
        }
    }`);

    expect(opName).toBe('FakeMutation');
  });

  it('should return the subscription name if one exists in the subscription', async () => {
    const opName = parseOperationName(`
      subscription FakeSubscription($ids: [String!]) {
        fakeSubscription({ ids: $ids }) {
          id
        }
      }`);

    expect(opName).toBe('FakeSubscription');
  });

  it('should return undefined if an opeation does not exist on the query', async () => {
    const opName = parseOperationName(`
        fakeQuery({ ids: $ids }) {
          id
        }`);

    expect(opName).toBe(undefined);
  });
});
