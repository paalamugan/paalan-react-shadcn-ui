import { Button } from '@paalan/react-components';
import { Center, Text } from '@paalan/react-layouts';

import { useWindowScroll } from './use-window-scroll';

export default { title: 'Hooks/UI And Dom/useWindowScroll' };

export function Usage() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Center gap="4">
      <Text>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </Text>
      <Button onClick={() => scrollTo({ y: 0 })}>Scroll to top</Button>
    </Center>
  );
}
