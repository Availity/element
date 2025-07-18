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

  test('should show error message', () => {
    const mockUpload: unknown = {
      onProgress: [],
      onError: [],
      onSuccess: [],
      errorMessage: 'error message',
      file: {
        name: 'test',
      },
      percentage: 0,
    };

    render(<UploadProgressBar upload={mockUpload as Upload} />);

    expect(screen.getByText('error message')).toBeTruthy();
  });

  test('should intercept file extension error message', () => {
    const mockUpload: unknown = {
      onProgress: [],
      onError: [],
      onSuccess: [],
      errorMessage: '.txt is application&#x2f;pdf but has an extension for text&#x2f;plain',
      file: {
        name: 'test',
      },
      percentage: 0,
    };

    render(<UploadProgressBar upload={mockUpload as Upload} />);

    expect(screen.getByText('File format does not match file extension.')).toBeTruthy();
  });

  test('should allow passwords for encrypted files', () => {
    const mockUpload: unknown = {
      onProgress: [],
      onError: [],
      onSuccess: [],
      errorMessage: 'error message',
      file: {
        name: 'test',
      },
      status: 'encrypted',
    };

    render(<UploadProgressBar upload={mockUpload as Upload} />);

    expect(screen.getByText('error message')).toBeTruthy();
    expect(screen.getByText('Enter Password')).toBeTruthy();
  });
});
