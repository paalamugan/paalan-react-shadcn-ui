import * as React from 'react';

import { Cross2Icon } from '@paalan/react-icons';
import { cn } from '@paalan/react-shared/lib';
import * as DialogPrimitive from '@radix-ui/react-dialog';

/**
 * A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.
 */
const DialogRoot = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = ({ ...props }: DialogPrimitive.DialogPortalProps) => <DialogPrimitive.Portal {...props} />;
DialogPortal.displayName = DialogPrimitive.Portal.displayName;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className,
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> & {
    /**
     * onClose event handler for the close button.
     */
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
    /**
     * hideCloseButton to hide the close button.
     * @default false
     */
    hideCloseButton?: boolean;
  }
>(({ className, children, onClose, hideCloseButton, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full',
        className,
      )}
      {...props}
    >
      {children}
      {!hideCloseButton && (
        <DialogPrimitive.Close
          onClick={onClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <Cross2Icon className="size-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      )}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', className)} {...props} />
);
DialogFooter.displayName = 'DialogFooter';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export interface DialogProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root> {
  /**
   * The trigger content of the dialog that will open the dialog when clicked. (Optional)
   */
  trigger?: React.ReactNode;
  /**
   * The trigger className of the dialog.
   */
  triggerClassName?: string;
  /**
   * The content of the dialog. (Optional)
   */
  content?: React.ReactNode;
  /**
   * The content of the dialog.
   */
  contentClassName?: string;
  /**
   * The header content of the dialog.
   */
  header?: {
    /**
     * The title content of the dialog.
     */
    title?: React.ReactNode;
    /**
     * The description content of the dialog.
     */
    description?: React.ReactNode;
    /**
     * The className of the header content. (Optional)
     */
    className?: string;
  };
  /**
   * The footer content of the dialog.
   */
  footer?: {
    /**
     * The content of the footer.
     */
    content: React.ReactNode;
    /**
     * The className of the footer content. (Optional)
     */
    className?: string;
  };
  /**
   * The props for the dialog content.
   */
  dialogContentProps?: React.ComponentPropsWithoutRef<typeof DialogContent>;
  /**
   * The props for the dialog header.
   */
  dialogHeaderProps?: React.ComponentPropsWithoutRef<typeof DialogHeader>;
  /**
   * The props for the dialog footer.
   */
  dialogFooterProps?: React.ComponentPropsWithoutRef<typeof DialogFooter>;
}
const Dialog: React.FC<DialogProps> = ({
  content,
  children,
  trigger,
  triggerClassName,
  header,
  contentClassName,
  footer,
  dialogContentProps,
  dialogHeaderProps,
  dialogFooterProps,
  ...props
}) => {
  const dialogContent = content || children;
  return (
    <DialogRoot {...props}>
      {trigger && (
        <DialogTrigger asChild className={triggerClassName}>
          {trigger}
        </DialogTrigger>
      )}
      <DialogContent {...dialogContentProps} className={cn(contentClassName, dialogContentProps?.className)}>
        {header && (
          <DialogHeader {...dialogHeaderProps} className={cn(header.className, dialogHeaderProps?.className)}>
            {header.title && <DialogTitle>{header.title}</DialogTitle>}
            <DialogDescription>{header.description}</DialogDescription>
          </DialogHeader>
        )}
        {dialogContent}
        {footer && (
          <DialogFooter {...dialogFooterProps} className={cn(footer.className, dialogFooterProps?.className)}>
            {footer.content}
          </DialogFooter>
        )}
      </DialogContent>
    </DialogRoot>
  );
};
Dialog.displayName = 'Dialog';
export { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogRoot, DialogTitle, DialogTrigger };
