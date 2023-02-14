import * as tokens from './generated/tokens';

describe('design-tokens', () => {
  test('tokens should exist', () => {
    expect(Object.keys(tokens).length).toEqual(363);
  });
});
