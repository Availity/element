import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { AvAnalytics } from '@availity/analytics-core';

export type EventTrackerProps = {
  /** */
  children?: React.ReactNode;
  /** An array of plugins to pass to the underlying AvAnalytics class instance. */
  plugins?: any[];
  /** Enable or disable page tracking on initialization.
   * @default true
   */
  pageTracking?: boolean;
  /** Enable or disable auto tracking on initialization.
   * @default true
   */
  autoTrack?: boolean;
  /** Enable or disable recursive functionality on initialization.
   * @default true
   */
  recursive?: boolean;
  /** Customize the prefix used for data event tracker attributes used for auto tracking.
   * @default 'data-analytics'
   */
  attributePrefix?: string;
  /** Array of event modifiers enabling you to use other keywords for action instead of click for event type matching.
   * @default ['action']
   */
  eventModifiers?: any[];
};

export const EventTrackerContext = createContext<AvAnalytics | null>(null);

export const useEventTracker = () => {
  const ctx = useContext(EventTrackerContext);

  if (!ctx) {
    throw new Error('useEventTracker must be used within an EventTrackerProvider');
  }

  return ctx;
};

export const EventTrackerProvider = ({
  children,
  plugins,
  pageTracking = true,
  autoTrack = true,
  recursive = true,
  attributePrefix = 'data-analytics',
  eventModifiers = ['action'],
}: EventTrackerProps) => {
  const analytics = useMemo(
    () => new AvAnalytics(plugins, Promise, pageTracking, autoTrack, { recursive, attributePrefix, eventModifiers }),
    [attributePrefix, autoTrack, eventModifiers, pageTracking, plugins, recursive]
  );

  useEffect(() => {
    analytics.init();

    if (pageTracking) {
      analytics.trackPageView();
    }

    return () => analytics.stopAutoTrack();
  }, [analytics, pageTracking]);

  return <EventTrackerContext.Provider value={analytics}>{children}</EventTrackerContext.Provider>;
};
