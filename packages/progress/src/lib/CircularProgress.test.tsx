import { render } from '@testing-library/react';
import { CircularProgress } from './CircularProgress';

describe('Progress', () => {
  test('should render successfully', () => {
    const { getByText } = render(<CircularProgress />);
    expect(getByText('Test')).toBeTruthy();
  });
});
