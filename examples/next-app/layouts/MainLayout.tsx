import { Toaster } from '@paalan/react-ui';

import type { ToasterProps } from '@paalan/react-ui';

interface MainLayoutProps {
  children: React.ReactNode;
  theme: ToasterProps['theme'];
}
export const MainLayout = ({ children, theme }: MainLayoutProps) => {
  return (
    <>
      <Toaster richColors closeButton theme={theme} />
      {children}
    </>
  );
};
