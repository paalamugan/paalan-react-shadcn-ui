import * as React from 'react';

import { useMediaQuery } from '@paalan/react-hooks';
import { cn } from '@paalan/react-shared/lib';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

import { Button } from '../Button';
import {
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from '../Drawer';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuRoot, DropdownMenuTrigger } from '../DropdownMenu';

const BreadcrumbRoot = React.forwardRef<
  HTMLElement,
  React.ComponentPropsWithoutRef<'nav'> & {
    separator?: React.ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />);
BreadcrumbRoot.displayName = 'BreadcrumbRoot';

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(
  ({ className, ...props }, ref) => (
    <ol
      ref={ref}
      className={cn(
        'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
        className,
      )}
      {...props}
    />
  ),
);
BreadcrumbList.displayName = 'BreadcrumbList';

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn('inline-flex items-center gap-1.5', className)} {...props} />
  ),
);
BreadcrumbItem.displayName = 'BreadcrumbItem';

const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & {
    asChild?: boolean;
  }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a';

  return <Comp ref={ref} className={cn('transition-colors hover:text-foreground', className)} {...props} />;
});
BreadcrumbLink.displayName = 'BreadcrumbLink';

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('font-normal text-foreground', className)}
      {...props}
    />
  ),
);
BreadcrumbPage.displayName = 'BreadcrumbPage';

const BreadcrumbSeparator = ({ children, className, ...props }: React.ComponentProps<'li'>) => (
  <li role="presentation" aria-hidden="true" className={cn('[&>svg]:size-3.5', className)} {...props}>
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';

const BreadcrumbEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={cn('flex h-9 w-9 items-center justify-center', className)}
    {...props}
  >
    <MoreHorizontal className="size-4" />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';

export interface BreadcrumbProps extends Omit<React.ComponentPropsWithoutRef<typeof BreadcrumbRoot>, 'children'> {
  /**
   * The items to display in the breadcrumb.
   */
  items: { label: string; href?: string }[];
  /**
   * The link component to use for the breadcrumb items
   * @default 'a'
   * @example <Breadcrumb items={items} Link={Link} />
   * @example <Breadcrumb items={items} Link={NextLink} />
   */
  Link: React.ComponentType<React.ComponentPropsWithoutRef<'a'>>;
  /**
   * The number of items to display in the breadcrumb.
   */
  itemsToDisplay?: number;
  /**
   * If true, the breadcrumb will be open.
   */
  open?: boolean;
  /**
   *
   * @param open it is the open state of the breadcrumb
   * @returns  void
   */
  onOpenChange?: (open: boolean) => void;
}
const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
  ({ items, Link, itemsToDisplay = 3, open, onOpenChange, ...props }, ref) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    const [localOpen, setLocalOpen] = React.useState(open ?? false);

    React.useEffect(() => {
      if (open !== undefined) {
        setLocalOpen(open);
      }
    }, [open]);

    const localOnOpenChange = (open: boolean) => {
      setLocalOpen(open);
      onOpenChange?.(open);
    };

    return (
      <BreadcrumbRoot ref={ref} {...props}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={items[0].href}>{items[0].label}</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {items.length > itemsToDisplay ? (
            <>
              <BreadcrumbItem>
                {isDesktop ? (
                  <DropdownMenuRoot open={localOpen} onOpenChange={localOnOpenChange}>
                    <DropdownMenuTrigger className="flex items-center gap-1" aria-label="Toggle menu">
                      <BreadcrumbEllipsis className="size-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {items.slice(1, -2).map((item, index) => (
                        <DropdownMenuItem key={index}>
                          <Link href={item.href ? item.href : '#'}>{item.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenuRoot>
                ) : (
                  <DrawerRoot open={localOpen} onOpenChange={setLocalOpen}>
                    <DrawerTrigger aria-label="Toggle Menu">
                      <BreadcrumbEllipsis className="size-4" />
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader className="text-left">
                        <DrawerTitle>Navigate to</DrawerTitle>
                        <DrawerDescription>Select a page to navigate to.</DrawerDescription>
                      </DrawerHeader>
                      <div className="grid gap-1 px-4">
                        {items.slice(1, -2).map((item, index) => (
                          <Link key={index} href={item.href ? item.href : '#'} className="py-1 text-sm">
                            {item.label}
                          </Link>
                        ))}
                      </div>
                      <DrawerFooter className="pt-4">
                        <DrawerClose asChild>
                          <Button variant="outline">Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </DrawerRoot>
                )}
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          ) : null}
          {items.slice(-itemsToDisplay + 1).map((item, index) => (
            <BreadcrumbItem key={index}>
              {item.href ? (
                <>
                  <BreadcrumbLink asChild className="max-w-20 truncate md:max-w-none">
                    <Link href={item.href}>{item.label}</Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              ) : (
                <BreadcrumbPage className="max-w-20 truncate md:max-w-none">{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </BreadcrumbRoot>
    );
  },
);
Breadcrumb.displayName = 'Breadcrumb';

export {
  Breadcrumb,
  BreadcrumbRoot,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
