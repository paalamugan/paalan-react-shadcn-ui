# Paalan React UI Hooks

This package contains the hooks for the Paalan React UI.

## Installation

```bash
npm install @paalan/react-hooks
```

## Usage

- Import the `useToggle` hook from the package and use them in your project.

```jsx
import React from 'react';

import { useToggle } from '@paalan/react-hooks';
import { Box, Button, Text } from '@paalan/react-ui';

export const App = () => {
  const [isOn, toggle] = useToggle();

  return (
    <Box>
      <Text>Current state is {isOn ? 'on' : 'off'}</Text>
      <Button onClick={toggle}>Toggle</Button>
    </Box>
  );
};
```

- Import the `useDisclosure` hook from `@paalan/react-hooks`.

```jsx
import { useDisclosure } from '@paalan/react-hooks';

const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
```

<!-- ## Available hooks

- `useToggle`: A hook to toggle between two states. -->
