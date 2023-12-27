import { render } from '@testing-library/react';
import { Radio } from './Radio';

describe('Radio', () => {
  test('should render successfully', () => {
    const { getByRole } = render(<Radio />);
    expect(getByRole('radio')).toBeTruthy();
  });
});
