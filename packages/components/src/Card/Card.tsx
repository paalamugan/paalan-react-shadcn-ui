import type { HeadingProps } from '@paalan/react-layouts';
import type { ComponentWithAs } from '@paalan/react-shared/types';
import type * as React from 'react';

import { Box, Heading, Text } from '@paalan/react-layouts';
import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

type OmitColorFromHTMLAttributes = Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>;
type OmitColorAndChildrenFromHTMLAttributes = Omit<React.HTMLAttributes<HTMLParagraphElement>, 'children' | 'color'>;

const CardRoot: ComponentWithAs<'div', OmitColorFromHTMLAttributes> = forwardRef<OmitColorFromHTMLAttributes, 'div'>(
  ({ className, ...props }, ref) => (
    <Box ref={ref} className={cn('rounded-xl border bg-card text-card-foreground shadow', className)} {...props} />
  ),
);
CardRoot.displayName = 'CardRoot';

const CardHeader: ComponentWithAs<'div', OmitColorFromHTMLAttributes> = forwardRef<OmitColorFromHTMLAttributes, 'div'>(
  ({ className, ...props }, ref) => (
    <Box ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  ),
);
CardHeader.displayName = 'CardHeader';

const CardTitle: ComponentWithAs<'h3', HeadingProps> = forwardRef<HeadingProps, 'h3'>(
  ({ className, children, ...props }, ref) => (
    <Heading as="h3" ref={ref} className={cn('font-semibold leading-none tracking-tight', className)} {...props}>
      {children}
    </Heading>
  ),
);
CardTitle.displayName = 'CardTitle';

const CardDescription: ComponentWithAs<'p', OmitColorAndChildrenFromHTMLAttributes> = forwardRef<
  OmitColorAndChildrenFromHTMLAttributes,
  'p'
>(({ className, children, ...props }, ref) => (
  <Text ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props}>
    {children}
  </Text>
));
CardDescription.displayName = 'CardDescription';

const CardContent: ComponentWithAs<'div', OmitColorFromHTMLAttributes> = forwardRef<OmitColorFromHTMLAttributes, 'div'>(
  ({ className, ...props }, ref) => <Box ref={ref} className={cn('p-6 pt-0', className)} {...props} />,
);
CardContent.displayName = 'CardContent';

const CardFooter: ComponentWithAs<'div', OmitColorFromHTMLAttributes> = forwardRef<OmitColorFromHTMLAttributes, 'div'>(
  ({ className, ...props }, ref) => (
    <Box ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
  ),
);
CardFooter.displayName = 'CardFooter';

const isCardHeader = (
  header: unknown,
): header is { title: React.ReactNode; description?: React.ReactNode; className?: string } => {
  return !!header && typeof header === 'object' && 'title' in header;
};

export type CardProps = React.ComponentPropsWithoutRef<typeof CardRoot> & {
  /**
   * content for the card
   */
  children: React.ReactNode;
  /**
   * Optional header for the card
   */
  header?:
    | {
        /**
         * Optional title for the card header
         */
        title: React.ReactNode;
        /**
         * Optional description for the card header
         */
        description?: React.ReactNode;
        /**
         * Optional class name for the card header title
         */
        className?: string;
      }
    | React.ReactNode;
  /**
   * Optional class name for the card header
   */
  headerClassName?: string;

  /**
   * Optional class name for the card content
   */
  contentClassName?: string;
  /**
   * Optional footer for the card
   */
  footer?: React.ReactNode;
  /**
   * Optional class name for the card footer
   */
  footerClassName?: string;
};
const Card: ComponentWithAs<'div', CardProps> = forwardRef<CardProps, 'div'>(
  ({ header, headerClassName, children, contentClassName, footer, footerClassName, ...props }, ref) => {
    return (
      <CardRoot ref={ref} {...props}>
        {header && (
          <CardHeader className={headerClassName}>
            {isCardHeader(header) ? (
              <>
                {header.title && <CardTitle className={header.className}>{header.title}</CardTitle>}
                {header.description && <CardDescription>{header.description}</CardDescription>}
              </>
            ) : (
              header
            )}
          </CardHeader>
        )}
        <CardContent className={contentClassName}>{children}</CardContent>
        {footer && <CardFooter className={cn('justify-end gap-3', footerClassName)}>{footer}</CardFooter>}
      </CardRoot>
    );
  },
);
Card.displayName = 'Card';

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardRoot, CardTitle };
