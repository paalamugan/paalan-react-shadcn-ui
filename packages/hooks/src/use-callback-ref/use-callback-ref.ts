/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useRef } from 'react';

import type { DependencyList } from 'react';

export const useCallbackRef = <T extends (...args: never[]) => unknown>(
  callback: T | undefined,
  deps: DependencyList = [],
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback(((...args) => callbackRef.current?.(...args)) as T, deps);
};
