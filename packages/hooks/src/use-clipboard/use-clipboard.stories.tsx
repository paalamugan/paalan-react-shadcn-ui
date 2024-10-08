import { useRef, useState } from 'react';

import { Button, Input, Textarea, useToast } from '@paalan/react-ui';
import { Flex, Stack } from '@paalan/react-ui/base';

import { useClipboard } from './use-clipboard';

export default {
  title: 'Hooks/Utilities/useClipboard',
};

export function Usage() {
  const clipboard = useClipboard();
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');
  const toast = useToast();

  const copyToClipboard = () => {
    clipboard.copy(ref.current?.value || '');
    toast.success('Copied to Clipboard!');
  };

  const pasteFromClipboard = async () => {
    const text = await clipboard.paste();
    setValue(text || '');
  };

  return (
    <Stack gap="4">
      <Flex gap="2">
        <Input ref={ref} placeholder="Type something and then click Copy to Clipboard..." className="w-1/2" />
        <Button variant="outline" onClick={copyToClipboard}>
          Copy to Clipboard
        </Button>
      </Flex>
      {clipboard.hasCopied && (
        <Flex gap="2">
          <Textarea value={value} readOnly placeholder="Click the Paste from Clipboard button..." className="w-1/2" />
          <Button variant="outline" onClick={pasteFromClipboard}>
            Paste from Clipboard
          </Button>
        </Flex>
      )}
    </Stack>
  );
}
