import { Strong } from '@paalan/react-components/base';

import { useOs } from './use-os';

export default { title: 'Hooks/Utilities/useOs' };

export function Usage() {
  const os = useOs();
  return (
    <>
      Your os is <Strong>{os}</Strong>
    </>
  );
}
