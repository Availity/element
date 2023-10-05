import { render } from '@testing-library/react';
import { Grid } from './Grid';

describe('Grid', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Grid>Test</Grid>);
    expect(getByText('Test')).toBeTruthy();
  });
});
