import type { As, ComponentWithAs, TailwindStyledComponentProps } from '@/types';

import { cn } from '@/lib';
import { forwardRef } from '@/utils/forward-ref';

import { generateTailwindClassName, objectStyledPropFilter, tailwindBoxVariants } from './utils/helper';

export const StyledComponent: ComponentWithAs<'div', TailwindStyledComponentProps> = forwardRef((props, ref) => {
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

StyledComponent.withComponent = <T extends As>(as: T) => {
  return forwardRef<TailwindStyledComponentProps, T>((props, ref) => <StyledComponent as={as} {...props} ref={ref} />);
};

export const WithStyledComponent = StyledComponent.withComponent;
