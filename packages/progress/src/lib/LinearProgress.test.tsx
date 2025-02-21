import { render, screen } from '@testing-library/react';

import { LinearProgress } from './LinearProgress';

describe('LinearProgress', () => {
  test('should render successfully', () => {
    render(<LinearProgress />);

    expect(screen.getByRole('progressbar')).toBeDefined();
  });

  test('should show default value of 0', () => {
    render(<LinearProgress />);
    expect(screen.getByText('0%')).toBeDefined();
  });

  test('should show show value as percentage', () => {
    render(<LinearProgress value={50} />);
    expect(screen.getByText('50%')).toBeDefined();
  });

  test('should show icon when value is 100', () => {
    const { container } = render(<LinearProgress value={100} />);
    const svgEl = container.querySelector("[data-icon='complete']") as HTMLImageElement;
    expect(screen.getByText('100%')).toBeDefined();
    expect(svgEl.classList.toString()).toContain('MuiSvgIcon-root');
  });

  test('should not show value as percentage for indeterminate', () => {
    render(<LinearProgress hidePercentage value={50} />);
    expect(screen.queryByText('50%')).toBeNull();
  });
});
