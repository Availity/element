import { render } from '@testing-library/react';
import { CardMedia } from './CardMedia';

describe('CardMedia', () => {
  test('should render successfully', () => {
    const { getByText } = render(<CardMedia>Test</CardMedia>);
    expect(getByText('Test')).toBeTruthy();
  });
});
