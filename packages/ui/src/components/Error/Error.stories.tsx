import { CrossCircledIcon } from '@paalan/react-icons';
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';

import type { StoryFn } from '@storybook/react';

import {
  ErrorBoundary,
  ErrorEmptyResponse,
  ErrorInternalResponse,
  ErrorInternalServer,
  ErrorInternalServerResponse,
  ErrorNotFoundResponse,
  ErrorReactRouterBoundary,
  ErrorReactRouterComponent,
} from '.';
import { Heading, Stack, Text } from '../../base';

export default {
  title: 'Components/Error',
  tags: ['autodocs'],
};

export const WithErrorBoundary: StoryFn<typeof ErrorBoundary> = () => {
  const ErrorComponent = () => {
    throw new Error('This is the custom error message');
  };
  return <ErrorComponent />;
};

WithErrorBoundary.argTypes = {
  children: {
    description: 'The content of the children',
  },
  fallback: {
    description:
      'The fallback error component, if the children throw an error. If not provided, then the "ErrorReactRouterBoundary" will be used.',
    defaultValue: ErrorReactRouterBoundary,
  },
  onError: {
    description: 'The callback function to be called when an error occurs',
  },
  onReset: {
    description: 'The callback function to be called when the error resets',
  },
  resetKeys: {
    description: 'The keys to trigger a reset',
  },
};

WithErrorBoundary.decorators = [withRouter];
WithErrorBoundary.parameters = {
  reactRouter: reactRouterParameters({
    routing: { path: '/user/1', errorElement: <ErrorReactRouterBoundary /> },
  }),
};

export const WithErrorBoundaryFallback: StoryFn<typeof ErrorBoundary> = (args) => {
  const ErrorComponent = () => {
    throw new Error('This is the custom error message');
  };
  return (
    <ErrorBoundary {...args}>
      <ErrorComponent />
    </ErrorBoundary>
  );
};

WithErrorBoundaryFallback.args = {
  FallbackComponent: ({ error }: { error: Error }) => (
    <Stack className="text-danger">
      <Heading as="h3">Something went wrong.</Heading>
      <Text>Error Message: {error.message}</Text>
    </Stack>
  ),
};

WithErrorBoundaryFallback.argTypes = WithErrorBoundary.argTypes;
WithErrorBoundaryFallback.decorators = WithErrorBoundary.decorators;
WithErrorBoundaryFallback.parameters = WithErrorBoundary.parameters;

export const ErrorInternalServerWithRefresh: StoryFn<typeof ErrorInternalServer> = (args) => {
  return <ErrorInternalServer {...args} />;
};

ErrorInternalServerWithRefresh.args = {
  error: new Error('This is the custom error message'),
  statusCode: 500,
  statusText: 'Internal Server Error',
  showErrorMessage: true,
  onRefresh: () => alert('Refresh button clicked'),
  onGoBack: () => alert('Go back button clicked'),
};

export const WithErrorEmptyResponse: StoryFn<typeof ErrorEmptyResponse> = (args) => {
  return <ErrorEmptyResponse {...args} />;
};

WithErrorEmptyResponse.argTypes = {
  heading: {
    description: 'The heading of the error message',
    defaultValue: 'No results found',
  },
  subHeading: {
    description: 'The subheading of the error message',
    defaultValue: 'Unfortunately, there is nothing for you here yet!',
  },
  children: {
    description: 'The content of the error message',
    defaultValue: null,
  },
  icon: {
    description: 'The icon of the error message',
    defaultValue: null,
  },
  showIcon: {
    description: 'The show icon of the error message',
    defaultValue: false,
  },
  className: {
    description: 'The className of the error message',
    defaultValue: null,
  },
  headingClassName: {
    description: 'The className of the heading of the error message',
    defaultValue: null,
  },
  subHeadingClassName: {
    description: 'The className of the subheading of the error message',
    defaultValue: null,
  },
};

WithErrorEmptyResponse.args = {
  heading: 'No results found',
  subHeading: 'Unfortunately, there is nothing for you here yet!',
  className: '',
  headingClassName: '',
  subHeadingClassName: '',
};

export const WithErrorInternalResponse: StoryFn<typeof ErrorInternalResponse> = (args) => {
  return <ErrorInternalResponse {...args} />;
};

WithErrorInternalResponse.args = {
  ...WithErrorEmptyResponse.args,
  heading: 'Internal Server Error',
  subHeading: 'Unfortunately, there is nothing for you here yet!',
};
WithErrorInternalResponse.argTypes = { ...WithErrorEmptyResponse.argTypes };

export const ErrorInternalResponseWithIcon: StoryFn<typeof ErrorInternalResponse> = (args) => {
  return <ErrorInternalResponse {...args} />;
};

ErrorInternalResponseWithIcon.args = {
  ...WithErrorEmptyResponse.args,
  heading: 'Internal Server Error',
  subHeading: 'Unfortunately, there is nothing for you here yet!',
  showIcon: true,
};
ErrorInternalResponseWithIcon.argTypes = { ...WithErrorEmptyResponse.argTypes };

export const ErrorInternalResponseWithCustomIcon: StoryFn<typeof ErrorInternalResponse> = (args) => {
  return <ErrorInternalResponse {...args} />;
};

ErrorInternalResponseWithCustomIcon.args = {
  ...WithErrorEmptyResponse.args,
  heading: 'Internal Server Error',
  subHeading: 'Unfortunately, there is nothing for you here yet!',
  icon: <CrossCircledIcon className="size-12 text-red-500" />,
};
ErrorInternalResponseWithCustomIcon.argTypes = { ...WithErrorEmptyResponse.argTypes };

export const WithErrorInternalServerResponse: StoryFn<typeof ErrorInternalServerResponse> = (args) => {
  return <ErrorInternalServerResponse {...args} />;
};

WithErrorInternalServerResponse.args = {
  ...WithErrorEmptyResponse.args,
  heading: 'Something went seriously wrong',
  subHeading:
    'It sounds like something unexpected happened right now. Please, inform our support team about this issue ASAP!',
};

WithErrorInternalServerResponse.argTypes = { ...WithErrorEmptyResponse.argTypes };

export const WithErrorNotFoundResponse: StoryFn<typeof ErrorNotFoundResponse> = (args) => {
  return <ErrorNotFoundResponse {...args} />;
};

WithErrorNotFoundResponse.argTypes = { ...WithErrorEmptyResponse.argTypes };
WithErrorNotFoundResponse.args = {
  ...WithErrorEmptyResponse.args,
  heading: 'Page Not Found',
  subHeading:
    'Probably you got here by accident. If you think there is something wrong on our side, please contact us!',
};

export const WithErrorReactRouterComponent: StoryFn<typeof ErrorReactRouterComponent> = (args) => {
  return <ErrorReactRouterComponent {...args} />;
};

WithErrorReactRouterComponent.argTypes = {
  error: {
    description: 'The error to be displayed',
  },
  className: {
    description: 'The className of the error message',
  },
  heading: {
    description: 'The heading of the error message',
  },
};

WithErrorReactRouterComponent.args = {
  error: new Error('this is custom error'),
  className: '',
  heading: '',
};
