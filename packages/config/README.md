# Paalan React UI Config

This package contains the configuration for the Paalan React UI.

## Installation

```bash
npm install @paalan/react-config
```

## Usage

### Eslint Configuration

**CJS:**

- Create `.eslintrc.cjs` in your root project and paste the following code.

```js
const eslintConfig = require('@paalan/react-config/eslint');

module.exports = eslintConfig.default;
```

**ESM:**

- Create `.eslintrc.js` in your root project and paste the following code.

```js
import eslintConfig from '@paalan/react-config/eslint';

export default eslintConfig;
```

### Eslint With Vite Configuration

**CJS:**

- Create `.eslintrc.cjs` in your root project and paste the following code.

```js
const eslintWithViteConfig = require('@paalan/react-config/eslint-with-vite');

module.exports = eslintWithViteConfig.default;
```

**ESM:**

- Create `.eslintrc.js` in your root project and paste the following code.

```js
import eslintWithViteConfig from '@paalan/react-config/eslint-with-vite';

export default eslintWithViteConfig;
```

### Prettier Configuration

**CJS:**

- Create `prettier.config.cjs` in your root project and paste the following code.

```js
const prettierConfig = require('@paalan/react-config/prettier');

module.exports = prettierConfig.default;
```

**ESM:**

- Create `prettier.config.js` in your root project and paste the following code.

```js
import prettierConfig from '@paalan/react-config/prettier';

export default prettierConfig;
```

### Tailwind Configuration

**CJS:**

- Create `tailwind.config.cjs` in your root project and paste the following code.

```js
const tailwindConfig = require('@paalan/react-config/tailwind');

module.exports = tailwindConfig.default;
```

**ESM:**

- Create `tailwind.config.js` in your root project and paste the following code.

```js
import tailwindConfig from '@paalan/react-config/tailwind';

export default tailwindConfig;
```
