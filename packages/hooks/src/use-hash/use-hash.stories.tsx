import { randomId } from '@paalan/react-shared/utils';
import { Button } from '@paalan/react-ui';
import { Code, Stack, Text } from '@paalan/react-ui/base';

import { useHash } from './use-hash';

export default { title: 'Hooks/Utilities/useHash' };

export function Usage() {
  const [hash, setHash] = useHash();
  return (
    <Stack alignItems="start">
      <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
      <Text>
        Current hash: <Code>{hash}</Code>
      </Text>
    </Stack>
  );
}

export function InitialStateValue() {
  const [hash, setHash] = useHash({ getInitialValueInEffect: false });
  return (
    <Stack alignItems="start">
      <Text>Hash: {hash}</Text>
      <Button onClick={() => setHash('new-hash')}>Set New hash</Button>
    </Stack>
  );
}
