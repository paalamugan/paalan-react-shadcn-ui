import { Code, Heading, Stack } from '@paalan/react-layouts';

import { useSearchParams } from './use-search-params';

export default { title: 'Hooks/Utilities/useSearchParams' };

export function Usage() {
  const searchParams = useSearchParams();

  return (
    <Stack>
      <Heading>Search Params</Heading>
      <Code as="pre">{JSON.stringify(searchParams, null, 2)}</Code>
    </Stack>
  );
}
