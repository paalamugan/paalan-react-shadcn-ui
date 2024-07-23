import { LabelInput } from '@paalan/react-components';
import { Box, Text } from '@paalan/react-components/base';

import { useDebouncedState } from './use-debounced-state';

export default {
  title: 'Hooks/State Management/useDebouncedState',
};

export function Usage() {
  const [value, setValue] = useDebouncedState('', 200);

  return (
    <Box>
      <LabelInput
        label="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Debounced value: {value}</Text>
    </Box>
  );
}

export function LeadingUpdate() {
  const [value, setValue] = useDebouncedState('', 200, { leading: true });

  return (
    <Box>
      <LabelInput
        label="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Debounced value: {value}</Text>
    </Box>
  );
}
