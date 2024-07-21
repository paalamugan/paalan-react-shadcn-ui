import { Button } from '@paalan/react-components';
import { HStack, Text } from '@paalan/react-layouts';
import { randomId } from '@paalan/react-shared/utils';

import { useForceUpdate } from './use-force-update';

export default { title: 'Hooks/Life Cycle/useForceUpdate' };

export function Usage() {
  const forceUpdate = useForceUpdate();

  return (
    <HStack justifyContent="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </HStack>
  );
}
