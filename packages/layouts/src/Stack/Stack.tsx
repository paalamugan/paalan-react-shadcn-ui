import type { ComponentWithAs } from '@paalan/react-shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box';

import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

import { Box } from '../Box';

export interface StackProps extends BoxProps {
  children: ReactNode;
  /**
   * The direction of the stack. Defaults to `column`.
   * @default column
   */
  direction?: 'row' | 'column';
}

export const Stack: ComponentWithAs<'div', StackProps> = forwardRef<StackProps, 'div'>((props, ref) => {
  const { children, className, direction, ...restProps } = props;

  return (
    <Box className={cn('flex flex-col gap-2', className)} flexDirection={direction} {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
