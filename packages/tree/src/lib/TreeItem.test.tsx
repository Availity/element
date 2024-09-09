import { fireEvent, render } from '@testing-library/react';
import { TreeItem } from './TreeItem';
import { TreeView } from './TreeView';
import { TriangleRightIcon, TriangleExpandIcon } from '@availity/mui-icon';

describe('TreeView', () => {
  test('should render successfully', () => {
    const { getByText } = render(
      <TreeView>
        <TreeItem itemId="test-tree-item" label="Test" />
      </TreeView>
    );
    expect(getByText('Test')).toBeTruthy();
  });

  test('should use correct command and collapse icons', () => {
    const { container, getByText } = render(
      <TreeView>
        <TreeItem
          itemId="test-tree-item"
          label="Test"
          children={<TreeItem itemId="test-sub-tree-item" label="Sub Item Test" />}
        />
      </TreeView>
    );

    const expandIcon = container.getElementsByTagName('path');

    const { container: RenderedTriangleRightIcon } = render(<TriangleRightIcon />);
    expect(expandIcon[0]).toStrictEqual(RenderedTriangleRightIcon.getElementsByTagName('path')[0]);

    fireEvent.click(getByText('Test'));

    const collapseIcon = container.getElementsByTagName('path');

    const { container: RenderedTriangleExpandIcon } = render(<TriangleExpandIcon />);
    expect(collapseIcon[0]).toStrictEqual(RenderedTriangleExpandIcon.getElementsByTagName('path')[0]);
  });
});
