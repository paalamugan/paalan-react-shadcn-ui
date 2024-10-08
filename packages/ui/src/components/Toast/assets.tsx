import { ErrorIcon, InfoIcon1, SuccessIcon, WarningIcon1 } from '@paalan/react-icons';

import type { ToastTypes } from './types';

const bars = Array(12).fill(0);

export const Loader = ({ visible }: { visible: boolean }) => {
  return (
    <div className="toast-loading-wrapper" data-visible={visible}>
      <div className="toast-spinner">
        {bars.map((_, i) => (
          <div className="toast-loading-bar" key={`spinner-bar-${i}`} />
        ))}
      </div>
    </div>
  );
};

export const getAsset = (type: ToastTypes): JSX.Element | null => {
  switch (type) {
    case 'success':
      return <SuccessIcon />;

    case 'error':
      return <ErrorIcon />;

    case 'warning':
      return <WarningIcon1 />;

    case 'info':
      return <InfoIcon1 />;

    default:
      return null;
  }
};
