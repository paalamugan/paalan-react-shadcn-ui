import type { ComponentWithAs } from '@paalan/react-shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';

import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

import { Box } from '../Box/Box';

export interface GridProps extends BoxProps {
  children: ReactNode;
}

export const Grid: ComponentWithAs<'div', GridProps> = forwardRef<GridProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('grid', className)} {...restProps} ref={ref}>
      {children}
    </Box>
  );
});

export interface GridItemProps extends BoxProps {
  children?: ReactNode;
}

export const GridItem = forwardRef<GridItemProps, 'div'>((props, ref) => {
  const { children, ...restProps } = props;

  return (
    <Box {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
