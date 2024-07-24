import { useState } from 'react';

import { randomId } from '@paalan/react-shared/utils';
import { Button } from '@paalan/react-ui';
import { Center, Text } from '@paalan/react-ui/base';

import { useTimeout } from './use-timeout';

export default { title: 'Hooks/Utilities/useTimeout' };

export function Usage() {
  const [value, setValue] = useState('');
  const { start, clear } = useTimeout(() => setValue(randomId()), 1000);

  return (
    <Center gap="3">
      <Button onClick={start}>Start</Button>
      <Button onClick={clear} color="red">
        Clear
      </Button>
      <Text>Random value: {value}</Text>
    </Center>
  );
}
