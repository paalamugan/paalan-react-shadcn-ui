import { createIcon } from '../components/Icon';

export const MinusIcon: ReturnType<typeof createIcon> = createIcon({
  displayName: 'MinusIcon',
  path: (
    <g fill="currentColor">
      <rect height="4" width="20" x="2" y="10" />
    </g>
  ),
});
