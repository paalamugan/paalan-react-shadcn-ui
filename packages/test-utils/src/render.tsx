import '@testing-library/jest-dom';

import type { ThemeProviderProps } from '@paalan/react-providers';
import type { RenderOptions, RenderResult } from '@testing-library/react';
import type * as React from 'react';

import { ThemeProvider } from '@paalan/react-providers';
import { act, render as rtlRender } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

const ThemeProviderWrapper = (props: ThemeProviderProps) => <ThemeProvider {...props} />;

export interface ThemeRenderOptions extends RenderOptions {
  withThemeProvider?: boolean;
}

export const render = (
  ui: React.ReactNode,
  { withThemeProvider, ...options }: ThemeRenderOptions = {
    withThemeProvider: true,
  },
): ReturnType<typeof rtlRender> & { user: ReturnType<typeof userEvent.setup> } => {
  const user = userEvent.setup();

  if (withThemeProvider) {
    options.wrapper = ThemeProviderWrapper;
  }

  const result = rtlRender(<>{ui}</>, options);

  return { user, ...result };
};

export const renderWithAct = async (ui: React.ReactNode) => {
  let result: RenderResult | null = null;
  await act(async () => {
    result = render(ui);
  });
  return result!;
};
