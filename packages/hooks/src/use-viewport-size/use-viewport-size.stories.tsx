import { Text } from '@paalan/react-components/base';

import { useViewportSize } from './use-viewport-size';

export default { title: 'Hooks/UI And Dom/useViewportSize' };

export function Usage() {
  const { height, width } = useViewportSize();
  return (
    <Text className="text-center">
      Width: {width}, height: {height}
    </Text>
  );
}
