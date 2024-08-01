import { useEffect, useState } from 'react';

// Mark a field as optional in an already defined type
export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return debouncedValue;
};
