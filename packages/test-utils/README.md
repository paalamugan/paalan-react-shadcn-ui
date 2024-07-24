# Paalan React UI test utils

This package contains the test utils for the Paalan React UI. This package is mainly used for testing the components.

## Installation

```bash
npm install @paalan/react-test-utils
```

## Usage

- Import the test utils from the package and use them in your project.

```jsx
import { render } from '@paalan/react-test-utils';

describe('App', () => {
  it('should render the App component', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
```
