import { Button, LabelInput } from '@paalan/react-ui';
import { Box, Text } from '@paalan/react-ui/base';

import { useFocusWithin } from './use-focus-within';

export default { title: 'Hooks/UI And Dom/useFocusWithin' };

export function Usage() {
  const { ref, focused } = useFocusWithin<HTMLDivElement>();
  return (
    <Box ref={ref}>
      <Box p="10" className={focused ? 'bg-blue-50' : 'bg-transparent'}>
        <Text fontSize="sm">One of elements has focus: {focused.toString()}</Text>
        <LabelInput
          label="Focus this input"
          placeholder="parent element of the background color will change when focus is"
          className="mt-4"
        />
        <Button className="mt-2">Button</Button>
      </Box>
    </Box>
  );
}
