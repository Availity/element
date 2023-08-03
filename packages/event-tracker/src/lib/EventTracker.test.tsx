import { render, fireEvent } from '@testing-library/react';
import { EventTrackerProvider, useEventTracker } from './EventTracker';

describe('EventTracker', () => {
  test('should render successfully', () => {
    const { getByText } = render(<EventTrackerProvider>Test</EventTrackerProvider>);
    expect(getByText('Test')).toBeTruthy();
  });

  test('should not throw when logOnClick is called', () => {
    const fn = jest.fn();
    const Component = () => {
      const { logOnClick } = useEventTracker();

      return (
        <button
          onClick={(event) => {
            logOnClick(event);
            fn();
          }}
        >
          test
        </button>
      );
    };

    const { getByText } = render(
      <EventTrackerProvider>
        <Component />
      </EventTrackerProvider>
    );

    const button = getByText('test');
    fireEvent.click(button);
    expect(fn).toBeCalledTimes(1);
  });

  test('should not throw when logOnBlur is called', () => {
    const fn = jest.fn();
    const Component = () => {
      const { logOnBlur } = useEventTracker();

      return (
        <div
          tabIndex={0}
          onBlur={(event) => {
            logOnBlur(event);
            fn();
          }}
        >
          test
        </div>
      );
    };

    const { getByText } = render(
      <EventTrackerProvider>
        <Component />
      </EventTrackerProvider>
    );

    const element = getByText('test');
    fireEvent.focus(element);
    fireEvent.blur(element);
    expect(fn).toBeCalledTimes(1);
  });

  test('should not throw when logOnFocus is called', () => {
    const fn = jest.fn();
    const Component = () => {
      const { logOnFocus } = useEventTracker();

      return (
        <div
          tabIndex={0}
          onFocus={(event) => {
            logOnFocus(event);
            fn();
          }}
        >
          test
        </div>
      );
    };

    const { getByText } = render(
      <EventTrackerProvider>
        <Component />
      </EventTrackerProvider>
    );

    const element = getByText('test');
    fireEvent.focus(element);
    fireEvent.blur(element);
    expect(fn).toBeCalledTimes(1);
  });
});
