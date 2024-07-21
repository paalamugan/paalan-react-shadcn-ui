import type { ComponentType, ErrorInfo, ReactNode } from 'react';
import type { ErrorBoundaryProps as BoundaryProps } from 'react-error-boundary';

import { ErrorBoundary as Boundary } from 'react-error-boundary';

export interface FallbackProps<ErrorType> {
  error: ErrorType;
  resetErrorBoundary: (...args: unknown[]) => void;
}

export type ErrorFallback<ErrorType> = ComponentType<FallbackProps<ErrorType>>;

type ErrorBoundaryProps<ErrorType> = BoundaryProps & {
  onError?: (error: ErrorType, info: ErrorInfo) => void;
  FallbackComponent?: ErrorFallback<ErrorType>;
  resetKeys?: unknown[];
};

export type IErrorBoundaryProps<ErrorType> = ErrorBoundaryProps<ErrorType> & {
  children: ReactNode;
};

export const ErrorBoundary = <ErrorType extends Error>({ children, ...props }: IErrorBoundaryProps<ErrorType>) => {
  return <Boundary {...props} />;
};
