import { render, fireEvent } from '@testing-library/react';
import { Link } from './Link';

describe('Link', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Link href="#">Test</Link>);

    expect(getByText('Test')).toBeTruthy();
  });

  test('should render icon on left if no iconPosition passed', () => {
    const { container } = render(
      <Link target="_blank" href="#">
        Test
      </Link>
    );

    const spanChildren = container.getElementsByTagName('span')[0].children;

    expect(spanChildren[0].tagName).toBe('svg');
  });

  test('should render icon on left if iconPosition is set to `start` passed', () => {
    const { container } = render(
      <Link target="_blank" href="#" iconPosition="start">
        Test
      </Link>
    );

    const spanChildren = container.getElementsByTagName('span')[0].children;

    expect(spanChildren[0].tagName).toBe('svg');
  });

  test('should render icon on right if iconPosition is set to `end` passed', () => {
    const { container } = render(
      <Link target="_blank" href="#" iconPosition="end">
        Test
      </Link>
    );

    const spanChildren = container.getElementsByTagName('span')[0].children;

    expect(spanChildren[spanChildren.length - 1].tagName).toBe('svg');
  });

  test('should render absolute url', () => {
    const { getByRole } = render(<Link href="https://github.com/Availity">Test</Link>);

    const link = getByRole('link');

    expect(link.getAttribute('href')).toBe('https://github.com/Availity');
  });

  test('should render formatted url when url prop is relative', () => {
    const { getByRole } = render(<Link href="/public/apps/my-app">My App</Link>);

    const link = getByRole('link');
    const expected = '/public/apps/home/#!/loadApp?appUrl=%2Fpublic%2Fapps%2Fmy-app';

    expect(link.getAttribute('href')).toBe(expected);
  });

  test('should render url prop as is when loadApp is false', () => {
    const { getByRole } = render(
      <Link loadApp={false} href="/public/apps/my-app">
        My App
      </Link>
    );

    const link = getByRole('link');
    const expected = '/public/apps/my-app';

    expect(link.getAttribute('href')).toBe(expected);
  });

  test('should default rel prop if none provided when linking to external site', () => {
    const { getByRole } = render(
      <Link loadApp={false} href="https://github.com/Availity" target="_blank">
        Github
      </Link>
    );

    const link = getByRole('link');
    const expected = 'noopener noreferrer';

    expect(link.getAttribute('rel')).toBe(expected);
  });

  test('should respect rel prop if provided when linking to external site', () => {
    const { getByRole } = render(
      <Link loadApp={false} href="https://github.com/Availity" target="_blank" rel="nofollow">
        Github
      </Link>
    );

    const link = getByRole('link');
    const expected = 'nofollow';

    expect(link.getAttribute('rel')).toBe(expected);
  });

  test('should call onClick', () => {
    const onClick = jest.fn();

    const { getByRole } = render(
      <Link loadApp={false} href="/public/apps/my-app" onClick={onClick}>
        My App
      </Link>
    );

    const link = getByRole('link');
    fireEvent.click(link);

    expect(onClick.mock.calls[0][1]).toBe('/public/apps/my-app');
  });

  test('should render link with proper styling', () => {
    const { getByRole } = render(
      <Link href="/public/apps/my-app" className="card-link">
        My App
      </Link>
    );

    const link = getByRole('link');

    expect(link.getAttribute('class')).toContain('card-link');
  });

  test('should set target to _top when loadApp is true', () => {
    const { getByRole } = render(
      <Link href="/public/apps/my-app" loadApp={true} target="_self">
        My App
      </Link>
    );

    const link = getByRole('link');
    expect(link.getAttribute('target')).toBe('_top');
  });
});
