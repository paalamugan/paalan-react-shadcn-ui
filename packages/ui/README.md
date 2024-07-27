# Paalan React UI Components

This package contains the components for the Paalan React UI.

## Installation

```bash
npm install @paalan/react-ui @paalan/react-config @paalan/react-shared @paalan/react-icons @paalan/react-hooks @paalan/react-providers
```

## Usage

First, You need to create a `tailwind.config.js` file in the root of your project and add the following configuration.

```js
import tailwindConfig from '@paalan/react-config/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindConfig],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@paalan/react-ui/**/*.{js,ts,jsx,tsx}',
    './node_modules/@paalan/react-icons/**/*.{js,ts,jsx,tsx}',
    './node_modules/@paalan/react-shared/**/*.{js,ts,jsx,tsx}',
  ],

  // Project-specific customizations
  theme: {
    //...
  },
};
```

Second, you need to import the `@paalan/react-ui/styles.css` styles from the package in your project.

```jsx
import '@paalan/react-ui/styles.css'; // Import the styles in the root of your application
```

### ThemeProvider - For React Framework

- Import the `ThemeProvider` component from `@paalan/react-providers/ThemeProvider` and use them in your project.

```jsx
import "@paalan/react-ui/styles.css"; // Import the styles from the package

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@paalan/react-providers/ThemeProvider';

import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const Root = () => {
  return (
    <React.StrictMode>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
};

root.render(<Root />);
```

- Import the `useTheme` hook from the `@paalan/react-providers/ThemeProvider` and use them in your project.

```jsx
import { useTheme } from '@paalan/react-providers/ThemeProvider';

export const App = () => {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: theme.isDark ? 'black' : 'white' }}>
      <h1 style={{ color: theme.isDark ? 'white' : 'black' }}>Hello, World!</h1>
    </div>
  );
};
```

### NextThemeProvider - For Next.js Framework

- Import the `NextThemeProvider` component from `@paalan/react-providers/NextThemeProvider` and use them in your project.

```jsx
import '@paalan/react-ui/styles.css'; // Import the styles from the package

import { NextThemeProvider } from '@paalan/react-providers/NextThemeProvider';

import { App } from './App';

const MyApp = ({ Component, pageProps }) => {
  return (
    <NextThemeProvider>
      <Component {...pageProps} />
    </NextThemeProvider>
  );
};

export default MyApp;
```

- Import the `useNextTheme` hook from `@paalan/react-providers/NextThemeProvider` and use them in your project.

```jsx
import { useNextTheme } from '@paalan/react-providers/NextThemeProvider';

export const App = () => {
  const theme = useNextTheme();

  return (
    <div style={{ backgroundColor: theme.isDark ? 'black' : 'white' }}>
      <h1 style={{ color: theme.isDark ? 'white' : 'black' }}>Hello, World!</h1>
    </div>
  );
};
```

### Button, Box, Container

- Import the `Button` component from the package and use them in your project.

```jsx
import { Button } from '@paalan/react-ui';

<Button variant="primary" size="md" disabled>
  Click me
</Button>

<Button variant="secondary" size="lg">
  Click me
</Button>
```

- Import the `Box` component from the package and use them in your project.

```jsx
import { Box } from '@paalan/react-ui';

<Box bg="primary" p="4">
  Hello world
</Box>;
```

- Import the `Container` component from the package and use them in your project.

```jsx
import { Container } from '@paalan/react-ui';

<Container>Hello world</Container>;
```
