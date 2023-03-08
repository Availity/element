import { render } from '@testing-library/react';
import { Breadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Breadcrumbs>Test</Breadcrumbs>);
    expect(getByText('Test')).toBeTruthy();
  });
});
