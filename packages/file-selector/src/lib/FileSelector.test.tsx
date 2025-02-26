import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { FileSelector } from './FileSelector';

describe('FileSelector', () => {
  test('should render successfully', () => {
    const client = new QueryClient();
    const { getByText } = render(
      <QueryClientProvider client={client}>
        <FileSelector name="test" bucketId="test" customerId="123" clientId="test" maxSize={1000} maxFiles={1} />
      </QueryClientProvider>
    );

    expect(getByText('Upload file')).toBeTruthy();
  });
});
