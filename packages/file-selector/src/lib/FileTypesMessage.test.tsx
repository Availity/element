import { render, screen } from '@testing-library/react';

import { FileTypesMessage } from './FileTypesMessage';

describe('FileTypesMessage', () => {
  test('should render successfully', () => {
    render(<FileTypesMessage allowedFileTypes={[]} maxFileSize={1000} />);

    expect(screen.getByText(/All file types allowed/)).toBeTruthy();
  });

  test('should show file size', () => {
    render(<FileTypesMessage allowedFileTypes={[]} maxFileSize={1000} />);

    expect(screen.getByText(/Maximum file size is/)).toBeTruthy();
  });
});
