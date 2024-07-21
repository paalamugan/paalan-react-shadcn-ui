import type { ComponentWithAs } from '@paalan/react-shared/types';
import type { ReactNode } from 'react';
import type { BoxProps } from '../Box';

import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

import { Box } from '../Box';

export interface TextProps extends BoxProps {
  children: ReactNode;
}

export const Text: ComponentWithAs<'p', TextProps> = forwardRef<TextProps, 'p'>((props, ref) => {
  const { children, className, as = 'p', ...restProps } = props;

  return (
    <Box as={as} ref={ref} className={cn('', className)} {...restProps}>
      {children}
    </Box>
  );
});
