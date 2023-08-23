import { legacyTheme } from './legacy-theme';

describe('theme', () => {
  test("should have a theme mode 'light'", () => {
    expect(legacyTheme.mode).toEqual('light');
  });
});
