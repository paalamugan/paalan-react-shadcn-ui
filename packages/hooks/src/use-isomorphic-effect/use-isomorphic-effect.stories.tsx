import { Text } from '@paalan/react-components/base';

import { useIsomorphicEffect } from './use-isomorphic-effect';

export default { title: 'Hooks/Life Cycle/useIsomorphicEffect' };

export function Usage() {
  useIsomorphicEffect(() => {
    document.title = 'title';
  }, []);

  return <Text>Check the title of the page</Text>;
}
