import { render } from '@testing-library/react';
import { Badge } from './Badge';

const findBadgeRoot = (container: any) => {
  return container.firstChild;
};

const findBadge = (container: any) => {
  return findBadgeRoot(container)?.querySelector('span');
};

describe('Badge', () => {
  test('should render successfully', () => {
    const { getByText } = render(<Badge>Test</Badge>);
    expect(getByText('Test')).toBeTruthy();
  });

  describe('Color prop', () => {
    test('should default to error color', () => {
      const { container } = render(<Badge>Color Test</Badge>);

      expect(findBadge(container).classList).toContain('MuiBadge-colorError');
    });
  });
});
