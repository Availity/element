import { render } from '@testing-library/react';
import { CardActionArea } from './CardActionArea';

describe('CardActionArea', () => {
  test('should render successfully', () => {
    const { getByText } = render(<CardActionArea>Test</CardActionArea>);
    expect(getByText('Test')).toBeTruthy();
  });
});
