import { useEffect } from 'react';

import { ArrowLeftIcon, ReloadIcon } from '@paalan/react-icons';
import { Box, Flex, Strong, Text } from '@paalan/react-layouts';
import { cn } from '@paalan/react-shared/lib';

import { Button } from '../Button';
import { ErrorLayout } from './ErrorLayout';

export interface ErrorInternalServerProps<ErrorType extends Error = Error> {
  /**
   * Error object
   */
  error: ErrorType;
  /**
   * Status code of the error
   */
  statusCode?: number;
  /**
   * Status text of the error
   */
  statusText?: string;
  /**
   * Whether to show the error message
   */
  showErrorMessage?: boolean;
  /**
   *  @param onRefresh refresh the page
   * @returns void
   */
  onRefresh?: () => void;
  /**
   *  @param onGoBack go back to the previous page
   * @returns void
   */
  onGoBack?: () => void;
  /**
   * Text for the go back button
   */
  goBackText?: React.ReactNode;
  /**
   * Text for the refresh button
   */
  refreshText?: React.ReactNode;
  /**
   * Whether to show the error in the console
   */
  showErrorInConsole?: boolean;
}
/**
 * Error page for internal server errors
 */
export const ErrorInternalServer = <ErrorType extends Error = Error>({
  error,
  statusCode = 500,
  statusText = 'Internal Server Error',
  showErrorMessage = false,
  showErrorInConsole = true,
  goBackText = 'Back to Dashboard',
  refreshText = 'Refresh',
  onRefresh,
  onGoBack,
}: ErrorInternalServerProps<ErrorType>) => {
  useEffect(() => {
    if (!showErrorInConsole) return;
    console.error(error);
  }, [error, showErrorInConsole]);

  const textColor = statusCode >= 400 && showErrorMessage ? 'text-danger' : '';
  return (
    <ErrorLayout>
      <Box className="flex flex-col gap-3 text-center">
        <Text as="h1" className={cn('text-4xl font-semibold', textColor)}>
          {statusCode}
        </Text>
        <Text as="h1" className={cn('mt-3', textColor)}>
          {statusText}
        </Text>
        <Box className="mt-3 max-w-lg text-center text-lg">
          {showErrorMessage ? (
            <Text color="danger" mb="3">
              <Strong>Error Message:</Strong> {error.message}
            </Text>
          ) : (
            <Text>This page is currently unavailable. Please see the console for more information.</Text>
          )}
        </Box>
        {(onGoBack || onRefresh) && (
          <Flex justifyContent="center" gap="3">
            {onGoBack && (
              <Button onClick={onGoBack}>
                <ArrowLeftIcon />
                {goBackText}
              </Button>
            )}
            {onRefresh && (
              <Button variant="outline" onClick={onRefresh}>
                <ReloadIcon />
                {refreshText}
              </Button>
            )}
          </Flex>
        )}
      </Box>
    </ErrorLayout>
  );
};
