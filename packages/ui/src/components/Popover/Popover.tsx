import * as React from 'react';

import { cn } from '@paalan/react-shared/lib';
import * as PopoverPrimitive from '@radix-ui/react-popover';

const PopoverRoot = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn(
        'relative z-50 min-w-[var(--radix-popper-anchor-width)] rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      )}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export interface PopoverProps extends Omit<React.ComponentPropsWithoutRef<typeof PopoverRoot>, 'children'> {
  /**
   * The trigger element for the popover.
   */
  trigger: React.ReactNode;
  /**
   * The content element for the popover.
   */
  content: React.ReactNode;
  /**
   * The className for the trigger element.
   */
  triggerClassName?: string;
  /**
   * The className for the content element.
   */
  contentClassName?: string;
}
const Popover: React.FC<PopoverProps> = ({ trigger, triggerClassName, contentClassName, content, ...props }) => {
  return (
    <PopoverRoot {...props}>
      {trigger && (
        <PopoverTrigger asChild className={triggerClassName}>
          {trigger}
        </PopoverTrigger>
      )}
      {content && <PopoverContent className={contentClassName}>{content}</PopoverContent>}
    </PopoverRoot>
  );
};
Popover.displayName = 'Popover';
export { Popover, PopoverContent, PopoverRoot, PopoverTrigger };
