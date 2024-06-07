import { render } from '@testing-library/react';
import { Disclaimer } from './Disclaimer';

describe('Disclaimer', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <Disclaimer headerText="header" description="test" link={{ href: '#', children: 'a link' }} />
    );
    expect(getByText('test')).toBeTruthy();
    expect(getByText('test').classList.contains('MuiTypography-body1')).toBeTruthy();
    expect(getByText('header')).toBeTruthy();
    expect(getByText('header').tagName).toBe('H5');
    expect(getByText('a link')).toBeTruthy();
  });

  test('should render condensed successfully', () => {
    const { getByText } = render(
      <Disclaimer condensed headerText="header" description="test" link={{ href: '#', children: 'a link' }} />
    );
    expect(getByText('test')).toBeTruthy();
    expect(getByText('test').classList.contains('MuiTypography-body2')).toBeTruthy();
    expect(getByText('header')).toBeTruthy();
    expect(getByText('header').tagName).toBe('H6');
    expect(getByText('a link')).toBeTruthy();
  });
});
