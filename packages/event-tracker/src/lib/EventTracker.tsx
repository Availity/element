import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode, MouseEvent, FocusEvent } from 'react';

type LogLevel = 'info' | 'error' | 'debug';

export type EventTrackerContext = {
  enabled: boolean;
  setEnabled: (value: boolean) => void;
  level: LogLevel;
  setLevel: (value: LogLevel) => void;
  logOnFocus: (event: FocusEvent) => void;
  logOnBlur: (event: FocusEvent) => void;
  logOnClick: (event: MouseEvent<HTMLElement>) => void;
};

export const EventTrackerContext = createContext<EventTrackerContext | null>(null);

export const useEventTracker = () => {
  const ctx = useContext(EventTrackerContext);
  if (!ctx) throw new Error('useEventTracker must be used inside of the EventTrackerProvider component');
  return ctx;
};

export type EventTrackerProviderProps = {
  children: ReactNode;
  /**
   * Logs an event when the hash (#) changes in the url
   */
  pageTracking?: true;
};

export const EventTrackerProvider = ({ children, pageTracking = true }: EventTrackerProviderProps) => {
  const [enabled, setEnabled] = useState(true);
  const [level, setLevel] = useState<LogLevel>('info');

  useEffect(() => {
    const logHashChange = (event: HashChangeEvent) => {
      console.log('hash change', event);
    };

    if (pageTracking) {
      window.addEventListener('hashchange', logHashChange, false);
    } else {
      window.removeEventListener('hashchange', logHashChange, false);
    }

    return () => {
      window.removeEventListener('hashchange', logHashChange, false);
    };
  });

  const logOnFocus = (event: FocusEvent) => {
    if (!enabled) return;
    console.log('focus', event);
  };

  const logOnBlur = (event: FocusEvent) => {
    if (!enabled) return;
    console.log('blur', event);
  };

  const logOnClick = (event: MouseEvent) => {
    if (!enabled) return;
    console.log('click', event);
  };

  return (
    <EventTrackerContext.Provider value={{ enabled, setEnabled, level, setLevel, logOnBlur, logOnFocus, logOnClick }}>
      {children}
    </EventTrackerContext.Provider>
  );
};
