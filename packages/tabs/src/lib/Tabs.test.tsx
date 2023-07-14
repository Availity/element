import { render } from '@testing-library/react';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  test('should render successfully', () => {
    const { getByRole } = render(<Tabs />);
    expect(getByRole('tablist')).toBeTruthy();
  });
});
