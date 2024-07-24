'use client';

import { Button, toast } from '@paalan/react-ui';
import { Box, Heading } from '@paalan/react-ui/base';

export const Client = () => {
  return (
    <Box p="7" display="none">
      <Heading>Layout</Heading>
      <Box as="h1" className="p-8 text-2xl font-bold" bg="yellow">
        Client
      </Box>
      <Button
        variant="outline"
        onClick={() => {
          toast('Your message has been sent.');
        }}
      >
        Open a Toast Message
      </Button>
    </Box>
  );
};
