import { render } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  test('should display initials when string passed as child', () => {
    const { getByText } = render(<Avatar>Test Person</Avatar>);
    expect(getByText('TP')).toBeTruthy();
  });
  test('should display first two initials when multi-word child is passed', () => {
    const { getByText } = render(<Avatar>This is a test</Avatar>);
    expect(getByText('TI')).toBeTruthy();
  });
  test('should display first initial when size is small', () => {
    const { getByText } = render(<Avatar size="xs">This is a test</Avatar>);
    expect(getByText('T')).toBeTruthy();
  });
});
