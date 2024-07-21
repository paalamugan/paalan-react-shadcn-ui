import type { ComponentWithAs } from '@paalan/react-shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box';

import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

import { Box } from '../Box';

export interface HStackProps extends BoxProps {
  children: ReactNode;
}

export const HStack: ComponentWithAs<'div', HStackProps> = forwardRef<HStackProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('flex flex-row items-center gap-2', className)} {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
