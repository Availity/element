import { avTelemetryApi } from '@availity/api-axios';

export type LogLevel = 'info' | 'error' | 'debug' | 'warn';

export const trackEvent = async (level: LogLevel, data: Record<string, unknown>) => {
  try {
    avTelemetryApi[level](data);
  } catch (error) {
    // no-op
  }
};
