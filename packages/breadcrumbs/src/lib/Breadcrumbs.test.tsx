import { render } from '@testing-library/react';
import { AvBreadcrumbs as Breadcrumbs } from './Breadcrumbs';

describe('Breadcrumbs', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Breadcrumbs active='Test' linkTag='a'/>);
    expect(getByText('Test')).toBeTruthy();
  });
});
