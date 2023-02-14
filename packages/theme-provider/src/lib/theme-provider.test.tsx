import { render } from '@testing-library/react';

import ThemeProvider from './theme-provider';

describe('ThemeProvider', () => {
  test('should render successfully', () => {
    const { getByText } = render(<ThemeProvider>Test</ThemeProvider>);
    expect(getByText('Test')).toBeTruthy();
  });
});
