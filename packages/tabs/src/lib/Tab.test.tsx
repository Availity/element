import { render } from '@testing-library/react';
import { Tab } from './Tab';

describe('Tab', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Tab title="Test" />);
    expect(getByText('Test')).toBeTruthy();
  });
});
