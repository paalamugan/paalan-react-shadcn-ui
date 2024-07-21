import type { ComponentWithAs } from '@paalan/react-shared/types';
import type { BoxProps } from '../Box';

import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

import { Box } from '../Box';

export const H1: ComponentWithAs<'h1', BoxProps> = forwardRef<BoxProps, 'h1'>(({ className, ...props }, ref) => (
  <Box
    as="h1"
    ref={ref}
    className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl', className)}
    {...props}
  />
));
H1.displayName = 'H1';

export const H2: ComponentWithAs<'h2', BoxProps> = forwardRef<BoxProps, 'h2'>(({ className, ...props }, ref) => (
  <Box
    as="h2"
    ref={ref}
    className={cn(
      'mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
      className,
    )}
    {...props}
  />
));
H2.displayName = 'H2';

export const H3: ComponentWithAs<'h3', BoxProps> = forwardRef<BoxProps, 'h3'>(({ className, ...props }, ref) => (
  <Box
    as="h3"
    ref={ref}
    className={cn('mt-8 scroll-m-20 text-2xl font-semibold tracking-tight', className)}
    {...props}
  />
));
H3.displayName = 'H3';

export const H4: ComponentWithAs<'h4', BoxProps> = forwardRef<BoxProps, 'h4'>(({ className, ...props }, ref) => (
  <Box as="h4" ref={ref} className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)} {...props} />
));
H4.displayName = 'H4';

export const H5: ComponentWithAs<'h5', BoxProps> = forwardRef<BoxProps, 'h5'>(({ className, ...props }, ref) => (
  <Box as="h5" ref={ref} className={cn('scroll-m-20 text-lg font-semibold tracking-tight', className)} {...props} />
));
H5.displayName = 'H5';

export const H6: ComponentWithAs<'h6', BoxProps> = forwardRef<BoxProps, 'h6'>(({ className, ...props }, ref) => (
  <Box as="h6" ref={ref} className={cn('scroll-m-20 text-base font-semibold tracking-tight', className)} {...props} />
));
H6.displayName = 'H6';

export const P: ComponentWithAs<'p', BoxProps> = forwardRef<BoxProps, 'p'>(({ className, ...props }, ref) => (
  <Box as="p" ref={ref} className={cn('leading-7 [&:not(:first-child)]:mt-4', className)} {...props} />
));
P.displayName = 'P';

export const BlockQuote: ComponentWithAs<'blockquote', BoxProps> = forwardRef<BoxProps, 'blockquote'>(
  ({ className, ...props }, ref) => (
    <Box
      as="blockquote"
      ref={ref}
      className={cn(
        'mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200',
        className,
      )}
      {...props}
    />
  ),
);
BlockQuote.displayName = 'BlockQuote';

export const TableLayout: ComponentWithAs<'table', BoxProps> = forwardRef<BoxProps, 'table'>(
  ({ className, ...props }, ref) => <Box as="table" ref={ref} className={cn('w-full', className)} {...props} />,
);
TableLayout.displayName = 'Table';

export const THead: ComponentWithAs<'thead', BoxProps> = forwardRef<BoxProps, 'thead'>(
  ({ className, ...props }, ref) => <Box as="thead" ref={ref} className={cn('', className)} {...props} />,
);
THead.displayName = 'THead';

export const TBody: ComponentWithAs<'tbody', BoxProps> = forwardRef<BoxProps, 'tbody'>(
  ({ className, ...props }, ref) => <Box as="tbody" ref={ref} className={cn('', className)} {...props} />,
);
TBody.displayName = 'TBody';

export const TR: ComponentWithAs<'tr', BoxProps> = forwardRef<BoxProps, 'tr'>(({ className, ...props }, ref) => (
  <Box
    as="tr"
    ref={ref}
    className={cn(
      'm-0 border-t border-slate-300 p-0 even:bg-slate-100 dark:border-slate-700 dark:even:bg-slate-800',
      className,
    )}
    {...props}
  />
));
TR.displayName = 'TR';

export const TD: ComponentWithAs<'td', BoxProps> = forwardRef<BoxProps, 'td'>(({ className, ...props }, ref) => (
  <Box
    as="td"
    ref={ref}
    className={cn(
      'border border-slate-200 px-4 py-2 text-left dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right',
      className,
    )}
    {...props}
  />
));
TD.displayName = 'TD';

export const TH: ComponentWithAs<'th', BoxProps> = forwardRef<BoxProps, 'th'>(({ className, ...props }, ref) => (
  <Box
    as="th"
    ref={ref}
    className={cn(
      'border border-slate-200 px-4 py-2 text-left font-bold dark:border-slate-700 [&[align=center]]:text-center [&[align=right]]:text-right',
      className,
    )}
    {...props}
  />
));
TH.displayName = 'TH';

export const UL: ComponentWithAs<'ul', BoxProps & { unstyled?: boolean }> = forwardRef<
  BoxProps & { unstyled?: boolean },
  'ul'
>(({ className, unstyled = false, ...props }, ref) => (
  <Box
    as="ul"
    ref={ref}
    className={cn(
      {
        'm-4 list-disc [&>li]:mt-2': !unstyled,
      },
      className,
    )}
    {...props}
  />
));
UL.displayName = 'UL';

export const OL: ComponentWithAs<'ol', BoxProps & { unstyled?: boolean }> = forwardRef<
  BoxProps & { unstyled?: boolean },
  'ol'
>(({ className, unstyled = false, ...props }, ref) => (
  <Box
    as="ol"
    ref={ref}
    className={cn(
      {
        'm-4 list-decimal [&>li]:mt-2': !unstyled,
      },
      className,
    )}
    {...props}
  />
));
OL.displayName = 'OL';

export const LI: ComponentWithAs<'li', BoxProps> = forwardRef<BoxProps, 'li'>(({ className, ...props }, ref) => (
  <Box as="li" ref={ref} className={cn('', className)} {...props} />
));
LI.displayName = 'LI';

export const Code: ComponentWithAs<'code', BoxProps> = forwardRef<BoxProps, 'code'>(({ className, ...props }, ref) => (
  <Box
    as="code"
    ref={ref}
    className={cn('relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-normal', className)}
    {...props}
  />
));
Code.displayName = 'Code';

export const Lead: ComponentWithAs<'p', BoxProps> = forwardRef<BoxProps, 'p'>(({ className, ...props }, ref) => (
  <Box as="p" ref={ref} className={cn('text-xl text-muted-foreground', className)} {...props} />
));
Lead.displayName = 'Lead';

export const Large: ComponentWithAs<'div', BoxProps> = forwardRef<BoxProps, 'div'>(({ className, ...props }, ref) => (
  <Box as="div" ref={ref} className={cn('text-lg font-semibold', className)} {...props} />
));
Large.displayName = 'Large';

export const Small: ComponentWithAs<'small', BoxProps> = forwardRef<BoxProps, 'small'>(
  ({ className, ...props }, ref) => (
    <Box as="small" ref={ref} className={cn('text-sm font-medium leading-none', className)} {...props} />
  ),
);
Small.displayName = 'Small';

export const Subtle: ComponentWithAs<'p', BoxProps> = forwardRef<BoxProps, 'p'>(({ className, ...props }, ref) => (
  <Box as="p" ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
));
Subtle.displayName = 'Subtle';

export const Strong: ComponentWithAs<'strong', BoxProps> = forwardRef<BoxProps, 'strong'>(
  ({ className, ...props }, ref) => <Box as="strong" ref={ref} className={cn('font-semibold', className)} {...props} />,
);
Strong.displayName = 'Strong';
