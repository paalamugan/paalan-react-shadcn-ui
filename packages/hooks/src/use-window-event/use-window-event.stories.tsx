import { useRef } from 'react';

import { Input } from '@paalan/react-ui';
import { Code, P, Stack } from '@paalan/react-ui/base';

import { useWindowEvent } from './use-window-event';

export default { title: 'Hooks/UI And Dom/useWindowEvent' };

export function Usage() {
  const inputRef = useRef<HTMLInputElement>(null);

  useWindowEvent('keydown', (event) => {
    if (event.code === 'KeyK' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      inputRef.current?.focus();
    }
  });

  return (
    <Stack>
      <P>
        Press <Code>⌘ + K</Code> on mac or <Code>Ctrl + K</Code> to focus the input below
      </P>
      <Input ref={inputRef} />
    </Stack>
  );
}
