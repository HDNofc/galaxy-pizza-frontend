import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components/macro';
import variables from 'styles/variables';

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider theme={variables}>{children}</ThemeProvider>;
};

const renderWithThemeProvider = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export default renderWithThemeProvider;
