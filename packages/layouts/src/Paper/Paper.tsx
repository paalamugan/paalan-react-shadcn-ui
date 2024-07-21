import type { ComponentWithAs } from '@paalan/react-shared/types';
import type { VariantProps } from 'class-variance-authority';
import type { BoxProps } from '../Box';

import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';
import { cva } from 'class-variance-authority';

import { Box } from '../Box';

const paperVariants = cva('bg-background text-foreground', {
  variants: {
    shadow: {
      default: 'shadow',
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
      '2xl': 'shadow-2xl',
      inner: 'shadow-inner',
      none: 'shadow-none',
    },
  },
  defaultVariants: {
    shadow: 'default',
  },
});

interface PaperProps extends BoxProps, VariantProps<typeof paperVariants> {
  /**
   * If true, the paper will have a border
   */
  withBorder?: boolean;
  /**
   * The shadow of the paper
   * @default 'default'
   */
  shadow?: VariantProps<typeof paperVariants>['shadow'];
}
export const Paper: ComponentWithAs<'div', PaperProps> = forwardRef<PaperProps, 'div'>(
  ({ withBorder, shadow, className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(paperVariants({ shadow }), withBorder ? 'border border-border' : '', className)}
        {...props}
      />
    );
  },
);
