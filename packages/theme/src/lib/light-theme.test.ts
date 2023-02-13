import { lightTheme } from './light-theme';

describe('theme', () => {
  test("should have a theme mode 'light'", () => {
    expect(lightTheme.mode).toEqual('light');
  });
});
