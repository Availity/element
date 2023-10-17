import { render } from '@testing-library/react';
import { TextField } from './TextField';

describe('TextField', () => {
  test('should render successfully', () => {
    const { getByLabelText } = render(<TextField label="Test" />);
    expect(getByLabelText('Test')).toBeTruthy();
  });
});
