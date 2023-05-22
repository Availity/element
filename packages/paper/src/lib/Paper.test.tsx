import { render } from '@testing-library/react';
import { Paper } from './Paper';

describe('Paper', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Paper>Test</Paper>);
    expect(getByText('Test')).toBeTruthy();
  });
});
