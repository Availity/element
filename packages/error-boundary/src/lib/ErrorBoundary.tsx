import { Component, useEffect, useRef } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import type { SxProps, Theme } from '@mui/material/styles';
import { Box } from '@availity/mui-layout';
import { Button } from '@availity/mui-button';
import { EmptyState } from '@availity/mui-empty-state';
import { Typography } from '@availity/mui-typography';

export interface ErrorBoundaryFallbackProps {
  /** The error that was thrown while rendering the children. */
  error: Error;
  /** Clears the error and re-renders the children. */
  reset: () => void;
}

export interface ErrorBoundaryProps {
  /** The part of the app this boundary protects. */
  children?: ReactNode;
  /** Replaces the default error page. Pass an element, or a function that receives the `error` and a `reset` function. */
  fallback?: ReactNode | ((props: ErrorBoundaryFallbackProps) => ReactNode);
  /** Called once each time the boundary catches an error. Use it to log to your error reporting tool. */
  onError?: (error: Error, info: ErrorInfo) => void;
  /** Called when the boundary is reset, whether from "Try again" or from a `resetKeys` change. */
  onReset?: () => void;
  /** When any value in this array changes while the boundary is showing an error, the boundary resets.
   * Pass something that changes on navigation, like the current route, so moving to another page recovers. */
  resetKeys?: unknown[];
  /** Fill the whole page (at least `100vh`, content centered) instead of sizing to the content.
   * Use this for the boundary that wraps your entire app.
   * @default false */
  fullPage?: boolean;
  /** Styles applied to the default error page container. Not used when you provide your own `fallback`. */
  sx?: SxProps<Theme>;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

const initialState: ErrorBoundaryState = { hasError: false, error: null };

const hasChanged = (a: unknown[] = [], b: unknown[] = []) =>
  a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]));

interface DefaultFallbackProps {
  reset: () => void;
  fullPage: boolean;
  sx?: SxProps<Theme>;
}

const DefaultFallback = ({ reset, fullPage, sx }: DefaultFallbackProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The content that had focus was just removed, so move focus to the error message for keyboard and screen reader users
    containerRef.current?.focus();
  }, []);

  return (
    <Box
      ref={containerRef}
      role="alert"
      tabIndex={-1}
      className="AvErrorBoundary-root"
      sx={[
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          outline: 'none',
          ...(fullPage ? { minHeight: '100vh' } : { padding: 2 }),
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <EmptyState variant="Error">
        <Typography variant="h6" component={fullPage ? 'h1' : 'h2'}>
          Something went wrong
        </Typography>
        <Typography variant="body2">
          Oops! Something went wrong. Try your request again later. If the problem continues, contact Availity Client
          Services at 1.800.AVAILITY (282.4548).
        </Typography>
        <Button color="primary" onClick={reset}>
          Try again
        </Button>
        <Button color="tertiary" onClick={() => window.location.reload()}>
          Reload page
        </Button>
      </EmptyState>
    </Box>
  );
};

/** Catches errors thrown while rendering its children and shows an error page instead of a blank screen.
 *
 * Boundaries can be nested: an error is handled by the closest boundary above the component that threw, so wrapping
 * a small section keeps the rest of the app running.
 *
 * Error boundaries do not catch errors in event handlers, asynchronous code (promises, `setTimeout`), or the boundary itself.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(thrown: unknown): ErrorBoundaryState {
    // Anything can be thrown in JavaScript, so normalize to an Error
    return { hasError: true, error: thrown instanceof Error ? thrown : new Error(String(thrown)) };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError?.(error, info);
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps, prevState: ErrorBoundaryState) {
    // Only auto-reset if we were already showing an error before this update. Otherwise the render that just
    // caught the error would immediately reset itself.
    if (this.state.hasError && prevState.hasError && hasChanged(prevProps.resetKeys, this.props.resetKeys)) {
      this.reset();
    }
  }

  reset = () => {
    this.props.onReset?.();
    this.setState(initialState);
  };

  render() {
    const { hasError, error } = this.state;
    const { children, fallback, fullPage = false, sx } = this.props;

    if (!hasError) return children;

    if (typeof fallback === 'function') {
      return fallback({ error: error as Error, reset: this.reset });
    }

    if (fallback !== undefined) return fallback;

    return <DefaultFallback reset={this.reset} fullPage={fullPage} sx={sx} />;
  }
}
