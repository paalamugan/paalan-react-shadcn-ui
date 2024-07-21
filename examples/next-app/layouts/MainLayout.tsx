import type { ToasterProps } from '@paalan/react-components';

import { Toaster } from '@paalan/react-components';

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
