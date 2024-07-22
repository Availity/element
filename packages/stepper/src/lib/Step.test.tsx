import { render, screen } from '@testing-library/react';

import { Step } from './Step';

describe('Step', () => {
  test('should render successfully', () => {
    render(<Step>Test</Step>);

    expect(screen.getByText('Test')).toBeTruthy();
  });
});
