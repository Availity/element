import { fireEvent, render } from '@testing-library/react';
import { TreeView } from './TreeView';
import { TreeItem } from './TreeItem';

describe('TreeView', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <TreeView>
        <TreeItem itemId="test" label="Test" children={<TreeItem itemId="sub-test" label="Sub Test" />} />
      </TreeView>
    );
    const Tree1 = getByText('Test');

    fireEvent.click(Tree1);

    expect('Sub Test').toBeTruthy();
  });
});
