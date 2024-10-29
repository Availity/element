import { render, screen } from '@testing-library/react';
import Upload from '@availity/upload-core';

import { UploadProgressBar } from './UploadProgressBar';

describe('UploadProgressBar', () => {
  test('should render successfully', () => {
    const mockUpload: unknown = {
      onProgress: [],
      onError: [],
      onSuccess: [],
      errorMessage: '',
      file: {
        name: 'test',
      },
      percentage: 50,
    };

    render(<UploadProgressBar upload={mockUpload as Upload} />);

    expect(screen.getByText('50%')).toBeTruthy();
  });
});
