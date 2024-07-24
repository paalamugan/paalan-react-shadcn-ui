# Paalan React UI shared utils

This package contains the shared utils for the Paalan React UI.

## Installation

```bash
npm install @paalan/react-shared
```

## Usage

- Import the shared utils from the package and use them in your project.

```jsx
import { cn } from '@paalan/react-shared/lib';

// button primary disabled
const className = cn('button', 'bg-primary', { disabled: true });

// button primary
const className = cn('button', 'bg-primary', { disabled: false });

// button primary disabled custom
const className = cn('button', 'bg-primary', { disabled: true }, 'custom');
```
