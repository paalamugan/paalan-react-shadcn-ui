import * as React from 'react';

import { InfoOutlineIcon } from '@paalan/react-icons';
import { cn } from '@paalan/react-shared/lib';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';

import type { VariantProps } from 'class-variance-authority';

import { Tooltip } from '../Tooltip';

const labelVariants = cva('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70');

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  /**
   * if required, adds a red asterisk to the label
   */
  required?: boolean;
  /**
   *
   */
  text?: React.ReactNode;
  /**
   * if true, show the label in red color
   */
  isInvalid?: boolean;
  /**
   * if true, disable the label
   */
  disabled?: boolean;
  /**
   * Description of the label
   */
  labelDescription?: React.ReactNode;
}
const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, required = false, labelDescription, text, isInvalid, children, disabled, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants(), { 'text-danger': isInvalid, 'opacity-70': disabled }, className)}
      {...props}
    >
      {text || children}
      {required && <span className="text-danger/70">*</span>}
      {labelDescription && (
        <Tooltip
          trigger={<InfoOutlineIcon className="ml-1 text-muted-foreground" aria-hidden="true" />}
          content={labelDescription}
        />
      )}
    </LabelPrimitive.Root>
  ),
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
