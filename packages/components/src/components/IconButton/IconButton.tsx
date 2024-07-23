import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

import type { BoxProps } from '@/base';
import type { ComponentWithAs } from '@paalan/react-shared/types';
import type React from 'react';

import { Box } from '@/base';

export type IconButtonProps = BoxProps & {
  icon?: React.ReactNode;
  /**
   * Additional class names to apply to the icon button.
   */
  className?: string;
  /**
   * Whether the icon button is disabled.
   */
  disabled?: boolean;
  /**
   * The rounded variant of the icon button.
   */
  outline?: boolean;
} & (
    | {
        /**
         * The icon to display.
         */
        icon: React.ReactNode;
      }
    | {
        /**
         * The icon to display.
         */
        children: React.ReactNode;
      }
  );

/**
 * Icon button component.
 */
export const IconButton: ComponentWithAs<'button', IconButtonProps> = forwardRef<IconButtonProps, 'button'>(
  ({ children, icon, ...props }, ref) => {
    const { className, disabled, outline, rounded = 'md', ...rest } = props;
    return (
      <Box
        {...rest}
        as="button"
        type="button"
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-50',
          {
            'border border-border bg-transparent p-2 text-accent-foreground': outline,
          },
          className,
        )}
        disabled={disabled}
        rounded={rounded}
      >
        {icon || children}
      </Box>
    );
  },
);
