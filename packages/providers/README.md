# Paalan React UI Providers

This package contains the providers for the Paalan React UI.

## Installation

```bash
npm install @paalan/react-providers
```

## Usage

- Import the `ThemeProvider` component from the package and use them in your project.

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@paalan/react-providers';

import { App } from './App';
import './index.css';

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
