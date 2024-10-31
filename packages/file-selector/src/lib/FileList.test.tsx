import { render } from '@testing-library/react';

import { FileList } from './FileList';

describe('FileList', () => {
  test('should render successfully', () => {
    render(
      <FileList
        uploads={[]}
        onRemoveFile={() => {
          // noop
        }}
      />
    );
  });
});
