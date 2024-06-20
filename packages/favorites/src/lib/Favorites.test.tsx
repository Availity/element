import { render } from '@testing-library/react';
import { Favorites } from './Favorites';

describe('Favorites', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Favorites>Test</Favorites>);
    expect(getByText('Test')).toBeTruthy();
  });
});
