import type { HTMLTailwindStyledComponentProps } from '@paalan/react-shared/types';
import type { FC } from 'react';

import { Box } from '@paalan/react-layouts';
import { cn } from '@paalan/react-shared/lib';

import { Skeleton } from './Skeleton';

export interface SkeletonContainerProps extends Omit<HTMLTailwindStyledComponentProps<'div'>, 'as' | 'children'> {
  /**
   * If true, the skeleton will be a circle.
   */
  circle?: boolean;
  /**
   * The number of skeleton items to render.
   */
  count?: number;
  /**
   * The class name to apply to each skeleton item.
   */
  className?: string;
  /**
   * If true, the skeleton will be full width.
   */
  isFullWidth?: boolean;
  /**
   * The class name to apply to the container.
   */
  containerClassName?: string;
}

/**
 * A skeleton is a component used to represent a loading state.
 */
export const SkeletonContainer: FC<SkeletonContainerProps> = ({
  className,
  circle,
  count,
  containerClassName,
  isFullWidth,
  ...props
}) => {
  const countArray = Array.from({ length: count ?? 1 });

  return (
    <Box className={cn('space-y-2', containerClassName)} {...props}>
      {countArray.map((_, index) => (
        <Skeleton
          key={index}
          className={cn(
            circle ? 'h-12 w-12 rounded-full' : 'h-4 w-full',
            {
              'w-10/12': !circle && !isFullWidth && countArray.length > 1 && index === countArray.length - 1,
            },
            className,
          )}
        />
      ))}
    </Box>
  );
};
SkeletonContainer.displayName = 'SkeletonContainer';
