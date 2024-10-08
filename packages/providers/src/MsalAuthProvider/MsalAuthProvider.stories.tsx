import { Button, ErrorReactRouterBoundary } from '@paalan/react-ui';
import { Box, Code, Flex, Heading, Stack } from '@paalan/react-ui/base';
import { Link, useNavigate } from 'react-router-dom';
import { reactRouterParameters, withRouter } from 'storybook-addon-react-router-v6';

import type { Meta, StoryFn } from '@storybook/react';

import { AuthenticatedRoute } from './components';
import { useMsalAuth } from './context';
import { MsalAuthProvider } from './MsalAuthProvider';

const meta = {
  title: 'Providers/MsalAuthProvider',
  component: MsalAuthProvider,
  parameters: {
    controls: { hideNoControlsWarning: true, sort: 'requiredFirst', exclude: ['auth', 'cache', 'system', 'telemetry'] },
  },
} satisfies Meta<typeof MsalAuthProvider>;

export default meta;

export function WithoutReactRouter() {
  const Home = () => {
    const { isLoggedIn, user, signIn, signOut } = useMsalAuth();
    const onClick = () => {
      if (isLoggedIn) {
        signOut();
      } else {
        signIn();
      }
    };

    return (
      <Stack gap="4">
        <Heading as="h3">{isLoggedIn ? 'User is logged in' : 'User is not logged in'}</Heading>
        {isLoggedIn && <Code className="whitespace-pre-wrap">{JSON.stringify(user, null, 2)}</Code>}
        <Button onClick={onClick}>Click here to {isLoggedIn ? 'Sign Out' : 'Sign In'}</Button>
      </Stack>
    );
  };
  const App = () => {
    const clientId = '<YOUR_CLIENT_ID>'; // Replace with your own client ID
    const tenantId = '<YOUR_TENANT_ID>'; // Replace with your own tenant ID
    return (
      <MsalAuthProvider clientId={clientId} tenantId={tenantId} isPopupAuthenticationFlow>
        <Home />
      </MsalAuthProvider>
    );
  };

  return <App />;
}

const Home = () => {
  const { isLoggedIn, user, signIn, signOut } = useMsalAuth();
  const onClick = () => {
    if (isLoggedIn) {
      signOut();
    } else {
      signIn();
    }
  };

  return (
    <Stack gap="4">
      <Heading>Home Page - Authenticated Route</Heading>
      <Flex justifyContent={'between'}>
        <Heading as="h3">{isLoggedIn ? 'User is logged in' : 'User is not logged in'}</Heading>
        <Button onClick={onClick} variant="outline">
          Click here to {isLoggedIn ? 'Sign Out' : 'Sign In'}
        </Button>
      </Flex>
      <Button as={Link} to="/dashboard" variant="link" className="self-start">
        Go to Dashboard
      </Button>
      {isLoggedIn && <Code className="whitespace-pre-wrap">{JSON.stringify(user, null, 2)}</Code>}
    </Stack>
  );
};

export const WithReactRouter: StoryFn = () => {
  return <Home />;
};

const SignIn = () => {
  const { signIn } = useMsalAuth();
  const navigate = useNavigate();
  const onClick = async () => {
    await signIn();
    navigate('/');
  };
  return (
    <Stack alignItems="start">
      <Heading>Sign In Page - UnAuthenticated Route</Heading>
      <Button onClick={onClick}>Click here to Sign In</Button>
    </Stack>
  );
};

const Dashboard = () => {
  return (
    <Stack>
      <Heading>Dashboard Page - Authenticated Route</Heading>
      <Button as={Link} to="/" variant="link" className="self-start">
        Go to Home
      </Button>
    </Stack>
  );
};

WithReactRouter.decorators = [
  (...args) => (
    <MsalAuthProvider clientId={'<YOUR_CLIENT_ID>'} tenantId={'<YOUR_TENANT_ID>'} isPopupAuthenticationFlow>
      {withRouter(...args)}
    </MsalAuthProvider>
  ),
];
WithReactRouter.parameters = {
  reactRouter: reactRouterParameters({
    routing: {
      path: '/',
      errorElement: <ErrorReactRouterBoundary />,
      children: [
        {
          path: '/',
          element: <AuthenticatedRoute />,
          children: [
            { path: '/', element: <Home /> },
            {
              path: '/dashboard',
              element: <Dashboard />,
            },
          ],
        },
        { path: '/signin', element: <SignIn /> },
        { path: '/signout', element: <Box>Sign Out</Box> },
      ],
    },
  }),
};
