import '@testing-library/jest-dom';

import { act, render as rtlRender } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import type { RenderOptions, RenderResult } from '@testing-library/react';
import type * as React from 'react';

export interface ThemeRenderOptions extends RenderOptions {
  ThemeProvider?: React.ComponentType<unknown>;
}

export type RenderFn = (
  ui: React.ReactNode,
  options?: ThemeRenderOptions,
) => ReturnType<typeof rtlRender> & { user: ReturnType<typeof userEvent.setup> };

export const render: RenderFn = (ui, { ThemeProvider, ...options } = {}) => {
  const user = userEvent.setup();

  if (ThemeProvider) {
    options.wrapper = ThemeProvider;
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
