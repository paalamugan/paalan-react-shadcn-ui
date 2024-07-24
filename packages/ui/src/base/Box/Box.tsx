import { StyledComponent, WithStyledComponent } from '@paalan/react-shared/system';
import { forwardRef } from '@paalan/react-shared/utils';

import type { ComponentWithAs, TailwindStyledComponentProps } from '@paalan/react-shared/types';

export interface BoxProps extends TailwindStyledComponentProps {}

export const Box: ComponentWithAs<'div', BoxProps> = forwardRef<BoxProps, 'div'>((props, ref) => {
  return <StyledComponent {...props} ref={ref} />;
});

Box.withComponent = WithStyledComponent;
