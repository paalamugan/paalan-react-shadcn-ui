import { tailwindBoxVariants } from '@paalan/react-shared/constants';
import { cn } from '@paalan/react-shared/lib';
import { forwardRef, generateTailwindClassName, objectStyledPropFilter } from '@paalan/react-shared/utils';

import type { As, ComponentWithAs, TailwindStyledComponentProps } from '@paalan/react-shared/types';

export interface BoxProps extends TailwindStyledComponentProps {}

export const Box: ComponentWithAs<'div', BoxProps> = forwardRef<BoxProps, 'div'>((props, ref) => {
  const { as: Component = 'div', className, bg, color, borderColor, fontSize, ...restProps } = props;
  const { styledProps, attrProps } = objectStyledPropFilter(restProps);
  const tailwindClassName = generateTailwindClassName(styledProps);

  return (
    <Component
      {...attrProps}
      className={cn(
        className,
        tailwindBoxVariants({
          bg,
          color,
          borderColor,
          fontSize,
        }),
        tailwindClassName,
      )}
      ref={ref}
    />
  );
});

Box.withComponent = <T extends As>(as: T) => {
  return forwardRef<BoxProps, T>((props, ref) => <Box {...props} as={as} ref={ref} />);
};
