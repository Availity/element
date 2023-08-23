import * as tokens from './generated/tokens';
import * as legacytokens from './generated/legacytokens';

describe('design-tokens', () => {
  test('tokens should exist', () => {
    expect(Object.keys(tokens).length).toBeGreaterThan(0);
  });
  test('legacy tokens should exist', () => {
    expect(Object.keys(legacytokens).length).toBeGreaterThan(0);
  });
});
