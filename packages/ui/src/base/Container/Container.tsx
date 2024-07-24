import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

import type { ComponentWithAs } from '@paalan/react-shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';

import { Box } from '../Box/Box';

export interface ContainerProps extends BoxProps {
  children: ReactNode;
}

export const Container: ComponentWithAs<'div', ContainerProps> = forwardRef<ContainerProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('container', className)} {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
