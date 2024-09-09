import { fireEvent, render } from '@testing-library/react';
import { DynamicTreeView } from './DynamicTreeView';

describe('Tree', () => {
  test('should render successfully', () => {
    const items = [
      {
        id: 'tree-1',
        label: 'Tree 1',
        children: [
          { id: 'sub-tree-1.1', label: 'Sub Tree 1.1' },
          { id: 'sub-tree-1.2', label: 'Sub Tree 1.2' },
          { id: 'sub-tree-1.3', label: 'Sub Tree 1.3' },
        ],
      },
      {
        id: 'tree-2',
        label: 'Tree 2',
        children: [
          { id: 'sub-tree-2.1', label: 'Sub Tree 2.1' },
          { id: 'sub-tree-2.2', label: 'Sub Tree 2.2' },
        ],
      },
      {
        id: 'tree-3',
        label: 'Tree 3',
        children: [{ id: 'sub-tree-3.1', label: 'Sub Tree 3.1' }],
      },
      {
        id: 'tree-4',
        label: 'Tree 4',
        children: [{ id: 'sub-tree-4.1', label: 'Sub Tree 4.1' }],
      },
    ];
    const { getByText } = render(<DynamicTreeView items={items} />);

    const Tree1 = getByText('Tree 1');

    fireEvent.click(Tree1);

    expect(getByText('Sub Tree 1.1')).toBeTruthy();
  });
});
