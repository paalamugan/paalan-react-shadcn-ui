# Paalan React UI Components

This package contains the components for the Paalan React UI.

## Installation

```bash
npm install @paalan/react-ui @paalan/react-config @paalan/react-providers @paalan/react-shared @paalan/react-icons @paalan/react-hooks
```

## Usage

First, You need to create a `tailwind.config.js` file in the root of your project and add the following configuration.

```js
import tailwindConfig from '@paalan/react-config/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [tailwindConfig],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

  // Project-specific customizations
  theme: {
    //...
  },
};
```

Second, you need to import the `@paalan/react-ui/styles.css` styles from the package and then wrap your application with the `ThemeProvider` component from the `@paalan/react-providers` package.

```jsx
import "@paalan/react-ui/styles.css"; // Import the styles from the package

import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@paalan/react-providers';

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
