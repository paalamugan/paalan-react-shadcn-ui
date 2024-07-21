import { useCallback, useEffect, useState } from 'react';

import { useWindowEvent } from '../use-window-event/use-window-event';

declare global {
  interface NetworkStatus {
    downlink?: number;
    downlinkMax?: number;
    effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
    rtt?: number;
    saveData?: boolean;
    type?: 'bluetooth' | 'cellular' | 'ethernet' | 'wifi' | 'wimax' | 'none' | 'other' | 'unknown';
    addEventListener?: (type: string, listener: EventListenerOrEventListenerObject) => void;
    removeEventListener?: (type: string, listener: EventListenerOrEventListenerObject) => void;
  }

  interface NavigatorUserAgentData {
    brands?: Array<{ brand: string; version: string }>;
    mobile?: boolean;
    platform?: string;
    uaFullVersion?: string;
    uaListVersion?: string;
    userAgent?: string;
  }

  interface Navigator {
    userAgentData?: NavigatorUserAgentData;
    connection?: NetworkStatus;
    mozConnection?: NetworkStatus;
    webkitConnection?: NetworkStatus;
    onLine: boolean;
  }
}

function getConnection(): NetworkStatus {
  if (typeof navigator === 'undefined') {
    return {};
  }

  const _navigator = navigator;
  const connection = _navigator.connection || _navigator.mozConnection || _navigator.webkitConnection;

  if (!connection) {
    return {};
  }

  return {
    downlink: connection?.downlink,
    downlinkMax: connection?.downlinkMax,
    effectiveType: connection?.effectiveType,
    rtt: connection?.rtt,
    saveData: connection?.saveData,
    type: connection?.type,
  };
}

export const useNetwork = () => {
  const [status, setStatus] = useState<{ online: boolean } & NetworkStatus>({
    online: true,
  });
  const handleConnectionChange = useCallback(() => setStatus((current) => ({ ...current, ...getConnection() })), []);

  useWindowEvent('online', () => setStatus({ online: true, ...getConnection() }));
  useWindowEvent('offline', () => setStatus({ online: false, ...getConnection() }));

  useEffect(() => {
    const _navigator = navigator as Navigator;

    if (_navigator.connection) {
      setStatus({ online: _navigator.onLine, ...getConnection() });
      _navigator.connection?.addEventListener?.('change', handleConnectionChange);
      return () => _navigator.connection?.removeEventListener?.('change', handleConnectionChange);
    }

    return undefined;
  }, [handleConnectionChange]);

  return status;
};
