import type { FC } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@paalan/react-icons/outline';
import { Flex, HStack } from '@paalan/react-layouts';

import { Button } from '@/Button';

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
