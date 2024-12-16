import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { FileList } from './FileList';

describe('FileList', () => {
  test('should render successfully', async () => {
    const mockFile = new File(['file content'], 'mock.txt', { type: 'text/plain' });

    render(
      <QueryClientProvider client={new QueryClient()}>
        <FileList
          files={[mockFile]}
          options={{ bucketId: '123', customerId: '123', clientId: '123' }}
          onRemoveFile={() => {
            // noop
          }}
        />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('mock.txt')).toBeDefined();
    });
  });

  test('should call onRemoveFile', async () => {
    const mockRemove = jest.fn();
    const mockFile = new File(['file content'], 'mock.txt', { type: 'text/plain' });

    render(
      <QueryClientProvider client={new QueryClient()}>
        <FileList
          files={[mockFile]}
          options={{ bucketId: '123', customerId: '123', clientId: '123' }}
          onRemoveFile={(id) => {
            mockRemove(id);
          }}
        />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('mock.txt')).toBeDefined();
    });

    fireEvent.click(screen.getByRole('button'));
    expect(mockRemove).toHaveBeenCalled();
  });
});
