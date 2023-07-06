import { render } from '@testing-library/react';
import { CardActions } from './CardActions';

describe('CardActions', () => {
  test('should render successfully', () => {
    const { getByText } = render(<CardActions>Test</CardActions>);
    expect(getByText('Test')).toBeTruthy();
  });
});
