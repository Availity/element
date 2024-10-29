import { render, screen } from '@testing-library/react';

import { HeaderMessage } from './HeaderMessage';

describe('HeaderMessage', () => {
  test('should render successfully', () => {
    render(<HeaderMessage maxFiles={5} maxSize={1000} />);

    expect(screen.getByText(/Attach/)).toBeTruthy();
  });
});
