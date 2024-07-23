import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

import type { ComponentWithAs } from '@paalan/react-shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';

import { Box } from '../Box/Box';

export interface VStackProps extends BoxProps {
  children: ReactNode;
}

export const VStack: ComponentWithAs<'div', VStackProps> = forwardRef<VStackProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('flex flex-col items-stretch gap-2', className)} {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
