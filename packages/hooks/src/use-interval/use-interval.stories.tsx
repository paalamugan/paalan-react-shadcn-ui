/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { Button } from '@paalan/react-components';
import { Stack, Text } from '@paalan/react-components/base';

import { useInterval } from './use-interval';

export default { title: 'Hooks/Utilities/useInterval' };

export function Usage() {
  const [seconds, setSeconds] = useState(0);
  const interval = useInterval(() => setSeconds((s) => s + 1), 1000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  return (
    <Stack alignItems="center">
      <Text>
        Page loaded <b>{seconds}</b> seconds ago
      </Text>
      <Button onClick={interval.toggle} color={interval.active ? 'red' : 'teal'} variant="outline">
        {interval.active ? 'Stop' : 'Start'} counting
      </Button>
    </Stack>
  );
}
