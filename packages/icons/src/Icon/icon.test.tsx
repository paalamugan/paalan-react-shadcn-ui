import { testA11y } from '@paalan/react-test-utils';

import { HomeIcon } from '../HomeIcon';
import { Icon } from './icon';

it('passes a11y test', async () => {
  await testA11y(<Icon />);
});

it('passes a11y test given a third-party icon', async () => {
  await testA11y(<Icon as={HomeIcon} />);
});
