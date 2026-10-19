import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorBoundary } from './ErrorBoundary';

const Bomb = ({ message = 'Boom' }: { message?: string }): React.JSX.Element => {
  throw new Error(message);
};

/** jsdom resolves viewport units to pixels, so compare against the resolved value instead of the "vh" string */
const vh = (percent: number) => `${(window.innerHeight * percent) / 100}px`;

/** Throws only while `shouldThrow.current` is true, so a test can "fix" the problem before retrying. */
const shouldThrow = { current: true };
const Flaky = (): React.JSX.Element => {
  if (shouldThrow.current) throw new Error('Flaky failure');
  return <div>Recovered content</div>;
};

describe('ErrorBoundary', () => {
  let consoleSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    shouldThrow.current = true;
    // React logs caught errors to console.error; keep test output readable
    consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('should render children when nothing throws', () => {
    render(<ErrorBoundary>Test</ErrorBoundary>);
    expect(screen.getByText('Test')).toBeTruthy();
    expect(screen.queryByRole('alert')).toBeNull();
  });

  describe('default fallback', () => {
    test('should render the default error page when a child throws', () => {
      render(
        <ErrorBoundary>
          <Bomb />
        </ErrorBoundary>
      );

      expect(screen.getByRole('alert')).toBeTruthy();
      expect(screen.getByRole('heading', { name: /something went wrong/i })).toBeTruthy();
      expect(screen.getByText(/1\.800\.AVAILITY/)).toBeTruthy();
      expect(screen.getByRole('button', { name: /try again/i })).toBeTruthy();
      expect(screen.getByRole('button', { name: /reload page/i })).toBeTruthy();
    });

    test('should not expose the raw error message to the user', () => {
      render(
        <ErrorBoundary>
          <Bomb message="secret internal detail" />
        </ErrorBoundary>
      );

      expect(screen.queryByText(/secret internal detail/)).toBeNull();
    });

    test('should move focus to the fallback so keyboard users are not left on a removed element', () => {
      render(
        <ErrorBoundary>
          <Bomb />
        </ErrorBoundary>
      );

      expect(screen.getByRole('alert')).toHaveFocus();
    });

    test('should reload the page when "Reload page" is clicked', async () => {
      const reload = vi.fn();
      vi.stubGlobal('location', { ...window.location, reload });

      render(
        <ErrorBoundary>
          <Bomb />
        </ErrorBoundary>
      );
      await userEvent.click(screen.getByRole('button', { name: /reload page/i }));

      expect(reload).toHaveBeenCalledTimes(1);
      vi.unstubAllGlobals();
    });
  });

  describe('layout', () => {
    test('should be inline by default', () => {
      render(
        <ErrorBoundary>
          <Bomb />
        </ErrorBoundary>
      );

      expect(getComputedStyle(screen.getByRole('alert')).minHeight).not.toBe(vh(100));
    });

    test('should fill the page when fullPage is set', () => {
      render(
        <ErrorBoundary fullPage>
          <Bomb />
        </ErrorBoundary>
      );

      expect(getComputedStyle(screen.getByRole('alert')).minHeight).toBe(vh(100));
    });

    test('should allow sx to override the layout', () => {
      render(
        <ErrorBoundary fullPage sx={{ minHeight: '50vh' }}>
          <Bomb />
        </ErrorBoundary>
      );

      expect(getComputedStyle(screen.getByRole('alert')).minHeight).toBe(vh(50));
    });
  });

  describe('custom fallback', () => {
    test('should render a fallback element in place of the default', () => {
      render(
        <ErrorBoundary fallback={<div>Custom fallback</div>}>
          <Bomb />
        </ErrorBoundary>
      );

      expect(screen.getByText('Custom fallback')).toBeTruthy();
      expect(screen.queryByRole('heading', { name: /something went wrong/i })).toBeNull();
    });

    test('should call a fallback render function with the error and a reset function', async () => {
      render(
        <ErrorBoundary
          fallback={({ error, reset }) => (
            <div>
              <span>Failed: {error.message}</span>
              <button type="button" onClick={reset}>
                Retry now
              </button>
            </div>
          )}
        >
          <Flaky />
        </ErrorBoundary>
      );

      expect(screen.getByText('Failed: Flaky failure')).toBeTruthy();

      shouldThrow.current = false;
      await userEvent.click(screen.getByRole('button', { name: 'Retry now' }));

      expect(screen.getByText('Recovered content')).toBeTruthy();
    });
  });

  describe('onError', () => {
    test('should be called once with the error and component stack', () => {
      const onError = vi.fn();

      render(
        <ErrorBoundary onError={onError}>
          <Bomb message="reported" />
        </ErrorBoundary>
      );

      expect(onError).toHaveBeenCalledTimes(1);
      const [error, info] = onError.mock.calls[0];
      expect(error).toBeInstanceOf(Error);
      expect(error.message).toBe('reported');
      expect(info.componentStack).toContain('Bomb');
    });

    test('should not be called when nothing throws', () => {
      const onError = vi.fn();
      render(<ErrorBoundary onError={onError}>Fine</ErrorBoundary>);
      expect(onError).not.toHaveBeenCalled();
    });
  });

  describe('reset', () => {
    test('should re-render children when "Try again" is clicked', async () => {
      render(
        <ErrorBoundary>
          <Flaky />
        </ErrorBoundary>
      );
      expect(screen.getByRole('alert')).toBeTruthy();

      shouldThrow.current = false;
      await userEvent.click(screen.getByRole('button', { name: /try again/i }));

      expect(screen.getByText('Recovered content')).toBeTruthy();
      expect(screen.queryByRole('alert')).toBeNull();
    });

    test('should show the fallback again if the retry throws again', async () => {
      render(
        <ErrorBoundary>
          <Flaky />
        </ErrorBoundary>
      );

      await userEvent.click(screen.getByRole('button', { name: /try again/i }));

      expect(screen.getByRole('alert')).toBeTruthy();
    });

    test('should call onReset when "Try again" is clicked', async () => {
      const onReset = vi.fn();
      render(
        <ErrorBoundary onReset={onReset}>
          <Flaky />
        </ErrorBoundary>
      );

      await userEvent.click(screen.getByRole('button', { name: /try again/i }));

      expect(onReset).toHaveBeenCalledTimes(1);
    });

    test('should reset automatically when a resetKeys value changes', async () => {
      const Harness = () => {
        const [route, setRoute] = useState('a');
        return (
          <>
            <button type="button" onClick={() => setRoute('b')}>
              Navigate
            </button>
            <ErrorBoundary resetKeys={[route]}>{route === 'a' ? <Bomb /> : <div>Page B</div>}</ErrorBoundary>
          </>
        );
      };

      render(<Harness />);
      expect(screen.getByRole('alert')).toBeTruthy();

      await userEvent.click(screen.getByRole('button', { name: 'Navigate' }));

      expect(screen.getByText('Page B')).toBeTruthy();
    });

    test('should stay in the error state when re-rendered with the same resetKeys', () => {
      const { rerender } = render(
        <ErrorBoundary resetKeys={['a']}>
          <Bomb />
        </ErrorBoundary>
      );

      rerender(
        <ErrorBoundary resetKeys={['a']}>
          <Bomb />
        </ErrorBoundary>
      );

      expect(screen.getByRole('alert')).toBeTruthy();
    });

    test('should not retry endlessly when resetKeys change but the child still throws', () => {
      const onError = vi.fn();
      const { rerender } = render(
        <ErrorBoundary resetKeys={['a']} onError={onError}>
          <Bomb />
        </ErrorBoundary>
      );

      rerender(
        <ErrorBoundary resetKeys={['b']} onError={onError}>
          <Bomb />
        </ErrorBoundary>
      );

      expect(screen.getByRole('alert')).toBeTruthy();
      expect(onError).toHaveBeenCalledTimes(2);
    });
  });

  describe('nesting', () => {
    test('should contain a crash to the nearest boundary', () => {
      render(
        <ErrorBoundary fullPage>
          <div>App shell</div>
          <ErrorBoundary fallback={<div>Widget unavailable</div>}>
            <Bomb />
          </ErrorBoundary>
        </ErrorBoundary>
      );

      expect(screen.getByText('App shell')).toBeTruthy();
      expect(screen.getByText('Widget unavailable')).toBeTruthy();
      expect(screen.queryByRole('alert')).toBeNull();
    });

    test('should leave siblings outside the boundary untouched', () => {
      render(
        <>
          <div>Sibling</div>
          <ErrorBoundary>
            <Bomb />
          </ErrorBoundary>
        </>
      );

      expect(screen.getByText('Sibling')).toBeTruthy();
      expect(screen.getByRole('alert')).toBeTruthy();
    });

    test('should bubble to the parent boundary when the fallback itself throws', () => {
      render(
        <ErrorBoundary fallback={<div>Outer fallback</div>}>
          <ErrorBoundary
            fallback={() => {
              throw new Error('fallback exploded');
            }}
          >
            <Bomb />
          </ErrorBoundary>
        </ErrorBoundary>
      );

      expect(screen.getByText('Outer fallback')).toBeTruthy();
    });
  });
});
