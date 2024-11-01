import { render, waitForElementToBeRemoved } from '@testing-library/react';
import { PageHeader } from './PageHeader';

describe('PageHeader', () => {
  test('should render simple page header successfully', () => {
    const { getByText } = render(<PageHeader breadcrumbs={{ active: 'This page' }} headerText="This is the header" />);
    expect(getByText('This is the header')).toBeTruthy();
    expect(getByText('This page')).toBeTruthy();
  });

  test('should render page header with help successfully', () => {
    const { getByText } = render(
      <PageHeader
        breadcrumbs={{ active: 'This page' }}
        headerText="This is the header"
        help={{ url: 'https://www.availity.com' }}
      />
    );
    expect(getByText('This is the header')).toBeTruthy();
    expect(getByText('This page')).toBeTruthy();
    expect(getByText('Need help?').getElementsByTagName('a')[0].getAttribute('href')).toBe('https://www.availity.com');
  });

  test('should render page header with a button successfully', () => {
    const { getByText } = render(
      <PageHeader
        breadcrumbs={{ active: 'This page' }}
        headerText="This is the header"
        buttons={[{ children: 'Button 1', key: 'button1' }]}
      />
    );
    expect(getByText('This is the header')).toBeTruthy();
    expect(getByText('This page')).toBeTruthy();
    expect(getByText('Button 1')).toBeTruthy();
  });
});
