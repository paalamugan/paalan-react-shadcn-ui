import { useCallback, useState } from 'react';

import { useIsomorphicEffect } from '../use-isomorphic-effect';

interface EyeDropperOpenOptions {
  signal?: AbortSignal;
}

export interface EyeDropperOpenReturnType {
  sRGBHex: string;
}

export const useEyeDropper = () => {
  const [supported, setSupported] = useState(false);

  useIsomorphicEffect(() => {
    setSupported(typeof window !== 'undefined' && 'EyeDropper' in window);
  }, []);

  const open = useCallback(
    (options: EyeDropperOpenOptions = {}): Promise<EyeDropperOpenReturnType> => {
      if (supported) {
        const EyeDropper = 'EyeDropper' in window ? window.EyeDropper : null;
        if (!EyeDropper) {
          return Promise.reject(new Error('EyeDropper is not supported'));
        }
        const eyeDropper = new EyeDropper();
        return eyeDropper.open(options);
      }

      return Promise.reject(new Error('EyeDropper is not supported'));
    },
    [supported],
  );

  return { supported, open };
};
