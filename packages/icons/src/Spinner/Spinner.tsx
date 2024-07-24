import { forwardRef } from '@paalan/react-shared/utils';

import type { ComponentWithAs } from '@paalan/react-shared/types';
import type { IconProps } from '../Icon';

import { useId } from '../../../hooks/src/use-id';
import { Icon } from '../Icon';

export const SpinnerIcon: ComponentWithAs<'svg', IconProps> = forwardRef<IconProps, 'svg'>((props: IconProps, ref) => {
  const id = useId();
  return (
    <Icon {...props} ref={ref} viewBox="0 0 24 24">
      <defs>
        <linearGradient x1="28.154%" y1="63.74%" x2="74.629%" y2="17.783%" id={id}>
          <stop stopColor="currentColor" offset="0%" />
          <stop stopColor="#fff" stopOpacity="0" offset="100%" />
        </linearGradient>
      </defs>
      <g transform="translate(2)" fill="none">
        <circle stroke={`url(#${id})`} strokeWidth="4" cx="10" cy="12" r="10" />
        <path d="M10 2C4.477 2 0 6.477 0 12" stroke="currentColor" strokeWidth="4" />
        <rect fill="currentColor" x="8" width="4" height="4" rx="8" />
      </g>
    </Icon>
  );
});
