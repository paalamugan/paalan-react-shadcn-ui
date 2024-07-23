import { cn } from '@paalan/react-shared/lib';
import { forwardRef } from '@paalan/react-shared/utils';

import type { ComponentWithAs } from '@paalan/react-shared/types';
import type React from 'react';
import type { IconProps } from './icon';

import { Icon } from './icon';

interface SvgIconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
}

export const convertSvgIconToIcon = (
  icon:
    | React.ForwardRefExoticComponent<
        React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
          title?: string;
          titleId?: string;
        } & React.RefAttributes<SVGSVGElement>
      >
    | React.ForwardRefExoticComponent<SvgIconProps & React.RefAttributes<SVGSVGElement>>,
): ComponentWithAs<'svg', IconProps> => {
  const IconComponent: ComponentWithAs<'svg', IconProps> = forwardRef<IconProps, 'svg'>(
    ({ className, ...props }, ref) => {
      return <Icon as={icon} ref={ref} className={cn('size-4', className)} {...props} />;
    },
  );

  return IconComponent;
};
