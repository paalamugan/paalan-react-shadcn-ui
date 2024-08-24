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

/**
 * Renders an asynchronous component with the given props and options.
 *
 * @template T - The type of the props for the async component.
 * @param asyncComponent - The async component function that returns a JSX element.
 * @param props - The props to pass to the async component.
 * @param renderOptions - The options for rendering the component.
 * @returns The rendered component.
 */
export const renderWithAsync = async <T,>(
  asyncComponent: (props: T) => Promise<JSX.Element>,
  props: T,
  renderOptions?: ThemeRenderOptions,
) => {
  const jsx = await asyncComponent(props);
  return render(jsx, renderOptions);
};
