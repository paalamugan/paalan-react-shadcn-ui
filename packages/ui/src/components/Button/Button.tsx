import { ArrowPathIcon } from '@paalan/react-icons';
import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';

import type { AllColorVariant } from '@paalan/react-shared/system';
import type { ComponentWithAs } from '@paalan/react-shared/types';
import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import type { BoxProps } from '../../base';
import type { ButtonVariant } from './constants';

import { Box } from '../../base';
import { BUTTON_COLOR_VARIANT_MAPPING, BUTTON_ROUNDED, BUTTON_SIZE, LOADING_ICON_SIZE } from './constants';

const buttonVariants = cva(
  'inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: BUTTON_COLOR_VARIANT_MAPPING['solid']['primary'],
        primary: BUTTON_COLOR_VARIANT_MAPPING['solid']['primary'],
        secondary: BUTTON_COLOR_VARIANT_MAPPING['solid']['secondary'],
        info: BUTTON_COLOR_VARIANT_MAPPING['solid']['info'],
        success: BUTTON_COLOR_VARIANT_MAPPING['solid']['success'],
        warning: BUTTON_COLOR_VARIANT_MAPPING['solid']['warning'],
        danger: BUTTON_COLOR_VARIANT_MAPPING['solid']['danger'],
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      rounded: BUTTON_ROUNDED,
      size: BUTTON_SIZE,
    },
    defaultVariants: {
      rounded: 'md',
      size: 'md',
    },
  },
);

export interface ButtonProps
  extends Omit<BoxProps, 'size' | 'rounded'>,
    Omit<VariantProps<typeof buttonVariants>, 'variant'> {
  asChild?: boolean;
  /**
   * Optional click handler
   */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   * Optional label for the button
   */
  label?: string;

  /**
   * Optional variant for the button (solid, outline, ghost, soft, link).
   * @default solid
   */
  variant?: ButtonVariant;

  /**
   * Optional color for the button,
   * @default primary
   */
  color?: AllColorVariant;
  /**
   * Optional left icon for the button
   */
  leftIcon?: React.ReactNode;
  /**
   * Optional right icon for the button
   */
  rightIcon?: React.ReactNode;
  /**
   * Optional loading for the button
   */
  isLoading?: boolean;
  /**
   * Optional loading text for the button
   */
  loadingText?: React.ReactNode;
  /**
   * Optional wrapper class name for the button and icons (if any)
   */
  wrapperClassName?: string;
  /**
   * Optional unstyled button
   */
  unstyled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const Button: ComponentWithAs<'button', ButtonProps> = forwardRef<ButtonProps, 'button'>(
  (
    {
      as: Component = 'button',
      className,
      variant = 'solid',
      color,
      size,
      label,
      rounded,
      children,
      leftIcon,
      rightIcon,
      asChild = false,
      isLoading,
      loadingText,
      wrapperClassName,
      unstyled,
      disabled,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : Component;
    let buttonClassName = '';

    if (['outline', 'ghost'].includes(variant) && !color) {
      buttonClassName = buttonVariants({
        variant: variant as Extract<ButtonProps['variant'], 'outline' | 'ghost'>,
        size,
        rounded,
      });
    } else {
      buttonClassName = BUTTON_COLOR_VARIANT_MAPPING[variant][color || 'primary'];
    }

    return (
      <Box
        {...props}
        as={Comp}
        className={unstyled ? className : cn(buttonClassName, buttonVariants({ size, rounded }), className)}
        ref={ref}
        disabled={isLoading || disabled}
      >
        {asChild ? (
          children
        ) : (
          <Box className={cn('inline-flex flex-1 items-center justify-center gap-1.5', wrapperClassName)}>
            {!isLoading && leftIcon}
            {isLoading && <ArrowPathIcon className={cn('size-4 animate-spin', size && LOADING_ICON_SIZE[size])} />}
            {isLoading && loadingText ? loadingText : label || children}
            {!isLoading && rightIcon}
          </Box>
        )}
      </Box>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
