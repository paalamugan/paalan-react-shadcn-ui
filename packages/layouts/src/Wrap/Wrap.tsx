import type { ComponentWithAs } from '@paalan/react-shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';

import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

import { Box } from '../Box/Box';

export interface WrapProps extends BoxProps {
  children: ReactNode;
}

export const Wrap: ComponentWithAs<'div', WrapProps> = forwardRef<WrapProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('flex flex-wrap gap-2', className)} {...restProps} ref={ref}>
      {children}
    </Box>
  );
});

interface WrapItemProps extends WrapProps {}

export const WrapItem = forwardRef<WrapItemProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('flex flex-none items-start', className)} {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
