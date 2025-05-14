import { screen, render, fireEvent, waitFor } from '@testing-library/react';

import { FileList } from './FileList';
import Upload from '@availity/upload-core';

const options = { bucketId: '123', customerId: '123', clientId: '123' };

describe('FileList', () => {
  test('should render successfully', async () => {
    const mockFile = new File(['file content'], 'mock.txt', { type: 'text/plain' });
    const upload = new Upload(mockFile, options);

    render(
      <FileList
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
    const mockRemove = jest.fn();
    const mockFile = new File(['file content'], 'mock.txt', { type: 'text/plain' });
    const upload = new Upload(mockFile, options);

    render(
      <FileList
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
    const mockRemove = jest.fn();
    const mockFile = new File(['file content'], 'mock.txt', { type: 'text/plain' });
    const upload = new Upload(mockFile, options);

    render(
      <FileList
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
