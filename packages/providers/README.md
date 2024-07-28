# Paalan React UI Providers

This package contains the providers for the Paalan React UI.

## Installation

```bash
npm install @paalan/react-providers
```

## Usage

### ThemeProvider - For React Framework

- Import the `ThemeProvider` component from `@paalan/react-providers/ThemeProvider` and use them in your project.

```jsx
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
import { NextThemeProvider } from '@paalan/react-providers/NextThemeProvider';

import { App } from './App';

const Root = () => {
  return (
    <NextThemeProvider>
      <App />
    </NextThemeProvider>
  );
};

export default Root;
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
