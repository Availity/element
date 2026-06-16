import { screen, render, fireEvent, waitFor } from '@testing-library/react';

import Upload from '@availity/upload-core';
import { FileList2 } from './FileList2';

const options = { bucketId: '123', customerId: '123', clientId: '123' };

describe('FileList2', () => {
  test('should render successfully', async () => {
    const mockFile = new File(['file content'], 'mock.txt', { type: 'text/plain' });
    const upload = new Upload(mockFile, options);

    render(
      <FileList2
        uploads={[upload]}
        options={options}
        onRemoveFile={() => {
          // noop
        }}
      />
    );

    await waitFor(() => {
      expect(screen.getByText('mock.txt')).toBeDefined();
    });
  });

  test('should call onRemoveFile', async () => {
    const mockRemove = vi.fn();
    const mockFile = new File(['file content'], 'mock.txt', { type: 'text/plain' });
    const upload = new Upload(mockFile, options);

    render(
      <FileList2
        uploads={[upload]}
        options={options}
        onRemoveFile={(id) => {
          mockRemove(id);
        }}
      />
    );

    await waitFor(() => {
      expect(screen.getByText('mock.txt')).toBeDefined();
    });

    fireEvent.click(screen.getByLabelText('remove file'));
    expect(mockRemove).toHaveBeenCalled();
  });

  test('should not display remove button when disableRemove is set to true', async () => {
    const mockRemove = vi.fn();
    const mockFile = new File(['file content'], 'mock.txt', { type: 'text/plain' });
    const upload = new Upload(mockFile, options);

    render(
      <FileList2
        uploads={[upload]}
        options={options}
        onRemoveFile={(id) => {
          mockRemove(id);
        }}
        disableRemove
      />
    );

    await waitFor(() => {
      expect(screen.getByText('mock.txt')).toBeDefined();
    });

    expect(() => screen.getByLabelText('remove file')).toThrow();
  });
});
