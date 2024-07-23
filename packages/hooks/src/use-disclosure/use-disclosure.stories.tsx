import { Button } from '@paalan/react-components';
import { Box, Text } from '@paalan/react-components/base';

import { useDisclosure } from './use-disclosure';

export default {
  title: 'Hooks/State Management/useDisclosure',
};

export function Usage() {
  const { isOpen, onClose, getButtonProps, getDisclosureProps } = useDisclosure({
    defaultIsOpen: false,
  });

  return (
    <>
      <Button variant="outline" {...getButtonProps()}>
        {isOpen ? 'Close' : 'Open'}
      </Button>
      <Box {...getDisclosureProps()}>
        <Text>This is the content of the disclosure.</Text>
        <Button variant="outline" onClick={onClose}>
          Close
        </Button>
      </Box>
    </>
  );
}
