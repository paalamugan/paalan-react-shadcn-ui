import { cn } from '@paalan/react-shared/lib';

import type { HTMLTailwindStyledComponentProps } from '@paalan/react-shared/types';
import type { FC } from 'react';

import { Box } from '../../base';

export interface SkeletonProps extends Omit<HTMLTailwindStyledComponentProps<'div'>, 'as' | 'children'> {}

export const Skeleton: FC<SkeletonProps> = ({ className, ...props }) => {
  return <Box className={cn('animate-pulse rounded-md bg-gray-200', className)} {...props} />;
};
Skeleton.displayName = 'Skeleton';
