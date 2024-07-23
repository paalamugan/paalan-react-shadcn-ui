import { ChevronLeftIcon, ChevronRightIcon } from '@paalan/react-icons';

import type { FC } from 'react';

import { Flex, HStack } from '@/base';
import { Button } from '@/components/Button';

export interface NextAndPrevPaginationProps {
  onNext: () => void;
  onPrev: () => void;
  isDisabledNext: boolean;
  isDisabledPrev: boolean;
}

export const NextAndPrevPagination: FC<NextAndPrevPaginationProps> = ({
  onNext,
  onPrev,
  isDisabledNext,
  isDisabledPrev,
}) => {
  return (
    <Flex className="gap-4">
      <Button variant="outline" aria-label="Previous" disabled={isDisabledPrev} onClick={onPrev}>
        <HStack>
          <ChevronLeftIcon className="size-5" /> Previous
        </HStack>
      </Button>
      <Button variant="outline" aria-label="Next" disabled={isDisabledNext} onClick={onNext}>
        <HStack>
          Next <ChevronRightIcon className="size-5" />
        </HStack>
      </Button>
    </Flex>
  );
};
