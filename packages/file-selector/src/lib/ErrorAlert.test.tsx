import { render, screen } from '@testing-library/react';

import { ErrorAlert } from './ErrorAlert';

describe('ErrorAlert', () => {
  test('should render error message', () => {
    render(<ErrorAlert id={0} errors={[{ code: 'test', message: 'example' }]} fileName="file" onClose={jest.fn()} />);

    expect(screen.getByText('Error: file')).toBeDefined();
  });
});
