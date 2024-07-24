import { Input } from '@paalan/react-ui';
import { Stack, Text } from '@paalan/react-ui/base';

import { useUpdateEffect } from '.';
import { useInputState } from '../use-input-state';

export default { title: 'Hooks/Life Cycle/useUpdateEffect' };

export function Usage() {
  const [value, setValue] = useInputState('John');

  useUpdateEffect(() => {
    console.log('Value updated:', value);
  }, [value]);

  return (
    <Stack>
      <Input value={value} onChange={setValue} placeholder="Enter a text" />
      <Text>Check the console.</Text>
    </Stack>
  );
}
