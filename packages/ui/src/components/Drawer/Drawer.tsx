import * as React from 'react';

import { cn } from '@paalan/react-shared/lib';
import { Drawer as DrawerPrimitive } from 'vaul';

const DrawerRoot = ({ shouldScaleBackground = true, ...props }: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
DrawerRoot.displayName = 'DrawerRoot';

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay ref={ref} className={cn('fixed inset-0 z-50 bg-black/80', className)} {...props} />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DrawerPortal>
    <DrawerOverlay />
    <DrawerPrimitive.Content
      ref={ref}
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background',
        className,
      )}
      {...props}
    >
      <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      {children}
    </DrawerPrimitive.Content>
  </DrawerPortal>
));
DrawerContent.displayName = 'DrawerContent';

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)} {...props} />
);
DrawerHeader.displayName = 'DrawerHeader';

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-auto flex flex-col gap-2 p-4', className)} {...props} />
);
DrawerFooter.displayName = 'DrawerFooter';

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export type DrawerProps = React.ComponentPropsWithoutRef<typeof DrawerRoot> & {
  /**
   * The trigger element for the drawer.
   */
  trigger: React.ReactNode;
  /**
   * The content element for the drawer.
   */
  content?: React.ReactNode;
  /**
   * The className for the trigger element.
   */
  triggerClassName?: string;
  /**
   * The className for the content element.
   */
  contentClassName?: string;
  /**
   * The header content of the drawer.
   */
  header?: {
    /**
     * The title content of the drawer.
     */
    title?: React.ReactNode;
    /**
     * The description content of the drawer.
     */
    description?: React.ReactNode;
    /**
     * The className of the header content. (Optional)
     */
    className?: string;
  };
  /**
   * The footer content of the drawer.
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
   * The drawer close button element.
   * @example <Button variant="outline">Close</Button>
   */
  drawerCloseButton?: React.ReactNode;
  /**
   * The className for the drawer close button element. this className will be applied to the parent of the drawer close button.
   * @default 'pt-2'
   */
  drawerCloseButtonClassName?: string;
};

const Drawer: React.FC<DrawerProps> = ({
  trigger,
  triggerClassName,
  contentClassName,
  content,
  header,
  footer,
  children,
  drawerCloseButton,
  drawerCloseButtonClassName,
  ...props
}) => {
  const drawerContent = content || children;
  return (
    <DrawerRoot {...props}>
      {trigger && (
        <DrawerTrigger asChild className={triggerClassName}>
          {trigger}
        </DrawerTrigger>
      )}
      {drawerContent && (
        <DrawerContent className={contentClassName}>
          {header && (
            <DrawerHeader className={header.className}>
              {header.title && <DrawerTitle>{header.title}</DrawerTitle>}
              {header.description && <DrawerDescription>{header.description}</DrawerDescription>}
            </DrawerHeader>
          )}
          {drawerContent}
          {footer && <DrawerFooter className={footer.className}>{footer.content}</DrawerFooter>}
          {drawerCloseButton && (
            <DrawerFooter className={cn('pt-2', drawerCloseButtonClassName)}>
              <DrawerClose asChild>{drawerCloseButton}</DrawerClose>
            </DrawerFooter>
          )}
        </DrawerContent>
      )}
    </DrawerRoot>
  );
};
Drawer.displayName = 'Drawer';
export {
  Drawer,
  DrawerRoot,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
