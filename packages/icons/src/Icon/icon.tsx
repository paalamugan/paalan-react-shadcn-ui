import { cn } from '@paalan/react-shared/lib';
import { StyledComponent } from '@paalan/react-shared/system';
import { forwardRef } from '@paalan/react-shared/utils';

import type { ComponentWithAs, HTMLTailwindStyledComponentProps } from '@paalan/react-shared/types';

const fallbackIcon = {
  path: (
    <g stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" fill="none" d="M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25" />
      <path fill="currentColor" strokeLinecap="round" d="M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0" />
      <circle fill="none" strokeMiterlimit="10" cx="12" cy="12" r="11.25" />
    </g>
  ),
  viewBox: '0 0 24 24',
};

type Orientation = 'vertical' | 'horizontal';

export interface IconProps extends HTMLTailwindStyledComponentProps<'svg'> {
  className?: string;
  orientation?: Orientation;
  title?: string;
}

/**
 * The Icon component renders as an svg element to help define your own custom components.
 */
export const Icon: ComponentWithAs<'svg', IconProps> = forwardRef<IconProps, 'svg'>((props, ref) => {
  const { as: element, viewBox, focusable = false, children, className, ...rest } = props;

  const _className = cn('icon inline-block size-[1em] shrink-0 leading-[1em]', className);

  const shared = {
    ref,
    focusable,
    className: _className,
  };

  const _viewBox = viewBox ?? fallbackIcon.viewBox;

  /**
   * If you're using an icon library like `@heroicons/react`.
   * Note: anyone passing the `as` prop, should manage the `viewBox` from the external component
   */
  if (element && typeof element !== 'string') {
    return <StyledComponent as={element} {...shared} {...rest} />;
  }

  const _path = (children ?? fallbackIcon.path) as React.ReactNode;

  return (
    <StyledComponent
      as="svg"
      viewBox={_viewBox}
      {...shared}
      className={cn('w-[1em] align-middle text-current', shared.className)}
      {...rest}
    >
      {_path}
    </StyledComponent>
  );
});

Icon.displayName = 'Icon';
