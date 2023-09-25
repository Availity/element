import { render } from '@testing-library/react';
import { TextField } from './TextField';

describe('TextField', () => {
  test('should render successfully', () => {
    const { getByText } = render(<TextField label="Test" />);
    expect(getByText('Test')).toBeTruthy();
  });
});
