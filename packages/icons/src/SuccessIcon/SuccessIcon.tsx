import { createIcon } from '../Icon';

export const SuccessIcon: ReturnType<typeof createIcon> = createIcon({
  viewBox: '0 0 20 20',
  displayName: 'SuccessIcon',
  path: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
      clipRule="evenodd"
    />
  ),
  defaultProps: {
    className: 'w-5 h-5',
  },
});
