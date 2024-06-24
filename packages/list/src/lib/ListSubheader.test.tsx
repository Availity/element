import { render } from '@testing-library/react';
import { ListSubheader } from './ListSubheader';

describe('ListSubheader', () => {
  test('should render successfully', () => {
    const { getByText } = render(<ListSubheader>Test</ListSubheader>);
    expect(getByText('Test')).toBeTruthy();
  });
});
