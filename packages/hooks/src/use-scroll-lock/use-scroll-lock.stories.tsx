import { Button } from '@paalan/react-ui';
import { Box, Heading, P, Strong } from '@paalan/react-ui/base';

import { useScrollLock } from './use-scroll-lock';

export default { title: 'Hooks/UI And Dom/useScrollLock' };

export function Usage() {
  const [scrollLocked, setScrollLocked] = useScrollLock();

  return (
    <Box>
      <Heading>useScrollLock Hook Example</Heading>
      <P mb="5">
        Scroll is currently <Strong>{scrollLocked ? 'locked' : 'unlocked'}</Strong>
      </P>
      <Button onClick={() => setScrollLocked(!scrollLocked)}>{scrollLocked ? 'Unlock scroll' : 'Lock scroll'}</Button>
    </Box>
  );
}
