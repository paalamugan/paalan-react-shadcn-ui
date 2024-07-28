import { Toaster } from '@paalan/react-ui';

import type { ToasterProps } from '@paalan/react-ui';
import type { FC, ReactNode } from 'react';

export interface ToastProviderProps extends ToasterProps {
  children: ReactNode;
}

export const ToastProvider: FC<ToastProviderProps> = ({ children, ...props }) => {
  return (
    <>
      <Toaster richColors closeButton {...props} />
      {children}
    </>
  );
};
