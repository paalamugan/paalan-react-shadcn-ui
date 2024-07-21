import type { FC, ReactNode } from 'react';

import { Flex, Text } from '@paalan/react-layouts';

import { Select } from '@/Select';

export interface PaginationSizeOptionProps {
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  isDisabled: boolean;
  options: number[];
  text?: ReactNode;
}
export const PaginationSizeOption: FC<PaginationSizeOptionProps> = ({
  pageSize,
  setPageSize,
  isDisabled,
  options,
  text,
}) => {
  return (
    <Flex gap="2" alignItems="center">
      <Select
        aria-label="Items per page"
        className="w-20"
        triggerClassName="h-full"
        onValueChange={(value) => setPageSize(+value)}
        value={pageSize.toString()}
        disabled={isDisabled}
        options={options}
      />

      <Text as="span" fontSize="sm" className="whitespace-nowrap ">
        {text || 'items per page'}
      </Text>
    </Flex>
  );
};
