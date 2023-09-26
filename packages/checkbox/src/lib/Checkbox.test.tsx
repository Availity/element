import { render } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Checkbox>Test</Checkbox>);
    expect(getByText('Test')).toBeTruthy();
  });
});
