import { render, screen } from '@testing-library/react';
import Upload from '@availity/upload-core';

import { UploadProgressBar, friendlyErrorMessage, DEFAULT_UPLOAD_ERROR } from './UploadProgressBar';

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

  test('should show default error for unrecognized error message', () => {
    const mockUpload: unknown = {
      onProgress: [],
      onError: [],
      onSuccess: [],
      errorMessage: 'some unknown error',
      file: {
        name: 'test',
      },
      percentage: 0,
    };

    render(<UploadProgressBar upload={mockUpload as Upload} />);

    expect(screen.getByText(DEFAULT_UPLOAD_ERROR)).toBeTruthy();
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

  test('should show default error for stack trace', () => {
    const mockUpload: unknown = {
      onProgress: [],
      onError: [],
      onSuccess: [],
      errorMessage:
        'java.lang.NullPointerException\n\tat com.availity.vault.upload.FileProcessor.process(FileProcessor.java:42)\n\tat com.availity.vault.upload.UploadHandler.handle(UploadHandler.java:108)',
      file: {
        name: 'test',
      },
      percentage: 0,
    };

    render(<UploadProgressBar upload={mockUpload as Upload} />);

    expect(screen.getByText(DEFAULT_UPLOAD_ERROR)).toBeTruthy();
  });

  test('should show default error for TUS failure', () => {
    const mockUpload: unknown = {
      onProgress: [],
      onError: [],
      onSuccess: [],
      errorMessage: 'tus: failed to upload chunk, server responded with 500',
      file: {
        name: 'test',
      },
      percentage: 0,
    };

    render(<UploadProgressBar upload={mockUpload as Upload} />);

    expect(screen.getByText(DEFAULT_UPLOAD_ERROR)).toBeTruthy();
  });

  test('should allow passwords for encrypted files', () => {
    const mockUpload: unknown = {
      onProgress: [],
      onError: [],
      onSuccess: [],
      errorMessage: 'some error',
      file: {
        name: 'test',
      },
      status: 'encrypted',
    };

    render(<UploadProgressBar upload={mockUpload as Upload} />);

    expect(screen.getByText(DEFAULT_UPLOAD_ERROR)).toBeTruthy();
    expect(screen.getByText('Enter Password')).toBeTruthy();
  });
});

describe('friendlyErrorMessage', () => {
  test('returns specific message for file extension mismatch', () => {
    expect(friendlyErrorMessage('.txt is application/pdf but has an extension for text/plain')).toBe(
      'File format does not match file extension.'
    );
  });

  test('returns default message for unknown errors', () => {
    expect(friendlyErrorMessage('something went wrong')).toBe(DEFAULT_UPLOAD_ERROR);
  });

  test('returns default message for stack traces', () => {
    expect(friendlyErrorMessage('at com.availity.Foo.bar(Foo.java:42)')).toBe(DEFAULT_UPLOAD_ERROR);
  });

  test('returns default message for empty-ish strings', () => {
    expect(friendlyErrorMessage(' '.repeat(3))).toBe(DEFAULT_UPLOAD_ERROR);
  });
});
