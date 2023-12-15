import { render } from '@testing-library/react';
import { RequiredKey } from './RequiredKey';

describe('Input', () => {
  test('should render successfully', () => {
    const { getByText } = render(<RequiredKey />);
    expect(getByText('*')).toBeTruthy();
    expect(getByText('is a required field.')).toBeTruthy();
  });
});
