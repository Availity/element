import { render, screen } from '@testing-library/react';

import { ErrorAlert, formatFileTooLarge } from './ErrorAlert';

describe('ErrorAlert', () => {
  test('should render error message', () => {
    render(<ErrorAlert id={0} errors={[{ code: 'test', message: 'example' }]} fileName="file" onClose={vi.fn()} />);

    expect(screen.getByText('Error: file')).toBeDefined();
  });
});

describe('formatFileTooLarge', () => {
  test('should format file too large error message', () => {
    // 10000000 bytes = 10 MB with SI standard (1000 divisor)
    const formattedError = formatFileTooLarge('File is larger than 10000000 bytes');

    expect(formattedError).toEqual('File is larger than 10 MB');
  });

  test('should return original error message if it does not match', () => {
    const formattedError = formatFileTooLarge('File is larger than one hundred bytes');

    expect(formattedError).toEqual('File is larger than one hundred bytes');
  });
});
