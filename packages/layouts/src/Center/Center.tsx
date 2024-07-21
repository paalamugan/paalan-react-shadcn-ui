import type { ComponentWithAs } from '@paalan/react-shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';

import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

import { Box } from '../Box/Box';

export interface CenterProps extends BoxProps {
  children: ReactNode;
}

export const Center: ComponentWithAs<'div', CenterProps> = forwardRef<CenterProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('flex items-center justify-center', className)} {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
