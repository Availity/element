import { render } from '@testing-library/react';
import { Tab } from './Tab';

describe('Tab', () => {
  test('should render successfully', () => {
    const { getByTitle } = render(<Tab title="Test" />);
    expect(getByTitle('Test')).toBeTruthy();
  });
});
