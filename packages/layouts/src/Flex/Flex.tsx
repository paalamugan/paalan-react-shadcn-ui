import type { ComponentWithAs } from '@paalan/react-shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box/Box';

import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

import { Box } from '../Box/Box';

export interface FlexProps extends BoxProps {
  children: ReactNode;
}

export const Flex: ComponentWithAs<'div', FlexProps> = forwardRef<FlexProps, 'div'>((props, ref) => {
  const { children, className, ...restProps } = props;

  return (
    <Box className={cn('flex', className)} {...restProps} ref={ref}>
      {children}
    </Box>
  );
});
