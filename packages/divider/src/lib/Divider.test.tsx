import { render } from '@testing-library/react';
import { Divider } from './Divider';

describe('Divider', () => {
  test('should render successfully', () => {
    const { getByRole } = render(<Divider />);
    const hrElement = getByRole('separator');
    expect(hrElement).toBeTruthy();
  });
});
