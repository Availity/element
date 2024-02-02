import { render } from '@testing-library/react';
import { Dialog } from './Dialog';

describe('Dialog', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Dialog>Test</Dialog>);
    expect(getByText('Test')).toBeTruthy();
  });
});
