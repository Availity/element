import React from 'react';
import { render } from '@testing-library/react';
import Badge from './Badge';

describe('Badge', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Badge>Test</Badge>);
    expect(getByText('Test')).toBeTruthy();
  });
});
